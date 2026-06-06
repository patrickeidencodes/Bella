import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Wann steht vor einem Nebensatz ein Komma?",
      back: "Vor Nebensaetzen mit dass, weil, ob, wenn, der, die, das steht immer ein Komma. Beispiel: Ich weiss, dass du kommst."
    },
    {
      front: "Wie werden Aufzaehlungen mit Komma gebildet?",
      back: "Bei Aufzaehlungen steht zwischen den Gliedern ein Komma, aber nicht vor dem letzten 'und'. Beispiel: Ich kaufe Aepfel, Birnen und Orangen."
    },
    {
      front: "Was ist ein Einschub und wie wird er gekennzeichnet?",
      back: "Ein Einschub ist ein eingeschobener Zusatz im Satz. Er wird von Kommas umschlossen. Beispiel: Herr Meier, unser Leiter, kommt."
    },
    {
      front: "Vor welchen Woertern steht laut Regel ein Komma?",
      back: "Vor aber, sondern und doch steht ein Komma. Beispiel: Klein, aber fein."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welcher Satz verwendet das Komma vor einem Nebensatz korrekt?",
      options: [
        "Ich weiss dass du kommst.",
        "Ich weiss, dass du kommst.",
        "Ich weiss, dass, du kommst.",
        "Ich, weiss dass du kommst."
      ],
      correct: [1],
      explanation: "Vor Nebensaetzen mit 'dass' steht ein Komma. Richtig ist: 'Ich weiss, dass du kommst.'",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Bei einer Aufzaehlung steht auch vor dem letzten 'und' ein Komma.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Bei Aufzaehlungen steht ein Komma zwischen den Gliedern, aber NICHT vor dem letzten 'und'.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Konjunktion verlangt laut Regel ein Komma davor?",
      options: [
        "und",
        "oder",
        "sondern",
        "sowie"
      ],
      correct: [2],
      explanation: "Vor 'sondern' (sowie vor 'aber' und 'doch') steht ein Komma. Vor 'und', 'oder' und 'sowie' steht in der Regel kein Komma.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wie lautet die korrekte Kommasetzung bei einem Einschub?",
      options: [
        "Herr Meier unser Leiter, kommt.",
        "Herr Meier, unser Leiter kommt.",
        "Herr Meier, unser Leiter, kommt.",
        "Herr Meier unser Leiter kommt."
      ],
      correct: [2],
      explanation: "Einschuebe werden von Kommas umschlossen: 'Herr Meier, unser Leiter, kommt.'",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Der Satz 'Klein, aber fein.' verwendet die Kommasetzung korrekt.",
      options: ["Richtig", "Falsch"],
      correct: [0],
      explanation: "Vor 'aber' steht ein Komma. Der Satz 'Klein, aber fein.' ist korrekt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher Satz zeigt eine korrekte Aufzaehlung ohne Komma vor 'und'?",
      options: [
        "Ich mag Hunde, Katzen, und Voegel.",
        "Ich mag Hunde Katzen und Voegel.",
        "Ich mag Hunde, Katzen und Voegel.",
        "Ich mag, Hunde, Katzen, und Voegel."
      ],
      correct: [2],
      explanation: "Bei Aufzaehlungen steht kein Komma vor dem letzten 'und'. Korrekt ist: 'Ich mag Hunde, Katzen und Voegel.'",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Vor welchem Wort steht laut Regel ein Komma?",
      options: [
        "sowie",
        "doch",
        "und",
        "beziehungsweise"
      ],
      correct: [1],
      explanation: "Vor 'doch' (sowie vor 'aber' und 'sondern') steht ein Komma.",
      difficulty: 2
    },
    {
      type: "fill",
      prompt: "Ergaenze die Regel: Vor Nebensaetzen mit 'weil', 'ob' oder 'wenn' steht ein ___.",
      correct: ["Komma"],
      explanation: "Vor Nebensaetzen mit dass, weil, ob, wenn, der, die, das steht immer ein Komma.",
      difficulty: 1
    }
  ],
};
export default supplement;
