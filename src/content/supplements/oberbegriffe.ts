import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Rose, Tulpe, Nelke -> ?", back: "Blumen" },
    { front: "Hammer, Säge, Zange -> ?", back: "Werkzeuge" },
    { front: "Adler, Spatz, Taube -> ?", back: "Vögel" },
    { front: "Deutsch, Mathe, Biologie -> ?", back: "Schulfächer" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff für: Rose, Tulpe, Nelke?",
      options: ["Bäume", "Blumen", "Gemüse", "Früchte"],
      correct: [1],
      explanation: "Rose, Tulpe und Nelke sind alles Blumen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff für: Hammer, Säge, Zange?",
      options: ["Werkzeuge", "Möbel", "Fahrzeuge", "Lebensmittel"],
      correct: [0],
      explanation: "Hammer, Säge und Zange sind alles Werkzeuge.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff für: Adler, Spatz, Taube?",
      options: ["Fische", "Säugetiere", "Insekten", "Vögel"],
      correct: [3],
      explanation: "Adler, Spatz und Taube sind alles Vögel.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff für: Deutsch, Mathe, Biologie?",
      options: ["Hobbys", "Schulfächer", "Berufe", "Sportarten"],
      correct: [1],
      explanation: "Deutsch, Mathe und Biologie sind alles Schulfächer.",
      difficulty: 1,
    },
  ],
};
export default supplement;
