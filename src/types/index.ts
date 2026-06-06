export type AreaSlug = 'deutsch' | 'allgemeinbildung' | 'informatik';

export interface Area {
  id: number;
  slug: AreaSlug;
  title: string;
  sortOrder: number;
}

export interface Topic {
  id: number;
  areaId: number;
  slug: string;
  title: string;
  description?: string;
  sortOrder: number;
}

export interface Flashcard {
  id: number;
  topicId: number;
  front: string; // Begriff / Frage
  back: string; // Erklärung / Antwort
  /** Herkunft: 'pdf' = aus dem Lernskript, 'generated' = zusätzlich generiert */
  source: QuestionSource;
}

export type QuestionType = 'mc' | 'truefalse' | 'fill' | 'order_output' | 'find_error';

export type Difficulty = 1 | 2 | 3;

/** Relevanz für den Einstellungstest: 1 = wichtig, 2 = normal, 3 = weniger relevant. */
export type Relevance = 1 | 2 | 3;

/** Herkunft einer Frage: direkt aus dem Lernskript (PDF) oder zusätzlich generiert. */
export type QuestionSource = 'pdf' | 'generated';

export interface Question {
  id: number;
  topicId: number;
  type: QuestionType;
  prompt: string;
  code?: string;
  /** Antwortoptionen bei mc/truefalse/order_output(mc)/find_error(mc) */
  options?: string[];
  /** Indizes der richtigen Optionen ODER akzeptierte Texte (bei fill) */
  correct: number[] | string[];
  explanation: string;
  difficulty: Difficulty;
  /** Einschätzung der Prüfungsrelevanz (1 wichtig, 2 normal, 3 weniger relevant) */
  relevance: Relevance;
  /** Herkunft: 'pdf' = aus dem Lernskript, 'generated' = zusätzlich generiert */
  source: QuestionSource;
}

/** Beantwortungs-Versuch (Fortschritt) */
export interface Attempt {
  id?: number;
  userId?: string | null;
  questionId: number;
  isCorrect: boolean;
  answeredAt: string; // ISO
}

/** Karteikarten-Lernstand */
export interface FlashcardReview {
  id?: number;
  userId?: string | null;
  flashcardId: number;
  known: boolean;
  reviewedAt: string; // ISO
}

/** Gespeichertes Ergebnis einer Prüfungssimulation */
export interface ExamResult {
  id: string;
  date: string; // ISO
  durationSec: number; // verbrauchte Zeit
  totalQuestions: number;
  correctCount: number;
  scorePercent: number;
  /** Aufschlüsselung pro Bereich: areaId -> {correct,total} */
  byArea: Record<number, { correct: number; total: number }>;
  /** Aufschlüsselung pro Thema: topicId -> {correct,total} */
  byTopic: Record<number, { correct: number; total: number }>;
}

/** Source-of-truth Inhaltsdatensatz, der in der App gebündelt ist */
export interface ContentBundle {
  areas: Area[];
  topics: Topic[];
  flashcards: Flashcard[];
  questions: Question[];
}
