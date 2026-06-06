import { useCallback, useSyncExternalStore } from 'react';
import { getAttempts, getExamResults, getLatestReviewMap } from '../lib/progress';
import { computeStats, type OverallStats } from '../lib/stats';
import type { ExamResult } from '../types';

/**
 * Leichtgewichtiger Store über localStorage. Komponenten abonnieren Änderungen;
 * nach jedem Speichern (recordAttempt etc.) wird `notifyProgressChanged` ausgelöst.
 */

const listeners = new Set<() => void>();
let version = 0;

export function notifyProgressChanged() {
  version += 1;
  for (const l of listeners) l();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  // auch auf Änderungen aus anderen Tabs reagieren
  const onStorage = () => {
    version += 1;
    cb();
  };
  window.addEventListener('storage', onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener('storage', onStorage);
  };
}

function getSnapshot() {
  return version;
}

export function useProgress(): {
  stats: OverallStats;
  examResults: ExamResult[];
  reviewMap: Map<number, boolean>;
  attemptsCount: number;
} {
  useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  // Bei jeder Version neu berechnen
  const stats = computeStats();
  const examResults = getExamResults();
  const reviewMap = getLatestReviewMap();
  const attemptsCount = getAttempts().length;
  return { stats, examResults, reviewMap, attemptsCount };
}

/** Praktischer Helfer, um nach dem Speichern ein Update auszulösen. */
export function useNotifyProgress() {
  return useCallback(() => notifyProgressChanged(), []);
}
