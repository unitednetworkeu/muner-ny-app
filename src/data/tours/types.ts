import type { L } from '../../i18n'
import type { QuizQ } from '../videos'

export type Work = {
  title: L
  artist?: L
  date: string
  note: L
  /** testo dell'audioguida dedicato a quest'opera */
  audio?: L
  /** immagine Open Access del Met: objectID + parola che deve comparire nel titolo ufficiale */
  met?: { id: number; expect: string }
  /** foto con licenza libera (es. Wikimedia Commons), con attribuzione obbligatoria */
  photo?: { src: string; credit: string; link: string; license: string; licenseUrl: string }
}

export type Game =
  | { kind: 'order'; prompt: L; items: { label: L; tag?: string }[] } // items nell'ordine corretto
  | { kind: 'match'; prompt: L; pairs: [L, L][] }
  | { kind: 'hunt'; prompt: L; items: L[] }
  | { kind: 'quiz'; questions: QuizQ[] }

export type Zone = { label: L; x: number; y: number; w: number; h: number; tone?: string }

export type Stop = {
  id: string
  /** numeri di sala del museo che attivano questa tappa */
  galleries: string[]
  floor: string
  /** posizione del segnaposto sulla piantina (coordinate SVG 0-400 x 0-260) */
  pin: { x: number; y: number }
  minutes: number
  title: L
  area: L
  directions: L
  audio: L
  works: Work[]
  games: Game[]
  ifClosed?: L
}

export type Tour = {
  id: string
  emoji: string
  name: L
  duration: L
  intro: L
  closuresUrl?: string
  entrance: L
  /** true = le sale non hanno numeri: si cercano per nome */
  roomSearch?: boolean
  floors: { id: string; label: L; zones: Zone[]; street?: { label: L; side: 'bottom' | 'right' | 'left' | 'top' } }[]
  stops: Stop[]
  extras: Stop[]
}
