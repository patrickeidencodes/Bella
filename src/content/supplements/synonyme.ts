import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Synonym für 'Beginn'", back: "Anfang" },
    { front: "Synonym für 'schnell'", back: "rasch" },
    { front: "Synonym für 'wichtig'", back: "bedeutend" },
    { front: "Synonym für 'Aufgabe'", back: "Auftrag" },
    { front: "Synonym für 'prüfen'", back: "kontrollieren" },
    { front: "Synonym für 'genau'", back: "präzise" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'Beginn'?",
      options: ["Abschluss", "Anfang", "Uebergang", "Rückblick"],
      correct: [1],
      explanation: "'Anfang' und 'Beginn' bedeuten beide den Start von etwas.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'schnell'?",
      options: ["rasch", "langsam", "behäbig", "zwölf"],
      correct: [0],
      explanation: "'Rasch' und 'schnell' beschreiben beide eine hohe Geschwindigkeit.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'wichtig'?",
      options: ["nebensächlich", "unwichtig", "bedeutend", "beiläufig"],
      correct: [2],
      explanation: "'Bedeutend' und 'wichtig' drücken beide aus, dass etwas von großer Relevanz ist.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'Aufgabe'?",
      options: ["Pause", "Auftrag", "Ergebnis", "Bericht"],
      correct: [1],
      explanation: "'Auftrag' und 'Aufgabe' bezeichnen beide eine zu erledigende Arbeit.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'prüfen'?",
      options: ["ignorieren", "veröffentlichen", "ablehnen", "kontrollieren"],
      correct: [3],
      explanation: "'Kontrollieren' und 'prüfen' bedeuten beide, etwas auf Richtigkeit oder Zustand hin zu überprüfen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym für 'genau'?",
      options: ["präzise", "ungefähr", "grob", "vage"],
      correct: [0],
      explanation: "'Präzise' und 'genau' bezeichnen beide eine hohe Exaktheit oder Sorgfalt.",
      difficulty: 1,
    },
  ],
};
export default supplement;
