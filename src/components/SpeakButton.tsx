import { speak, speechSupported } from '../lib/speech';

/** Kleiner 🔊-Button, der den übergebenen Text vorliest. */
export default function SpeakButton({
  text,
  label,
  className = '',
}: {
  text: string;
  label?: string;
  className?: string;
}) {
  if (!speechSupported) return null;
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        speak(text);
      }}
      aria-label={label ?? 'Vorlesen'}
      title="Vorlesen"
      className={`inline-flex min-h-[40px] touch-manipulation items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-slate-500 ring-1 ring-inset ring-slate-200 hover:bg-slate-100 active:bg-slate-200 ${className}`}
    >
      <span aria-hidden>🔊</span>
      {label && <span>{label}</span>}
    </button>
  );
}
