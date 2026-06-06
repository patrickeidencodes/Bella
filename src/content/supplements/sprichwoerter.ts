import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Morgenstund hat Gold im Mund", back: "Wer frueh anfaengt, schafft mehr." },
    { front: "Uebung macht den Meister", back: "Durch Wiederholung wird man besser." },
    { front: "Wer A sagt, muss auch B sagen", back: "Etwas Begonnenes zu Ende bringen." },
    { front: "Der Apfel faellt nicht weit vom Stamm", back: "Kinder aehneln den Eltern." },
    { front: "Reden ist Silber, Schweigen ist Gold", back: "Manchmal ist Schweigen besser als Reden." },
    { front: "Luegen haben kurze Beine", back: "Luegen fliegen schnell auf." },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Morgenstund hat Gold im Mund?",
      options: [
        "Wer frueh anfaengt, schafft mehr.",
        "Morgens soll man viel essen.",
        "Gold ist am Morgen wertvoller.",
        "Man soll nicht zu spaet schlafen gehen.",
      ],
      correct: [0],
      explanation: "Das Sprichwort bedeutet, dass man mehr erreicht, wenn man fruehzeitig mit der Arbeit beginnt.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Uebung macht den Meister?",
      options: [
        "Nur Talentierte koennen Meister werden.",
        "Ein Meister braucht keine Uebung mehr.",
        "Durch Wiederholung und Uebung wird man besser.",
        "Meister werden durch gute Lehrer geformt.",
      ],
      correct: [2],
      explanation: "Das Sprichwort besagt, dass regelmaessiges Ueben und Wiederholen zur Meisterschaft fuehrt.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Wer A sagt, muss auch B sagen?",
      options: [
        "Man soll das Alphabet vollstaendig lernen.",
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
      prompt: "Was bedeutet das Sprichwort: Der Apfel faellt nicht weit vom Stamm?",
      options: [
        "Aepfel wachsen nah am Baum.",
        "Fruechte muessen rechtzeitig geerntet werden.",
        "Eltern und Kinder haben aehnliche Eigenschaften.",
        "Kinder sollen in der Naehe ihrer Eltern wohnen.",
      ],
      correct: [2],
      explanation: "Das Sprichwort besagt, dass Kinder ihren Eltern in Charakter oder Verhalten aehneln.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Reden ist Silber, Schweigen ist Gold?",
      options: [
        "Silber ist wertvoller als Gold.",
        "Man soll moeglichst viel reden.",
        "Manchmal ist es besser zu schweigen als zu reden.",
        "Stille Menschen verdienen mehr Geld.",
      ],
      correct: [2],
      explanation: "Das Sprichwort bedeutet, dass Schweigen in vielen Situationen klueger und wertvoller ist als zu reden.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet das Sprichwort: Luegen haben kurze Beine?",
      options: [
        "Luegen sind schwer zu beweisen.",
        "Luegen werden schnell aufgedeckt.",
        "Kleine Luegen sind nicht so schlimm.",
        "Luegen laufen schneller als die Wahrheit.",
      ],
      correct: [1],
      explanation: "Das Sprichwort bedeutet, dass Luegen nicht lange verborgen bleiben und schnell auffliegen.",
      difficulty: 2,
    },
  ],
};
export default supplement;
