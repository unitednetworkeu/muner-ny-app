import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useLang, type L } from '../../i18n'
import { tours } from '../../data/tours'
import type { Stop, Tour } from '../../data/tours/types'
import { AudioGuide } from './AudioGuide'
import { FloorMap } from './FloorMap'
import { GameView } from './Games'
import { MetImage, loadMetImage } from './MetImage'
import { Skyline360 } from './Skyline360'

const tx = {
  start: { it: 'Inizia la visita', en: 'Start the tour' },
  restart: { it: 'Ricomincia da capo', en: 'Start over' },
  continue: { it: 'Continua la visita', en: 'Continue the tour' },
  meet: { it: 'Ritrovo', en: 'Meeting' },
  notes: { it: 'I miei appunti', en: 'My notes' },
  notesHint: { it: 'Segna qui ora e punto di ritrovo che ti ha dato il tutor: restano solo sul tuo telefono.', en: 'Note the meeting time and place your tutor gave you: they stay on your phone only.' },
  intro: { it: 'Introduzione alla sala', en: 'Room introduction' },
  listenWork: { it: 'Ascolta il racconto dell’opera', en: 'Listen to the story of this work' },
  prev: { it: 'Indietro', en: 'Back' },
  legendRoute: { it: 'Tappe del percorso', en: 'Route stops' },
  legendExtra: { it: 'Extra facoltativi', en: 'Optional extras' },
  legendDone: { it: 'Completata', en: 'Done' },
  offline: { it: 'Prepara la visita offline', en: 'Get the tour ready offline' },
  offlineHint: { it: 'Fallo con il wifi dell’hotel: scarica le immagini delle opere.', en: 'Do it on hotel wifi: downloads the artwork images.' },
  offlineDone: { it: 'Pronto! Immagini salvate:', en: 'Ready! Images saved:' },
  disclaimer: {
    it: 'App didattica indipendente del progetto MUNER NY, non affiliata né approvata dai musei citati.',
    en: 'Independent educational app of the MUNER NY project, not affiliated with or endorsed by the museums mentioned.',
  },
  metImages: {
    it: 'Immagini delle opere: The Metropolitan Museum of Art, Open Access (pubblico dominio, CC0).',
    en: 'Artwork images: The Metropolitan Museum of Art, Open Access (public domain, CC0).',
  },
  totalAudio: { it: 'di audioguida in totale', en: 'of audio guide in total' },
  meetTime: { it: 'Ora del ritrovo', en: 'Meeting time' },
  meetPlace: { it: 'Punto di ritrovo', en: 'Meeting point' },
  meetPlaceHint: { it: 'es. scalinata esterna su Fifth Avenue', en: 'e.g. front steps on Fifth Avenue' },
  minsLeft: { it: 'min al ritrovo', en: 'min to meeting' },
  late: { it: 'È ora di andare al punto di ritrovo!', en: 'Time to head to the meeting point!' },
  hurry: { it: 'Mancano meno di 15 minuti: avviati verso il ritrovo.', en: 'Less than 15 minutes left: start heading to the meeting point.' },
  room: { it: 'In che sala sei?', en: 'Which room are you in?' },
  roomHint: { it: 'Numero sul cartello all’ingresso della sala', en: 'Number on the sign at the room entrance' },
  go: { it: 'Vai', en: 'Go' },
  roomSearchHint: { it: 'Scrivi il nome della sala o di cosa vedi (es. balena, T. rex, meteoriti)', en: 'Type the hall name or what you see (e.g. whale, T. rex, meteorites)' },
  notFound: { it: 'Nessuna tappa in questa sala. Prova con la piantina.', en: 'No stop in this room. Try the map.' },
  stops: { it: 'Le tappe', en: 'The stops' },
  extras: { it: 'Se hai ancora tempo…', en: 'If you still have time…' },
  extrasAhead: { it: 'Sei in anticipo: ecco qualche sala in più. Tieni d’occhio l’ora del ritrovo!', en: 'You’re ahead of schedule: here are some extra rooms. Keep an eye on the meeting time!' },
  extrasNormal: { it: 'Sale facoltative, da visitare solo se hai finito il percorso e c’è tempo prima del ritrovo.', en: 'Optional rooms, only if you’ve finished the route and there’s time before the meeting.' },
  closures: { it: 'Controlla le sale chiuse oggi (sito del museo)', en: 'Check today’s gallery closures (museum website)' },
  step: { it: 'Tappa', en: 'Stop' },
  of: { it: 'di', en: 'of' },
  howTo: { it: 'Come arrivare', en: 'How to get there' },
  works: { it: 'Le opere', en: 'The works' },
  play: { it: 'Gioca', en: 'Play' },
  ifClosed: { it: 'Sala chiusa?', en: 'Room closed?' },
  next: { it: 'Avanti: prossima tappa', en: 'Next stop' },
  finish: { it: 'Fine del percorso', en: 'Finish the route' },
  finished: { it: 'Percorso completato! 🎉', en: 'Route completed! 🎉' },
  ahead: { it: 'in anticipo di', en: 'ahead by' },
  behind: { it: 'in ritardo di', en: 'behind by' },
  onTime: { it: 'nei tempi', en: 'on time' },
  skipTip: { it: 'Consiglio: dedica meno tempo alle prossime tappe o saltane una.', en: 'Tip: spend less time at the next stops or skip one.' },
  min: { it: 'min', en: 'min' },
  map: { it: 'Piantina', en: 'Map' },
  schematic: { it: 'Piantina schematica, non in scala. Tocca un numero per aprire la tappa.', en: 'Schematic map, not to scale. Tap a number to open the stop.' },
  back: { it: 'Tutte le tappe', en: 'All stops' },
  extra: { it: 'Extra', en: 'Extra' },
  soon: { it: 'In arrivo', en: 'Coming soon' },
  toursSoon: {
    it: 'Scegli il museo. Ogni percorso ha piantina, audioguida e giochi in ogni sala.',
    en: 'Choose a museum. Each route has a map, audio guide and games in every room.',
  },
}

// ---------- stato della visita (solo sul telefono) ----------
type TourState = { startedAt?: number; done: string[]; meetTime?: string; meetPlace?: string }
const key = (id: string) => `muner-tour-${id}`
function read(id: string): TourState {
  try { return { done: [], ...JSON.parse(localStorage.getItem(key(id)) || '{}') } } catch { return { done: [] } }
}
export function useTourState(id: string) {
  const [s, setS] = useState<TourState>(() => read(id))
  const update = (patch: Partial<TourState>) => {
    setS((prev) => {
      const next = { ...prev, ...patch }
      try { localStorage.setItem(key(id), JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }
  return [s, update] as const
}

function useNow(ms = 30000) {
  const [now, setNow] = useState(Date.now())
  useEffect(() => { const i = setInterval(() => setNow(Date.now()), ms); return () => clearInterval(i) }, [ms])
  return now
}

function minutesToMeet(meetTime: string | undefined, now: number): number | null {
  if (!meetTime) return null
  const [h, m] = meetTime.split(':').map(Number)
  if (Number.isNaN(h)) return null
  const d = new Date(now)
  d.setHours(h, m, 0, 0)
  return Math.round((d.getTime() - now) / 60000)
}

function MeetBanner({ s }: { s: TourState }) {
  const { t } = useLang()
  const now = useNow()
  const left = minutesToMeet(s.meetTime, now)
  useEffect(() => {
    if (left === 15 || left === 0) { try { navigator.vibrate?.([200, 100, 200]) } catch { /* ignore */ } }
  }, [left])
  if (left === null) return null
  const urgent = left <= 15
  return (
    <div className={`flex items-center gap-3 px-4 py-2 text-sm ${urgent ? 'bg-rose-600 text-white' : 'bg-taxi/40 text-navy'}`}>
      <span className="text-lg">⏰</span>
      <div className="flex-1">
        <b>{t(tx.meet)} {s.meetTime}</b>{s.meetPlace ? ` · ${s.meetPlace}` : ''}
        <div className="text-xs opacity-90">
          {left <= 0 ? t(tx.late) : urgent ? t(tx.hurry) : `${left} ${t(tx.minsLeft)}`}
        </div>
      </div>
    </div>
  )
}

/** minuti di anticipo (+) o ritardo (-) rispetto al programma */
function pace(tour: Tour, s: TourState, now: number): number | null {
  if (!s.startedAt) return null
  const elapsed = (now - s.startedAt) / 60000
  let planned = 0
  for (const st of tour.stops) { if (s.done.includes(st.id)) planned += st.minutes }
  return Math.round(planned - elapsed)
}

function audioMinutes(tour: Tour) {
  let w = 0
  for (const st of tour.stops) {
    w += st.audio.it.split(/\s+/).length
    for (const wk of st.works) if (wk.audio) w += wk.audio.it.split(/\s+/).length
  }
  return Math.round(w / 145)
}

function OfflinePrep({ tour }: { tour: Tour }) {
  const { t } = useLang()
  const [n, setN] = useState<number | null>(null)
  const [busy, setBusy] = useState(false)
  const items = tour.stops.concat(tour.extras).flatMap((st) => st.works).filter((w) => w.met)
  const run = async () => {
    setBusy(true)
    let ok = 0
    for (const w of items) {
      const info = await loadMetImage(w.met!.id, w.met!.expect)
      if (info) {
        await new Promise<void>((res) => { const im = new Image(); im.onload = im.onerror = () => res(); im.src = info.src })
        ok++
      }
    }
    for (const w of tour.stops.flatMap((st) => st.works)) {
      if (w.photo) await new Promise<void>((res) => { const im = new Image(); im.onload = im.onerror = () => res(); im.src = w.photo!.src })
    }
    setN(ok); setBusy(false)
  }
  if (!items.length) return null
  return (
    <section className="rounded-2xl bg-white p-4 text-center ring-1 ring-black/5">
      <button onClick={run} disabled={busy} className="w-full rounded-xl bg-un py-3 font-bold text-white disabled:opacity-60">
        {busy ? '…' : `⬇️ ${t(tx.offline)}`}
      </button>
      <p className="mt-1 text-xs text-slate-500">{n === null ? t(tx.offlineHint) : `${t(tx.offlineDone)} ${n}/${items.length}`}</p>
    </section>
  )
}

// ---------- elenco musei ----------
export function ToursIndex() {
  const { t } = useLang()
  return (
    <div className="space-y-3 p-4">
      <h1 className="font-display text-2xl font-bold text-navy">{t({ it: 'Visite guidate', en: 'Guided tours' })}</h1>
      <p className="text-sm text-slate-600">{t(tx.toursSoon)}</p>
      {tours.map((tr) => (
        <Link key={tr.id} to={`/visite/${tr.id}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5">
          <span className="text-3xl">{tr.emoji}</span>
          <div className="flex-1">
            <div className="font-bold text-navy">{t(tr.name)}</div>
            <div className="text-sm text-slate-500">{t(tr.duration)}</div>
          </div>
          <span className="text-navy">→</span>
        </Link>
      ))}
    </div>
  )
}

function StopRow({ tourId, stop, n, done, label }: { tourId: string; stop: Stop; n: string; done: boolean; label?: L }) {
  const { t } = useLang()
  return (
    <Link to={`/visite/${tourId}/${stop.id}`} className="flex items-center gap-3 rounded-xl bg-white p-3 ring-1 ring-black/5">
      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${done ? 'bg-emerald-500' : n === '★' ? 'bg-violet-600' : 'bg-navy'}`}>
        {done ? '✓' : n}
      </span>
      <div className="min-w-0 flex-1">
        <div className="truncate font-semibold text-navy">{t(stop.title)}</div>
        <div className="truncate text-xs text-slate-500">{label ? `${t(label)} · ` : ''}{t(stop.area)} · {stop.minutes} {t(tx.min)}</div>
      </div>
    </Link>
  )
}

// ---------- pagina del museo ----------
export function TourHome() {
  const { tourId = '' } = useParams()
  const tour = tours.find((x) => x.id === tourId)
  const { t } = useLang()
  const nav = useNavigate()
  const [s, update] = useTourState(tourId)
  const [floorSel, setFloor] = useState<string | null>(null)
  const [room, setRoom] = useState('')
  const [roomErr, setRoomErr] = useState(false)
  const now = useNow()
  if (!tour) return <div className="p-4">404</div>

  const all = [...tour.stops.map((st, i) => ({ stop: st, n: String(i + 1) })), ...tour.extras.map((st) => ({ stop: st, n: '★' }))]
  const nextStop = tour.stops.find((st) => !s.done.includes(st.id)) ?? tour.stops[0]
  const floor = floorSel ?? nextStop.floor
  const onFloor = all.filter((x) => x.stop.floor === floor)
  const p = pace(tour, s, now)
  const routeDone = tour.stops.every((st) => s.done.includes(st.id))
  const ahead = routeDone || (p !== null && p >= 10)

  const goRoom = (e: React.FormEvent) => {
    e.preventDefault()
    const r = room.trim().toLowerCase().replace(/\s+/g, ' ')
    const hit = tour.roomSearch
      ? r.length >= 2 && all.find((x) => x.stop.galleries.some((g) => g.includes(r) || (r.length >= 4 && r.includes(g))))
      : all.find((x) => x.stop.galleries.includes(r))
    if (hit) { setRoomErr(false); nav(`/visite/${tour.id}/${hit.stop.id}`) } else setRoomErr(true)
  }

  const input = 'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm'
  return (
    <div>
      <MeetBanner s={s} />
      <div className="space-y-4 p-4">
        <header>
          <div className="text-3xl">{tour.emoji}</div>
          <h1 className="font-display text-2xl font-bold text-navy">{t(tour.name)}</h1>
          <div className="text-sm font-semibold text-un">{t(tour.duration)} · 🎧 ~{audioMinutes(tour)} min {t(tx.totalAudio)}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{t(tour.intro)}</p>
        </header>

        <section className="space-y-2 rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <h2 className="text-sm font-bold tracking-wide text-navy uppercase">📝 {t(tx.notes)}</h2>
          <p className="text-xs text-slate-500">{t(tx.notesHint)}</p>
          <div className="grid grid-cols-[110px_1fr] items-center gap-2 text-sm">
            <label htmlFor="mt">{t(tx.meetTime)}</label>
            <input id="mt" type="time" className={input} value={s.meetTime ?? ''} onChange={(e) => update({ meetTime: e.target.value })} />
            <label htmlFor="mp">{t(tx.meetPlace)}</label>
            <input id="mp" className={input} placeholder={t(tx.meetPlaceHint)} value={s.meetPlace ?? ''} onChange={(e) => update({ meetPlace: e.target.value })} />
          </div>
        </section>

        <div className="flex gap-2">
          <button
            onClick={() => { if (!s.startedAt) update({ startedAt: Date.now() }); nav(`/visite/${tour.id}/${nextStop.id}`) }}
            className="flex-1 rounded-2xl bg-navy py-3.5 font-bold text-white"
          >
            ▶ {s.startedAt ? t(tx.continue) : t(tx.start)}
          </button>
          {s.startedAt && (
            <button onClick={() => update({ startedAt: undefined, done: [] })} className="rounded-2xl bg-white px-4 text-sm text-slate-600 ring-1 ring-black/10">
              ↺
            </button>
          )}
        </div>
        {p !== null && !routeDone && (
          <p className="text-center text-sm text-slate-600">
            {p >= 3 ? `🟢 ${t(tx.ahead)} ${p} ${t(tx.min)}` : p <= -3 ? `🟠 ${t(tx.behind)} ${-p} ${t(tx.min)}` : `🟢 ${t(tx.onTime)}`}
          </p>
        )}


        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-bold tracking-wide text-navy uppercase">🗺️ {t(tx.map)}</h2>
            <div className="flex rounded-full bg-slate-200 p-0.5 text-xs font-semibold">
              {tour.floors.map((f) => (
                <button key={f.id} onClick={() => setFloor(f.id)} className={`rounded-full px-3 py-1 ${floor === f.id ? 'bg-navy text-white' : 'text-slate-600'}`}>
                  {t(f.label)}
                </button>
              ))}
            </div>
          </div>
          <FloorMap tour={tour} floor={floor} stops={onFloor} current={nextStop.id} done={s.done} onPick={(id) => nav(`/visite/${tour.id}/${id}`)} />
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-600">
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-navy" /> {t(tx.legendRoute)}</span>
            <span className="flex items-center gap-1"><span className="text-violet-600">★</span> {t(tx.legendExtra)}</span>
            <span className="flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-emerald-500" /> {t(tx.legendDone)}</span>
          </div>
          <p className="text-xs text-slate-500">{t(tx.schematic)}</p>
        </section>
        <form onSubmit={goRoom} className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <label htmlFor="room" className="text-sm font-bold tracking-wide text-navy uppercase">🔢 {t(tx.room)}</label>
          <div className="mt-2 flex gap-2">
            <input id="room" inputMode={tour.roomSearch ? 'text' : 'numeric'} className={`${input} text-lg`} placeholder={tour.roomSearch ? 'T. rex' : '131'} value={room} onChange={(e) => setRoom(e.target.value)} />
            <button className="rounded-lg bg-un px-4 font-bold text-white">{t(tx.go)}</button>
          </div>
          <p className={`mt-1 text-xs ${roomErr ? 'text-rose-600' : 'text-slate-500'}`}>{roomErr ? t(tx.notFound) : t(tour.roomSearch ? tx.roomSearchHint : tx.roomHint)}</p>
        </form>

        <section className="space-y-2">
          <h2 className="text-sm font-bold tracking-wide text-navy uppercase">📍 {t(tx.stops)}</h2>
          {tour.stops.map((st, i) => <StopRow key={st.id} tourId={tour.id} stop={st} n={String(i + 1)} done={s.done.includes(st.id)} />)}
        </section>

        {tour.extras.length > 0 && (
        <section className={`space-y-2 rounded-2xl p-4 ${ahead ? 'bg-emerald-50 ring-1 ring-emerald-200' : 'bg-slate-100'}`}>
            <h2 className="text-sm font-bold tracking-wide text-navy uppercase">✨ {t(tx.extras)}</h2>
            <p className="text-xs text-slate-600">{ahead ? t(tx.extrasAhead) : t(tx.extrasNormal)}</p>
            {tour.extras.map((st) => <StopRow key={st.id} tourId={tour.id} stop={st} n="★" done={s.done.includes(st.id)} label={tx.extra} />)}
          </section>
        )}

        <OfflinePrep tour={tour} />

        <p className="text-center text-[11px] leading-snug text-slate-400">{t(tx.disclaimer)}{tour.id === 'met' ? ` ${t(tx.metImages)}` : ''}</p>

        {tour.closuresUrl && (
          <a href={tour.closuresUrl} target="_blank" rel="noreferrer" className="block text-center text-sm font-semibold text-un underline">
            {t(tx.closures)} ↗
          </a>
        )}
      </div>
    </div>
  )
}

// ---------- pagina della tappa ----------
export function TourStop() {
  const { tourId = '', stopId = '' } = useParams()
  const tour = tours.find((x) => x.id === tourId)
  const { t } = useLang()
  const nav = useNavigate()
  const [s, update] = useTourState(tourId)
  const now = useNow()
  useEffect(() => { window.scrollTo(0, 0) }, [stopId])
  if (!tour) return <div className="p-4">404</div>
  const idx = tour.stops.findIndex((x) => x.id === stopId)
  const isExtra = idx < 0
  const stop = isExtra ? tour.extras.find((x) => x.id === stopId) : tour.stops[idx]
  if (!stop) return <div className="p-4">404</div>
  const next = isExtra ? undefined : tour.stops[idx + 1]
  const p = pace(tour, s, now)

  const complete = () => {
    const patch: { done: string[]; startedAt?: number } = { done: s.done.includes(stop.id) ? s.done : [...s.done, stop.id] }
    if (!s.startedAt) patch.startedAt = Date.now()
    update(patch)
    nav(next ? `/visite/${tour.id}/${next.id}` : `/visite/${tour.id}`)
  }

  return (
    <div>
      <MeetBanner s={s} />
      <article key={stop.id} className="space-y-4 p-4">
        <button onClick={() => nav(`/visite/${tour.id}`)} className="text-sm font-semibold text-un">← {t(tx.back)}</button>
        <header>
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wide text-un uppercase">
            <span>{isExtra ? `✨ ${t(tx.extra)}` : `${t(tx.step)} ${idx + 1} ${t(tx.of)} ${tour.stops.length}`}</span>
            <span>·</span>
            <span>⏱ {stop.minutes} {t(tx.min)}</span>
          </div>
          <h1 className="font-display text-3xl font-bold text-navy">{t(stop.title)}</h1>
          <div className="text-sm text-slate-500">{t(stop.area)}</div>
          {!isExtra && (
            <div className="mt-2 flex gap-1">
              {tour.stops.map((st, i) => (
                <span key={st.id} className={`h-1.5 flex-1 rounded-full ${i === idx ? 'bg-taxi' : s.done.includes(st.id) ? 'bg-emerald-500' : 'bg-slate-200'}`} />
              ))}
            </div>
          )}
          {p !== null && p <= -5 && !isExtra && (
            <p className="mt-2 rounded-lg bg-orange-100 px-3 py-2 text-sm text-orange-900">🟠 {t(tx.behind)} {-p} {t(tx.min)}. {t(tx.skipTip)}</p>
          )}
        </header>

        <section className="rounded-2xl bg-white p-4 ring-1 ring-black/5">
          <h2 className="mb-1 text-sm font-bold tracking-wide text-navy uppercase">🧭 {t(tx.howTo)}</h2>
          <p className="leading-relaxed">{t(stop.directions)}</p>
          {stop.ifClosed && <p className="mt-2 text-sm text-slate-600"><b>{t(tx.ifClosed)}</b> {t(stop.ifClosed)}</p>}
        </section>

        <AudioGuide text={stop.audio} label={tx.intro} />

        {stop.widget === 'skyline' && <Skyline360 />}

        {stop.works.map((w, i) => (
          <section key={`${stop.id}-${i}`} className="overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-black/5">
            {w.met && <MetImage id={w.met.id} expect={w.met.expect} alt={t(w.title)} />}
            {w.photo && (
              <figure className="-mx-4 -mt-4 mb-3 overflow-hidden rounded-t-2xl bg-slate-900">
                <img src={w.photo.src} alt={t(w.title)} loading="lazy" className="max-h-80 w-full object-cover" />
                <figcaption className="px-3 py-1 text-[10px] text-white/60">
                  <a href={w.photo.link} target="_blank" rel="noreferrer" className="underline">{w.photo.credit}</a>
                  {' · '}
                  <a href={w.photo.licenseUrl} target="_blank" rel="noreferrer" className="underline">{w.photo.license}</a>
                </figcaption>
              </figure>
            )}
            <div className="text-xs font-semibold tracking-wide text-un uppercase">🖼️ {t(tx.works)} · {i + 1}/{stop.works.length}</div>
            <h3 className="font-display text-xl font-bold text-navy">{t(w.title)}</h3>
            <div className="text-sm text-slate-600">{w.artist ? `${t(w.artist)} · ` : ''}{w.date}</div>
            <div className="mb-3 text-sm text-slate-500">{t(w.note)}</div>
            {w.audio && <AudioGuide text={w.audio} label={tx.listenWork} light />}
          </section>
        ))}

        {stop.games.length > 0 && (
          <div className="space-y-3">
            <h2 className="text-sm font-bold tracking-wide text-navy uppercase">🎮 {t(tx.play)}</h2>
            {stop.games.map((g, i) => <GameView key={`${stop.id}-${i}`} g={g} onDone={() => {}} />)}
          </div>
        )}

        <div className="flex gap-2">
          {!isExtra && idx > 0 && (
            <button onClick={() => nav(`/visite/${tour.id}/${tour.stops[idx - 1].id}`)} className="rounded-2xl bg-white px-5 py-4 font-bold text-navy ring-1 ring-black/10">
              ← {t(tx.prev)}
            </button>
          )}
          <button onClick={complete} className="flex-1 rounded-2xl bg-taxi py-4 text-lg font-bold text-navy shadow">
            {isExtra ? `✓ ${t(tx.back)}` : next ? `${t(tx.next)} →` : `🏁 ${t(tx.finish)}`}
          </button>
        </div>
        {next && <p className="text-center text-sm text-slate-500">{idx + 2}. {t(next.title)}</p>}
        {!next && !isExtra && s.done.length >= tour.stops.length && <p className="text-center font-semibold text-emerald-700">{t(tx.finished)}</p>}
      </article>
    </div>
  )
}
