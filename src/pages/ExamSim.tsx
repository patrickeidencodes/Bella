import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { areaById, topicById } from '../content';
import type { ExamResult, Question } from '../types';
import {
  buildExam,
  DEFAULT_EXAM_CONFIG,
  evaluateExam,
  type AnswerMap,
  type ExamConfig,
} from '../lib/exam';
import { saveExamResult, recordAttempt } from '../lib/progress';
import { notifyProgressChanged } from '../hooks/useProgress';
import { setFocusMode } from '../hooks/useFocusMode';
import { formatDuration, isAnswerCorrect, correctAnswerText, percent } from '../lib/utils';
import QuestionView from '../components/QuestionView';
import ProgressBar from '../components/ProgressBar';
import RelevanceBadge from '../components/RelevanceBadge';

type Phase = 'setup' | 'running' | 'result';

const QUESTION_OPTIONS = [50, 70, 100];
const DURATION_OPTIONS = [20, 30, 45];

export default function ExamSim() {
  const [phase, setPhase] = useState<Phase>('setup');
  const [config, setConfig] = useState<ExamConfig>(DEFAULT_EXAM_CONFIG);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [index, setIndex] = useState(0);
  const [remainingSec, setRemainingSec] = useState(0);
  const [result, setResult] = useState<ExamResult | null>(null);
  const submittedRef = useRef(false);

  // Refs für die Auto-Abgabe bei Zeitablauf (ohne Timer-Reset bei jeder Antwort)
  const answersRef = useRef(answers);
  answersRef.current = answers;
  const questionsRef = useRef(questions);
  questionsRef.current = questions;

  const totalSec = config.durationMin * 60;

  const submit = useCallback(
    (qs: Question[], ans: AnswerMap, usedSec: number) => {
      if (submittedRef.current) return;
      submittedRef.current = true;
      const res = evaluateExam(qs, ans, usedSec);
      // Versuche für die Statistik mitzählen
      for (const q of qs) {
        recordAttempt(q.id, isAnswerCorrect(q, ans[q.id] ?? null));
      }
      saveExamResult(res);
      notifyProgressChanged();
      setResult(res);
      setPhase('result');
    },
    [],
  );

  // Timer: ein stabiles Intervall, das nur vom Lauf-Status abhängt
  useEffect(() => {
    if (phase !== 'running') return;
    const id = window.setInterval(() => {
      setRemainingSec((s) => Math.max(0, s - 1));
    }, 1000);
    return () => window.clearInterval(id);
  }, [phase]);

  // Auto-Abgabe bei Zeitablauf
  useEffect(() => {
    if (phase === 'running' && remainingSec <= 0) {
      submit(questionsRef.current, answersRef.current, totalSec);
    }
  }, [phase, remainingSec, totalSec, submit]);

  // Fokus-Modus: Tab-Leiste während der laufenden Prüfung ausblenden
  useEffect(() => {
    setFocusMode(phase === 'running');
    return () => setFocusMode(false);
  }, [phase]);

  const start = useCallback(() => {
    const qs = buildExam(config);
    setQuestions(qs);
    setAnswers({});
    setMarked(new Set());
    setIndex(0);
    setRemainingSec(config.durationMin * 60);
    setResult(null);
    submittedRef.current = false;
    setPhase('running');
  }, [config]);

  const handleSubmit = useCallback(() => {
    const answeredCount = Object.values(answers).filter((a) => a !== null && a !== '').length;
    const unanswered = questions.length - answeredCount;
    const msg =
      unanswered > 0
        ? `Du hast ${unanswered} von ${questions.length} Fragen noch nicht beantwortet. Jetzt wirklich abgeben?`
        : 'Prüfung jetzt abgeben und auswerten?';
    if (window.confirm(msg)) {
      submit(questions, answers, totalSec - remainingSec);
    }
  }, [answers, questions, totalSec, remainingSec, submit]);

  if (phase === 'setup') {
    return <ExamSetup config={config} setConfig={setConfig} onStart={start} />;
  }

  if (phase === 'result' && result) {
    return <ExamResultView result={result} questions={questions} answers={answers} onRestart={() => setPhase('setup')} />;
  }

  // ---- Running ----
  const current = questions[index];
  const answeredCount = Object.entries(answers).filter(
    ([, v]) => v !== null && v !== '' && v !== undefined,
  ).length;
  const lowTime = remainingSec <= 5 * 60;

  return (
    <div className="mx-auto max-w-3xl space-y-4">
      {/* Timer-Leiste – klebt direkt unter der Kopfzeile (inkl. Safe-Area) */}
      <div className="sticky top-[calc(env(safe-area-inset-top)+56px)] z-10 -mx-4 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div
            className={`rounded-xl px-4 py-2 font-mono text-2xl font-bold tabular-nums ${
              lowTime ? 'animate-pulse bg-rose-100 text-rose-700' : 'bg-slate-100 text-slate-800'
            }`}
            aria-live="polite"
            aria-label={`Verbleibende Zeit ${formatDuration(remainingSec)}`}
          >
            ⏱ {formatDuration(remainingSec)}
          </div>
          <div className="text-sm text-slate-500">
            {answeredCount} / {questions.length} beantwortet
          </div>
          <button onClick={handleSubmit} className="btn-primary">
            Abgeben
          </button>
        </div>
        <ProgressBar
          className="mt-2"
          value={(answeredCount / questions.length) * 100}
          tone={lowTime ? 'rose' : 'brand'}
          label="Beantwortet"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-500">
          Frage {index + 1} / {questions.length}
        </span>
        <button
          onClick={() =>
            setMarked((prev) => {
              const next = new Set(prev);
              if (next.has(current.id)) next.delete(current.id);
              else next.add(current.id);
              return next;
            })
          }
          className={`btn px-3 py-1.5 text-sm ${
            marked.has(current.id)
              ? 'bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-300'
              : 'text-slate-600 ring-1 ring-inset ring-slate-300 hover:bg-slate-50'
          }`}
          aria-pressed={marked.has(current.id)}
        >
          {marked.has(current.id) ? '★ Markiert' : '☆ Markieren'}
        </button>
      </div>

      <div className="card p-5 sm:p-6">
        <QuestionView
          question={current}
          selected={answers[current.id] ?? null}
          onSelect={(a) => setAnswers((prev) => ({ ...prev, [current.id]: a }))}
          revealed={false}
        />
      </div>

      <div className="flex items-center justify-between gap-3">
        <button
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
          className="btn-secondary flex-1 py-3.5 sm:flex-none sm:py-2.5"
        >
          ← Zurück
        </button>
        {index + 1 < questions.length ? (
          <button
            onClick={() => setIndex((i) => i + 1)}
            className="btn-primary flex-1 py-3.5 sm:flex-none sm:py-2.5"
          >
            Weiter →
          </button>
        ) : (
          <button onClick={handleSubmit} className="btn-primary flex-1 py-3.5 sm:flex-none sm:py-2.5">
            Abgeben
          </button>
        )}
      </div>

      {/* Frage-Navigator */}
      <div className="card p-4">
        <p className="mb-2 text-xs font-medium text-slate-500">Übersicht (zum Springen tippen)</p>
        <div className="grid grid-cols-6 gap-1.5 sm:grid-cols-10">
          {questions.map((q, i) => {
            const isAnswered = answers[q.id] !== undefined && answers[q.id] !== null && answers[q.id] !== '';
            const isMarked = marked.has(q.id);
            const isCurrent = i === index;
            return (
              <button
                key={q.id}
                onClick={() => setIndex(i)}
                aria-label={`Zu Frage ${i + 1}${isAnswered ? ', beantwortet' : ''}${isMarked ? ', markiert' : ''}`}
                aria-current={isCurrent}
                className={`relative grid h-10 touch-manipulation place-items-center rounded-md text-sm font-semibold transition-colors ${
                  isCurrent
                    ? 'ring-2 ring-brand-500'
                    : ''
                } ${
                  isAnswered ? 'bg-brand-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {i + 1}
                {isMarked && (
                  <span className="absolute -right-0.5 -top-0.5 text-amber-500" aria-hidden>
                    ★
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExamSetup({
  config,
  setConfig,
  onStart,
}: {
  config: ExamConfig;
  setConfig: (c: ExamConfig) => void;
  onStart: () => void;
}) {
  return (
    <div className="mx-auto max-w-xl space-y-5">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Prüfungssimulation</h1>
        <p className="mt-1 text-sm text-slate-500">
          Fragen aus allen drei Bereichen, zufällig gemischt – ohne Zwischen-Feedback, mit
          Countdown. Trainiere den Zeitdruck der echten Prüfung.
        </p>
      </header>

      <div className="card space-y-5 p-6">
        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-slate-700">Anzahl Fragen</legend>
          <div className="grid grid-cols-3 gap-2">
            {QUESTION_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => setConfig({ ...config, questionCount: n })}
                className={`btn ${config.questionCount === n ? 'btn-primary' : 'btn-secondary'}`}
              >
                {n}
              </button>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="mb-2 text-sm font-semibold text-slate-700">Dauer (Minuten)</legend>
          <div className="grid grid-cols-3 gap-2">
            {DURATION_OPTIONS.map((n) => (
              <button
                key={n}
                onClick={() => setConfig({ ...config, durationMin: n })}
                className={`btn ${config.durationMin === n ? 'btn-primary' : 'btn-secondary'}`}
              >
                {n} Min
              </button>
            ))}
          </div>
        </fieldset>

        <div className="rounded-xl bg-slate-50 p-3 text-sm text-slate-600">
          Das sind ca.{' '}
          <strong>
            {Math.round(((config.durationMin * 60) / config.questionCount) * 10) / 10} Sekunden
          </strong>{' '}
          pro Frage. Standard: 70 Fragen in 30 Minuten.
        </div>

        <button onClick={onStart} className="btn-primary w-full py-3 text-base">
          Simulation starten
        </button>
      </div>
    </div>
  );
}

function ExamResultView({
  result,
  questions,
  answers,
  onRestart,
}: {
  result: ExamResult;
  questions: Question[];
  answers: AnswerMap;
  onRestart: () => void;
}) {
  const scoreTone = result.scorePercent >= 70 ? 'brand' : result.scorePercent >= 50 ? 'amber' : 'rose';
  const topicEntries = useMemo(
    () =>
      Object.entries(result.byTopic)
        .map(([id, v]) => ({ topic: topicById.get(Number(id)), ...v }))
        .sort((a, b) => percent(a.correct, a.total) - percent(b.correct, b.total)),
    [result],
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      <div className="card flex flex-col items-center gap-3 p-8 text-center">
        <div className="text-4xl">{result.scorePercent >= 70 ? '🎉' : '📊'}</div>
        <h1 className="text-3xl font-bold text-slate-900">{result.scorePercent}%</h1>
        <p className="text-sm text-slate-500">
          {result.correctCount} von {result.totalQuestions} richtig · Zeit:{' '}
          {formatDuration(result.durationSec)}
        </p>
        <div className="w-full max-w-sm">
          <ProgressBar value={result.scorePercent} tone={scoreTone} />
        </div>
        <div className="mt-2 flex flex-wrap justify-center gap-3">
          <button onClick={onRestart} className="btn-primary">
            Neue Simulation
          </button>
          <Link to="/statistik" className="btn-secondary">
            Zur Statistik
          </Link>
        </div>
      </div>

      <section className="card p-5">
        <h2 className="mb-3 text-base font-bold text-slate-800">Ergebnis pro Bereich</h2>
        <div className="space-y-3">
          {Object.entries(result.byArea).map(([id, v]) => {
            const area = areaById.get(Number(id));
            const p = percent(v.correct, v.total);
            return (
              <div key={id}>
                <div className="mb-1 flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{area?.title ?? 'Unbekannt'}</span>
                  <span className="text-slate-500">
                    {v.correct}/{v.total} ({p}%)
                  </span>
                </div>
                <ProgressBar value={p} tone={p >= 70 ? 'brand' : p >= 50 ? 'amber' : 'rose'} />
              </div>
            );
          })}
        </div>
      </section>

      <section className="card p-5">
        <h2 className="mb-3 text-base font-bold text-slate-800">Ergebnis pro Thema</h2>
        <ul className="divide-y divide-slate-100 text-sm">
          {topicEntries.map((t) => (
            <li key={t.topic?.id} className="flex items-center justify-between py-2">
              <span className="text-slate-700">{t.topic?.title ?? 'Unbekannt'}</span>
              <span
                className={`font-medium ${
                  percent(t.correct, t.total) >= 70
                    ? 'text-brand-700'
                    : percent(t.correct, t.total) >= 50
                      ? 'text-amber-700'
                      : 'text-rose-700'
                }`}
              >
                {t.correct}/{t.total}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-3 text-base font-bold text-slate-800">Alle Fragen & Lösungen</h2>
        <ul className="space-y-2">
          {questions.map((q, i) => {
            const userAnswer = answers[q.id] ?? null;
            const correct = isAnswerCorrect(q, userAnswer);
            const userText =
              q.type === 'fill'
                ? (userAnswer as string) || '—'
                : userAnswer === null || userAnswer === undefined
                  ? '—'
                  : (q.options?.[Number(userAnswer)] ?? '—');
            return (
              <li key={q.id} className={`card p-4 ${correct ? 'ring-brand-200' : 'ring-rose-200'}`}>
                <div className="flex items-start gap-2">
                  <span className={correct ? 'text-brand-600' : 'text-rose-600'}>{correct ? '✓' : '✗'}</span>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1">
                      <RelevanceBadge relevance={q.relevance} />
                    </div>
                    <p className="text-sm font-medium text-slate-800">
                      {i + 1}. {q.prompt}
                    </p>
                    {q.code && <pre className="code-block mt-2 text-xs">{q.code}</pre>}
                    {!correct && (
                      <p className="mt-1 text-xs text-rose-600">Deine Antwort: {userText}</p>
                    )}
                    <p className="mt-1 text-xs text-slate-600">
                      <span className="font-medium text-brand-700">Richtig:</span> {correctAnswerText(q)}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{q.explanation}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
