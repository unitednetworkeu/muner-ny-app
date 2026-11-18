// Elenca tutti i testi delle audioguide (tappe + opere, IT/EN) in un file JSON
// usato dallo script di generazione delle voci.
// Uso: npx tsx scripts/extract-audio.ts <file-di-uscita.json>
import { writeFileSync } from 'node:fs'
import { tours } from '../src/data/tours'
import { audioKey } from '../src/audio'

const out: { tour: string; lang: string; key: string; text: string }[] = []
const seen = new Set<string>()
for (const tour of tours) {
  for (const st of tour.stops.concat(tour.extras)) {
    const texts = [st.audio, ...st.works.map((w) => w.audio).filter(Boolean)]
    for (const t of texts) {
      for (const lang of ['it', 'en'] as const) {
        const text = t![lang]
        const key = audioKey(text)
        if (seen.has(lang + key)) continue
        seen.add(lang + key)
        out.push({ tour: tour.id, lang, key, text })
      }
    }
  }
}
writeFileSync(process.argv[2], JSON.stringify(out, null, 1))
const chars = (l: string) => out.filter((o) => o.lang === l).reduce((s, o) => s + o.text.length, 0)
console.log(`${out.length} tracce · IT ${chars('it')} caratteri · EN ${chars('en')} caratteri`)
