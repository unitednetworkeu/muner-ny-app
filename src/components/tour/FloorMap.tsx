import { useLang } from '../../i18n'
import type { Stop, Tour } from '../../data/tours/types'

export function FloorMap({
  tour, floor, stops, current, done, onPick,
}: {
  tour: Tour
  floor: string
  stops: { stop: Stop; n: string }[]
  current?: string
  done: string[]
  onPick: (id: string) => void
}) {
  const { t } = useLang()
  const f = tour.floors.find((x) => x.id === floor)!
  return (
    <svg viewBox="0 0 400 268" className="w-full rounded-2xl bg-white ring-1 ring-black/5" role="img" aria-label={t(f.label)}>
      <rect x="14" y="0" width="352" height="256" rx="6" fill="#eef2f6" />
      {f.zones.map((z, i) => (
        <g key={i}>
          <rect x={z.x} y={z.y} width={z.w} height={z.h} rx="4" fill={z.tone ?? '#dbe4ee'} stroke="#fff" strokeWidth="2" />
          <text x={z.x + z.w / 2} y={z.y + 11} textAnchor="middle" fontSize="8.5" fill="#33475b" fontWeight="600">
            {t(z.label)}
          </text>
        </g>
      ))}
      {f.street && (
        <g>
          <rect x="372" y="0" width="22" height="256" fill="#9aa9b8" />
          <text x="383" y="128" fontSize="9" fill="#fff" fontWeight="700" textAnchor="middle" transform="rotate(90 383 128)">
            {t(f.street.label)}
          </text>
          <text x="352" y="134" fontSize="12" textAnchor="middle">🚪</text>
        </g>
      )}
      <text x="22" y="250" fontSize="9" fill="#64748b">N ↑</text>
      {stops.map(({ stop, n }) => {
        const isCur = stop.id === current
        const isDone = done.includes(stop.id)
        if (n === '★') {
          return (
            <g key={stop.id} onClick={() => onPick(stop.id)} style={{ cursor: 'pointer' }}>
              <text x={stop.pin.x} y={stop.pin.y + 16} textAnchor="middle" fontSize="24" fill={isDone ? '#10b981' : '#7c3aed'} stroke="#fff" strokeWidth="1.5" paintOrder="stroke">★</text>
            </g>
          )
        }
        return (
          <g key={stop.id} onClick={() => onPick(stop.id)} style={{ cursor: 'pointer' }}>
            <circle cx={stop.pin.x} cy={stop.pin.y + 8} r={isCur ? 12 : 10}
              fill={isCur ? '#f7c948' : isDone ? '#10b981' : '#0b2a4a'} stroke="#fff" strokeWidth="2.5" />
            <text x={stop.pin.x} y={stop.pin.y + 12} textAnchor="middle" fontSize="10.5" fontWeight="700"
              fill={isCur ? '#0b2a4a' : '#fff'}>{isDone && !isCur ? '✓' : n}</text>
          </g>
        )
      })}
    </svg>
  )
}
