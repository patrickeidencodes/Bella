import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { content, flashcardsForTopic, questionsForTopic, topicsForArea } from '../content';
import { relevanceForTopic } from '../content/relevance';
import { areaStyle } from '../lib/areaStyle';
import RelevanceBadge from './RelevanceBadge';

interface TopicPickerProps {
  /** Basis-Pfad der Session, z. B. "/ueben" → "/ueben/session?topics=..." */
  basePath: string;
  countKind: 'flashcards' | 'questions';
}

export default function TopicPicker({ basePath, countKind }: TopicPickerProps) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const countFor = (topicId: number) =>
    countKind === 'flashcards'
      ? flashcardsForTopic(topicId).length
      : questionsForTopic(topicId).length;

  const allTopics = useMemo(() => content.topics.filter((t) => countFor(t.id) > 0), [countKind]);

  function toggle(slug: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function setMany(slugs: string[], on: boolean) {
    setSelected((prev) => {
      const next = new Set(prev);
      for (const s of slugs) {
        if (on) next.add(s);
        else next.delete(s);
      }
      return next;
    });
  }

  const selectedTopics = allTopics.filter((t) => selected.has(t.slug));
  const totalItems = selectedTopics.reduce((sum, t) => sum + countFor(t.id), 0);
  const itemWord = countKind === 'flashcards' ? 'Karten' : 'Fragen';

  function start() {
    if (selected.size === 0) return;
    const slugs = allTopics.filter((t) => selected.has(t.slug)).map((t) => t.slug);
    navigate(`${basePath}/session?topics=${slugs.join(',')}`);
  }

  return (
    <div className="space-y-6">
      {/* Aktionsleiste – klebt unter der Kopfzeile */}
      <div className="sticky top-[calc(env(safe-area-inset-top)+56px)] z-10 -mx-4 border-b border-slate-200 bg-slate-50/95 px-4 py-3 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <div className="min-w-0 flex-1 text-sm">
            {selected.size === 0 ? (
              <span className="text-slate-500">Themen auswählen (eines oder mehrere)…</span>
            ) : (
              <span className="font-medium text-slate-700">
                {selected.size} {selected.size === 1 ? 'Thema' : 'Themen'} · {totalItems} {itemWord}
              </span>
            )}
          </div>
          <button
            onClick={() => setSelected(new Set(allTopics.map((t) => t.slug)))}
            className="btn-secondary px-3 py-2 text-xs"
          >
            Alle
          </button>
          <button
            onClick={() => setSelected(new Set())}
            disabled={selected.size === 0}
            className="btn-secondary px-3 py-2 text-xs"
          >
            Keine
          </button>
          <button onClick={start} disabled={selected.size === 0} className="btn-primary px-4 py-2 text-sm">
            {countKind === 'flashcards' ? 'Lernen' : 'Üben'} starten
          </button>
        </div>
      </div>

      {content.areas.map((area) => {
        const style = areaStyle(area.slug);
        const topics = topicsForArea(area.id).filter((t) => countFor(t.id) > 0);
        const areaSlugs = topics.map((t) => t.slug);
        const allOn = areaSlugs.length > 0 && areaSlugs.every((s) => selected.has(s));
        return (
          <section key={area.id}>
            <div className="mb-3 flex items-center justify-between gap-2">
              <h2 className={`flex items-center gap-2 text-lg font-bold ${style.accent}`}>
                <span>{style.emoji}</span> {area.title}
              </h2>
              <button
                onClick={() => setMany(areaSlugs, !allOn)}
                className="btn-ghost px-2 py-1 text-xs"
              >
                {allOn ? 'Bereich abwählen' : 'Bereich wählen'}
              </button>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => {
                const isSel = selected.has(topic.slug);
                const count = countFor(topic.id);
                return (
                  <button
                    key={topic.id}
                    type="button"
                    onClick={() => toggle(topic.slug)}
                    aria-pressed={isSel}
                    className={`card relative p-4 text-left transition-all active:scale-[0.99] ${
                      isSel ? 'ring-2 ring-brand-500' : `hover:-translate-y-0.5 hover:shadow-md ${style.ring}`
                    }`}
                  >
                    <h3 className="pr-7 font-semibold text-slate-900">{topic.title}</h3>
                    {topic.description && (
                      <p className="mt-1 line-clamp-2 text-xs text-slate-500">{topic.description}</p>
                    )}
                    <div className="mt-2 flex items-center justify-between gap-2">
                      <RelevanceBadge relevance={relevanceForTopic(topic.slug)} />
                      <span className="whitespace-nowrap text-xs font-medium text-slate-500">
                        {count} {countKind === 'flashcards' ? 'Karten' : 'Fragen'}
                      </span>
                    </div>
                    {/* Auswahl-Häkchen */}
                    <span
                      className={`absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-md border text-sm ${
                        isSel ? 'border-brand-600 bg-brand-600 text-white' : 'border-slate-300 bg-white text-transparent'
                      }`}
                      aria-hidden
                    >
                      ✓
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
