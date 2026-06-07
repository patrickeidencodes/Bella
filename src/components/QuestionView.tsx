import { useEffect, useState } from 'react';
import type { Question } from '../types';
import { correctAnswerText, isAnswerCorrect } from '../lib/utils';
import { readableQuestion } from '../lib/speech';
import RelevanceBadge from './RelevanceBadge';
import SpeakButton from './SpeakButton';

interface QuestionViewProps {
  question: Question;
  selected: number | string | null;
  onSelect: (answer: number | string) => void;
  /** Lösung & Erklärung anzeigen (Übungsmodus). Im Prüfungsmodus false. */
  revealed?: boolean;
  disabled?: boolean;
  /** Vorlese-Button anzeigen */
  speakable?: boolean;
}

const typeLabels: Record<Question['type'], string> = {
  mc: 'Multiple Choice',
  truefalse: 'Richtig oder falsch',
  fill: 'Eingabe',
  order_output: 'Was gibt der Code aus?',
  find_error: 'Finde den Fehler',
};

export default function QuestionView({
  question,
  selected,
  onSelect,
  revealed = false,
  disabled = false,
  speakable = false,
}: QuestionViewProps) {
  const hasOptions = Array.isArray(question.options) && question.options.length > 0;
  const isFill = question.type === 'fill' || !hasOptions;

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="rounded-full bg-brand-50 px-2.5 py-1 font-semibold text-brand-700">
          {typeLabels[question.type]}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 font-medium text-slate-500">
          {['', 'leicht', 'mittel', 'schwer'][question.difficulty]}
        </span>
        <RelevanceBadge relevance={question.relevance} />
        <span
          className="rounded-full bg-slate-50 px-2.5 py-1 font-medium text-slate-400 ring-1 ring-inset ring-slate-200"
          title={
            question.source === 'pdf'
              ? 'Diese Frage stammt direkt aus dem Lernskript (PDF).'
              : 'Diese Frage wurde ergänzend generiert.'
          }
        >
          {question.source === 'pdf' ? '📄 Lernskript' : '✨ Zusatz'}
        </span>
        {speakable && <SpeakButton text={readableQuestion(question)} label="Vorlesen" className="ml-auto" />}
      </div>

      <p className="text-lg font-semibold leading-snug text-slate-900">{question.prompt}</p>

      {question.code && <pre className="code-block" aria-label="Code-Ausschnitt">{question.code}</pre>}

      {isFill ? (
        <FillInput
          question={question}
          value={typeof selected === 'string' ? selected : ''}
          onChange={onSelect}
          revealed={revealed}
          disabled={disabled}
        />
      ) : (
        <ul className="grid gap-2">
          {question.options!.map((opt, idx) => (
            <li key={idx}>
              <OptionButton
                label={opt}
                index={idx}
                question={question}
                selected={selected}
                onSelect={onSelect}
                revealed={revealed}
                disabled={disabled}
              />
            </li>
          ))}
        </ul>
      )}

      {revealed && (
        <div
          className={`rounded-xl border p-4 text-sm ${
            isAnswerCorrect(question, selected)
              ? 'border-brand-200 bg-brand-50 text-brand-900'
              : 'border-rose-200 bg-rose-50 text-rose-900'
          }`}
        >
          <p className="font-semibold">
            {isAnswerCorrect(question, selected) ? 'Richtig!' : 'Leider falsch.'}
          </p>
          <p className="mt-1">
            <span className="font-medium">Richtige Antwort:</span> {correctAnswerText(question)}
          </p>
          <p className="mt-1 text-slate-700">{question.explanation}</p>
        </div>
      )}
    </div>
  );
}

function OptionButton({
  label,
  index,
  question,
  selected,
  onSelect,
  revealed,
  disabled,
}: {
  label: string;
  index: number;
  question: Question;
  selected: number | string | null;
  onSelect: (answer: number) => void;
  revealed: boolean;
  disabled: boolean;
}) {
  const isSelected = selected === index;
  const isCorrect = (question.correct as number[]).includes(index);

  let style = 'border-slate-200 bg-white hover:bg-slate-50';
  if (revealed) {
    if (isCorrect) style = 'border-brand-400 bg-brand-50 text-brand-900';
    else if (isSelected) style = 'border-rose-400 bg-rose-50 text-rose-900';
    else style = 'border-slate-200 bg-white text-slate-500';
  } else if (isSelected) {
    style = 'border-brand-500 bg-brand-50 text-brand-900 ring-1 ring-brand-500';
  }

  return (
    <button
      type="button"
      disabled={disabled || revealed}
      onClick={() => onSelect(index)}
      aria-pressed={isSelected}
      className={`flex min-h-[52px] w-full touch-manipulation items-center gap-3 rounded-xl border px-4 py-3 text-left text-[15px] font-medium transition-colors active:scale-[0.99] disabled:cursor-default ${style}`}
    >
      <span className="grid h-7 w-7 flex-shrink-0 place-items-center rounded-md bg-slate-100 text-xs font-bold text-slate-600">
        {String.fromCharCode(65 + index)}
      </span>
      <span className="flex-1">{label}</span>
      {revealed && isCorrect && <span aria-hidden>✓</span>}
      {revealed && isSelected && !isCorrect && <span aria-hidden>✗</span>}
    </button>
  );
}

function FillInput({
  question,
  value,
  onChange,
  revealed,
  disabled,
}: {
  question: Question;
  value: string;
  onChange: (v: string) => void;
  revealed: boolean;
  disabled: boolean;
}) {
  const [local, setLocal] = useState(value);
  useEffect(() => setLocal(value), [value]);

  return (
    <div>
      <label className="block">
        <span className="sr-only">Antwort eingeben</span>
        <input
          type="text"
          value={local}
          disabled={disabled || revealed}
          onChange={(e) => {
            setLocal(e.target.value);
            onChange(e.target.value);
          }}
          placeholder="Antwort eingeben …"
          autoComplete="off"
          className={`w-full rounded-xl border px-4 py-3 text-base outline-none transition-colors ${
            revealed
              ? isAnswerCorrect(question, value)
                ? 'border-brand-400 bg-brand-50'
                : 'border-rose-400 bg-rose-50'
              : 'border-slate-300 bg-white focus:border-brand-500'
          }`}
        />
      </label>
    </div>
  );
}
