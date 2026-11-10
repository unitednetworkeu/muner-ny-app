import { useEffect, useState } from 'react'

type Info = { src: string; title: string; url: string }
const CK = 'muner-metimg-'

function cached(id: number): Info | null {
  try { return JSON.parse(localStorage.getItem(CK + id) || 'null') } catch { return null }
}

export async function loadMetImage(id: number, expect: string): Promise<Info | null> {
  const c = cached(id)
  if (c) return c
  try {
    const r = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
    if (!r.ok) return null
    const j = await r.json()
    const ok = j.isPublicDomain && j.primaryImageSmall && String(j.title).toLowerCase().includes(expect.toLowerCase())
    if (!ok) return null
    const info = { src: j.primaryImageSmall as string, title: String(j.title).replace(/<[^>]+>/g, ''), url: j.objectURL as string }
    try { localStorage.setItem(CK + id, JSON.stringify(info)) } catch { /* ignore */ }
    return info
  } catch {
    return null
  }
}

/** Immagine Open Access del Met. Compare solo se il titolo ufficiale corrisponde all'opera attesa. */
export function MetImage({ id, expect, alt }: { id: number; expect: string; alt: string }) {
  const [info, setInfo] = useState<Info | null>(() => cached(id))
  const [failed, setFailed] = useState(false)
  useEffect(() => {
    let live = true
    if (!info) loadMetImage(id, expect).then((x) => { if (live) { if (x) setInfo(x); else setFailed(true) } })
    return () => { live = false }
  }, [id, expect, info])
  if (failed || !info) return null
  return (
    <figure className="-mx-4 -mt-4 mb-3 overflow-hidden rounded-t-2xl bg-slate-900">
      <img src={info.src} alt={alt} loading="lazy" className="max-h-80 w-full object-contain" onError={() => setFailed(true)} />
      <figcaption className="bg-slate-900 px-3 py-1 text-[10px] text-white/60">{info.title} · The Met, Open Access</figcaption>
    </figure>
  )
}
