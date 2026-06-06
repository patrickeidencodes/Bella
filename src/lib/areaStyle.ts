import type { AreaSlug } from '../types';

export interface AreaStyle {
  accent: string; // Text-/Icon-Farbe
  bg: string; // heller Hintergrund
  ring: string; // Rahmen
  bar: 'brand' | 'amber' | 'rose' | 'slate';
  emoji: string;
}

const styles: Record<string, AreaStyle> = {
  deutsch: { accent: 'text-sky-700', bg: 'bg-sky-50', ring: 'ring-sky-200', bar: 'slate', emoji: '✍️' },
  allgemeinbildung: {
    accent: 'text-amber-700',
    bg: 'bg-amber-50',
    ring: 'ring-amber-200',
    bar: 'amber',
    emoji: '🏛️',
  },
  informatik: {
    accent: 'text-brand-700',
    bg: 'bg-brand-50',
    ring: 'ring-brand-200',
    bar: 'brand',
    emoji: '💻',
  },
};

const fallback: AreaStyle = {
  accent: 'text-slate-700',
  bg: 'bg-slate-50',
  ring: 'ring-slate-200',
  bar: 'slate',
  emoji: '📘',
};

export function areaStyle(slug: AreaSlug | string): AreaStyle {
  return styles[slug] ?? fallback;
}
