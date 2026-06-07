import type { Area, ContentBundle, Flashcard, Question, Topic } from '../types';
import { buildContent } from './build';
import { deutsch } from './areas/deutsch';
import { allgemeinbildung } from './areas/allgemeinbildung';
import { informatik } from './areas/informatik';
import type { RawArea } from './types';
import { supplements } from './supplements';
import { supplementsV31 } from './supplements/v31';

export const rawAreas: RawArea[] = [deutsch, allgemeinbildung, informatik];

// PDF-Ergänzungen (Master-Lernskript, inkl. v3.1) an die passenden Themen anhängen.
for (const area of rawAreas) {
  for (const topic of area.topics) {
    for (const map of [supplements, supplementsV31]) {
      const extra = map[topic.slug];
      if (!extra) continue;
      // Ergänzungen stammen aus dem Lernskript (PDF) → entsprechend markieren
      topic.flashcards = [
        ...topic.flashcards,
        ...extra.flashcards.map((f) => ({ ...f, source: 'pdf' as const })),
      ];
      topic.questions = [
        ...topic.questions,
        ...extra.questions.map((q) => ({ ...q, source: 'pdf' as const })),
      ];
    }
  }
}

export const content: ContentBundle = buildContent(rawAreas);

// ---- Lookups ----

export const areaById = new Map<number, Area>(content.areas.map((a) => [a.id, a]));
export const areaBySlug = new Map<string, Area>(content.areas.map((a) => [a.slug, a]));
export const topicById = new Map<number, Topic>(content.topics.map((t) => [t.id, t]));
export const topicBySlug = new Map<string, Topic>(content.topics.map((t) => [t.slug, t]));
export const questionById = new Map<number, Question>(content.questions.map((q) => [q.id, q]));
export const flashcardById = new Map<number, Flashcard>(content.flashcards.map((f) => [f.id, f]));

export function topicsForArea(areaId: number): Topic[] {
  return content.topics
    .filter((t) => t.areaId === areaId)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function flashcardsForTopic(topicId: number): Flashcard[] {
  return content.flashcards.filter((f) => f.topicId === topicId);
}

export function questionsForTopic(topicId: number): Question[] {
  return content.questions.filter((q) => q.topicId === topicId);
}

export function questionsForArea(areaId: number): Question[] {
  const topicIds = new Set(topicsForArea(areaId).map((t) => t.id));
  return content.questions.filter((q) => topicIds.has(q.topicId));
}

export function topicAreaId(topicId: number): number | undefined {
  return topicById.get(topicId)?.areaId;
}
