import { useMemo, useState } from 'react'
import { useLang, type L } from '../../i18n'
import type { Game } from '../../data/tours/types'
import { Quiz } from '../Quiz'

const tx = {
  orderHelp: { it: 'Tocca le voci nell’ordine giusto, dalla più antica.', en: 'Tap the items in the right order, oldest first.' },
  matchHelp: { it: 'Tocca un elemento a sinistra e poi quello giusto a destra.', en: 'Tap an item on the left, then its match on the right.' },
  huntHelp: { it: 'Spunta ciò che trovi nella sala.', en: 'Tick what you find in the room.' },
  wellDone: { it: 'Ottimo lavoro! 🎉', en: 'Great job! 🎉' },
  retry: { it: 'Ricomincia', en: 'Start again' },
  found: { it: 'trovati', en: 'found' },
}

function shuffle<T>(a: T[]): T[] {
  const b = [...a]
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[b[i], b[j]] = [b[j], b[i]]
  }
  // evita di restituire lo stesso ordine
  return b.length > 1 && b.every((x, i) => x === a[i]) ? shuffle(a) : b
}

function Box({ title, help, children }: { title: L; help: L; children: React.ReactNode }) {
  const { t } = useLang()
  return (
    <section className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
      <h3 className="font-bold text-navy">{t(title)}</h3>
      <p className="mb-3 text-xs text-slate-500">{t(help)}</p>
      {children}
    </section>
  )
}

function OrderGame({ g, onDone }: { g: Extract<Game, { kind: 'order' }>; onDone: () => void }) {
  const { t } = useLang()
  const [seed, setSeed] = useState(0)
  const shuffled = useMemo(() => shuffle(g.items.map((_, i) => i)), [g, seed])
  const [picked, setPicked] = useState<number[]>([])
  const [shake, setShake] = useState<number | null>(null)
  const complete = picked.length === g.items.length
  const tap = (i: number) => {
    if (picked.includes(i) || complete) return
    if (i === picked.length) {
      const next = [...picked, i]
      setPicked(next)
      if (next.length === g.items.length) onDone()
    } else {
      setShake(i)
      try { navigator.vibrate?.(80) } catch { /* ignore */ }
      setTimeout(() => setShake(null), 400)
    }
  }
  return (
    <Box title={g.prompt} help={tx.orderHelp}>
      <ol className="space-y-2">
        {(complete ? g.items.map((_, i) => i) : shuffled).map((i) => {
          const pos = picked.indexOf(i)
          return (
            <li key={i}>
              <button
                onClick={() => tap(i)}
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                  pos >= 0 ? 'bg-emerald-100 text-emerald-900' : shake === i ? 'animate-pulse bg-rose-100' : 'bg-slate-100'
                }`}
              >
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm font-bold ${pos >= 0 ? 'bg-emerald-600 text-white' : 'bg-white text-slate-400'}`}>
                  {pos >= 0 ? pos + 1 : '?'}
                </span>
                <span className="flex-1">{t(g.items[i].label)}</span>
                {pos >= 0 && g.items[i].tag && <span className="text-xs font-semibold text-emerald-700">{g.items[i].tag}</span>}
              </button>
            </li>
          )
        })}
      </ol>
      {complete && (
        <div className="mt-3 flex items-center justify-between">
          <span className="font-semibold text-emerald-700">{t(tx.wellDone)}</span>
          <button onClick={() => { setPicked([]); setSeed((s) => s + 1) }} className="text-sm text-un">{t(tx.retry)}</button>
        </div>
      )}
    </Box>
  )
}

function MatchGame({ g, onDone }: { g: Extract<Game, { kind: 'match' }>; onDone: () => void }) {
  const { t } = useLang()
  const right = useMemo(() => shuffle(g.pairs.map((_, i) => i)), [g])
  const [sel, setSel] = useState<number | null>(null)
  const [matched, setMatched] = useState<number[]>([])
  const [bad, setBad] = useState<number | null>(null)
  const pickRight = (i: number) => {
    if (sel === null || matched.includes(i)) return
    if (sel === i) {
      const next = [...matched, i]
      setMatched(next)
      setSel(null)
      if (next.length === g.pairs.length) onDone()
    } else {
      setBad(i)
      try { navigator.vibrate?.(80) } catch { /* ignore */ }
      setTimeout(() => setBad(null), 400)
    }
  }
  const cell = 'w-full rounded-xl px-3 py-2.5 text-left text-sm transition min-h-12'
  return (
    <Box title={g.prompt} help={tx.matchHelp}>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {g.pairs.map((p, i) => (
            <button key={i} onClick={() => !matched.includes(i) && setSel(i)}
              className={`${cell} ${matched.includes(i) ? 'bg-emerald-100 text-emerald-900' : sel === i ? 'bg-navy text-white' : 'bg-slate-100'}`}>
              {t(p[0])}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {right.map((i) => (
            <button key={i} onClick={() => pickRight(i)}
              className={`${cell} ${matched.includes(i) ? 'bg-emerald-100 text-emerald-900' : bad === i ? 'bg-rose-100' : 'bg-slate-100'}`}>
              {t(g.pairs[i][1])}
            </button>
          ))}
        </div>
      </div>
      {matched.length === g.pairs.length && <p className="mt-3 font-semibold text-emerald-700">{t(tx.wellDone)}</p>}
    </Box>
  )
}

function HuntGame({ g, onDone }: { g: Extract<Game, { kind: 'hunt' }>; onDone: () => void }) {
  const { t } = useLang()
  const [got, setGot] = useState<number[]>([])
  const toggle = (i: number) => {
    const next = got.includes(i) ? got.filter((x) => x !== i) : [...got, i]
    setGot(next)
    if (next.length === g.items.length) onDone()
  }
  return (
    <Box title={g.prompt} help={tx.huntHelp}>
      <ul className="space-y-2">
        {g.items.map((it, i) => (
          <li key={i}>
            <button onClick={() => toggle(i)} className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left ${got.includes(i) ? 'bg-emerald-100' : 'bg-slate-100'}`}>
              <span className="text-lg">{got.includes(i) ? '✅' : '🔍'}</span>
              <span className={got.includes(i) ? 'text-emerald-900' : ''}>{t(it)}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-xs text-slate-500">{got.length}/{g.items.length} {t(tx.found)}</p>
      {got.length === g.items.length && <p className="mt-1 font-semibold text-emerald-700">{t(tx.wellDone)}</p>}
    </Box>
  )
}

export function GameView({ g, onDone }: { g: Game; onDone: () => void }) {
  switch (g.kind) {
    case 'order': return <OrderGame g={g} onDone={onDone} />
    case 'match': return <MatchGame g={g} onDone={onDone} />
    case 'hunt': return <HuntGame g={g} onDone={onDone} />
    case 'quiz': return <Quiz questions={g.questions} onComplete={onDone} />
  }
}
