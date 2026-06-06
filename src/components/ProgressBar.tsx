interface ProgressBarProps {
  value: number; // 0..100
  className?: string;
  tone?: 'brand' | 'amber' | 'rose' | 'slate';
  label?: string;
}

const toneClasses: Record<NonNullable<ProgressBarProps['tone']>, string> = {
  brand: 'bg-brand-500',
  amber: 'bg-amber-500',
  rose: 'bg-rose-500',
  slate: 'bg-slate-400',
};

export default function ProgressBar({ value, className = '', tone = 'brand', label }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div
      className={`h-2.5 w-full overflow-hidden rounded-full bg-slate-200 ${className}`}
      role="progressbar"
      aria-valuenow={clamped}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${toneClasses[tone]}`}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}
