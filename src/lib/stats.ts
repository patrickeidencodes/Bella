import { content, topicById } from '../content';
import type { Attempt } from '../types';
import { getAttempts } from './progress';
import { percent } from './utils';

export interface TopicStat {
  topicId: number;
  topicTitle: string;
  areaId: number;
  answered: number;
  correct: number;
  accuracy: number; // %
}

export interface AreaStat {
  areaId: number;
  areaTitle: string;
  answered: number;
  correct: number;
  accuracy: number; // %
  totalQuestions: number;
}

export interface OverallStats {
  byTopic: TopicStat[];
  byArea: AreaStat[];
  totalAnswered: number;
  totalCorrect: number;
}

export function computeStats(attempts: Attempt[] = getAttempts()): OverallStats {
  const topicAgg = new Map<number, { answered: number; correct: number }>();

  for (const a of attempts) {
    const tId = questionTopicId(a.questionId);
    if (tId == null) continue;
    const agg = topicAgg.get(tId) ?? { answered: 0, correct: 0 };
    agg.answered += 1;
    if (a.isCorrect) agg.correct += 1;
    topicAgg.set(tId, agg);
  }

  const byTopic: TopicStat[] = content.topics.map((t) => {
    const agg = topicAgg.get(t.id) ?? { answered: 0, correct: 0 };
    return {
      topicId: t.id,
      topicTitle: t.title,
      areaId: t.areaId,
      answered: agg.answered,
      correct: agg.correct,
      accuracy: percent(agg.correct, agg.answered),
    };
  });

  const byArea: AreaStat[] = content.areas.map((area) => {
    const topics = byTopic.filter((t) => t.areaId === area.id);
    const answered = topics.reduce((s, t) => s + t.answered, 0);
    const correct = topics.reduce((s, t) => s + t.correct, 0);
    const totalQuestions = content.questions.filter((q) => {
      const topic = topicById.get(q.topicId);
      return topic?.areaId === area.id;
    }).length;
    return {
      areaId: area.id,
      areaTitle: area.title,
      answered,
      correct,
      accuracy: percent(correct, answered),
      totalQuestions,
    };
  });

  const totalAnswered = byArea.reduce((s, a) => s + a.answered, 0);
  const totalCorrect = byArea.reduce((s, a) => s + a.correct, 0);

  return { byTopic, byArea, totalAnswered, totalCorrect };
}

const questionTopicCache = new Map<number, number>();
function questionTopicId(questionId: number): number | undefined {
  if (questionTopicCache.size === 0) {
    for (const q of content.questions) questionTopicCache.set(q.id, q.topicId);
  }
  return questionTopicCache.get(questionId);
}

/** Schwächste Themen (mind. eine Antwort), aufsteigend nach Trefferquote. */
export function weakestTopics(stats: OverallStats, limit = 5): TopicStat[] {
  return stats.byTopic
    .filter((t) => t.answered > 0)
    .sort((a, b) => a.accuracy - b.accuracy || b.answered - a.answered)
    .slice(0, limit);
}
