import { Link } from 'react-router-dom';
import { content, flashcardsForTopic, questionsForTopic, topicsForArea } from '../content';
import { relevanceForTopic } from '../content/relevance';
import { areaStyle } from '../lib/areaStyle';
import RelevanceBadge from './RelevanceBadge';

interface TopicPickerProps {
  /** Basis-Pfad, an den der Topic-Slug angehängt wird, z. B. "/ueben" → "/ueben/synonyme" */
  basePath: string;
  /** Welche Zahl pro Thema angezeigt wird */
  countKind: 'flashcards' | 'questions';
}

export default function TopicPicker({ basePath, countKind }: TopicPickerProps) {
  return (
    <div className="space-y-8">
      {content.areas.map((area) => {
        const style = areaStyle(area.slug);
        const topics = topicsForArea(area.id);
        return (
          <section key={area.id}>
            <h2 className={`mb-3 flex items-center gap-2 text-lg font-bold ${style.accent}`}>
              <span>{style.emoji}</span> {area.title}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => {
                const count =
                  countKind === 'flashcards'
                    ? flashcardsForTopic(topic.id).length
                    : questionsForTopic(topic.id).length;
                const disabled = count === 0;
                const inner = (
                  <>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-slate-900">{topic.title}</h3>
                      <span className="whitespace-nowrap rounded-full bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-500">
                        {count} {countKind === 'flashcards' ? 'Karten' : 'Fragen'}
                      </span>
                    </div>
                    {topic.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-slate-500">{topic.description}</p>
                    )}
                    <div className="mt-2">
                      <RelevanceBadge relevance={relevanceForTopic(topic.slug)} />
                    </div>
                  </>
                );
                return disabled ? (
                  <div
                    key={topic.id}
                    className="card cursor-not-allowed p-4 opacity-50"
                    aria-disabled
                    title="Noch keine Inhalte"
                  >
                    {inner}
                  </div>
                ) : (
                  <Link
                    key={topic.id}
                    to={`${basePath}/${topic.slug}`}
                    className={`card p-4 transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-2 ${style.ring}`}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
