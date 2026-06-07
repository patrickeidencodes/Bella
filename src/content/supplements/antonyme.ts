import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Was ist das Gegenteil von Anfang?", back: "Ende" },
    { front: "Was ist das Gegenteil von Einnahme?", back: "Ausgabe" },
    { front: "Was ist das Gegenteil von zentral?", back: "dezentral" },
    { front: "Was ist das Gegenteil von Angebot?", back: "Nachfrage" },
    { front: "Was ist das Gegenteil von Import?", back: "Export" },
    { front: "Was ist das Gegenteil von freiwillig?", back: "verpflichtend" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'Anfang'?",
      options: ["Mitte", "Ende", "Start", "Beginn"],
      correct: [1],
      explanation: "Das Gegenteil von 'Anfang' ist 'Ende', da beide den entgegengesetzten Punkt eines Zeitraums oder Vorgangs beschreiben.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'Einnahme'?",
      options: ["Ausgabe", "Gewinn", "Erlös", "Ertrag"],
      correct: [0],
      explanation: "Das Gegenteil von 'Einnahme' ist 'Ausgabe', da Einnahmen zufliessende und Ausgaben abfliessende Geldmittel bezeichnen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'zentral'?",
      options: ["regional", "lokal", "dezentral", "global"],
      correct: [2],
      explanation: "Das Gegenteil von 'zentral' ist 'dezentral'. Zentral bedeutet auf einen Mittelpunkt ausgerichtet, dezentral bedeutet verteilt und nicht auf eine Zentrale ausgerichtet.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'Angebot'?",
      options: ["Preis", "Markt", "Produkt", "Nachfrage"],
      correct: [3],
      explanation: "Das Gegenteil von 'Angebot' ist 'Nachfrage'. Im wirtschaftlichen Kontext stehen Angebot (was Anbieter bereitstellen) und Nachfrage (was Käufer wünschen) einander gegenüber.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'Import'?",
      options: ["Handel", "Export", "Transit", "Einfuhr"],
      correct: [1],
      explanation: "Das Gegenteil von 'Import' (Einfuhr von Waren aus dem Ausland) ist 'Export' (Ausfuhr von Waren ins Ausland).",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Antonym (Gegenteil) von 'freiwillig'?",
      options: ["verpflichtend", "optional", "offen", "möglich"],
      correct: [0],
      explanation: "Das Gegenteil von 'freiwillig' (aus eigenem Willen, ohne Zwang) ist 'verpflichtend' (durch eine Pflicht oder Vorschrift gebunden).",
      difficulty: 1,
    },
  ],
};
export default supplement;
