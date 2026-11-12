// Sagome stilizzate disegnate a mano (viewBox 0 0 120 200, terreno a y=196)
const F = '#0b2a4a'

export function Silhouette({ id }: { id: string }) {
  let body: React.ReactNode
  switch (id) {
    case 'esb':
      body = (<g fill={F}>
        <rect x="20" y="150" width="80" height="46" />
        <rect x="30" y="120" width="60" height="32" />
        <rect x="38" y="60" width="44" height="62" />
        <rect x="44" y="45" width="32" height="16" />
        <rect x="50" y="32" width="20" height="14" />
        <rect x="55" y="18" width="10" height="15" />
        <rect x="59" y="2" width="2" height="17" />
      </g>)
      break
    case 'chrysler':
      body = (<g fill={F}>
        <rect x="30" y="110" width="60" height="86" />
        <rect x="38" y="80" width="44" height="32" />
        <path d="M40 82 Q60 52 80 82 Z" />
        <path d="M44 70 Q60 44 76 70 Z" />
        <path d="M48 58 Q60 36 72 58 Z" />
        <path d="M52 47 Q60 30 68 47 Z" />
        <polygon points="56,40 64,40 60,4" />
        <g fill="#f6f3ec" opacity="0.9">
          {[0, 1, 2, 3].map((i) => <polygon key={i} points={`${52 + i * 2},${76 - i * 11} ${54 + i * 2},${70 - i * 11} ${56 + i * 2},${76 - i * 11}`} />)}
        </g>
      </g>)
      break
    case 'owtc':
      body = (<g fill={F}>
        <polygon points="30,196 90,196 72,40 48,40" />
        <rect x="48" y="36" width="24" height="5" />
        <rect x="59" y="2" width="2" height="35" />
        <polygon points="60,40 90,196 60,196" fill="#1d4a78" />
      </g>)
      break
    case 'flatiron':
      body = (<g fill={F}>
        <polygon points="60,70 20,90 20,196 60,196" />
        <polygon points="60,70 100,90 100,196 60,196" fill="#1d4a78" />
        <rect x="56" y="70" width="8" height="126" />
        <g fill="#f6f3ec" opacity="0.5">{Array.from({ length: 10 }, (_, i) => <rect key={i} x="24" y={98 + i * 9} width="32" height="2" />)}</g>
      </g>)
      break
    case 'un':
      body = (<g fill={F}>
        <rect x="48" y="30" width="22" height="166" />
        <rect x="20" y="168" width="28" height="28" />
        <path d="M70 196 L70 172 Q90 150 112 172 L112 196 Z" />
        <rect x="88" y="150" width="4" height="12" />
        <g fill="#5aa9d6" opacity="0.6">{Array.from({ length: 16 }, (_, i) => <rect key={i} x="50" y={36 + i * 10} width="18" height="5" />)}</g>
      </g>)
      break
    case '432park':
      body = (<g>
        <rect x="46" y="4" width="28" height="192" fill={F} />
        <g fill="#f6f3ec">{Array.from({ length: 30 }, (_, r) => [0, 1, 2].map((c) => <rect key={`${r}-${c}`} x={49 + c * 8.5} y={8 + r * 6.2} width="5" height="4" />))}</g>
      </g>)
      break
    case 'liberty':
      body = (<g fill="#2f8f7a">
        <polygon points="35,196 85,196 78,150 42,150" fill="#8b9aa8" />
        <rect x="45" y="138" width="30" height="14" fill="#8b9aa8" />
        <path d="M50 138 L52 80 Q60 70 68 80 L70 138 Z" />
        <circle cx="60" cy="68" r="8" />
        <polygon points="52,62 49,54 55,59 60,50 65,59 71,54 68,62" />
        <path d="M66 82 L78 50 L74 48 L62 78 Z" />
        <polygon points="73,48 81,48 79,40 75,40" />
        <path d="M77 40 Q80 30 77 26 Q74 30 77 40" fill="#f7c948" />
        <rect x="46" y="88" width="8" height="16" transform="rotate(-10 50 96)" />
      </g>)
      break
    case 'brooklyn':
      body = (<g fill={F}>
        <rect x="0" y="150" width="120" height="5" />
        {[22, 86].map((x) => (
          <g key={x}>
            <rect x={x - 10} y="80" width="20" height="116" />
            <path d={`M${x - 7} 150 L${x - 7} 104 Q${x - 4} 96 ${x - 1} 104 L${x - 1} 150 Z`} fill="#f6f3ec" />
            <path d={`M${x + 1} 150 L${x + 1} 104 Q${x + 4} 96 ${x + 7} 104 L${x + 7} 150 Z`} fill="#f6f3ec" />
          </g>
        ))}
        <path d="M0 120 Q10 110 22 82 Q54 150 86 82 Q100 110 120 120" stroke={F} strokeWidth="2" fill="none" />
        {[30, 38, 46, 54, 62, 70, 78].map((x) => <line key={x} x1={x} x2={x} y1={150} y2={150 - (40 - Math.abs(54 - x) * 0.9) + 4} stroke={F} strokeWidth="0.8" />)}
      </g>)
      break
    case 'woolworth':
      body = (<g fill={F}>
        <rect x="18" y="130" width="84" height="66" />
        <rect x="40" y="60" width="40" height="72" />
        <rect x="44" y="40" width="32" height="22" />
        <polygon points="44,40 76,40 60,8" />
        {[40, 80].map((x) => <polygon key={x} points={`${x - 3},62 ${x + 3},62 ${x},48`} />)}
        {[44, 76].map((x) => <polygon key={x} points={`${x - 3},40 ${x + 3},40 ${x},28`} />)}
        <rect x="59" y="2" width="2" height="8" />
      </g>)
      break
  }
  return (
    <svg viewBox="0 0 120 200" className="h-56 w-auto" aria-hidden>
      <rect x="0" y="196" width="120" height="4" fill="#9fb3c8" />
      {body}
    </svg>
  )
}
