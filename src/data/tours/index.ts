import { met as metBase } from './met'
import { amnh as amnhBase } from './amnh'
import { amnhExtra } from './amnhExtra'
import { esb } from './esb'
import { pacific, biodiversity, gemsIntro } from './amnhMore'
import { worksA } from './metWorksA'
import { worksB } from './metWorksB'
import { worksC } from './metWorksC'
import type { Stop, Tour } from './types'

function withWorks(s: Stop): Stop {
  const main = worksA[s.id] ?? worksB[s.id] ?? s.works
  const extra = worksC[s.id] ?? []
  if (s.id === 'greek-roman' && extra.length) {
    // kouros → vasi → colonna di Sardi → cortile romano
    return { ...s, works: [main[0], ...extra, ...main.slice(1)] }
  }
  return { ...s, works: [...main, ...extra] }
}

const met: Tour = { ...metBase, stops: metBase.stops.map(withWorks) }

function buildAmnh(): Tour {
  const base = Object.fromEntries(
    amnhBase.stops.map((s) => [s.id, { ...s, works: [...s.works, ...(amnhExtra[s.id] ?? [])] }]),
  ) as Record<string, Stop>
  const met = base['meteorites-gems']
  const [ahnighito, star, insects] = met.works
  const quiz = met.games[0] as Extract<Stop['games'][number], { kind: 'quiz' }>
  const meteorites: Stop = {
    ...met,
    id: 'meteorites',
    galleries: ['meteoriti', 'meteorites', 'meteorite', 'ahnighito', 'ross', 'asteroide', 'asteroid'],
    pin: { x: 180, y: 90 },
    minutes: 6,
    title: { it: 'Il meteorite Ahnighito', en: 'The Ahnighito meteorite' },
    area: { it: 'Arthur Ross Hall of Meteorites · 1° piano', en: 'Arthur Ross Hall of Meteorites · 1st floor' },
    directions: {
      it: 'Dalle origini umane seguite le indicazioni “Meteorites”: al centro della sala c’è un enorme blocco di ferro scuro.',
      en: 'From Human Origins follow the “Meteorites” signs: in the middle of the hall stands a huge block of dark iron.',
    },
    audio: {
      it: 'Siamo quasi alla fine del viaggio nel tempo. Dopo la vita sulla Terra, guardiamo verso lo spazio: in questa sala ci sono rocce cadute dal cielo, alcune più antiche della Terra stessa, che raccontano come si è formato il Sistema solare.',
      en: 'We are nearly at the end of our journey through time. After life on Earth, we look to space: this hall holds rocks that fell from the sky, some older than the Earth itself, telling how the Solar System formed.',
    },
    works: [ahnighito],
    games: [{ kind: 'quiz', questions: quiz.questions.slice(0, 2) }],
    ifClosed: undefined,
  }
  const gems: Stop = {
    ...met,
    id: 'gems-gilder',
    galleries: ['gemme', 'gems', 'minerali', 'minerals', 'mignone', 'stella dell’india', 'star of india', 'gilder', 'insectarium', 'insetti', 'insects', 'formiche', 'ants'],
    pin: { x: 85, y: 110 },
    minutes: 8,
    title: { it: 'Gemme, minerali e Gilder Center', en: 'Gems, minerals and the Gilder Center' },
    area: { it: 'Mignone Halls of Gems and Minerals · Gilder Center · 1° piano', en: 'Mignone Halls of Gems and Minerals · Gilder Center · 1st floor' },
    directions: {
      it: 'Dai meteoriti proseguite nelle sale delle gemme e dei minerali, poi entrate nel Gilder Center, la sala con le pareti curve come un canyon: l’uscita è su Columbus Avenue.',
      en: 'From the meteorites continue into the gem and mineral halls, then enter the Gilder Center, the hall with canyon-like curving walls: the exit is on Columbus Avenue.',
    },
    audio: gemsIntro,
    works: [star, insects],
    games: [{ kind: 'quiz', questions: quiz.questions.slice(2) }],
  }
  const order = ['rotunda', 'african-mammals', 'pacific', 'titanosaur', 'saurischian', 'ornithischian', 'ocean', 'biodiversity', 'human-origins', 'meteorites', 'gems-gilder']
  const minutes: Record<string, number> = { rotunda: 4, 'african-mammals': 9, titanosaur: 6, saurischian: 12, ornithischian: 8, ocean: 10, 'human-origins': 8 }
  const pool: Record<string, Stop> = { ...base, pacific, biodiversity, meteorites, 'gems-gilder': gems }
  return {
    ...amnhBase,
    stops: order.map((id) => ({ ...pool[id], minutes: minutes[id] ?? pool[id].minutes })),
  }
}

const amnh = buildAmnh()

export const tours: Tour[] = [met, amnh, esb]
