import { audioFiles } from './data/audioManifest'

export type Lang = 'it' | 'en'

/** Impronta del testo (FNV-1a 32 bit): se il testo cambia, cambia il nome del file audio. */
export function audioKey(text: string): string {
  let h = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(36)
}

/**
 * MP3 dell'audioguida per questo testo, se è già stato generato.
 * Se il testo è stato corretto dopo la generazione, non c'è file e l'app usa la voce del telefono.
 */
export function audioSrc(text: string, lang: Lang): string | undefined {
  const k = audioKey(text)
  return audioFiles[lang].has(k) ? `/audio/${lang}/${k}.mp3` : undefined
}
