import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Welche Reihenfolge empfiehlt die Strategie beim Textverstaendnis?",
      back: "Erst die Fragen lesen, dann den Text lesen – so weiss man, wonach man gezielt suchen muss."
    },
    {
      front: "Warum soll man zuerst die Fragen lesen?",
      back: "Um gezielt nach Schluesselwoertern im Text zu suchen und keine Zeit zu verschwenden."
    },
    {
      front: "Welche Woerter machen Aussagen im Text oft falsch?",
      back: "Absolute Woerter wie 'immer', 'nie', 'nur' und 'ausschliesslich' – sie schraenken stark ein und stimmen haeufig nicht."
    },
    {
      front: "Wie soll man jede Antwortoption beim Textverstaendnis behandeln?",
      back: "Jede Option am Text pruefen und belegen – niemals raten."
    },
    {
      front: "Was ist die Funktion von Schluesselwoertern beim Textverstaendnis?",
      back: "Sie helfen, die relevante Textstelle schnell zu finden, nachdem man die Fragen gelesen hat."
    },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welche Reihenfolge ist laut Strategie beim Textverstaendnis richtig?",
      options: [
        "Den Text lesen, dann die Fragen lesen",
        "Zuerst die Fragen lesen, dann den Text lesen",
        "Text und Fragen gleichzeitig lesen",
        "Nur den Text lesen und die Fragen ignorieren"
      ],
      correct: [1],
      explanation: "Die Strategie empfiehlt, zuerst die Fragen zu lesen, um danach gezielt nach Schluesselwoertern im Text suchen zu koennen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Warum ist es sinnvoll, vor dem Lesen des Textes die Fragen zu lesen?",
      options: [
        "Um den Text schneller ueberfliegen zu koennen",
        "Weil die Fragen den Text ersetzen",
        "Um gezielt nach Schluesselwoertern im Text suchen zu koennen",
        "Damit man weniger Optionen pruefen muss"
      ],
      correct: [2],
      explanation: "Durch das vorherige Lesen der Fragen weiss man, welche Schluesselwoerter und Informationen im Text relevant sind.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein typisches Beispiel fuer einen Ausdruck, der eine Aussage im Text oft falsch macht?",
      options: [
        "manchmal",
        "haeufig",
        "immer",
        "meistens"
      ],
      correct: [2],
      explanation: "Absolute Ausdrucke wie 'immer', 'nie', 'nur' oder 'ausschliesslich' schraenken Aussagen so stark ein, dass sie haeufig nicht korrekt sind.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Wenn man beim Textverstaendnis unsicher ist, darf man die Antwort raten, ohne sie am Text zu pruefen.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Laut Strategie soll jede Antwortoption am Text geprueft werden – raten ist ausdruecklich nicht empfohlen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was soll man laut Strategie mit JEDER Antwortoption beim Textverstaendnis tun?",
      options: [
        "Die plausibelste Option waehlen, ohne den Text zu pruefen",
        "Nur die erste und letzte Option pruefen",
        "Jede Option am Text pruefen und belegen",
        "Die Option waehlen, die am laengsten ist"
      ],
      correct: [2],
      explanation: "Die Strategie verlangt, jede einzelne Antwortoption am Texte zu pruefen, um sicher die richtige Antwort zu begruenden.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Eine Aussage im Pruefungstext lautet: 'Schüler duerfen ausschliesslich blaue Stifte verwenden.' Wie bewertet die Strategie solche Formulierungen?",
      options: [
        "Solche Aussagen sind immer korrekt und muessen nicht geprueft werden",
        "Absolute Woerter wie 'ausschliesslich' machen Aussagen oft falsch – Vorsicht ist geboten",
        "Nur Woerter wie 'immer' sind problematisch, nicht 'ausschliesslich'",
        "Absolute Formulierungen erleichtern das Textverstaendnis"
      ],
      correct: [1],
      explanation: "Laut Strategie machen Woerter wie 'ausschliesslich', 'immer', 'nie' oder 'nur' Aussagen haeufig falsch – man soll deshalb besonders vorsichtig sein.",
      difficulty: 1
    },
  ],
};
export default supplement;
