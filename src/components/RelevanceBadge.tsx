import type { Relevance } from '../types';
import { relevanceLabel } from '../content/relevance';

const styles: Record<Relevance, string> = {
  1: 'bg-amber-100 text-amber-800 ring-1 ring-inset ring-amber-300',
  2: 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-200',
  3: 'bg-slate-50 text-slate-400 ring-1 ring-inset ring-slate-200',
};

const icon: Record<Relevance, string> = { 1: '★', 2: '•', 3: '◦' };

export default function RelevanceBadge({
  relevance,
  className = '',
}: {
  relevance: Relevance;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${styles[relevance]} ${className}`}
      title={`Prüfungsrelevanz: ${relevanceLabel[relevance]}`}
    >
      <span aria-hidden>{icon[relevance]}</span>
      {relevanceLabel[relevance]}
    </span>
  );
}
