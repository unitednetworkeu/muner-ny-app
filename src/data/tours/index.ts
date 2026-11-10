import { met as metBase } from './met'
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

export const tours: Tour[] = [met]
