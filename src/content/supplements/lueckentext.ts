import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Worauf muss man beim Lückentext achten?",
      back: "Auf Sinn UND Grammatik: das eingesetzte Wort muss inhaltlich passen und den richtigen Fall sowie die richtige Zeitform haben."
    },
    {
      front: "Was prüfen bei der Fehlersuche?",
      back: "Rechtschreib-, Grammatik- und Kommafehler – besonders auf das/dass, Gross-/Kleinschreibung und Kommas achten."
    },
    {
      front: "Wie liest man einen Satz bei der Fehlersuche am besten?",
      back: "Langsam lesen, damit keine Fehler übersehen werden."
    },
    {
      front: "Welche drei Fehlerkategorien gibt es bei der Fehlersuche?",
      back: "1. Rechtschreibfehler, 2. Grammatikfehler, 3. Kommafehler."
    },
    {
      front: "Woran erkennt man, ob ein eingesetztes Wort im Lückentext grammatikalisch korrekt ist?",
      back: "Es muss in Fall (Kasus) und Zeitform (Tempus) zum restlichen Satz passen."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was muss beim Einsetzen eines Wortes im Lückentext unbedingt beachtet werden?",
      options: [
        "Nur der Sinn des Satzes",
        "Nur die Rechtschreibung des Wortes",
        "Sinn UND Grammatik (Fall und Zeitform)",
        "Die Länge des Wortes"
      ],
      correct: [2],
      explanation: "Das eingesetzte Wort muss sowohl inhaltlich sinnvoll sein als auch grammatikalisch korrekt – also richtiger Fall und richtige Zeitform.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Fehlerpaare wird bei der Fehlersuche besonders hervorgehoben?",
      options: [
        "ihr/Ihr und man/Mann",
        "das/dass und Gross-/Kleinschreibung",
        "seit/seid und wieder/wider",
        "weil/da und ob/wenn"
      ],
      correct: [1],
      explanation: "Der Lerntipp nennt explizit das/dass, Gross-/Kleinschreibung und Kommas als besondere Stolperfallen bei der Fehlersuche.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Strategie wird für die Fehlersuche empfohlen?",
      options: [
        "Den Text schnell überfliegen",
        "Nur auf Kommas achten",
        "Den Satz langsam lesen",
        "Nur Substantive prüfen"
      ],
      correct: [2],
      explanation: "Langsames Lesen hilft, alle Arten von Fehlern zu entdecken und nichts zu übersehen.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Bei der Fehlersuche genügt es, nur auf Rechtschreibfehler zu achten.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "Es müssen auch Grammatik- und Kommafehler beachtet werden – alle drei Kategorien sind relevant.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche grammatikalischen Aspekte muss ein eingesetztes Wort im Lückentext erfüllen?",
      options: [
        "Richtige Silbenanzahl und Betonung",
        "Richtiger Fall (Kasus) und richtige Zeitform (Tempus)",
        "Richtiges Geschlecht und richtige Silbentrennung",
        "Richtige Wortlänge und Endung"
      ],
      correct: [1],
      explanation: "Das Wort muss im richtigen Kasus und im richtigen Tempus stehen, damit es grammatikalisch in den Satz passt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Warum ist das Verwechseln von 'das' und 'dass' ein typischer Fehler bei der Fehlersuche?",
      options: [
        "Weil beide Wörter gleich ausgesprochen werden und leicht verwechselt werden",
        "Weil 'dass' immer großgeschrieben wird",
        "Weil 'das' nur als Artikel vorkommt",
        "Weil beide Wörter unterschiedlich betont werden"
      ],
      correct: [0],
      explanation: "Das/dass klingt identisch, hat aber unterschiedliche grammatikalische Funktionen – deshalb wird es im Lernskript als besondere Stolperfalle genannt.",
      difficulty: 1
    }
  ],
};
export default supplement;
