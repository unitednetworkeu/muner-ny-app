import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLang, type L } from '../../i18n'
import { buildingQuiz, flags, manhattanOutline, mapPlaces, puzzles, spotDiff } from '../../data/svago'
import { crosswords, type Crossword } from '../../data/crosswords'
import { loadMetImage } from '../tour/MetImage'
import { Silhouette } from './Silhouettes'

// ---------- utilità ----------
function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]] }
  return b
}
function useBest(key: string, higherIsBetter = true) {
  const k = `muner-best-${key}`
  const [best, setBest] = useState<number | null>(() => { try { const v = localStorage.getItem(k); return v ? Number(v) : null } catch { return null } })
  const submit = (v: number) => {
    if (best == null || (higherIsBetter ? v > best : v < best)) {
      setBest(v); try { localStorage.setItem(k, String(v)) } catch { /* ignore */ }
    }
  }
  return [best, submit] as const
}
const buzz = (p: number | number[]) => { try { navigator.vibrate?.(p) } catch { /* ignore */ } }

const tx = {
  title: { it: 'Svago', en: 'Fun & games' },
  intro: { it: 'Giochi su New York, i musei e le Nazioni Unite: per il pullman, la fila o la sera in hotel.', en: 'Games about New York, the museums and the United Nations: for the bus, the queue or the evening at the hotel.' },
  back: { it: 'Tutti i giochi', en: 'All games' },
  best: { it: 'Record', en: 'Best' },
  again: { it: 'Gioca ancora', en: 'Play again' },
  points: { it: 'punti', en: 'points' },
  moves: { it: 'mosse', en: 'moves' },
  time: { it: 'tempo', en: 'time' },
  done: { it: 'Completato!', en: 'Completed!' },
  next: { it: 'Avanti', en: 'Next' },
}

function Shell({ title, children }: { title: L; children: React.ReactNode }) {
  const { t } = useLang()
  const nav = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="space-y-4 p-4">
      <button onClick={() => nav('/svago')} className="text-sm font-semibold text-un">← {t(tx.back)}</button>
      <h1 className="font-display text-2xl font-bold text-navy">{t(title)}</h1>
      {children}
    </div>
  )
}

function fmt(s: number) { return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}` }
function useTimer(running: boolean) {
  const [s, setS] = useState(0)
  useEffect(() => { if (!running) return; const i = setInterval(() => setS((x) => x + 1), 1000); return () => clearInterval(i) }, [running])
  return [s, setS] as const
}

// ---------- elenco giochi ----------
const games = [
  { to: '/svago/differenze', e: '🔍', t: { it: 'Trova le 10 differenze', en: 'Spot the 10 differences' }, d: { it: 'Central Park d’inverno, 1862', en: 'Central Park in winter, 1862' } },
  { to: '/svago/puzzle', e: '🧩', t: { it: 'Puzzle d’autore', en: 'Masterpiece puzzles' }, d: { it: 'Van Gogh e Washington', en: 'Van Gogh and Washington' } },
  { to: '/svago/cruciverba', e: '✏️', t: { it: 'Cruciverba', en: 'Crosswords' }, d: { it: 'Su video e visite guidate', en: 'On videos and guided tours' } },
  { to: '/svago/edifici', e: '🏙️', t: { it: 'Indovina l’edificio', en: 'Guess the building' }, d: { it: 'Dalla sagoma', en: 'From its silhouette' } },
  { to: '/svago/bandiere', e: '🇺🇳', t: { it: 'Bandiere e Paesi', en: 'Flags and countries' }, d: { it: 'A tempo, come un vero delegato', en: 'Against the clock, like a real delegate' } },
  { to: '/svago/mappa', e: '🗺️', t: { it: 'Metti la città sulla mappa', en: 'Put the city on the map' }, d: { it: 'Dov’è l’ONU? E Wall Street?', en: 'Where’s the UN? And Wall Street?' } },
]

export function SvagoHome() {
  const { t } = useLang()
  return (
    <div className="space-y-3 p-4">
      <h1 className="font-display text-2xl font-bold text-navy">🎲 {t(tx.title)}</h1>
      <p className="text-sm text-slate-600">{t(tx.intro)}</p>
      <div className="grid grid-cols-2 gap-3">
        {games.map((g) => (
          <Link key={g.to} to={g.to} className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
            <div className="text-3xl">{g.e}</div>
            <div className="mt-2 font-bold leading-tight text-navy">{t(g.t)}</div>
            <div className="mt-1 text-xs text-slate-500">{t(g.d)}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

// ---------- 🔍 Trova le differenze ----------
export function SpotDiffGame() {
  const { t } = useLang()
  const [found, setFound] = useState<string[]>([])
  const [miss, setMiss] = useState<{ x: number; y: number; k: number } | null>(null)
  const [s, setS] = useTimer(found.length < spotDiff.diffs.length)
  const [best, submit] = useBest('diff', false)
  const done = found.length === spotDiff.diffs.length
  useEffect(() => { if (done) submit(s) }, [done])

  const tap = (e: React.MouseEvent<HTMLDivElement>) => {
    if (done) return
    const r = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height
    const hit = spotDiff.diffs.find((d) => !found.includes(d.id) && Math.hypot((x - d.x) * r.width, (y - d.y) * r.height) < Math.max(d.r * r.width * 1.4, 22))
    if (hit) { setFound((f) => [...f, hit.id]); buzz(60) }
    else { setMiss({ x, y, k: Date.now() }); buzz([30, 40, 30]) }
  }
  const hint = () => {
    const d = spotDiff.diffs.find((x) => !found.includes(x.id))
    if (d) { setFound((f) => [...f, d.id]); setS((v) => v + 20) }
  }
  const pic = (src: string) => (
    <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: String(spotDiff.ratio) }} onClick={tap}>
      <img src={src} alt="" draggable={false} className="absolute inset-0 h-full w-full select-none" />
      {spotDiff.diffs.filter((d) => found.includes(d.id)).map((d) => (
        <span key={d.id} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-emerald-400 shadow"
          style={{ left: `${d.x * 100}%`, top: `${d.y * 100}%`, width: `${Math.max(d.r * 2.6, 0.05) * 100}%`, aspectRatio: '1' }} />
      ))}
      {miss && <span key={miss.k} className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 animate-ping text-xl" style={{ left: `${miss.x * 100}%`, top: `${miss.y * 100}%` }}>✖️</span>}
    </div>
  )
  return (
    <Shell title={{ it: 'Trova le 10 differenze', en: 'Spot the 10 differences' }}>
      <p className="text-sm text-slate-600">{t({ it: 'Tocca l’immagine dove vedi una differenza (su una delle due). Ingrandisci con due dita se serve.', en: 'Tap the picture where you spot a difference (on either one). Pinch to zoom if needed.' })}</p>
      <div className="flex items-center justify-between rounded-xl bg-navy px-4 py-2 text-white">
        <span className="font-bold">{found.length}/10</span>
        <span>⏱ {fmt(s)}</span>
        <button onClick={hint} disabled={done} className="rounded-full bg-white/15 px-3 py-1 text-xs">💡 {t({ it: 'Aiuto (+20 s)', en: 'Hint (+20 s)' })}</button>
      </div>
      {pic(spotDiff.a)}
      {pic(spotDiff.b)}
      {done && (
        <div className="rounded-2xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-200">
          <div className="text-3xl">🏆</div>
          <div className="font-bold text-emerald-800">{t(tx.done)} {fmt(s)}</div>
          {best != null && <div className="text-xs text-slate-500">{t(tx.best)}: {fmt(best)}</div>}
          <button onClick={() => { setFound([]); setS(0) }} className="mt-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{t(tx.again)}</button>
        </div>
      )}
      <p className="text-[11px] text-slate-400">{spotDiff.credit}</p>
    </Shell>
  )
}

// ---------- 🧩 Puzzle ----------
export function PuzzleList() {
  const { t } = useLang()
  return (
    <Shell title={{ it: 'Puzzle d’autore', en: 'Masterpiece puzzles' }}>
      {puzzles.map((p) => (
        <Link key={p.id} to={`/svago/puzzle/${p.id}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <span className="text-3xl">🧩</span>
          <div><div className="font-bold text-navy">{t(p.title)}</div><div className="text-sm text-slate-500">{t(p.artist)}</div></div>
        </Link>
      ))}
      <p className="text-[11px] text-slate-400">The Metropolitan Museum of Art, Open Access (CC0)</p>
    </Shell>
  )
}

export function PuzzleGame() {
  const { id } = useParams()
  const { t } = useLang()
  const p = puzzles.find((x) => x.id === id) ?? puzzles[0]
  const [src, setSrc] = useState<string | null>(null)
  const [failed, setFailed] = useState(false)
  const [n, setN] = useState(3)
  const [order, setOrder] = useState<number[]>([])
  const [sel, setSel] = useState<number | null>(null)
  const [moves, setMoves] = useState(0)
  const [peek, setPeek] = useState(false)
  const [ratio, setRatio] = useState(1)
  const solved = order.length > 0 && order.every((v, i) => v === i)
  const [s, setS] = useTimer(order.length > 0 && !solved)
  const [best, submit] = useBest(`puzzle-${p.id}-${n}`, false)

  useEffect(() => { loadMetImage(p.met, p.expect).then((i) => (i ? setSrc(i.src) : setFailed(true))) }, [p])
  useEffect(() => {
    if (!src) return
    const im = new Image(); im.onload = () => setRatio(im.naturalWidth / im.naturalHeight); im.src = src
  }, [src])
  const start = (size: number) => {
    setN(size); setMoves(0); setS(0); setSel(null)
    let o = shuffle(Array.from({ length: size * size }, (_, i) => i))
    while (o.every((v, i) => v === i)) o = shuffle(o)
    setOrder(o)
  }
  useEffect(() => { if (solved) { submit(moves); buzz([100, 50, 100]) } }, [solved])

  const tap = (pos: number) => {
    if (solved) return
    if (sel == null) { setSel(pos); return }
    if (sel !== pos) {
      const o = [...order];[o[sel], o[pos]] = [o[pos], o[sel]]; setOrder(o); setMoves((m) => m + 1)
    }
    setSel(null)
  }

  return (
    <Shell title={p.title}>
      <div className="text-sm text-slate-500">{t(p.artist)}</div>
      {failed && <p className="text-sm text-rose-600">{t({ it: 'Immagine non disponibile: serve la connessione la prima volta.', en: 'Image not available: you need a connection the first time.' })}</p>}
      {!src && !failed && <p className="text-sm text-slate-500">…</p>}
      {src && order.length === 0 && (
        <div className="space-y-3">
          <img src={src} alt={t(p.title)} className="w-full rounded-xl" />
          <div className="flex gap-2">
            <button onClick={() => start(3)} className="flex-1 rounded-xl bg-navy py-3 font-bold text-white">{t({ it: 'Facile 3×3', en: 'Easy 3×3' })}</button>
            <button onClick={() => start(4)} className="flex-1 rounded-xl bg-un py-3 font-bold text-white">{t({ it: 'Difficile 4×4', en: 'Hard 4×4' })}</button>
          </div>
        </div>
      )}
      {src && order.length > 0 && (
        <>
          <div className="flex items-center justify-between rounded-xl bg-navy px-4 py-2 text-sm text-white">
            <span>{moves} {t(tx.moves)}</span><span>⏱ {fmt(s)}</span>
            <button onPointerDown={() => setPeek(true)} onPointerUp={() => setPeek(false)} onPointerLeave={() => setPeek(false)}
              className="rounded-full bg-white/15 px-3 py-1 text-xs">👁 {t({ it: 'Tieni premuto per vedere', en: 'Hold to peek' })}</button>
          </div>
          <div className="relative w-full overflow-hidden rounded-xl bg-slate-200" style={{ aspectRatio: String(ratio) }}>
            {peek ? <img src={src} alt="" className="absolute inset-0 h-full w-full" /> : (
              <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${n}, 1fr)`, gridTemplateRows: `repeat(${n}, 1fr)` }}>
                {order.map((piece, pos) => (
                  <button key={pos} onClick={() => tap(pos)}
                    className={`relative transition ${sel === pos ? 'z-10 scale-95 ring-4 ring-taxi' : solved ? '' : 'ring-1 ring-white/60'}`}
                    style={{
                      backgroundImage: `url(${src})`,
                      backgroundSize: `${n * 100}% ${n * 100}%`,
                      backgroundPosition: `${((piece % n) / (n - 1)) * 100}% ${(Math.floor(piece / n) / (n - 1)) * 100}%`,
                    }} />
                ))}
              </div>
            )}
          </div>
          {solved && (
            <div className="rounded-2xl bg-emerald-50 p-4 text-center ring-1 ring-emerald-200">
              <div className="text-3xl">🏆</div>
              <div className="font-bold text-emerald-800">{t(tx.done)} {moves} {t(tx.moves)} · {fmt(s)}</div>
              {best != null && <div className="text-xs text-slate-500">{t(tx.best)}: {best} {t(tx.moves)}</div>}
              <p className="mt-2 text-sm text-slate-700">{t(p.detail)}</p>
              <button onClick={() => setOrder([])} className="mt-2 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{t(tx.again)}</button>
            </div>
          )}
        </>
      )}
      <p className="text-[11px] text-slate-400">The Metropolitan Museum of Art, Open Access (CC0)</p>
    </Shell>
  )
}

// ---------- ✏️ Cruciverba ----------
export function CrosswordList() {
  const { t, lang } = useLang()
  const list = crosswords[lang ?? 'it']
  return (
    <Shell title={{ it: 'Cruciverba', en: 'Crosswords' }}>
      {list.map((_, i) => (
        <Link key={i} to={`/svago/cruciverba/${i}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <span className="text-3xl">✏️</span>
          <div className="font-bold text-navy">{t({ it: 'Cruciverba', en: 'Crossword' })} {i + 1}</div>
        </Link>
      ))}
    </Shell>
  )
}

function CrosswordBoard({ cw, storeKey }: { cw: Crossword; storeKey: string }) {
  const { t } = useLang()
  const cells = useMemo(() => {
    const m = new Map<string, { ch: string; num?: number; across?: number; down?: number }>()
    cw.entries.forEach((e, ei) => {
      for (let i = 0; i < e.answer.length; i++) {
        const r = e.row + (e.dir === 'D' ? i : 0), c = e.col + (e.dir === 'A' ? i : 0)
        const k = `${r},${c}`
        const cell = m.get(k) ?? { ch: e.answer[i] }
        if (i === 0) cell.num = e.num
        if (e.dir === 'A') cell.across = ei; else cell.down = ei
        m.set(k, cell)
      }
    })
    return m
  }, [cw])
  const [vals, setVals] = useState<Record<string, string>>(() => { try { return JSON.parse(localStorage.getItem(storeKey) || '{}') } catch { return {} } })
  const [active, setActive] = useState<number>(0)
  const [cursor, setCursor] = useState<string | null>(null)
  const [check, setCheck] = useState(false)
  const input = useRef<HTMLInputElement>(null)
  useEffect(() => { try { localStorage.setItem(storeKey, JSON.stringify(vals)) } catch { /* ignore */ } }, [vals])

  const entry = cw.entries[active]
  const cellsOf = (ei: number) => { const e = cw.entries[ei]; return Array.from({ length: e.answer.length }, (_, i) => `${e.row + (e.dir === 'D' ? i : 0)},${e.col + (e.dir === 'A' ? i : 0)}`) }
  const activeCells = cellsOf(active)
  const complete = [...cells.entries()].every(([k, c]) => vals[k] === c.ch)

  const pickCell = (k: string) => {
    const c = cells.get(k)!
    if (cursor === k && c.across != null && c.down != null) setActive(active === c.across ? c.down : c.across)
    else setActive(c.across != null && (c.down == null || cw.entries[active]?.dir === 'A') ? c.across : c.down!)
    setCursor(k); setCheck(false)
    input.current?.focus()
  }
  const type = (ch: string) => {
    if (!cursor) return
    if (ch === 'BACK') {
      const i = activeCells.indexOf(cursor)
      setVals((v) => ({ ...v, [cursor]: '' }))
      if (i > 0 && !vals[cursor]) setCursor(activeCells[i - 1])
      return
    }
    const letter = ch.toUpperCase().normalize('NFD').replace(/[^A-Z]/g, '')
    if (!letter) return
    setVals((v) => ({ ...v, [cursor]: letter }))
    const i = activeCells.indexOf(cursor)
    if (i >= 0 && i < activeCells.length - 1) setCursor(activeCells[i + 1])
  }
  const reveal = () => { if (cursor) { setVals((v) => ({ ...v, [cursor]: cells.get(cursor)!.ch })) } }

  const size = `min(calc((100vw - 2rem) / ${cw.w}), 34px)`
  const clues = (dir: 'A' | 'D') => cw.entries.map((e, i) => ({ e, i })).filter((x) => x.e.dir === dir).sort((a, b) => a.e.num - b.e.num)

  return (
    <div className="space-y-3">
      {entry && <div className="sticky top-14 z-10 rounded-xl bg-navy px-3 py-2 text-sm text-white shadow"><b>{entry.num} {entry.dir === 'A' ? '→' : '↓'}</b> {entry.clue}</div>}
      <div className="mx-auto grid w-max" style={{ gridTemplateColumns: `repeat(${cw.w}, ${size})` }}>
        {Array.from({ length: cw.h * cw.w }, (_, idx) => {
          const r = Math.floor(idx / cw.w), c = idx % cw.w, k = `${r},${c}`, cell = cells.get(k)
          if (!cell) return <div key={k} style={{ width: size, height: size }} />
          const v = vals[k] || ''
          const wrong = check && v && v !== cell.ch
          return (
            <button key={k} onClick={() => pickCell(k)} style={{ width: size, height: size }}
              className={`relative border border-slate-400 text-center font-bold uppercase leading-none ${k === cursor ? 'bg-taxi' : activeCells.includes(k) ? 'bg-sky-100' : 'bg-white'} ${wrong ? 'text-rose-600' : 'text-navy'}`}>
              {cell.num && <span className="absolute top-0 left-0.5 text-[7px] font-normal text-slate-500">{cell.num}</span>}
              <span className="text-[13px]">{v}</span>
            </button>
          )
        })}
      </div>
      <input ref={input} className="pointer-events-none fixed bottom-0 left-0 h-px w-px opacity-0" autoCapitalize="characters" autoCorrect="off" autoComplete="off" spellCheck={false}
        onKeyDown={(e) => { if (e.key === 'Backspace') { e.preventDefault(); type('BACK') } }}
        onChange={(e) => { const v = e.target.value; if (v) type(v.slice(-1)); e.target.value = '' }} />
      <div className="flex gap-2">
        <button onClick={() => setCheck(true)} className="flex-1 rounded-xl bg-navy py-2.5 text-sm font-bold text-white">✓ {t({ it: 'Controlla', en: 'Check' })}</button>
        <button onClick={reveal} disabled={!cursor} className="flex-1 rounded-xl bg-white py-2.5 text-sm font-bold text-navy ring-1 ring-black/10">💡 {t({ it: 'Aiuto lettera', en: 'Reveal letter' })}</button>
        <button onClick={() => { setVals({}); setCheck(false) }} className="rounded-xl bg-white px-3 text-sm ring-1 ring-black/10">↺</button>
      </div>
      {complete && <div className="rounded-2xl bg-emerald-50 p-4 text-center font-bold text-emerald-800 ring-1 ring-emerald-200">🏆 {t(tx.done)}</div>}
      {(['A', 'D'] as const).map((dir) => (
        <section key={dir} className="rounded-2xl bg-white p-3 ring-1 ring-black/5">
          <h2 className="mb-1 text-sm font-bold tracking-wide text-navy uppercase">{dir === 'A' ? t({ it: 'Orizzontali →', en: 'Across →' }) : t({ it: 'Verticali ↓', en: 'Down ↓' })}</h2>
          <ol className="space-y-1 text-sm">
            {clues(dir).map(({ e, i }) => {
              const ok = cellsOf(i).every((k) => vals[k] === cells.get(k)!.ch)
              return (
                <li key={i}>
                  <button onClick={() => { setActive(i); setCursor(cellsOf(i)[0]); setTimeout(() => input.current?.focus(), 0) }}
                    className={`text-left ${i === active ? 'font-semibold text-navy' : 'text-slate-700'} ${ok ? 'line-through opacity-50' : ''}`}>
                    <b>{e.num}.</b> {e.clue} <span className="text-slate-400">({e.answer.length})</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </div>
  )
}

export function CrosswordGame() {
  const { n } = useParams()
  const { lang, t } = useLang()
  const l = lang ?? 'it'
  const i = Number(n) || 0
  const cw = crosswords[l][i] ?? crosswords[l][0]
  return (
    <Shell title={{ it: `Cruciverba ${i + 1}`, en: `Crossword ${i + 1}` }}>
      <p className="text-sm text-slate-600">{t({ it: 'Tocca una casella e scrivi. Tocca di nuovo per cambiare direzione.', en: 'Tap a square and type. Tap again to switch direction.' })}</p>
      <CrosswordBoard key={`${l}-${i}`} cw={cw} storeKey={`muner-cw-${l}-${i}`} />
    </Shell>
  )
}

// ---------- 🏙️ Indovina l'edificio ----------
export function BuildingGame() {
  const { t } = useLang()
  const [round, setRound] = useState(() => shuffle(buildingQuiz))
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [best, submit] = useBest('buildings')
  const q = round[i]
  const options = useMemo(() => q ? shuffle([q, ...shuffle(buildingQuiz.filter((b) => b.id !== q.id)).slice(0, 3)]) : [], [q])
  const end = i >= round.length
  useEffect(() => { if (end) submit(score) }, [end])
  const choose = (id: string) => { if (picked) return; setPicked(id); if (id === q.id) { setScore((s) => s + 1); buzz(60) } else buzz([30, 40, 30]) }
  return (
    <Shell title={{ it: 'Indovina l’edificio', en: 'Guess the building' }}>
      {end ? (
        <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5">
          <div className="text-4xl">🏙️</div>
          <div className="mt-2 text-lg font-bold text-navy">{score}/{round.length}</div>
          {best != null && <div className="text-xs text-slate-500">{t(tx.best)}: {best}/{round.length}</div>}
          <button onClick={() => { setRound(shuffle(buildingQuiz)); setI(0); setScore(0); setPicked(null) }} className="mt-3 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{t(tx.again)}</button>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-sm text-slate-500"><span>{i + 1}/{round.length}</span><span>{score} ✓</span></div>
          <div className="flex justify-center rounded-2xl bg-gradient-to-b from-sky-200 to-sky-50 p-4"><Silhouette id={q.id} /></div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((o) => (
              <button key={o.id} onClick={() => choose(o.id)}
                className={`rounded-xl px-3 py-3 text-sm font-semibold ${picked ? (o.id === q.id ? 'bg-emerald-500 text-white' : o.id === picked ? 'bg-rose-500 text-white' : 'bg-slate-100 opacity-60') : 'bg-white ring-1 ring-black/10'}`}>
                {t(o.name)}
              </button>
            ))}
          </div>
          {picked && (
            <div className="space-y-2 rounded-2xl bg-navy p-4 text-white">
              <p className="text-sm">{t(q.fact)}</p>
              <button onClick={() => { setI(i + 1); setPicked(null) }} className="w-full rounded-xl bg-taxi py-2.5 font-bold text-navy">{t(tx.next)} →</button>
            </div>
          )}
        </>
      )}
    </Shell>
  )
}

// ---------- 🇺🇳 Bandiere ----------
export function FlagsGame() {
  const { t, lang } = useLang()
  const l = lang ?? 'it'
  const ROUNDS = 10, SECS = 10
  const [round, setRound] = useState(() => shuffle(flags).slice(0, ROUNDS))
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [left, setLeft] = useState(SECS)
  const [score, setScore] = useState(0)
  const [best, submit] = useBest('flags')
  const q = round[i]
  const end = i >= ROUNDS
  const options = useMemo(() => q ? shuffle([q, ...shuffle(flags.filter((f) => f.e !== q.e)).slice(0, 3)]) : [], [q])
  useEffect(() => {
    if (end || picked) return
    if (left <= 0) { setPicked('timeout'); buzz([30, 40, 30]); return }
    const tm = setTimeout(() => setLeft((x) => x - 1), 1000); return () => clearTimeout(tm)
  }, [left, picked, end])
  useEffect(() => { if (end) submit(score) }, [end])
  const choose = (e: string) => {
    if (picked) return; setPicked(e)
    if (e === q.e) { setScore((s) => s + 10 + left * 2); buzz(60) } else buzz([30, 40, 30])
  }
  const next = () => { setI(i + 1); setPicked(null); setLeft(SECS) }
  return (
    <Shell title={{ it: 'Bandiere e Paesi', en: 'Flags and countries' }}>
      {end ? (
        <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5">
          <div className="text-4xl">🇺🇳</div>
          <div className="mt-2 text-lg font-bold text-navy">{score} {t(tx.points)}</div>
          {best != null && <div className="text-xs text-slate-500">{t(tx.best)}: {best}</div>}
          <button onClick={() => { setRound(shuffle(flags).slice(0, ROUNDS)); setI(0); setScore(0); setPicked(null); setLeft(SECS) }} className="mt-3 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{t(tx.again)}</button>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-sm text-slate-500"><span>{i + 1}/{ROUNDS}</span><span>{score} {t(tx.points)}</span></div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full bg-un transition-all" style={{ width: `${(left / SECS) * 100}%` }} /></div>
          <div className="py-4 text-center text-[96px] leading-none">{q.e}</div>
          <div className="grid grid-cols-2 gap-2">
            {options.map((o) => (
              <button key={o.e} onClick={() => choose(o.e)}
                className={`rounded-xl px-3 py-3 text-sm font-semibold ${picked ? (o.e === q.e ? 'bg-emerald-500 text-white' : o.e === picked ? 'bg-rose-500 text-white' : 'bg-slate-100 opacity-60') : 'bg-white ring-1 ring-black/10'}`}>
                {o[l]}
              </button>
            ))}
          </div>
          {picked && <button onClick={next} className="w-full rounded-xl bg-taxi py-3 font-bold text-navy">{picked === 'timeout' ? '⏰ ' : ''}{t(tx.next)} →</button>}
        </>
      )}
    </Shell>
  )
}

// ---------- 🗺️ Metti la città sulla mappa ----------
const ROT = (29 * Math.PI) / 180
const LAT0 = 40.75, LON0 = -73.99
function project(lat: number, lon: number) {
  const x = (lon - LON0) * Math.cos((LAT0 * Math.PI) / 180) * 111.32
  const y = (lat - LAT0) * 110.57
  return { x: x * Math.cos(ROT) - y * Math.sin(ROT), y: x * Math.sin(ROT) + y * Math.cos(ROT) }
}
const pts = manhattanOutline.map(([a, b]) => project(a, b))
const libP = project(40.6892, -74.0445)
const all = [...pts, libP]
const minX = Math.min(...all.map((p) => p.x)) - 1.2, maxX = Math.max(...all.map((p) => p.x)) + 1.2
const minY = Math.min(...all.map((p) => p.y)) - 0.8, maxY = Math.max(...all.map((p) => p.y)) + 0.6
const MW = 300, SCALE = MW / (maxX - minX), MH = (maxY - minY) * SCALE
const toSvg = (p: { x: number; y: number }) => ({ X: (p.x - minX) * SCALE, Y: (maxY - p.y) * SCALE })

export function MapGame() {
  const { t } = useLang()
  const [round, setRound] = useState(() => shuffle(mapPlaces))
  const [i, setI] = useState(0)
  const [guess, setGuess] = useState<{ X: number; Y: number } | null>(null)
  const [score, setScore] = useState(0)
  const [best, submit] = useBest('map')
  const q = round[i]
  const end = i >= round.length
  useEffect(() => { if (end) submit(score) }, [end])
  const truth = q ? toSvg(project(q.lat, q.lon)) : null
  const km = guess && truth ? Math.hypot(guess.X - truth.X, guess.Y - truth.Y) / SCALE : 0
  const pts10 = Math.max(0, Math.round(100 - km * 50))
  const tap = (e: React.MouseEvent<SVGSVGElement>) => {
    if (guess || end) return
    const r = e.currentTarget.getBoundingClientRect()
    const g = { X: ((e.clientX - r.left) / r.width) * MW, Y: ((e.clientY - r.top) / r.height) * MH }
    setGuess(g)
    const d = Math.hypot(g.X - truth!.X, g.Y - truth!.Y) / SCALE
    setScore((s) => s + Math.max(0, Math.round(100 - d * 50)))
    buzz(d < 0.5 ? 80 : [30, 40, 30])
  }
  const path = pts.map((p, k) => { const s = toSvg(p); return `${k ? 'L' : 'M'}${s.X.toFixed(1)},${s.Y.toFixed(1)}` }).join(' ') + 'Z'
  const lib = toSvg(libP)
  return (
    <Shell title={{ it: 'Metti la città sulla mappa', en: 'Put the city on the map' }}>
      {end ? (
        <div className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5">
          <div className="text-4xl">🗺️</div>
          <div className="mt-2 text-lg font-bold text-navy">{score} / {round.length * 100} {t(tx.points)}</div>
          {best != null && <div className="text-xs text-slate-500">{t(tx.best)}: {best}</div>}
          <button onClick={() => { setRound(shuffle(mapPlaces)); setI(0); setScore(0); setGuess(null) }} className="mt-3 rounded-full bg-navy px-4 py-2 text-sm font-bold text-white">{t(tx.again)}</button>
        </div>
      ) : (
        <>
          <div className="flex justify-between text-sm text-slate-500"><span>{i + 1}/{round.length}</span><span>{score} {t(tx.points)}</span></div>
          <div className="rounded-xl bg-navy px-4 py-3 text-white">📍 {t({ it: 'Tocca dove si trova:', en: 'Tap where you’ll find:' })} <b>{t(q.name)}</b></div>
          <svg viewBox={`0 0 ${MW} ${MH}`} className="mx-auto block h-[56vh] w-auto max-w-full touch-manipulation rounded-xl bg-sky-200" onClick={tap}>
            <path d={path} fill="#f1efe6" stroke="#94a3b8" strokeWidth="1.5" />
            <circle cx={lib.X} cy={lib.Y} r="4" fill="#f1efe6" stroke="#94a3b8" />
            <text x={10} y={MH * 0.55} fontSize="9" fill="#2b6b8f" transform={`rotate(-90 10 ${MH * 0.55})`}>Hudson River · New Jersey</text>
            <text x={MW - 14} y={MH * 0.4} fontSize="9" fill="#2b6b8f" transform={`rotate(90 ${MW - 14} ${MH * 0.4})`}>East River · Queens</text>
            <text x={MW * 0.62} y={MH - 12} fontSize="9" fill="#2b6b8f">Brooklyn</text>
            <text x={MW / 2} y={16} fontSize="9" fill="#2b6b8f" textAnchor="middle">↑ Uptown</text>
            {guess && truth && (
              <g>
                <line x1={guess.X} y1={guess.Y} x2={truth.X} y2={truth.Y} stroke="#ef4444" strokeDasharray="3 3" />
                <circle cx={guess.X} cy={guess.Y} r="5" fill="#ef4444" />
                <circle cx={truth.X} cy={truth.Y} r="6" fill="#10b981" stroke="#fff" strokeWidth="2" />
              </g>
            )}
          </svg>
          <p className="text-center text-[11px] text-slate-400">{t({ it: 'Mappa schematica di Manhattan, ruotata come la griglia delle strade.', en: 'Schematic map of Manhattan, rotated like the street grid.' })}</p>
          {guess && (
            <div className="space-y-2 rounded-2xl bg-white p-4 text-center ring-1 ring-black/5">
              <div className="font-bold text-navy">{km < 0.3 ? '🎯 ' : ''}{km.toFixed(1).replace('.', ',')} km · +{pts10} {t(tx.points)}</div>
              <button onClick={() => { setI(i + 1); setGuess(null) }} className="w-full rounded-xl bg-taxi py-2.5 font-bold text-navy">{t(tx.next)} →</button>
            </div>
          )}
        </>
      )}
    </Shell>
  )
}
