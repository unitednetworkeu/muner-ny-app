import { useState } from 'react'
import { ui, useLang } from '../i18n'
import type { QuizQ } from '../data/videos'

export function Quiz({ questions, onComplete }: { questions: QuizQ[]; onComplete: () => void }) {
  const { t } = useLang()
  const [step, setStep] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const finished = step >= questions.length

  const choose = (i: number) => {
    if (picked !== null) return
    setPicked(i)
    if (i === questions[step].answer) setScore((s) => s + 1)
  }
  const advance = () => {
    const last = step + 1 >= questions.length
    setPicked(null)
    setStep(step + 1)
    if (last) onComplete()
  }
  const reset = () => { setStep(0); setScore(0); setPicked(null) }

  return (
    <section className="rounded-2xl bg-navy p-4 text-white">
      <h2 className="mb-3 text-sm font-bold tracking-wide text-taxi uppercase">🎯 {t(ui.quiz)}</h2>
      {finished ? (
        <div className="space-y-3 text-center">
          <div className="text-4xl">{score === questions.length ? '🏆' : score > 0 ? '👏' : '💪'}</div>
          <div className="text-lg font-semibold">{t(ui.score)}: {score}/{questions.length}</div>
          <button onClick={reset} className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">{t(ui.retry)}</button>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="text-xs text-white/60">{step + 1}/{questions.length}</div>
          <p className="font-semibold">{t(questions[step].q)}</p>
          <div className="space-y-2">
            {questions[step].options.map((o, i) => {
              const q = questions[step]
              let cls = 'bg-white/10'
              if (picked !== null) {
                if (i === q.answer) cls = 'bg-emerald-500'
                else if (i === picked) cls = 'bg-rose-500'
                else cls = 'bg-white/5 opacity-60'
              }
              return (
                <button key={i} onClick={() => choose(i)} className={`w-full rounded-xl px-4 py-3 text-left transition ${cls}`}>
                  {t(o)}
                </button>
              )
            })}
          </div>
          {picked !== null && (
            <div className="space-y-3">
              <p className="text-sm text-white/85">
                <b>{picked === questions[step].answer ? t(ui.correct) : t(ui.wrong)}</b> {t(questions[step].why)}
              </p>
              <button onClick={advance} className="w-full rounded-xl bg-taxi py-3 font-bold text-navy">→</button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
