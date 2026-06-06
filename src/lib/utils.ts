import type { Question } from '../types';

/** Fisher-Yates Shuffle (liefert eine neue Liste). */
export function shuffle<T>(input: readonly T[]): T[] {
  const arr = input.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Eindeutige ID für Client-seitige Objekte (z. B. Prüfungsergebnisse). */
export function uid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return `id-${Date.now()}-${Math.floor(Math.random() * 1e9)}`;
}

/** Sekunden → "MM:SS". */
export function formatDuration(totalSeconds: number): string {
  const s = Math.max(0, Math.floor(totalSeconds));
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}

function normalizeText(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .replace(/[.,;:!?]+$/g, '');
}

/**
 * Prüft eine Antwort gegen die richtige Lösung.
 * - mc/truefalse/order_output(mc)/find_error(mc): answer = ausgewählter Index (number)
 * - fill: answer = eingegebener Text (string); akzeptiert mehrere Schreibweisen
 */
export function isAnswerCorrect(question: Question, answer: number | string | null): boolean {
  if (answer === null || answer === undefined) return false;

  if (question.type === 'fill') {
    const accepted = (question.correct as string[]).map(normalizeText);
    return accepted.includes(normalizeText(String(answer)));
  }

  // Index-basierte Typen
  const correctIndices = question.correct as number[];
  return correctIndices.includes(Number(answer));
}

/** Liefert die richtige Lösung als lesbaren Text (für Auswertungen). */
export function correctAnswerText(question: Question): string {
  if (question.type === 'fill') {
    return (question.correct as string[]).join(' / ');
  }
  const indices = question.correct as number[];
  const opts = question.options ?? [];
  return indices.map((i) => opts[i]).filter(Boolean).join(', ');
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function percent(correct: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((correct / total) * 100);
}
