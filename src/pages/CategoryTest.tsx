import { useCallback, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { questionsForTopic, topicBySlug } from '../content';
import { relevanceLabel } from '../content/relevance';
import type { Difficulty, Question, QuestionSource, Relevance } from '../types';
import { isAnswerCorrect, percent, shuffle } from '../lib/utils';
import { recordAttempt } from '../lib/progress';
import { notifyProgressChanged } from '../hooks/useProgress';
import QuestionView from '../components/QuestionView';
import ProgressBar from '../components/ProgressBar';
import { EmptyState } from '../components/states';

type Phase = 'setup' | 'running' | 'done';

interface Result {
  question: Question;
  answer: number | string | null;
  correct: boolean;
}

export default function CategoryTest() {
  const { topicSlug } = useParams();
  const topic = topicSlug ? topicBySlug.get(topicSlug) : undefined;
  const allQuestions = useMemo(() => (topic ? questionsForTopic(topic.id) : []), [topic]);

  const [phase, setPhase] = useState<Phase>('setup');
  const [pool, setPool] = useState<Question[]>([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [results, setResults] = useState<Result[]>([]);

  // Filter im Setup
  const [selDifficulty, setSelDifficulty] = useState<Difficulty | 'all'>('all');
  const [selRelevance, setSelRelevance] = useState<Relevance | 'all'>('all');
  const [selSource, setSelSource] = useState<QuestionSource | 'all'>('all');

  const start = useCallback((questions: Question[]) => {
    setPool(shuffle(questions));
    setIndex(0);
    setAnswer(null);
    setRevealed(false);
    setResults([]);
    setPhase('running');
  }, []);

  const filteredQuestions = useMemo(
    () =>
      allQuestions.filter(
        (q) =>
          (selDifficulty === 'all' || q.difficulty === selDifficulty) &&
          (selRelevance === 'all' || q.relevance === selRelevance) &&
          (selSource === 'all' || q.source === selSource),
      ),
    [allQuestions, selDifficulty, selRelevance, selSource],
  );

  const current = pool[index];

  const check = useCallback(() => {
    if (!current || revealed) return;
    const correct = isAnswerCorrect(current, answer);
    recordAttempt(current.id, correct);
    notifyProgressChanged();
    setResults((prev) => [...prev, { question: current, answer, correct }]);
    setRevealed(true);
  }, [current, answer, revealed]);

  const next = useCallback(() => {
    if (index + 1 >= pool.length) {
      setPhase('done');
      return;
    }
    setIndex((i) => i + 1);
    setAnswer(null);
    setRevealed(false);
  }, [index, pool.length]);

  if (!topic) {
    return (
      <EmptyState
        title="Thema nicht gefunden"
        action={
          <Link to="/ueben" className="btn-primary">
            Zur Themenauswahl
          </Link>
        }
      />
    );
  }

  if (allQuestions.length === 0) {
    return (
      <EmptyState
        title={`Keine Fragen für „${topic.title}“`}
        description="Für dieses Thema sind noch keine Übungsfragen hinterlegt."
        action={
          <Link to="/ueben" className="btn-primary">
            Anderes Thema wählen
          </Link>
        }
      />
    );
  }

  // ---- Setup ----
  if (phase === 'setup') {
    const relCounts: Record<Relevance, number> = { 1: 0, 2: 0, 3: 0 };
    for (const q of allQuestions) relCounts[q.relevance] += 1;
    const diffCounts: Record<Difficulty, number> = { 1: 0, 2: 0, 3: 0 };
    for (const q of allQuestions) diffCounts[q.difficulty] += 1;

    const srcCounts = {
      pdf: allQuestions.filter((q) => q.source === 'pdf').length,
      generated: allQuestions.filter((q) => q.source === 'generated').length,
    };
    const srcOptions: { value: QuestionSource | 'all'; label: string }[] = [
      { value: 'all', label: `Alle (${allQuestions.length})` },
      { value: 'pdf', label: `Nur Lernskript (${srcCounts.pdf})` },
      { value: 'generated', label: `Nur zusätzlich (${srcCounts.generated})` },
    ];

    const relOptions: { value: Relevance | 'all'; label: string }[] = [
      { value: 'all', label: 'Alle' },
      { value: 1, label: `${relevanceLabel[1]} (${relCounts[1]})` },
      { value: 2, label: `${relevanceLabel[2]} (${relCounts[2]})` },
      { value: 3, label: `${relevanceLabel[3]} (${relCounts[3]})` },
    ];
    const diffOptions: { value: Difficulty | 'all'; label: string }[] = [
      { value: 'all', label: 'Alle' },
      { value: 1, label: `Leicht (${diffCounts[1]})` },
      { value: 2, label: `Mittel (${diffCounts[2]})` },
      { value: 3, label: `Schwer (${diffCounts[3]})` },
    ];

    return (
      <div className="mx-auto max-w-xl space-y-5">
        <Link to="/ueben" className="btn-ghost px-2 py-1 text-sm">
          ← Themen
        </Link>
        <div className="card space-y-5 p-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900">{topic.title}</h1>
            {topic.description && <p className="mt-1 text-sm text-slate-500">{topic.description}</p>}
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-slate-700">Fragen-Quelle</legend>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              {srcOptions.map((o) => (
                <button
                  key={String(o.value)}
                  onClick={() => setSelSource(o.value)}
                  className={`btn text-xs ${selSource === o.value ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
            <p className="mt-1.5 text-xs text-slate-400">
              „Lernskript“ = Fragen direkt aus den PDF-Dokumenten. „Zusätzlich“ = ergänzend
              generierte Übungsfragen.
            </p>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-slate-700">Prüfungsrelevanz</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {relOptions.map((o) => (
                <button
                  key={String(o.value)}
                  onClick={() => setSelRelevance(o.value)}
                  className={`btn text-xs ${selRelevance === o.value ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-slate-700">Schwierigkeit</legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {diffOptions.map((o) => (
                <button
                  key={String(o.value)}
                  onClick={() => setSelDifficulty(o.value)}
                  className={`btn text-xs ${selDifficulty === o.value ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>

          <button
            onClick={() => start(filteredQuestions)}
            disabled={filteredQuestions.length === 0}
            className="btn-primary w-full py-3 text-base"
          >
            {filteredQuestions.length > 0
              ? `Test starten (${filteredQuestions.length} Fragen)`
              : 'Keine Fragen für diese Auswahl'}
          </button>
        </div>
      </div>
    );
  }

  // ---- Done ----
  if (phase === 'done') {
    const correctCount = results.filter((r) => r.correct).length;
    const wrong = results.filter((r) => !r.correct).map((r) => r.question);
    return (
      <div className="mx-auto max-w-2xl space-y-5">
        <div className="card flex flex-col items-center gap-3 p-8 text-center">
          <div className="text-4xl">{percent(correctCount, results.length) >= 70 ? '🎉' : '💪'}</div>
          <h1 className="text-2xl font-bold text-slate-900">
            {correctCount} / {results.length} richtig
          </h1>
          <p className="text-sm text-slate-500">
            Trefferquote: {percent(correctCount, results.length)}% · Thema „{topic.title}“
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-3">
            <button onClick={() => start(allQuestions)} className="btn-primary">
              Neuer Durchgang
            </button>
            {wrong.length > 0 && (
              <button onClick={() => start(wrong)} className="btn-secondary">
                Nur falsche wiederholen ({wrong.length})
              </button>
            )}
            <Link to="/ueben" className="btn-ghost">
              Anderes Thema
            </Link>
          </div>
        </div>

        <ul className="space-y-2">
          {results.map((r, i) => (
            <li key={i} className={`card p-4 ${r.correct ? 'ring-brand-200' : 'ring-rose-200'}`}>
              <div className="flex items-start gap-2">
                <span className={r.correct ? 'text-brand-600' : 'text-rose-600'}>
                  {r.correct ? '✓' : '✗'}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-800">{r.question.prompt}</p>
                  <p className="mt-1 text-xs text-slate-500">{r.question.explanation}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  // ---- Running ----
  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center justify-between gap-3">
        <Link to="/ueben" className="btn-ghost px-2 py-1 text-sm">
          ← Beenden
        </Link>
        <span className="text-sm font-medium text-slate-500">
          Frage {index + 1} / {pool.length}
        </span>
      </div>
      <ProgressBar value={((index + (revealed ? 1 : 0)) / pool.length) * 100} label="Fortschritt" />

      <div className="card p-5 sm:p-6">
        <QuestionView
          question={current}
          selected={answer}
          onSelect={setAnswer}
          revealed={revealed}
        />
      </div>

      <div className="flex justify-end gap-3">
        {!revealed ? (
          <button
            onClick={check}
            disabled={answer === null || answer === ''}
            className="btn-primary w-full py-3.5 text-base sm:w-auto sm:py-2.5 sm:text-sm"
          >
            Antwort prüfen
          </button>
        ) : (
          <button
            onClick={next}
            className="btn-primary w-full py-3.5 text-base sm:w-auto sm:py-2.5 sm:text-sm"
          >
            {index + 1 >= pool.length ? 'Auswertung' : 'Weiter →'}
          </button>
        )}
      </div>
    </div>
  );
}
