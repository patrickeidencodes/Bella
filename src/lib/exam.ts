import { content, questionsForArea, topicById } from '../content';
import type { ExamResult, Question } from '../types';
import { isAnswerCorrect, percent, shuffle, uid } from './utils';

export interface ExamConfig {
  questionCount: number; // 50 | 70 | 100
  durationMin: number; // 20 | 30 | 45
}

export const DEFAULT_EXAM_CONFIG: ExamConfig = { questionCount: 70, durationMin: 30 };

/**
 * Stellt einen Prüfungssatz zusammen: gleichmäßig aus allen drei Bereichen,
 * innerhalb zufällig gemischt, Gesamtreihenfolge zufällig, keine Frage doppelt.
 */
export function buildExam(config: ExamConfig): Question[] {
  const areas = content.areas;
  const perArea = Math.floor(config.questionCount / areas.length);
  const remainder = config.questionCount - perArea * areas.length;

  const picked: Question[] = [];
  areas.forEach((area, idx) => {
    const target = perArea + (idx < remainder ? 1 : 0);
    const pool = shuffle(questionsForArea(area.id));
    picked.push(...pool.slice(0, target));
  });

  // Falls ein Bereich zu wenige Fragen hat: mit übrigen Fragen auffüllen.
  if (picked.length < config.questionCount) {
    const usedIds = new Set(picked.map((q) => q.id));
    const fill = shuffle(content.questions.filter((q) => !usedIds.has(q.id)));
    picked.push(...fill.slice(0, config.questionCount - picked.length));
  }

  return shuffle(picked);
}

export type AnswerMap = Record<number, number | string | null>; // questionId -> answer

export function evaluateExam(
  questions: Question[],
  answers: AnswerMap,
  durationSec: number,
): ExamResult {
  const byArea: Record<number, { correct: number; total: number }> = {};
  const byTopic: Record<number, { correct: number; total: number }> = {};
  let correctCount = 0;

  for (const q of questions) {
    const topic = topicById.get(q.topicId);
    const areaId = topic?.areaId ?? 0;
    const correct = isAnswerCorrect(q, answers[q.id] ?? null);
    if (correct) correctCount += 1;

    byArea[areaId] ??= { correct: 0, total: 0 };
    byArea[areaId].total += 1;
    if (correct) byArea[areaId].correct += 1;

    byTopic[q.topicId] ??= { correct: 0, total: 0 };
    byTopic[q.topicId].total += 1;
    if (correct) byTopic[q.topicId].correct += 1;
  }

  return {
    id: uid(),
    date: new Date().toISOString(),
    durationSec,
    totalQuestions: questions.length,
    correctCount,
    scorePercent: percent(correctCount, questions.length),
    byArea,
    byTopic,
  };
}
