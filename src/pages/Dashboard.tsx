import { Link } from 'react-router-dom';
import { content } from '../content';
import { areaStyle } from '../lib/areaStyle';
import { formatDuration } from '../lib/utils';
import ProgressBar from '../components/ProgressBar';
import { useProgress } from '../hooks/useProgress';

export default function Dashboard() {
  const { stats, examResults } = useProgress();
  const recentExams = examResults.slice(0, 5);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-800 p-6 text-white sm:p-8">
        <h1 className="text-2xl font-bold sm:text-3xl">Vorbereitung Einstellungstest</h1>
        <p className="mt-2 max-w-2xl text-brand-50">
          Verwaltungsinformatik (Saarland) – drei gleich gewichtete Bereiche: Deutsch,
          Allgemeinbildung und Informatik. <strong>Lernen</strong> mit Karteikarten,{' '}
          <strong>üben</strong> mit Kategorie-Tests und unter Zeitdruck{' '}
          <strong>prüfen</strong> mit der Simulation.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link to="/pruefung" className="btn bg-white text-brand-800 hover:bg-brand-50">
            Prüfungssimulation starten
          </Link>
          <Link to="/ueben" className="btn bg-brand-500/40 text-white ring-1 ring-inset ring-white/40 hover:bg-brand-500/60">
            Kategorie üben
          </Link>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-bold text-slate-800">Die drei Bereiche</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {content.areas.map((area) => {
            const style = areaStyle(area.slug);
            const areaStat = stats.byArea.find((a) => a.areaId === area.id);
            const accuracy = areaStat?.accuracy ?? 0;
            const answered = areaStat?.answered ?? 0;
            const topicCount = content.topics.filter((t) => t.areaId === area.id).length;
            return (
              <div key={area.id} className={`card flex flex-col p-5 ring-1 ${style.ring}`}>
                <div className={`mb-2 text-3xl`}>{style.emoji}</div>
                <h3 className="text-base font-bold text-slate-900">{area.title}</h3>
                <p className="mt-0.5 text-xs text-slate-500">
                  {topicCount} Themen · {areaStat?.totalQuestions ?? 0} Fragen
                </p>

                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>Trefferquote</span>
                    <span>{answered > 0 ? `${accuracy}%` : '–'}</span>
                  </div>
                  <ProgressBar value={accuracy} tone={style.bar} label={`Trefferquote ${area.title}`} />
                  <p className="mt-1 text-xs text-slate-400">{answered} Fragen beantwortet</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Link to={`/lernen`} className="btn-secondary px-3 py-1.5 text-xs">
                    Karteikarten
                  </Link>
                  <Link to={`/ueben`} className="btn-primary px-3 py-1.5 text-xs">
                    Üben
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <ActionCard to="/lernen" emoji="🗂️" title="Karteikarten lernen" text="Theorie mit Vorder-/Rückseite und Selbsteinschätzung." />
        <ActionCard to="/ueben" emoji="✅" title="Kategorie üben" text="Viele Aufgaben pro Thema mit sofortigem Feedback und Erklärung." />
        <ActionCard to="/pruefung" emoji="⏱️" title="Prüfung simulieren" text="70 Fragen in 30 Minuten – echter Zeitdruck, Auswertung am Ende." />
      </section>

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-800">Letzte Simulationen</h2>
          <Link to="/statistik" className="text-sm font-medium text-brand-700 hover:underline">
            Alle Statistiken →
          </Link>
        </div>
        {recentExams.length === 0 ? (
          <div className="card px-5 py-8 text-center text-sm text-slate-500">
            Noch keine Prüfungssimulation absolviert.{' '}
            <Link to="/pruefung" className="font-medium text-brand-700 hover:underline">
              Jetzt starten
            </Link>
          </div>
        ) : (
          <ul className="card divide-y divide-slate-100">
            {recentExams.map((exam) => (
              <li key={exam.id} className="flex items-center justify-between gap-3 px-5 py-3">
                <div>
                  <p className="font-semibold text-slate-800">{exam.scorePercent}%</p>
                  <p className="text-xs text-slate-500">
                    {new Date(exam.date).toLocaleString('de-DE', {
                      dateStyle: 'medium',
                      timeStyle: 'short',
                    })}
                  </p>
                </div>
                <div className="text-right text-xs text-slate-500">
                  <p>
                    {exam.correctCount} / {exam.totalQuestions} richtig
                  </p>
                  <p>Zeit: {formatDuration(exam.durationSec)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function ActionCard({ to, emoji, title, text }: { to: string; emoji: string; title: string; text: string }) {
  return (
    <Link to={to} className="card group flex flex-col gap-1 p-5 transition-shadow hover:shadow-md">
      <span className="text-2xl">{emoji}</span>
      <span className="text-base font-bold text-slate-900 group-hover:text-brand-700">{title}</span>
      <span className="text-sm text-slate-500">{text}</span>
    </Link>
  );
}
