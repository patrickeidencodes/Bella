import type { Attempt, ExamResult, FlashcardReview } from '../types';
import { supabase } from './supabase';

/**
 * Fortschritts-Speicher. Kanonisch ist der localStorage (kein Login nötig).
 * Ist Supabase konfiguriert, werden Versuche & Karteikarten-Bewertungen
 * zusätzlich best-effort dorthin gespiegelt (Auswertung läuft trotzdem lokal,
 * damit die App offline voll funktioniert).
 */

const KEYS = {
  attempts: 'etvi.attempts.v1',
  reviews: 'etvi.flashcardReviews.v1',
  exams: 'etvi.examResults.v1',
} as const;

function read<T>(key: string): T[] {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T[]) : [];
  } catch {
    return [];
  }
}

function write<T>(key: string, items: T[]): void {
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    /* Speicher voll oder nicht verfügbar – ignorieren */
  }
}

// ---- Versuche (Fragen) ----

export function getAttempts(): Attempt[] {
  return read<Attempt>(KEYS.attempts);
}

export function recordAttempt(questionId: number, isCorrect: boolean): Attempt {
  const attempt: Attempt = {
    questionId,
    isCorrect,
    answeredAt: new Date().toISOString(),
  };
  const all = getAttempts();
  all.push(attempt);
  write(KEYS.attempts, all);

  if (supabase) {
    void supabase.from('attempts').insert({ question_id: questionId, is_correct: isCorrect });
  }
  return attempt;
}

// ---- Karteikarten-Bewertungen ----

export function getFlashcardReviews(): FlashcardReview[] {
  return read<FlashcardReview>(KEYS.reviews);
}

export function recordFlashcardReview(flashcardId: number, known: boolean): FlashcardReview {
  const review: FlashcardReview = {
    flashcardId,
    known,
    reviewedAt: new Date().toISOString(),
  };
  const all = getFlashcardReviews();
  all.push(review);
  write(KEYS.reviews, all);

  if (supabase) {
    void supabase.from('flashcard_reviews').insert({ flashcard_id: flashcardId, known });
  }
  return review;
}

/** Letzter bekannter Stand pro Karteikarte (known? true/false). */
export function getLatestReviewMap(): Map<number, boolean> {
  const map = new Map<number, boolean>();
  for (const r of getFlashcardReviews()) {
    map.set(r.flashcardId, r.known); // chronologisch → letzter gewinnt
  }
  return map;
}

// ---- Prüfungsergebnisse ----

export function getExamResults(): ExamResult[] {
  return read<ExamResult>(KEYS.exams).sort((a, b) => b.date.localeCompare(a.date));
}

export function saveExamResult(result: ExamResult): void {
  const all = read<ExamResult>(KEYS.exams);
  all.push(result);
  write(KEYS.exams, all);
}

export function clearAllProgress(): void {
  write(KEYS.attempts, []);
  write(KEYS.reviews, []);
  write(KEYS.exams, []);
}
