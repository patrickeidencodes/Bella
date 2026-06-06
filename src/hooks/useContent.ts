import { useQuery } from '@tanstack/react-query';
import {
  content,
  flashcardsForTopic,
  questionsForArea,
  questionsForTopic,
  topicsForArea,
} from '../content';

/**
 * Inhalte sind lokal gebündelt und damit synchron + offline verfügbar.
 * Sie werden trotzdem über React Query bereitgestellt, damit die Datenquelle
 * (z. B. Supabase) später transparent ausgetauscht werden kann.
 */

export function useAreas() {
  return useQuery({
    queryKey: ['areas'],
    queryFn: async () => content.areas,
    staleTime: Infinity,
  });
}

export function useTopics(areaId?: number) {
  return useQuery({
    queryKey: ['topics', areaId ?? 'all'],
    queryFn: async () => (areaId ? topicsForArea(areaId) : content.topics),
    staleTime: Infinity,
  });
}

export function useFlashcards(topicId?: number) {
  return useQuery({
    queryKey: ['flashcards', topicId],
    queryFn: async () => (topicId ? flashcardsForTopic(topicId) : []),
    enabled: topicId != null,
    staleTime: Infinity,
  });
}

export function useTopicQuestions(topicId?: number) {
  return useQuery({
    queryKey: ['questions', 'topic', topicId],
    queryFn: async () => (topicId ? questionsForTopic(topicId) : []),
    enabled: topicId != null,
    staleTime: Infinity,
  });
}

export function useAreaQuestions(areaId?: number) {
  return useQuery({
    queryKey: ['questions', 'area', areaId],
    queryFn: async () => (areaId ? questionsForArea(areaId) : []),
    enabled: areaId != null,
    staleTime: Infinity,
  });
}
