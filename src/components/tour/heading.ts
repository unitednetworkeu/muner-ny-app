import { useEffect, useRef, useState } from 'react'

/**
 * Direzione (0 = nord, 90 = est) verso cui punta la FOTOCAMERA POSTERIORE del telefono.
 * iOS: webkitCompassHeading. Android: calcolo dalla matrice di rotazione (alpha, beta, gamma assoluti).
 */
function cameraHeading(e: DeviceOrientationEvent & { webkitCompassHeading?: number }): number | null {
  if (typeof e.webkitCompassHeading === 'number') return e.webkitCompassHeading
  if (e.alpha == null || e.beta == null || e.gamma == null) return null
  const r = Math.PI / 180
  const a = e.alpha * r, b = e.beta * r, g = e.gamma * r
  const sA = Math.sin(a), cA = Math.cos(a), sB = Math.sin(b), cB = Math.cos(b), sG = Math.sin(g), cG = Math.cos(g)
  // direzione dell'asse -Z del dispositivo (fotocamera posteriore) nel sistema Est-Nord
  const vx = -(cG * sA * sB + cA * sG)
  const vy = -(sA * sG - cA * cG * sB)
  if (Math.abs(vx) < 1e-6 && Math.abs(vy) < 1e-6) {
    // telefono appoggiato in piano: usa la direzione del lato alto
    return (360 - e.alpha) % 360
  }
  void cB
  return ((Math.atan2(vx, vy) * 180) / Math.PI + 360) % 360
}

export async function requestOrientation(): Promise<boolean> {
  try {
    const D = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }
    const ios = /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
    if (typeof D?.requestPermission === 'function') {
      const r = await D.requestPermission().catch(() => 'denied')
      // su iPhone il rifiuto è definitivo; su altri browser proviamo comunque ad ascoltare i sensori
      if (r !== 'granted' && ios) return false
    }
    return 'DeviceOrientationEvent' in window
  } catch {
    return false
  }
}

/** Restituisce la direzione corrente, smussata, con un offset di calibrazione */
export function useHeading(active: boolean, offset = 0) {
  const [heading, setHeading] = useState<number | null>(null)
  const last = useRef<number | null>(null)
  useEffect(() => {
    if (!active) return
    let gotAbsolute = false
    const handle = (abs: boolean) => (ev: Event) => {
      const e = ev as DeviceOrientationEvent & { webkitCompassHeading?: number }
      if (abs) gotAbsolute = true
      else if (gotAbsolute) return // su Android preferisci l'evento assoluto
      if (!abs && typeof e.webkitCompassHeading !== 'number' && !e.absolute) return
      const h = cameraHeading(e)
      if (h == null) return
      // smussatura circolare per ridurre i tremolii
      const prev = last.current
      let next = h
      if (prev != null) {
        let d = h - prev
        if (d > 180) d -= 360
        if (d < -180) d += 360
        next = (prev + d * 0.25 + 360) % 360
      }
      last.current = next
      setHeading(next)
    }
    const hAbs = handle(true), hRel = handle(false)
    window.addEventListener('deviceorientationabsolute', hAbs, true)
    window.addEventListener('deviceorientation', hRel, true)
    return () => {
      window.removeEventListener('deviceorientationabsolute', hAbs, true)
      window.removeEventListener('deviceorientation', hRel, true)
    }
  }, [active])
  return heading == null ? null : (heading + offset + 360) % 360
}

export function angleDiff(a: number, b: number) {
  let d = b - a
  if (d > 180) d -= 360
  if (d < -180) d += 360
  return d
}
