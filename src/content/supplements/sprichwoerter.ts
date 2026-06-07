import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Morgenstund hat Gold im Mund", back: "Wer früh anfängt, schafft mehr." },
    { front: "Uebung macht den Meister", back: "Durch Wiederholung wird man besser." },
    { front: "Wer A sagt, muss auch B sagen", back: "Etwas Begonnenes zu Ende bringen." },
    { front: "Der Apfel fällt nicht weit vom Stamm", back: "Kinder ähneln den Eltern." },
    { front: "Reden ist Silber, Schweigen ist Gold", back: "Manchmal ist Schweigen besser als Reden." },
    { front: "Lügen haben kurze Beine", back: "Lügen fliegen schnell auf." },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Morgenstund hat Gold im Mund?",
      options: [
        "Wer früh anfängt, schafft mehr.",
        "Morgens soll man viel essen.",
        "Gold ist am Morgen wertvoller.",
        "Man soll nicht zu spät schlafen gehen.",
      ],
      correct: [0],
      explanation: "Das Sprichwort bedeutet, dass man mehr erreicht, wenn man frühzeitig mit der Arbeit beginnt.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Uebung macht den Meister?",
      options: [
        "Nur Talentierte können Meister werden.",
        "Ein Meister braucht keine Uebung mehr.",
        "Durch Wiederholung und Uebung wird man besser.",
        "Meister werden durch gute Lehrer geformt.",
      ],
      correct: [2],
      explanation: "Das Sprichwort besagt, dass regelmäßiges Ueben und Wiederholen zur Meisterschaft führt.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Wer A sagt, muss auch B sagen?",
      options: [
        "Man soll das Alphabet vollständig lernen.",
        "Wer eine Sache beginnt, sollte sie auch zu Ende bringen.",
        "Man soll immer ehrlich kommunizieren.",
        "Wer etwas verspricht, muss es laut sagen.",
      ],
      correct: [1],
      explanation: "Das Sprichwort bedeutet, dass man etwas Begonnenes zu Ende bringen soll und nicht auf halbem Weg aufgeben darf.",
      difficulty: 2,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Der Apfel fällt nicht weit vom Stamm?",
      options: [
        "Aepfel wachsen nah am Baum.",
        "Früchte müssen rechtzeitig geerntet werden.",
        "Eltern und Kinder haben ähnliche Eigenschaften.",
        "Kinder sollen in der Nähe ihrer Eltern wohnen.",
      ],
      correct: [2],
      explanation: "Das Sprichwort besagt, dass Kinder ihren Eltern in Charakter oder Verhalten ähneln.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Reden ist Silber, Schweigen ist Gold?",
      options: [
        "Silber ist wertvoller als Gold.",
        "Man soll möglichst viel reden.",
        "Manchmal ist es besser zu schweigen als zu reden.",
        "Stille Menschen verdienen mehr Geld.",
      ],
      correct: [2],
      explanation: "Das Sprichwort bedeutet, dass Schweigen in vielen Situationen klüger und wertvoller ist als zu reden.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Lügen haben kurze Beine?",
      options: [
        "Lügen sind schwer zu beweisen.",
        "Lügen werden schnell aufgedeckt.",
        "Kleine Lügen sind nicht so schlimm.",
        "Lügen laufen schneller als die Wahrheit.",
      ],
      correct: [1],
      explanation: "Das Sprichwort bedeutet, dass Lügen nicht lange verborgen bleiben und schnell auffliegen.",
      difficulty: 2,
    },
  ],
};
export default supplement;
