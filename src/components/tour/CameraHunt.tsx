import { useEffect, useMemo, useRef, useState } from 'react'
import { useLang } from '../../i18n'
import { landmarks, bearingDeg } from '../../data/skyline'
import { angleDiff, requestOrientation, useHeading } from './heading'

const TARGETS = ['un', 'chrysler', 'owtc', 'cpark', 'brooklyn', 'hy', 'flatiron', 'liberty']
const FOV = 60 // ampiezza approssimativa dell'inquadratura, in gradi
const TOL = 14 // tolleranza per "trovato", in gradi
const CAL_ID = 'chrysler'

const tx = {
  title: { it: 'Gioco: trova con la fotocamera', en: 'Game: find it with your camera' },
  intro: {
    it: 'Sulla terrazza, inquadra la città con la fotocamera e trova gli edifici che l’app ti chiede. La bussola dei telefoni non è precisissima: prima facciamo una breve calibrazione.',
    en: 'On the deck, point your camera at the city and find the buildings the app asks for. Phone compasses aren’t very precise: first we’ll do a quick calibration.',
  },
  start: { it: 'Inizia il gioco', en: 'Start the game' },
  calTitle: { it: 'Calibrazione', en: 'Calibration' },
  calText: {
    it: 'Punta il centro dell’inquadratura sulla guglia del Chrysler Building (a nord-est: la punta a raggiera argentata) e premi “Fatto”.',
    en: 'Aim the centre of the frame at the Chrysler Building spire (north-east: the silver sunburst tip) and press “Done”.',
  },
  calDone: { it: 'Fatto', en: 'Done' },
  calSkip: { it: 'Salta', en: 'Skip' },
  find: { it: 'Trova', en: 'Find' },
  turnL: { it: 'gira a sinistra', en: 'turn left' },
  turnR: { it: 'gira a destra', en: 'turn right' },
  close: { it: 'ci sei quasi!', en: 'almost there!' },
  found: { it: 'Trovato!', en: 'Found it!' },
  next: { it: 'Prossimo', en: 'Next' },
  skip: { it: 'Salta', en: 'Skip' },
  end: { it: 'Partita finita!', en: 'Game over!' },
  points: { it: 'punti', en: 'points' },
  best: { it: 'Record', en: 'Best' },
  again: { it: 'Gioca ancora', en: 'Play again' },
  exit: { it: 'Esci', en: 'Exit' },
  noSensor: {
    it: 'Questo telefono non dà accesso alla bussola: il gioco non è disponibile. Usa la vista a 360° qui sopra.',
    en: 'This phone doesn’t give access to the compass: the game isn’t available. Use the 360° view above.',
  },
  noCam: { it: 'Fotocamera non disponibile: puoi giocare comunque guardando la città e usando le frecce.', en: 'Camera not available: you can still play by looking at the city and following the arrows.' },
  waiting: { it: 'Muovi un po’ il telefono per attivare la bussola…', en: 'Move your phone a little to wake the compass…' },
}

const BKEY = 'muner-hunt-best'

export function CameraHunt() {
  const { t } = useLang()
  const [phase, setPhase] = useState<'idle' | 'cal' | 'play' | 'end' | 'nosensor'>('idle')
  const [camOk, setCamOk] = useState(true)
  const [offset, setOffset] = useState(0)
  const [idx, setIdx] = useState(0)
  const [score, setScore] = useState(0)
  const [found, setFound] = useState(false)
  const [best, setBest] = useState(() => { try { return Number(localStorage.getItem(BKEY) || 0) } catch { return 0 } })
  const video = useRef<HTMLVideoElement>(null)
  const stream = useRef<MediaStream | null>(null)
  const holdSince = useRef<number | null>(null)
  const startedAt = useRef(Date.now())

  const active = phase === 'cal' || phase === 'play'
  const raw = useHeading(active, 0)
  const heading = raw == null ? null : (raw + offset + 360) % 360

  const targets = useMemo(() => TARGETS.map((id) => {
    const l = landmarks.find((x) => x.id === id)!
    return { ...l, b: bearingDeg(l.lat, l.lon) }
  }), [])
  const all = useMemo(() => landmarks.map((l) => ({ ...l, b: bearingDeg(l.lat, l.lon) })), [])
  const target = targets[idx]

  // collega il flusso video quando la schermata di gioco è visibile
  useEffect(() => {
    if (active && stream.current && video.current && video.current.srcObject !== stream.current) {
      video.current.srcObject = stream.current
      video.current.play().catch(() => {})
    }
  })

  const stopCam = () => { stream.current?.getTracks().forEach((tr) => tr.stop()); stream.current = null }
  useEffect(() => stopCam, [])

  const start = async () => {
    if (!(await requestOrientation())) { setPhase('nosensor'); return }
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false })
      stream.current = s
      setCamOk(true)
    } catch { setCamOk(false) }
    setIdx(0); setScore(0); setFound(false); setOffset(0)
    setPhase('cal')
  }

  const calibrate = () => {
    if (raw != null) {
      const cal = all.find((x) => x.id === CAL_ID)!
      setOffset(angleDiff(raw, cal.b))
    }
    startedAt.current = Date.now()
    setPhase('play')
  }

  // controllo "trovato": bisogna restare puntati sull'obiettivo per circa un secondo
  useEffect(() => {
    if (phase !== 'play' || found || heading == null) return
    const d = Math.abs(angleDiff(heading, target.b))
    if (d < TOL) {
      if (holdSince.current == null) holdSince.current = Date.now()
      else if (Date.now() - holdSince.current > 900) {
        holdSince.current = null
        setFound(true)
        const secs = (Date.now() - startedAt.current) / 1000
        setScore((s) => s + Math.max(20, Math.round(100 - secs * 2)))
        try { navigator.vibrate?.([120, 60, 120]) } catch { /* ignore */ }
      }
    } else holdSince.current = null
  }, [heading, phase, found, target])

  const next = () => {
    setFound(false)
    startedAt.current = Date.now()
    if (idx + 1 >= targets.length) {
      setPhase('end')
      stopCam()
      if (score > best) { setBest(score); try { localStorage.setItem(BKEY, String(score)) } catch { /* ignore */ } }
    } else setIdx(idx + 1)
  }
  const exit = () => { stopCam(); setPhase('idle') }

  if (phase === 'idle' || phase === 'nosensor' || phase === 'end') {
    return (
      <div className="rounded-xl bg-gradient-to-br from-un to-navy p-4 text-white">
        <h3 className="font-bold">📷 {t(tx.title)}</h3>
        {phase === 'end' ? (
          <div className="mt-2 space-y-2 text-center">
            <div className="text-4xl">🏆</div>
            <div className="text-lg font-bold">{t(tx.end)} {score} {t(tx.points)}</div>
            <div className="text-xs text-white/70">{t(tx.best)}: {Math.max(best, score)}</div>
          </div>
        ) : (
          <p className="mt-1 text-sm text-white/85">{phase === 'nosensor' ? t(tx.noSensor) : t(tx.intro)}</p>
        )}
        {phase !== 'nosensor' && (
          <button onClick={start} className="mt-3 w-full rounded-xl bg-taxi py-3 font-bold text-navy">
            {phase === 'end' ? t(tx.again) : t(tx.start)}
          </button>
        )}
      </div>
    )
  }

  const d = heading == null ? null : angleDiff(heading, target.b)
  const visible = heading == null ? [] : all.filter((l) => Math.abs(angleDiff(heading, l.b)) < FOV / 2)

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black text-white">
      <div className="relative flex-1 overflow-hidden">
        {camOk
          ? <video ref={video} playsInline muted className="absolute inset-0 h-full w-full object-cover" />
          : <div className="absolute inset-0 bg-gradient-to-b from-sky-900 to-slate-900" />}
        {/* mirino */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-taxi/90" />
        {/* etichette degli edifici nell'inquadratura */}
        {phase === 'play' && [...visible].sort((a, b) => angleDiff(heading!, a.b) - angleDiff(heading!, b.b)).map((l, i) => (
          <div key={l.id} className="absolute -translate-x-1/2 whitespace-nowrap rounded-full bg-black/50 px-2 py-0.5 text-[11px]"
            style={{ left: `${50 + (angleDiff(heading!, l.b) / FOV) * 100}%`, top: `${28 + (i % 3) * 7}%` }}>
            {t(l.name).split(' (')[0]}
          </div>
        ))}
        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-black/70 to-transparent p-4">
          {phase === 'cal' ? (
            <>
              <div className="text-xs font-bold tracking-wide text-taxi uppercase">{t(tx.calTitle)}</div>
              <p className="mt-1 text-sm">{t(tx.calText)}</p>
            </>
          ) : (
            <>
              <div className="flex justify-between text-xs text-white/70"><span>{idx + 1}/{targets.length}</span><span>{score} {t(tx.points)}</span></div>
              <div className="mt-1 text-lg font-bold">🎯 {t(tx.find)}: {t(target.name).split(' (')[0]}</div>
            </>
          )}
          {!camOk && <p className="mt-1 text-xs text-white/70">{t(tx.noCam)}</p>}
          {heading == null && <p className="mt-1 text-xs text-taxi">{t(tx.waiting)}</p>}
        </div>
        {phase === 'play' && d != null && !found && (
          <div className="absolute inset-x-0 bottom-28 text-center text-xl font-bold drop-shadow">
            {Math.abs(d) < TOL ? `✨ ${t(tx.close)}` : d < 0 ? `⬅️ ${t(tx.turnL)} ${Math.round(-d)}°` : `${t(tx.turnR)} ${Math.round(d)}° ➡️`}
          </div>
        )}
        {found && (
          <div className="absolute inset-x-4 bottom-24 rounded-2xl bg-white p-4 text-navy shadow-xl">
            <div className="text-lg font-bold">✅ {t(tx.found)} {t(target.name)}</div>
            <p className="mt-1 text-sm text-slate-700">{t(target.facts).split('. ')[0]}.</p>
          </div>
        )}
      </div>
      <div className="flex gap-2 bg-black p-3 pb-[max(12px,env(safe-area-inset-bottom))]">
        <button onClick={exit} className="rounded-xl bg-white/15 px-4 py-3 text-sm">✕ {t(tx.exit)}</button>
        {phase === 'cal' ? (
          <>
            <button onClick={() => { startedAt.current = Date.now(); setPhase('play') }} className="rounded-xl bg-white/15 px-4 py-3 text-sm">{t(tx.calSkip)}</button>
            <button onClick={calibrate} className="flex-1 rounded-xl bg-taxi py-3 font-bold text-navy">{t(tx.calDone)}</button>
          </>
        ) : found ? (
          <button onClick={next} className="flex-1 rounded-xl bg-taxi py-3 font-bold text-navy">{t(tx.next)} →</button>
        ) : (
          <button onClick={next} className="flex-1 rounded-xl bg-white/15 py-3 text-sm">{t(tx.skip)}</button>
        )}
      </div>
    </div>
  )
}
