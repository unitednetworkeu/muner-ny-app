import { useEffect, useRef, useState } from 'react'
import { useLang } from '../../i18n'

const tx = {
  listen: { it: 'Ascolta l’audioguida', en: 'Play the audio guide' },
  pause: { it: 'Pausa', en: 'Pause' },
  resume: { it: 'Riprendi', en: 'Resume' },
  stop: { it: 'Stop', en: 'Stop' },
  read: { it: 'Leggi il testo', en: 'Read the text' },
  hide: { it: 'Nascondi il testo', en: 'Hide the text' },
  noVoice: { it: 'Il tuo telefono non supporta la lettura vocale: leggi il testo qui sotto.', en: 'Your phone doesn’t support speech: read the text below.' },
  tempVoice: { it: 'Voce provvisoria del telefono: la voce definitiva arriverà presto.', en: 'Temporary phone voice: the final voice is coming soon.' },
}

/**
 * Audioguida. Se `src` (MP3) è presente usa il file audio;
 * altrimenti usa la sintesi vocale del telefono come voce provvisoria.
 */
export function AudioGuide({ text, src }: { text: { it: string; en: string }; src?: { it?: string; en?: string } }) {
  const { lang, t } = useLang()
  const l = lang ?? 'it'
  const file = src?.[l]
  const [state, setState] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [showText, setShowText] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const canSpeak = typeof window !== 'undefined' && 'speechSynthesis' in window

  useEffect(() => () => {
    try { window.speechSynthesis?.cancel() } catch { /* ignore */ }
    audioRef.current?.pause()
  }, [text, l])

  const play = () => {
    if (file) {
      if (!audioRef.current) {
        audioRef.current = new Audio(file)
        audioRef.current.onended = () => setState('idle')
      }
      audioRef.current.play().catch(() => setShowText(true))
      setState('playing')
      return
    }
    if (!canSpeak) { setShowText(true); return }
    const synth = window.speechSynthesis
    if (state === 'paused') { synth.resume(); setState('playing'); return }
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text[l])
    u.lang = l === 'it' ? 'it-IT' : 'en-US'
    u.rate = 0.97
    const voices = synth.getVoices().filter((v) => v.lang.toLowerCase().startsWith(l))
    const best = voices.find((v) => /natural|neural|premium|enhanced|google/i.test(v.name)) ?? voices[0]
    if (best) u.voice = best
    u.onend = () => setState('idle')
    u.onerror = () => setState('idle')
    synth.speak(u)
    setState('playing')
  }
  const pause = () => {
    if (file) audioRef.current?.pause()
    else window.speechSynthesis.pause()
    setState('paused')
  }
  const stop = () => {
    if (file && audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0 }
    else window.speechSynthesis?.cancel()
    setState('idle')
  }

  return (
    <section className="rounded-2xl bg-navy p-4 text-white">
      <div className="flex items-center gap-3">
        <button
          onClick={state === 'playing' ? pause : play}
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-taxi text-2xl text-navy shadow"
          aria-label={state === 'playing' ? t(tx.pause) : t(tx.listen)}
        >
          {state === 'playing' ? '❚❚' : '▶'}
        </button>
        <div className="flex-1">
          <div className="font-semibold">🎧 {state === 'paused' ? t(tx.resume) : t(tx.listen)}</div>
          {!file && <div className="text-xs text-white/60">{canSpeak ? t(tx.tempVoice) : t(tx.noVoice)}</div>}
        </div>
        {state !== 'idle' && (
          <button onClick={stop} className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold">{t(tx.stop)}</button>
        )}
      </div>
      <button onClick={() => setShowText((s) => !s)} className="mt-3 text-sm font-semibold text-taxi">
        {showText ? t(tx.hide) : t(tx.read)} {showText ? '▲' : '▼'}
      </button>
      {showText && <p className="mt-2 text-[15px] leading-relaxed text-white/90">{text[l]}</p>}
    </section>
  )
}
