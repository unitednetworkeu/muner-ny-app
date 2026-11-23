import { silhouettes } from '../../data/silhouettes'

// Sagome realistiche (contenuto statico generato da noi, non input dell'utente)
export function Silhouette({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 120 200" className="h-64 w-auto" aria-hidden>
      <rect x="0" y="196" width="120" height="4" fill="#9fb3c8" />
      <g dangerouslySetInnerHTML={{ __html: silhouettes[id] ?? '' }} />
    </svg>
  )
}
