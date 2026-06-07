import { useCallback, useEffect, useMemo, useRef, useState, type TouchEvent } from 'react';
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { flashcardsForTopic, topicBySlug } from '../content';
import type { Flashcard, QuestionSource, Topic } from '../types';
import { recordFlashcardReview } from '../lib/progress';
import { notifyProgressChanged } from '../hooks/useProgress';
import { shuffle } from '../lib/utils';
import ProgressBar from '../components/ProgressBar';
import { EmptyState } from '../components/states';

export default function FlashcardSession() {
  const { topicSlug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const slugs = useMemo(() => {
    const param = searchParams.get('topics');
    return param ? param.split(',').filter(Boolean) : topicSlug ? [topicSlug] : [];
  }, [searchParams, topicSlug]);

  const topics = useMemo<Topic[]>(
    () => slugs.map((s) => topicBySlug.get(s)).filter((t): t is Topic => Boolean(t)),
    [slugs],
  );
  const title = topics.length === 1 ? topics[0].title : `${topics.length} Themen kombiniert`;
  const slugParam = topics.map((t) => t.slug).join(',');

  const allCards = useMemo<Flashcard[]>(
    () => topics.flatMap((t) => flashcardsForTopic(t.id)),
    [topics],
  );

  const [phase, setPhase] = useState<'setup' | 'learning'>('setup');
  const [selSource, setSelSource] = useState<QuestionSource | 'all'>('all');
  const [deck, setDeck] = useState<Flashcard[]>([]);
  const [queue, setQueue] = useState<Flashcard[]>([]);
  const [mastered, setMastered] = useState<Set<number>>(new Set());
  const [flipped, setFlipped] = useState(false);
  const [sessionKey, setSessionKey] = useState(0);

  const totalUnique = deck.length;
  const current = queue[0];
  const finished = phase === 'learning' && totalUnique > 0 && queue.length === 0;

  const start = useCallback(
    (source: QuestionSource | 'all') => {
      const filtered = source === 'all' ? allCards : allCards.filter((c) => c.source === source);
      setDeck(filtered);
      setQueue(shuffle(filtered));
      setMastered(new Set());
      setFlipped(false);
      setSessionKey((k) => k + 1);
      setPhase('learning');
    },
    [allCards],
  );

  const restart = useCallback(() => {
    setQueue(shuffle(deck));
    setMastered(new Set());
    setFlipped(false);
    setSessionKey((k) => k + 1);
  }, [deck]);

  const handleAssess = useCallback(
    (known: boolean) => {
      if (!current) return;
      recordFlashcardReview(current.id, known);
      notifyProgressChanged();

      setQueue((prev) => {
        const [, ...rest] = prev;
        if (known) return rest;
        // Nicht gewusst: Karte erscheint einige Positionen später erneut
        const insertAt = Math.min(3, rest.length);
        const next = rest.slice();
        next.splice(insertAt, 0, current);
        return next;
      });
      setMastered((prev) => {
        const next = new Set(prev);
        if (known) next.add(current.id);
        else next.delete(current.id);
        return next;
      });
      setFlipped(false);
    },
    [current],
  );

  // Tastaturbedienung
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (finished || !current) return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setFlipped((f) => !f);
      } else if (flipped && (e.key === 'ArrowRight' || e.key === '2')) {
        handleAssess(true);
      } else if (flipped && (e.key === 'ArrowLeft' || e.key === '1')) {
        handleAssess(false);
      }
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flipped, finished, current, handleAssess]);

  if (topics.length === 0) {
    return (
      <EmptyState
        title="Kein Thema ausgewählt"
        description="Bitte wähle ein oder mehrere Themen aus der Übersicht."
        action={
          <Link to="/lernen" className="btn-primary">
            Zur Themenauswahl
          </Link>
        }
      />
    );
  }

  if (allCards.length === 0) {
    return (
      <EmptyState
        title={`Keine Karteikarten für „${title}“`}
        description="Für die Auswahl sind keine Karteikarten hinterlegt."
        action={
          <Link to="/lernen" className="btn-primary">
            Andere Themen wählen
          </Link>
        }
      />
    );
  }

  // ---- Setup: Quelle wählen ----
  if (phase === 'setup') {
    const srcCounts = {
      pdf: allCards.filter((c) => c.source === 'pdf').length,
      generated: allCards.filter((c) => c.source === 'generated').length,
    };
    const srcOptions: { value: QuestionSource | 'all'; label: string }[] = [
      { value: 'all', label: `Alle (${allCards.length})` },
      { value: 'pdf', label: `Nur Lernskript (${srcCounts.pdf})` },
      { value: 'generated', label: `Nur zusätzlich (${srcCounts.generated})` },
    ];
    const selCount = selSource === 'all' ? allCards.length : srcCounts[selSource];
    return (
      <div className="mx-auto max-w-xl space-y-5">
        <Link to="/lernen" className="btn-ghost px-2 py-1 text-sm">
          ← Themen
        </Link>
        <div className="card space-y-5 p-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900">{title}</h1>
            {topics.length === 1 && topics[0].description && (
              <p className="mt-1 text-sm text-slate-500">{topics[0].description}</p>
            )}
            {topics.length > 1 && (
              <p className="mt-1 text-sm text-slate-500">{topics.map((t) => t.title).join(' · ')}</p>
            )}
          </div>

          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-slate-700">Karten-Quelle</legend>
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
              „Lernskript“ = Karten direkt aus den PDF-Dokumenten. „Zusätzlich“ = ergänzend
              generierte Karten.
            </p>
          </fieldset>

          <button
            onClick={() => start(selSource)}
            disabled={selCount === 0}
            className="btn-primary w-full py-3 text-base"
          >
            {selCount > 0 ? `Lernen starten (${selCount} Karten)` : 'Keine Karten für diese Auswahl'}
          </button>
        </div>
      </div>
    );
  }

  const masteredCount = mastered.size;

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center justify-between">
        <button onClick={() => setPhase('setup')} className="btn-ghost px-2 py-1 text-sm">
          ← Auswahl
        </button>
        <h1 className="truncate px-2 text-base font-bold text-slate-800">{title}</h1>
        <button onClick={restart} className="btn-ghost px-2 py-1 text-sm">
          Neu mischen
        </button>
      </div>

      <div>
        <div className="mb-1 flex justify-between text-xs font-medium text-slate-500">
          <span>
            Gelernt: {masteredCount} / {totalUnique}
          </span>
          <span>Verbleibend im Stapel: {queue.length}</span>
        </div>
        <ProgressBar value={(masteredCount / totalUnique) * 100} label="Lernfortschritt" />
      </div>

      {finished ? (
        <div className="card flex flex-col items-center gap-4 px-6 py-12 text-center">
          <div className="text-4xl">🎉</div>
          <h2 className="text-xl font-bold text-slate-800">Stapel geschafft!</h2>
          <p className="text-sm text-slate-500">
            Du hast alle {totalUnique} Karten zu „{title}“ als gewusst markiert.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button onClick={restart} className="btn-primary">
              Nochmal lernen
            </button>
            <button
              onClick={() => navigate(`/ueben/session?topics=${slugParam}`)}
              className="btn-secondary"
            >
              Jetzt dazu üben
            </button>
          </div>
        </div>
      ) : (
        current && (
          <FlashcardView
            key={`${sessionKey}-${current.id}`}
            card={current}
            flipped={flipped}
            onFlip={() => setFlipped((f) => !f)}
            onKnown={() => handleAssess(true)}
            onUnknown={() => handleAssess(false)}
          />
        )
      )}
    </div>
  );
}

function FlashcardView({
  card,
  flipped,
  onFlip,
  onKnown,
  onUnknown,
}: {
  card: Flashcard;
  flipped: boolean;
  onFlip: () => void;
  onKnown: () => void;
  onUnknown: () => void;
}) {
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);
  const moved = useRef(false);
  const [dragX, setDragX] = useState(0);
  const SWIPE_THRESHOLD = 70;

  function onTouchStart(e: TouchEvent) {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
    moved.current = false;
  }
  function onTouchMove(e: TouchEvent) {
    if (startX.current == null || startY.current == null) return;
    const dx = e.touches[0].clientX - startX.current;
    const dy = e.touches[0].clientY - startY.current;
    // nur horizontale Wischer und nur, wenn die Antwort sichtbar ist
    if (flipped && Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 10) {
      moved.current = true;
      setDragX(dx);
    }
  }
  function onTouchEnd() {
    if (flipped && Math.abs(dragX) > SWIPE_THRESHOLD) {
      const known = dragX > 0;
      setDragX(0);
      startX.current = null;
      if (known) onKnown();
      else onUnknown();
      return;
    }
    setDragX(0);
    startX.current = null;
  }

  function handleClick() {
    // Klick nach einem Wisch unterdrücken
    if (moved.current) {
      moved.current = false;
      return;
    }
    onFlip();
  }

  const dragStyle =
    dragX !== 0
      ? { transform: `translateX(${dragX}px) rotate(${dragX / 30}deg)`, transition: 'none' }
      : undefined;
  const swipeHint =
    dragX > 20 ? 'known' : dragX < -20 ? 'unknown' : null;

  return (
    <div className="space-y-4">
      <div className="relative">
        {/* Wisch-Hinweise links/rechts */}
        {flipped && (
          <>
            <span
              className={`pointer-events-none absolute left-3 top-3 rounded-lg px-2 py-1 text-xs font-bold transition-opacity ${
                swipeHint === 'unknown' ? 'bg-rose-100 text-rose-700 opacity-100' : 'opacity-0'
              }`}
            >
              ✗ Nicht gewusst
            </span>
            <span
              className={`pointer-events-none absolute right-3 top-3 rounded-lg px-2 py-1 text-xs font-bold transition-opacity ${
                swipeHint === 'known' ? 'bg-brand-100 text-brand-700 opacity-100' : 'opacity-0'
              }`}
            >
              ✓ Gewusst
            </span>
          </>
        )}
        <button
          type="button"
          onClick={handleClick}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          aria-label={flipped ? 'Karte zeigt Rückseite, tippen zum Umdrehen' : 'Karte umdrehen'}
          style={dragStyle}
          className="card flex min-h-[17rem] w-full touch-pan-y flex-col items-center justify-center gap-3 px-6 py-10 text-center transition-transform duration-200 hover:bg-slate-50 sm:min-h-[16rem]"
        >
          <span className="rounded-full bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-400 ring-1 ring-inset ring-slate-200">
            {card.source === 'pdf' ? '📄 Lernskript' : '✨ Zusatz'}
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">
            {flipped ? 'Rückseite – Antwort' : 'Vorderseite – Frage'}
          </span>
          <span className="text-xl font-medium leading-relaxed text-slate-900">
            {flipped ? card.back : card.front}
          </span>
          {!flipped && (
            <span className="mt-2 text-xs text-slate-400">Tippen zum Umdrehen</span>
          )}
        </button>
      </div>

      {flipped ? (
        <>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onUnknown}
              className="btn bg-rose-50 py-3.5 text-rose-700 ring-1 ring-inset ring-rose-200 hover:bg-rose-100 active:bg-rose-200"
            >
              ✗ Nicht gewusst
            </button>
            <button onClick={onKnown} className="btn-primary py-3.5">
              ✓ Gewusst
            </button>
          </div>
          <p className="text-center text-xs text-slate-400">
            Tipp: nach rechts wischen = gewusst, nach links = nicht gewusst
          </p>
        </>
      ) : (
        <button onClick={onFlip} className="btn-secondary w-full py-3.5">
          Antwort zeigen
        </button>
      )}
    </div>
  );
}
