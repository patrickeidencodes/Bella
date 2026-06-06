import type { Area, ContentBundle, Flashcard, Question, Topic } from '../types';
import type { RawArea } from './types';
import { relevanceForTopic } from './relevance';

/**
 * Baut aus den Autoren-Daten (RawArea[]) einen vollständigen ContentBundle mit
 * deterministisch vergebenen IDs. Dieselbe Funktion nutzt das Seed-Skript, damit
 * App-Daten und db/seed.sql garantiert identisch sind.
 */
export function buildContent(rawAreas: RawArea[]): ContentBundle {
  const areas: Area[] = [];
  const topics: Topic[] = [];
  const flashcards: Flashcard[] = [];
  const questions: Question[] = [];

  let areaId = 0;
  let topicId = 0;
  let flashcardId = 0;
  let questionId = 0;

  rawAreas.forEach((rawArea, areaIdx) => {
    areaId += 1;
    areas.push({
      id: areaId,
      slug: rawArea.slug,
      title: rawArea.title,
      sortOrder: areaIdx,
    });

    rawArea.topics.forEach((rawTopic, topicIdx) => {
      topicId += 1;
      const currentTopicId = topicId;
      topics.push({
        id: currentTopicId,
        areaId,
        slug: rawTopic.slug,
        title: rawTopic.title,
        description: rawTopic.description,
        sortOrder: topicIdx,
      });

      rawTopic.flashcards.forEach((fc) => {
        flashcardId += 1;
        flashcards.push({
          id: flashcardId,
          topicId: currentTopicId,
          front: fc.front,
          back: fc.back,
          source: fc.source ?? 'generated',
        });
      });

      rawTopic.questions.forEach((q) => {
        questionId += 1;
        // truefalse braucht immer Optionen; fehlen sie, Standard ergänzen
        const options =
          q.type === 'truefalse' && (!q.options || q.options.length < 2)
            ? ['Richtig', 'Falsch']
            : q.options;
        questions.push({
          id: questionId,
          topicId: currentTopicId,
          type: q.type,
          prompt: q.prompt,
          code: q.code,
          options,
          correct: q.correct,
          explanation: q.explanation,
          difficulty: q.difficulty,
          // Frage erbt die Themen-Relevanz, sofern nicht eigens übersteuert
          relevance: q.relevance ?? relevanceForTopic(rawTopic.slug),
          source: q.source ?? 'generated',
        });
      });
    });
  });

  return { areas, topics, flashcards, questions };
}

/** Validiert die Roh-Inhalte und liefert Warnungen (für Entwicklung/Tests). */
export function validateRawAreas(rawAreas: RawArea[]): string[] {
  const warnings: string[] = [];
  const slugs = new Set<string>();

  for (const area of rawAreas) {
    for (const topic of area.topics) {
      if (slugs.has(topic.slug)) warnings.push(`Doppelter Topic-Slug: ${topic.slug}`);
      slugs.add(topic.slug);

      for (const q of topic.questions) {
        if ((q.type === 'mc' || q.type === 'truefalse') && (!q.options || q.options.length < 2)) {
          warnings.push(`Frage ohne genügend Optionen in ${topic.slug}: "${q.prompt.slice(0, 40)}"`);
        }
        if (q.type === 'mc' && q.options && q.options.length !== 4) {
          warnings.push(`MC-Frage hat nicht genau 4 Optionen in ${topic.slug}: "${q.prompt.slice(0, 40)}"`);
        }
        if (!q.explanation?.trim()) {
          warnings.push(`Frage ohne Erklärung in ${topic.slug}: "${q.prompt.slice(0, 40)}"`);
        }
        const correctIsIndex = q.type !== 'fill';
        if (correctIsIndex) {
          for (const c of q.correct as number[]) {
            if (typeof c !== 'number' || !q.options || c < 0 || c >= q.options.length) {
              warnings.push(`Ungültiger correct-Index in ${topic.slug}: "${q.prompt.slice(0, 40)}"`);
            }
          }
        }
      }
    }
  }
  return warnings;
}
