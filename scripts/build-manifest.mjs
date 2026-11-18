// Aggiorna src/data/audioManifest.ts con gli MP3 presenti in public/audio/<lingua>/
// Uso: node scripts/build-manifest.mjs
import { readdirSync, existsSync, writeFileSync } from 'node:fs'

const list = (l) =>
  existsSync(`public/audio/${l}`)
    ? readdirSync(`public/audio/${l}`).filter((f) => f.endsWith('.mp3')).map((f) => f.slice(0, -4)).sort()
    : []
const fmt = (a) => a.map((k) => `'${k}'`).join(', ')
const it = list('it')
const en = list('en')
writeFileSync(
  'src/data/audioManifest.ts',
  `// Generato da scripts/build-manifest.mjs: elenco degli MP3 presenti in public/audio/<lingua>/
// Voci: Kokoro (Apache 2.0) – italiano "Nicola" (im_nicola), inglese "Heart" (af_heart)
export const audioFiles: Record<'it' | 'en', Set<string>> = {
  it: new Set([${fmt(it)}]),
  en: new Set([${fmt(en)}]),
}
`,
)
console.log(`manifest: IT ${it.length} · EN ${en.length}`)
