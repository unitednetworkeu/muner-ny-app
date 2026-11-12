import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLang } from '../../i18n'
import { landmarks, bearingDeg, distanceKm, directionName, type Landmark } from '../../data/skyline'
import { videos } from '../../data/videos'
import { skylinePhotos } from '../../data/skylinePhotos'
import { requestOrientation, useHeading } from './heading'
import { CameraHunt } from './CameraHunt'

const PX = 14 // pixel per grado
const W = 360 * PX
const H = 260
const HORIZON = 205
const EXTRA = 90 * PX // copia dei primi 90° in coda, per lo scorrimento infinito

const tx = {
  title: { it: 'La vista a 360°', en: 'The 360° view' },
  help: { it: 'Scorri con il dito e tocca un edificio per scoprirne la storia.', en: 'Swipe with your finger and tap a building to learn its story.' },
  compass: { it: 'Punta il telefono', en: 'Point your phone' },
  compassOn: { it: 'Bussola attiva', en: 'Compass on' },
  compassNo: { it: 'Bussola non disponibile su questo telefono', en: 'Compass not available on this phone' },
  built: { it: 'Costruito', en: 'Built' },
  height: { it: 'Altezza', en: 'Height' },
  where: { it: 'Dove', en: 'Where' },
  km: { it: 'km a', en: 'km to the' },
  watch: { it: 'Guarda il video', en: 'Watch the video' },
  close: { it: 'Chiudi', en: 'Close' },
  schematic: { it: 'Disegno provvisorio: direzioni reali, altezze in proporzione. Presto qui la foto reale.', en: 'Temporary drawing: real directions, heights in proportion. Real photo coming soon.' },
}

type Placed = Landmark & { b: number; d: number; x: number; h: number; w: number }

// generatore pseudo-casuale deterministico per i palazzi "di riempimento"
function rng(seed: number) {
  return () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
}

function filler() {
  const r = rng(42)
  const out: { x: number; w: number; h: number }[] = []
  for (let deg = 0; deg < 360; deg += 0.9) {
    // Midtown a nord e Downtown a sud più densi e alti; fiumi a est/ovest più bassi
    const dense = deg < 60 || deg > 330 ? 1 : deg > 185 && deg < 215 ? 0.9 : deg > 80 && deg < 130 ? 0.35 : deg > 255 && deg < 290 ? 0.3 : 0.6
    if (r() > 0.25 + dense * 0.6) continue
    out.push({ x: deg * PX, w: 5 + r() * 12, h: 8 + r() * 55 * dense })
  }
  return out
}

function place(): Placed[] {
  return landmarks.map((l) => {
    const b = bearingDeg(l.lat, l.lon)
    const d = distanceKm(l.lat, l.lon)
    const h = l.height ? Math.max(18, (l.height * 0.3) / (1 + d * 0.09)) : 0
    const w = l.kind === 'bridge' ? 46 : l.kind === 'low' ? 26 : l.kind === 'statue' ? 8 : Math.max(10, 22 - d * 1.5)
    return { ...l, b, d, x: b * PX, h, w }
  })
}

function Building({ p, sel, onTap }: { p: Placed; sel: boolean; onTap: () => void }) {
  const fill = sel ? '#f7c948' : '#0b2a4a'
  const top = HORIZON - p.h
  const x0 = p.x - p.w / 2
  let shape
  if (p.kind === 'area') {
    shape = <rect x={p.x - 40} y={HORIZON - 6} width={80} height={14} rx={7} fill={sel ? '#f7c948' : p.id === 'cpark' ? '#4d9d5c' : '#5aa9d6'} opacity={0.85} />
  } else if (p.kind === 'bridge') {
    shape = (
      <g fill={fill}>
        <rect x={x0} y={top} width={6} height={p.h} />
        <rect x={x0 + p.w - 6} y={top} width={6} height={p.h} />
        <rect x={x0 - 8} y={HORIZON - 8} width={p.w + 16} height={3} />
        <path d={`M${x0 - 8},${HORIZON - 8} Q${x0 + 3},${top + 4} ${x0 + 3},${top} Q${p.x},${HORIZON - 14} ${x0 + p.w - 3},${top} Q${x0 + p.w - 3},${top + 4} ${x0 + p.w + 8},${HORIZON - 8}`} stroke={fill} strokeWidth={1.5} fill="none" />
      </g>
    )
  } else if (p.kind === 'statue') {
    shape = (
      <g fill={sel ? '#f7c948' : '#2f8f7a'}>
        <rect x={p.x - 6} y={HORIZON - 8} width={12} height={8} />
        <rect x={p.x - 3} y={top + 4} width={6} height={p.h - 12} />
        <rect x={p.x + 1} y={top - 4} width={2} height={9} />
      </g>
    )
  } else {
    shape = (
      <g fill={fill}>
        <rect x={x0} y={top} width={p.w} height={p.h} />
        {p.kind === 'spire' && <path d={`M${x0 + 2},${top} L${p.x},${top - p.h * 0.18} L${x0 + p.w - 2},${top} Z`} />}
      </g>
    )
  }
  const labelY = p.kind === 'area' ? HORIZON + 24 : top - (p.kind === 'spire' ? p.h * 0.18 : 0) - 8
  return (
    <g onClick={onTap} style={{ cursor: 'pointer' }}>
      {/* area di tocco più ampia */}
      <rect x={p.x - Math.max(p.w, 30) / 2 - 6} y={Math.min(labelY - 14, top - 10)} width={Math.max(p.w, 30) + 12} height={HORIZON + 30 - Math.min(labelY - 14, top - 10)} fill="transparent" />
      {shape}
    </g>
  )
}

export function Skyline360() {
  const { t, lang } = useLang()
  const l = lang ?? 'it'
  const scroller = useRef<HTMLDivElement>(null)
  const placed = useMemo(place, [])
  const fill = useMemo(filler, [])
  const [sel, setSel] = useState<Placed | null>(null)
  const [heading, setHeading] = useState(0)
  const [compass, setCompass] = useState<'off' | 'on' | 'no'>('off')
  const zoom = sel ? 1.4 : 1

  const center = (deg: number, smooth = true) => {
    const el = scroller.current
    if (!el) return
    let x = deg * PX * zoom - el.clientWidth / 2
    if (x < 0) x += W * zoom
    el.scrollTo({ left: x, behavior: smooth ? 'smooth' : 'auto' })
  }

  // all'apertura guarda verso nord (Midtown e Central Park)
  useEffect(() => { center(15, false) }, [])

  // scorrimento infinito
  const onScroll = () => {
    const el = scroller.current
    if (!el) return
    if (el.scrollLeft > W * zoom) el.scrollLeft -= W * zoom
    else if (el.scrollLeft < 2) el.scrollLeft += W * zoom
    const mid = (el.scrollLeft + el.clientWidth / 2) / (PX * zoom)
    setHeading(((mid % 360) + 360) % 360)
  }

  useEffect(() => { if (sel) setTimeout(() => center(sel.b), 30) }, [sel, zoom])

  // bussola del telefono: la vista segue la direzione in cui punta la fotocamera
  const live = useHeading(compass === 'on')
  useEffect(() => { if (live != null) center(live, false) }, [live])

  const toggleCompass = async () => {
    if (compass === 'on') { setCompass('off'); return }
    setCompass((await requestOrientation()) ? 'on' : 'no')
  }

  const cardinals = [
    { d: 0, it: 'N', en: 'N' }, { d: 45, it: 'NE', en: 'NE' }, { d: 90, it: 'E', en: 'E' }, { d: 135, it: 'SE', en: 'SE' },
    { d: 180, it: 'S', en: 'S' }, { d: 225, it: 'SO', en: 'SW' }, { d: 270, it: 'O', en: 'W' }, { d: 315, it: 'NO', en: 'NW' },
  ]

  const strip = (offset: number, key: string) => (
    <g key={key} transform={`translate(${offset},0)`}>
      {fill.map((f, i) => <rect key={i} x={f.x} y={HORIZON - f.h} width={f.w} height={f.h} fill="#9fb3c8" />)}
      {cardinals.map((c) => (
        <g key={c.d}>
          <line x1={c.d * PX} x2={c.d * PX} y1={HORIZON + 34} y2={HORIZON + 42} stroke="#64748b" />
          <text x={c.d * PX} y={HORIZON + 54} textAnchor="middle" fontSize={c.d % 90 === 0 ? 14 : 10} fontWeight={700} fill="#334155">{c[l]}</text>
        </g>
      ))}
      {[...placed].sort((a, b) => b.d - a.d).map((p) => (
        <Building key={p.id} p={p} sel={sel?.id === p.id} onTap={() => setSel(p)} />
      ))}
      {placed.map((p) => {
        const top = p.kind === 'area' ? HORIZON + 24 : HORIZON - p.h - (p.kind === 'spire' ? p.h * 0.18 : 0) - 14
        return (
          <text key={`l-${p.id}`} x={p.x} y={top} textAnchor="middle" fontSize={9} fontWeight={600} fill={sel?.id === p.id ? '#b45309' : '#0b2a4a'}
            onClick={() => setSel(p)} style={{ cursor: 'pointer' }}>
            {t(p.name).split(' (')[0]}
          </text>
        )
      })}
    </g>
  )

  const video = sel?.video ? videos.find((v) => v.id === sel.video) : undefined
  const ph = skylinePhotos

  const photoStrip = ph && (
    <div className="relative" style={{ width: (W + EXTRA) * zoom, height: H * zoom, transition: 'width .35s, height .35s' }}>
      {[0, W].map((off) => (
        <div key={off} className="absolute inset-y-0 overflow-hidden" style={{ left: off * zoom, width: (off ? EXTRA : W) * zoom }}>
          {ph.mode === 'pano'
            ? [-W, 0, W].map((k) => (
                <img key={k} src={ph.src} alt="" draggable={false} className="absolute top-0 h-full select-none"
                  style={{ left: (ph.startBearing * PX + k) * zoom, width: W * zoom, maxWidth: 'none' }} />
              ))
            : ph.images.flatMap((im) => [-W, 0, W].map((k) => (
                <img key={im.src + k} src={im.src} alt="" draggable={false} className="absolute top-0 h-full select-none object-cover"
                  style={{ left: ((im.center - im.fov / 2) * PX + k) * zoom, width: im.fov * PX * zoom, maxWidth: 'none' }} />
              )))}
        </div>
      ))}
      {[0, W].flatMap((off) => placed.filter((p) => off === 0 || p.x < EXTRA).map((p) => {
        const pin = ph.pins?.[p.id]
        const x = ((p.b + (pin?.dBearing ?? 0)) * PX + off) * zoom
        const y = (pin?.y ?? ph.horizonY - 0.12) * H * zoom
        const on = sel?.id === p.id
        return (
          <button key={p.id + off} onClick={() => setSel(p)} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: x, top: y }}>
            <span className={`block h-4 w-4 rounded-full border-2 border-white shadow ${on ? 'bg-taxi' : 'animate-pulse bg-un'}`} />
            <span className={`absolute top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-bold shadow ${on ? 'bg-taxi text-navy' : 'bg-white/90 text-navy'}`}>
              {t(p.name).split(' (')[0]}
            </span>
          </button>
        )
      }))}
    </div>
  )

  return (
    <section className="space-y-2 rounded-2xl bg-white p-3 ring-1 ring-black/5">
      <div className="flex items-center justify-between gap-2 px-1">
        <div>
          <h2 className="text-sm font-bold tracking-wide text-navy uppercase">🏙️ {t(tx.title)}</h2>
          <p className="text-xs text-slate-500">{t(tx.help)}</p>
        </div>
        <button onClick={toggleCompass}
          className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${compass === 'on' ? 'bg-un text-white' : 'bg-slate-100 text-navy'}`}>
          🧭 {compass === 'on' ? t(tx.compassOn) : t(tx.compass)}
        </button>
      </div>
      {compass === 'no' && <p className="px-1 text-xs text-rose-600">{t(tx.compassNo)}</p>}

      <div className="relative">
        <div ref={scroller} onScroll={onScroll} className="overflow-x-auto overscroll-x-contain rounded-xl" style={{ scrollbarWidth: 'none' }}>
          {photoStrip || <svg width={(W + EXTRA) * zoom} height={H * zoom} viewBox={`0 0 ${W + EXTRA} ${H}`} style={{ display: 'block', transition: 'width .35s, height .35s' }}>
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#bfe3f7" /><stop offset="1" stopColor="#f4fbff" />
              </linearGradient>
            </defs>
            <rect x={0} y={0} width={W + EXTRA} height={HORIZON} fill="url(#sky)" />
            <rect x={0} y={HORIZON} width={W + EXTRA} height={H - HORIZON} fill="#e6edf3" />
            {strip(0, 'a')}
            <g clipPath="url(#extra)">{strip(W, 'b')}</g>
            <clipPath id="extra"><rect x={W} y={0} width={EXTRA} height={H} /></clipPath>
          </svg>}
        </div>
        {/* indicatore centrale */}
        <div className="pointer-events-none absolute inset-y-0 left-1/2 w-px bg-taxi/80" />
        <div className="pointer-events-none absolute top-1 left-1/2 -translate-x-1/2 rounded-full bg-navy/80 px-2 py-0.5 text-[10px] font-bold text-white">
          {Math.round(heading)}° {directionName(heading, l).toUpperCase()}
        </div>
      </div>
      <p className="px-1 text-[10px] text-slate-400">{ph ? ph.credit : t(tx.schematic)}</p>

      {sel && (
        <div className="rounded-xl bg-navy p-4 text-white">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-xl font-bold">{t(sel.name)}</h3>
            <button onClick={() => setSel(null)} className="rounded-full bg-white/15 px-2.5 py-1 text-xs">✕ {t(tx.close)}</button>
          </div>
          <dl className="mt-2 grid grid-cols-3 gap-2 text-center text-xs">
            {sel.year && <div className="rounded-lg bg-white/10 p-2"><dt className="text-white/60">{t(tx.built)}</dt><dd className="text-base font-bold">{sel.year}</dd></div>}
            {sel.height > 0 && <div className="rounded-lg bg-white/10 p-2"><dt className="text-white/60">{t(tx.height)}</dt><dd className="text-base font-bold">{sel.height} m</dd></div>}
            <div className="rounded-lg bg-white/10 p-2"><dt className="text-white/60">{t(tx.where)}</dt><dd className="font-bold">{sel.d.toFixed(1).replace('.', l === 'it' ? ',' : '.')} {t(tx.km)} {directionName(sel.b, l)}</dd></div>
          </dl>
          <p className="mt-3 text-[15px] leading-relaxed text-white/90">{t(sel.facts)}</p>
          {video && (
            <Link to={`/video/${video.id}`} className="mt-3 inline-block rounded-full bg-taxi px-4 py-2 text-sm font-bold text-navy">
              ▶ {t(tx.watch)}: {t(video.title)}
            </Link>
          )}
        </div>
      )}

      <CameraHunt />
    </section>
  )
}
