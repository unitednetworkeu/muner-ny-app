// Video della guida della città, compressi per il telefono (720×1280, H.264) e pubblicati con l'app in public/video/.
// Originali: cartella "hotspot ny" di United Network (TIKTOK_NYC01…09).
const local = new Set([
  'introduzione-ny', 'brooklyn-bridge', 'empire-state', 'wall-street', 'onu',
  'grand-central', 'statua-liberta', 'times-square', 'central-park',
])

export function videoFile(id: string): { src: string; poster: string } | undefined {
  return local.has(id) ? { src: `/video/${id}.mp4`, poster: `/video/${id}.jpg` } : undefined
}

export const VIDEO_MB = 102
