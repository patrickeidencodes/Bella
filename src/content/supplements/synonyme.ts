import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Synonym fuer 'Beginn'", back: "Anfang" },
    { front: "Synonym fuer 'schnell'", back: "rasch" },
    { front: "Synonym fuer 'wichtig'", back: "bedeutend" },
    { front: "Synonym fuer 'Aufgabe'", back: "Auftrag" },
    { front: "Synonym fuer 'pruefen'", back: "kontrollieren" },
    { front: "Synonym fuer 'genau'", back: "praezise" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'Beginn'?",
      options: ["Abschluss", "Anfang", "Uebergang", "Rueckblick"],
      correct: [1],
      explanation: "'Anfang' und 'Beginn' bedeuten beide den Start von etwas.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'schnell'?",
      options: ["rasch", "langsam", "behaebig", "zwoelf"],
      correct: [0],
      explanation: "'Rasch' und 'schnell' beschreiben beide eine hohe Geschwindigkeit.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'wichtig'?",
      options: ["nebensaechlich", "unwichtig", "bedeutend", "beilaeufig"],
      correct: [2],
      explanation: "'Bedeutend' und 'wichtig' druecken beide aus, dass etwas von grosser Relevanz ist.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'Aufgabe'?",
      options: ["Pause", "Auftrag", "Ergebnis", "Bericht"],
      correct: [1],
      explanation: "'Auftrag' und 'Aufgabe' bezeichnen beide eine zu erledigende Arbeit.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'pruefen'?",
      options: ["ignorieren", "veroeffentlichen", "ablehnen", "kontrollieren"],
      correct: [3],
      explanation: "'Kontrollieren' und 'pruefen' bedeuten beide, etwas auf Richtigkeit oder Zustand hin zu ueberpruefen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein Synonym fuer 'genau'?",
      options: ["praezise", "ungefaehr", "grob", "vage"],
      correct: [0],
      explanation: "'Praezise' und 'genau' bezeichnen beide eine hohe Exaktheit oder Sorgfalt.",
      difficulty: 1,
    },
  ],
};
export default supplement;
