import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Rose, Tulpe, Nelke -> ?", back: "Blumen" },
    { front: "Hammer, Saege, Zange -> ?", back: "Werkzeuge" },
    { front: "Adler, Spatz, Taube -> ?", back: "Voegel" },
    { front: "Deutsch, Mathe, Biologie -> ?", back: "Schulfaecher" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff fuer: Rose, Tulpe, Nelke?",
      options: ["Baeume", "Blumen", "Gemuese", "Fruechte"],
      correct: [1],
      explanation: "Rose, Tulpe und Nelke sind alles Blumen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff fuer: Hammer, Saege, Zange?",
      options: ["Werkzeuge", "Moebel", "Fahrzeuge", "Lebensmittel"],
      correct: [0],
      explanation: "Hammer, Saege und Zange sind alles Werkzeuge.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff fuer: Adler, Spatz, Taube?",
      options: ["Fische", "Saeugetiere", "Insekten", "Voegel"],
      correct: [3],
      explanation: "Adler, Spatz und Taube sind alles Voegel.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist der Oberbegriff fuer: Deutsch, Mathe, Biologie?",
      options: ["Hobbys", "Schulfaecher", "Berufe", "Sportarten"],
      correct: [1],
      explanation: "Deutsch, Mathe und Biologie sind alles Schulfaecher.",
      difficulty: 1,
    },
  ],
};
export default supplement;
