import type { AreaSlug, Difficulty, QuestionSource, QuestionType, Relevance } from '../types';

/**
 * Autoren-Format für Inhalte. Bewusst OHNE numerische IDs – diese werden beim
 * Zusammenbau (buildContent) deterministisch in Reihenfolge vergeben. Dadurch
 * lassen sich Inhalte einfach pflegen und derselbe Datensatz erzeugt sowohl die
 * gebündelten App-Daten als auch db/seed.sql.
 */
export interface RawFlashcard {
  front: string;
  back: string;
  /** Herkunft; wird beim Zusammenbau gesetzt (Basis = 'generated', Ergänzung = 'pdf'). */
  source?: QuestionSource;
}

export interface RawQuestion {
  type: QuestionType;
  prompt: string;
  code?: string;
  options?: string[];
  correct: number[] | string[];
  explanation: string;
  difficulty: Difficulty;
  /** Optionale Übersteuerung der Themen-Relevanz für genau diese Frage. */
  relevance?: Relevance;
  /** Herkunft; wird beim Zusammenbau gesetzt (Basis = 'generated', Ergänzung = 'pdf'). */
  source?: QuestionSource;
}

export interface RawTopic {
  slug: string;
  title: string;
  description?: string;
  flashcards: RawFlashcard[];
  questions: RawQuestion[];
}

export interface RawArea {
  slug: AreaSlug;
  title: string;
  topics: RawTopic[];
}

/**
 * Ergänzungsdaten aus dem Master-Lernskript (PDF). Werden beim Zusammenbau
 * anhand des Themen-Slugs an das jeweilige Thema angehängt – so bleiben die
 * Basis-Inhalte unangetastet und die PDF-Fakten sind garantiert enthalten.
 */
export interface RawSupplement {
  flashcards: RawFlashcard[];
  questions: RawQuestion[];
}
