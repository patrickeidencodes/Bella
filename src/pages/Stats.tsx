import { Link } from 'react-router-dom';
import { areaById, content } from '../content';
import { areaStyle } from '../lib/areaStyle';
import { weakestTopics } from '../lib/stats';
import { formatDuration } from '../lib/utils';
import { clearAllProgress } from '../lib/progress';
import ProgressBar from '../components/ProgressBar';
import { useProgress, notifyProgressChanged } from '../hooks/useProgress';

export default function Stats() {
  const { stats, examResults, attemptsCount } = useProgress();
  const weak = weakestTopics(stats, 5);

  function reset() {
    if (window.confirm('Wirklich den gesamten Fortschritt löschen? Das kann nicht rückgängig gemacht werden.')) {
      clearAllProgress();
      notifyProgressChanged();
    }
  }

  if (attemptsCount === 0 && examResults.length === 0) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-bold text-slate-900">Statistik</h1>
        <div className="card px-6 py-12 text-center">
          <p className="text-sm text-slate-500">
            Noch keine Daten. Übe ein paar Fragen oder starte eine Prüfungssimulation.
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link to="/ueben" className="btn-primary">
              Üben
            </Link>
            <Link to="/pruefung" className="btn-secondary">
              Prüfung
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-slate-900">Statistik & Fortschritt</h1>
        <button onClick={reset} className="btn-ghost text-sm text-rose-600 hover:bg-rose-50">
          Fortschritt zurücksetzen
        </button>
      </div>

      {/* Pro Bereich */}
      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-800">Pro Bereich</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {stats.byArea.map((a) => {
            const style = areaStyle(areaById.get(a.areaId)?.slug ?? '');
            return (
              <div key={a.areaId} className="card p-5">
                <div className="mb-1 text-2xl">{style.emoji}</div>
                <h3 className="font-bold text-slate-900">{a.areaTitle}</h3>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {a.answered > 0 ? `${a.accuracy}%` : '–'}
                </p>
                <p className="text-xs text-slate-500">{a.answered} Antworten</p>
                <ProgressBar className="mt-2" value={a.accuracy} tone={style.bar} />
              </div>
            );
          })}
        </div>
      </section>

      {/* Schwächste Themen */}
      {weak.length > 0 && (
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-800">Schwächste Themen – hier üben</h2>
          <ul className="card divide-y divide-slate-100">
            {weak.map((t) => (
              <li key={t.topicId} className="flex items-center justify-between gap-3 px-5 py-3">
                <div className="min-w-0">
                  <p className="truncate font-medium text-slate-800">{t.topicTitle}</p>
                  <p className="text-xs text-slate-500">
                    {t.correct}/{t.answered} richtig · {t.accuracy}%
                  </p>
                </div>
                <TopicPracticeLink topicId={t.topicId} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Pro Thema (vollständig) */}
      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-800">Alle Themen</h2>
        <div className="card divide-y divide-slate-100">
          {stats.byTopic
            .filter((t) => t.answered > 0)
            .sort((a, b) => a.accuracy - b.accuracy)
            .map((t) => (
              <div key={t.topicId} className="flex items-center gap-3 px-5 py-2.5">
                <span className="w-40 flex-shrink-0 truncate text-sm text-slate-700" title={t.topicTitle}>
                  {t.topicTitle}
                </span>
                <div className="flex-1">
                  <ProgressBar
                    value={t.accuracy}
                    tone={t.accuracy >= 70 ? 'brand' : t.accuracy >= 50 ? 'amber' : 'rose'}
                  />
                </div>
                <span className="w-16 flex-shrink-0 text-right text-xs text-slate-500">
                  {t.correct}/{t.answered}
                </span>
              </div>
            ))}
        </div>
      </section>

      {/* Simulationsverlauf */}
      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-800">Verlauf der Simulationen</h2>
        {examResults.length === 0 ? (
          <div className="card px-5 py-8 text-center text-sm text-slate-500">
            Noch keine Simulation absolviert.
          </div>
        ) : (
          <>
            <div className="card mb-3 p-5">
              <ExamSparkline results={examResults} />
            </div>
            <ul className="card divide-y divide-slate-100">
              {examResults.map((e) => (
                <li key={e.id} className="flex items-center justify-between gap-3 px-5 py-3">
                  <div>
                    <p className="font-semibold text-slate-800">{e.scorePercent}%</p>
                    <p className="text-xs text-slate-500">
                      {new Date(e.date).toLocaleString('de-DE', { dateStyle: 'medium', timeStyle: 'short' })}
                    </p>
                  </div>
                  <div className="text-right text-xs text-slate-500">
                    <p>
                      {e.correctCount}/{e.totalQuestions} · {formatDuration(e.durationSec)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

const topicSlugCache = new Map<number, string>(content.topics.map((t) => [t.id, t.slug]));

function TopicPracticeLink({ topicId }: { topicId: number }) {
  const slug = topicSlugCache.get(topicId);
  if (!slug) return null;
  return (
    <Link to={`/ueben/${slug}`} className="btn-secondary px-3 py-1.5 text-xs">
      Üben
    </Link>
  );
}

function ExamSparkline({ results }: { results: { scorePercent: number; date: string }[] }) {
  // älteste → neueste
  const series = results.slice().reverse();
  const max = 100;
  const width = 100;
  const height = 32;
  const points = series.map((r, i) => {
    const x = series.length === 1 ? width / 2 : (i / (series.length - 1)) * width;
    const y = height - (r.scorePercent / max) * height;
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });
  return (
    <div className="flex items-center gap-4">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-16 flex-1" preserveAspectRatio="none" aria-hidden>
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke="#129058"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
        />
        {series.map((r, i) => {
          const x = series.length === 1 ? width / 2 : (i / (series.length - 1)) * width;
          const y = height - (r.scorePercent / max) * height;
          return <circle key={i} cx={x} cy={y} r="1.5" fill="#129058" vectorEffect="non-scaling-stroke" />;
        })}
      </svg>
      <div className="text-right text-xs text-slate-500">
        <p className="text-lg font-bold text-slate-800">{series[series.length - 1]?.scorePercent}%</p>
        <p>zuletzt</p>
      </div>
    </div>
  );
}
