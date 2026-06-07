import type { Question } from '../types';

/**
 * Vorlesen (Text-to-Speech) über die im Browser eingebaute Web Speech API.
 * Nutzt eine deutsche System-Stimme, kein externer Dienst.
 */
export const speechSupported =
  typeof window !== 'undefined' && 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;

let germanVoice: SpeechSynthesisVoice | null = null;

function pickVoice(): SpeechSynthesisVoice | null {
  if (!speechSupported) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return germanVoice;
  germanVoice =
    voices.find((v) => v.lang?.toLowerCase() === 'de-de') ??
    voices.find((v) => v.lang?.toLowerCase().startsWith('de')) ??
    germanVoice;
  return germanVoice;
}

if (speechSupported) {
  pickVoice();
  // Stimmen werden in manchen Browsern asynchron geladen
  window.speechSynthesis.onvoiceschanged = () => pickVoice();
}

/** Liest den übergebenen Text laut vor (bricht laufende Ausgabe ab). */
export function speak(text: string): void {
  if (!speechSupported || !text.trim()) return;
  const synth = window.speechSynthesis;
  synth.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  const voice = germanVoice ?? pickVoice();
  if (voice) utterance.voice = voice;
  utterance.rate = 0.95;
  utterance.pitch = 1;
  synth.speak(utterance);
}

export function stopSpeaking(): void {
  if (speechSupported) window.speechSynthesis.cancel();
}

/** Baut einen vorlesbaren Text aus einer Frage (ohne Code-Block). */
export function readableQuestion(q: Question): string {
  let text = q.prompt;
  if (q.code) text += '. Code siehe Bildschirm.';
  if (q.options && q.options.length > 0 && q.type !== 'fill') {
    text +=
      '. Antwortmöglichkeiten: ' +
      q.options.map((o, i) => `${String.fromCharCode(65 + i)}: ${o}`).join('. ');
  }
  return text;
}
