import { HashRouter, Link, NavLink, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState, type ReactNode } from 'react'
import { LangProvider, ui, useLang, type Lang } from './i18n'
import { videos } from './data/videos'
import { Quiz } from './components/Quiz'
import { ToursIndex, TourHome, TourStop } from './components/tour/TourPages'

// ---- progresso (solo sul telefono, nessun dato inviato) ----
const PKEY = 'muner-done'
function readDone(): string[] {
  try { return JSON.parse(localStorage.getItem(PKEY) || '[]') } catch { return [] }
}
function useDone() {
  const [done, setDone] = useState<string[]>(readDone)
  const mark = (id: string) => {
    setDone((d) => {
      const next = d.includes(id) ? d : [...d, id]
      try { localStorage.setItem(PKEY, JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }
  return { done, mark }
}

function LangSwitch() {
  const { lang, setLang } = useLang()
  return (
    <div className="flex rounded-full bg-white/10 p-0.5 text-xs font-semibold">
      {(['it', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-full px-2.5 py-1 uppercase ${lang === l ? 'bg-taxi text-navy' : 'text-white/80'}`}
          aria-pressed={lang === l}
        >
          {l}
        </button>
      ))}
    </div>
  )
}

function Shell({ children }: { children: ReactNode }) {
  const { t } = useLang()
  const tab = 'flex-1 py-2.5 text-center text-xs font-semibold flex flex-col items-center gap-0.5'
  return (
    <div className="mx-auto flex min-h-screen max-w-xl flex-col">
      <header className="sticky top-0 z-10 flex items-center justify-between bg-navy px-4 py-3 text-white shadow">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-bold tracking-tight">MUNER <span className="text-taxi">NY</span></span>
          <span className="hidden text-xs text-white/70 sm:inline">{t(ui.appTitle)}</span>
        </Link>
        <LangSwitch />
      </header>
      <main className="flex-1 pb-24">{children}</main>
      <nav className="fixed inset-x-0 bottom-0 z-10 mx-auto flex max-w-xl border-t border-black/10 bg-white pb-[env(safe-area-inset-bottom)]">
        {[
          { to: '/', icon: '🏠', label: ui.home },
          { to: '/video', icon: '🎬', label: ui.videos },
          { to: '/visite', icon: '🏛️', label: ui.tours },
        ].map((n) => (
          <NavLink key={n.to} to={n.to} end={n.to === '/'} className={({ isActive }) => `${tab} ${isActive ? 'text-navy' : 'text-slate-400'}`}>
            <span className="text-lg">{n.icon}</span>
            {t(n.label)}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function LangGate() {
  const { setLang } = useLang()
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-navy px-6 text-center text-white">
      <div>
        <div className="font-display text-5xl font-bold">MUNER <span className="text-taxi">NY</span></div>
        <div className="mt-2 text-white/70">New York · 2027</div>
      </div>
      <div className="w-full max-w-xs space-y-3">
        <p className="text-sm text-white/70">Scegli la lingua · Choose your language</p>
        <button onClick={() => setLang('it')} className="w-full rounded-xl bg-white py-3.5 font-semibold text-navy">🇮🇹 Italiano</button>
        <button onClick={() => setLang('en')} className="w-full rounded-xl bg-white py-3.5 font-semibold text-navy">🇬🇧 English</button>
      </div>
    </div>
  )
}

function Home({ done }: { done: string[] }) {
  const { t } = useLang()
  return (
    <div className="space-y-4 p-4">
      <section className="rounded-2xl bg-navy-2 p-5 text-white">
        <h1 className="font-display text-2xl font-bold">{t(ui.appTitle)}</h1>
        <p className="mt-2 text-sm leading-relaxed text-white/85">{t(ui.homeWelcome)}</p>
        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/15">
          <div className="h-full bg-taxi transition-all" style={{ width: `${(done.length / videos.length) * 100}%` }} />
        </div>
        <p className="mt-1.5 text-xs text-white/70">{done.length}/{videos.length} {t(ui.watched)}</p>
      </section>
      <Link to="/video" className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="text-3xl">🎬</div>
        <div className="mt-2 text-lg font-bold text-navy">{t(ui.videos)}</div>
        <div className="text-sm text-slate-500">{t(ui.videosCta)}</div>
      </Link>
      <Link to="/visite" className="block rounded-2xl bg-white p-5 shadow-sm ring-1 ring-black/5">
        <div className="text-3xl">🏛️</div>
        <div className="mt-2 text-lg font-bold text-navy">{t(ui.tours)}</div>
        <div className="text-sm text-slate-500">{t(ui.toursCta)}</div>
      </Link>
    </div>
  )
}

function VideoList({ done }: { done: string[] }) {
  const { t } = useLang()
  return (
    <div className="p-4">
      <h1 className="font-display text-2xl font-bold text-navy">{t(ui.videos)}</h1>
      <p className="mt-1 mb-4 text-sm text-slate-600">{t(ui.videosIntro)}</p>
      <ul className="space-y-3">
        {videos.map((v, i) => (
          <li key={v.id}>
            <Link to={`/video/${v.id}`} className="flex gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-navy text-3xl">{v.emoji}</div>
              <div className="min-w-0 flex-1">
                <div className="text-[11px] font-semibold tracking-wide text-un uppercase">{i + 1} · {t(v.borough)}</div>
                <div className="font-bold text-navy">{t(v.title)}</div>
                <div className="line-clamp-2 text-sm text-slate-500">{t(v.hook)}</div>
              </div>
              {done.includes(v.id) && <div className="self-center text-lg" title={t(ui.done)}>✅</div>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Card({ title, children, tone = 'white' }: { title: string; children: ReactNode; tone?: 'white' | 'taxi' | 'un' }) {
  const bg = tone === 'taxi' ? 'bg-taxi/25 ring-taxi/60' : tone === 'un' ? 'bg-un/10 ring-un/40' : 'bg-white ring-black/5'
  return (
    <section className={`rounded-2xl p-4 ring-1 ${bg}`}>
      <h2 className="mb-2 text-sm font-bold tracking-wide text-navy uppercase">{title}</h2>
      {children}
    </section>
  )
}

function VideoDetail({ mark }: { mark: (id: string) => void }) {
  const { id } = useParams()
  const { t } = useLang()
  const nav = useNavigate()
  const idx = videos.findIndex((v) => v.id === id)
  const v = videos[idx]
  useEffect(() => { window.scrollTo(0, 0) }, [id])
  if (!v) return <div className="p-4">404</div>
  const next = videos[(idx + 1) % videos.length]
  return (
    <article className="space-y-4 pb-4">
      <div className="aspect-video w-full bg-black">
        {v.youtubeId ? (
          <iframe
            className="h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?rel=0&playsinline=1`}
            title={t(v.title)}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-navy to-navy-2 text-white">
            <span className="text-6xl">{v.emoji}</span>
            <span className="text-sm text-white/70">{t(ui.videoSoon)}</span>
          </div>
        )}
      </div>
      <div className="space-y-4 px-4">
        <button onClick={() => nav('/video')} className="text-sm font-semibold text-un">← {t(ui.back)}</button>
        <header>
          <div className="text-xs font-semibold tracking-wide text-un uppercase">{t(v.borough)}</div>
          <h1 className="font-display text-3xl font-bold text-navy">{t(v.title)}</h1>
          <p className="mt-1 text-lg text-slate-600 italic">“{t(v.hook)}”</p>
        </header>

        <Card title={t(ui.deepDive)}>
          <div className="space-y-3 text-[15px] leading-relaxed">
            {v.deepDive.map((p, i) => <p key={i}>{t(p)}</p>)}
          </div>
        </Card>

        <Card title={t(ui.keyDates)}>
          <ol className="relative ml-2 border-l-2 border-un/40">
            {v.keyDates.map((d) => (
              <li key={d.year} className="mb-3 ml-4 last:mb-0">
                <span className="absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full bg-un" />
                <span className="font-bold text-navy">{d.year}</span> <span className="text-slate-700">– {t(d.text)}</span>
              </li>
            ))}
          </ol>
        </Card>

        <Card title={`💡 ${t(ui.didYouKnow)}`} tone="taxi"><p className="leading-relaxed">{t(v.didYouKnow)}</p></Card>
        <Card title={`🇺🇳 ${t(ui.munCorner)}`} tone="un"><p className="leading-relaxed">{t(v.mun)}</p></Card>
        <Card title={`📍 ${t(ui.onSite)}`}><p className="leading-relaxed">{t(v.onSite)}</p></Card>

        <Quiz key={v.id} questions={v.quiz} onComplete={() => mark(v.id)} />

        <Link to={`/video/${next.id}`} className="block rounded-2xl bg-navy p-4 text-center font-semibold text-white">
          {t(ui.next)}: {t(next.title)} →
        </Link>
      </div>
    </article>
  )
}

function Routed() {
  const { lang } = useLang()
  const { done, mark } = useDone()
  if (!lang) return <LangGate />
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home done={done} />} />
        <Route path="/video" element={<VideoList done={done} />} />
        <Route path="/video/:id" element={<VideoDetail mark={mark} />} />
        <Route path="/visite" element={<ToursIndex />} />
        <Route path="/visite/:tourId" element={<TourHome />} />
        <Route path="/visite/:tourId/:stopId" element={<TourStop />} />
      </Routes>
    </Shell>
  )
}

export default function App() {
  return (
    <LangProvider>
      <HashRouter>
        <Routed />
      </HashRouter>
    </LangProvider>
  )
}
