import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Welche Reihenfolge empfiehlt die Strategie beim Textverständnis?",
      back: "Erst die Fragen lesen, dann den Text lesen – so weiß man, wonach man gezielt suchen muss."
    },
    {
      front: "Warum soll man zuerst die Fragen lesen?",
      back: "Um gezielt nach Schlüsselwörtern im Text zu suchen und keine Zeit zu verschwenden."
    },
    {
      front: "Welche Wörter machen Aussagen im Text oft falsch?",
      back: "Absolute Wörter wie 'immer', 'nie', 'nur' und 'ausschließlich' – sie schränken stark ein und stimmen häufig nicht."
    },
    {
      front: "Wie soll man jede Antwortoption beim Textverständnis behandeln?",
      back: "Jede Option am Text prüfen und belegen – niemals raten."
    },
    {
      front: "Was ist die Funktion von Schlüsselwörtern beim Textverständnis?",
      back: "Sie helfen, die relevante Textstelle schnell zu finden, nachdem man die Fragen gelesen hat."
    },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welche Reihenfolge ist laut Strategie beim Textverständnis richtig?",
      options: [
        "Den Text lesen, dann die Fragen lesen",
        "Zuerst die Fragen lesen, dann den Text lesen",
        "Text und Fragen gleichzeitig lesen",
        "Nur den Text lesen und die Fragen ignorieren"
      ],
      correct: [1],
      explanation: "Die Strategie empfiehlt, zuerst die Fragen zu lesen, um danach gezielt nach Schlüsselwörtern im Text suchen zu können.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Warum ist es sinnvoll, vor dem Lesen des Textes die Fragen zu lesen?",
      options: [
        "Um den Text schneller überfliegen zu können",
        "Weil die Fragen den Text ersetzen",
        "Um gezielt nach Schlüsselwörtern im Text suchen zu können",
        "Damit man weniger Optionen prüfen muss"
      ],
      correct: [2],
      explanation: "Durch das vorherige Lesen der Fragen weiß man, welche Schlüsselwörter und Informationen im Text relevant sind.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Wort ist ein typisches Beispiel für einen Ausdruck, der eine Aussage im Text oft falsch macht?",
      options: [
        "manchmal",
        "häufig",
        "immer",
        "meistens"
      ],
      correct: [2],
      explanation: "Absolute Ausdrucke wie 'immer', 'nie', 'nur' oder 'ausschließlich' schränken Aussagen so stark ein, dass sie häufig nicht korrekt sind.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Wenn man beim Textverständnis unsicher ist, darf man die Antwort raten, ohne sie am Text zu prüfen.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Laut Strategie soll jede Antwortoption am Text geprüft werden – raten ist ausdrücklich nicht empfohlen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was soll man laut Strategie mit JEDER Antwortoption beim Textverständnis tun?",
      options: [
        "Die plausibelste Option wählen, ohne den Text zu prüfen",
        "Nur die erste und letzte Option prüfen",
        "Jede Option am Text prüfen und belegen",
        "Die Option wählen, die am längsten ist"
      ],
      correct: [2],
      explanation: "Die Strategie verlangt, jede einzelne Antwortoption am Texte zu prüfen, um sicher die richtige Antwort zu begründen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Eine Aussage im Prüfungstext lautet: 'Schüler dürfen ausschließlich blaue Stifte verwenden.' Wie bewertet die Strategie solche Formulierungen?",
      options: [
        "Solche Aussagen sind immer korrekt und müssen nicht geprüft werden",
        "Absolute Wörter wie 'ausschließlich' machen Aussagen oft falsch – Vorsicht ist geboten",
        "Nur Wörter wie 'immer' sind problematisch, nicht 'ausschließlich'",
        "Absolute Formulierungen erleichtern das Textverständnis"
      ],
      correct: [1],
      explanation: "Laut Strategie machen Wörter wie 'ausschließlich', 'immer', 'nie' oder 'nur' Aussagen häufig falsch – man soll deshalb besonders vorsichtig sein.",
      difficulty: 1
    },
  ],
};
export default supplement;
