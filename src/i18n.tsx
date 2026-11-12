import { createContext, useContext, useState, type ReactNode } from 'react'

export type Lang = 'it' | 'en'
export type L = { it: string; en: string }

const KEY = 'muner-lang'

function readLang(): Lang | null {
  try {
    const v = localStorage.getItem(KEY)
    return v === 'it' || v === 'en' ? v : null
  } catch {
    return null
  }
}

type Ctx = { lang: Lang | null; setLang: (l: Lang) => void; t: (s: L) => string }
const LangContext = createContext<Ctx>({ lang: 'it', setLang: () => {}, t: (s) => s.it })

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang | null>(readLang)
  const setLang = (l: Lang) => {
    setLangState(l)
    document.documentElement.lang = l
    try { localStorage.setItem(KEY, l) } catch { /* ignore */ }
  }
  const t = (s: L) => s[lang ?? 'it']
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)

// Testi dell'interfaccia
export const ui = {
  appTitle: { it: 'Guida di New York', en: 'New York Guide' },
  chooseLang: { it: 'Scegli la lingua', en: 'Choose your language' },
  home: { it: 'Home', en: 'Home' },
  videos: { it: 'Video', en: 'Videos' },
  tours: { it: 'Visite guidate', en: 'Guided tours' },
  fun: { it: 'Svago', en: 'Fun' },
  funCta: { it: 'Puzzle, cruciverba, differenze e altri giochi', en: 'Puzzles, crosswords, spot the difference and more' },
  videosIntro: {
    it: 'Nove luoghi, nove storie che non trovi sulle guide. Guarda il video e poi apri la scheda di approfondimento.',
    en: 'Nine places, nine stories you won’t find in guidebooks. Watch the video, then open the in-depth card.',
  },
  homeWelcome: {
    it: 'Benvenuti a New York, delegati! Qui trovate i video sui luoghi simbolo della città e le visite guidate ai musei.',
    en: 'Welcome to New York, delegates! Here you’ll find videos about the city’s landmarks and guided museum tours.',
  },
  videosCta: { it: '9 video con scheda e quiz', en: '9 videos with cards and quizzes' },
  toursCta: { it: 'MET · Storia Naturale · Empire State', en: 'The Met · Natural History · Empire State' },
  comingSoon: { it: 'In arrivo', en: 'Coming soon' },
  toursSoon: {
    it: 'Le visite guidate al Metropolitan Museum, al Museo di Storia Naturale e all’Empire State Building sono in preparazione: piantine, audioguide e giochi per ogni sala.',
    en: 'Guided tours of the Met, the Natural History Museum and the Empire State Building are on the way: maps, audio guides and games for every room.',
  },
  videoSoon: { it: 'Il video sarà disponibile a breve', en: 'The video will be available soon' },
  deepDive: { it: 'Approfondimento', en: 'Deep dive' },
  keyDates: { it: 'Date chiave', en: 'Key dates' },
  didYouKnow: { it: 'Lo sapevi?', en: 'Did you know?' },
  munCorner: { it: 'Angolo MUN', en: 'MUN corner' },
  onSite: { it: 'Sul posto', en: 'On site' },
  quiz: { it: 'Mettiti alla prova', en: 'Test yourself' },
  correct: { it: 'Esatto!', en: 'Correct!' },
  wrong: { it: 'Non proprio…', en: 'Not quite…' },
  score: { it: 'Risposte giuste', en: 'Correct answers' },
  retry: { it: 'Riprova', en: 'Try again' },
  back: { it: 'Indietro', en: 'Back' },
  next: { it: 'Prossimo video', en: 'Next video' },
  done: { it: 'Completato', en: 'Completed' },
  watched: { it: 'video completati', en: 'videos completed' },
}
