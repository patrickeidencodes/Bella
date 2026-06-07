import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was bedeutet Volkssouveränität?",
      back: "Alle Staatsgewalt geht vom Volk aus."
    },
    {
      front: "Was ist eine Koalition?",
      back: "Ein Parteienbündnis zur Regierungsbildung."
    },
    {
      front: "Was ist eine Fraktion?",
      back: "Der Zusammenschluss der Abgeordneten einer Partei im Parlament."
    },
    {
      front: "Nenne die fünf Wahlrechtsgrundsätze.",
      back: "Allgemein, unmittelbar, frei, gleich, geheim."
    },
    {
      front: "Ab welchem Alter gilt das aktive Wahlrecht in Deutschland?",
      back: "Ab 18 Jahren."
    },
    {
      front: "Wofür steht die Erststimme bei der Bundestagswahl?",
      back: "Für den Direktkandidaten im Wahlkreis."
    },
    {
      front: "Wofür steht die Zweitstimme und warum ist sie wichtig?",
      back: "Die Zweitstimme gilt der Partei und ist entscheidend für die Sitzverteilung im Bundestag."
    },
    {
      front: "Was besagt die 5-Prozent-Hürde?",
      back: "Eine Partei muss mindestens 5 Prozent der Zweitstimmen erhalten, um in den Bundestag einzuziehen."
    },
    {
      front: "Was ist das konstruktive Misstrauensvotum?",
      back: "Der Kanzler ist nur abwählbar, wenn gleichzeitig ein Nachfolger gewählt wird."
    },
    {
      front: "Wann fand die letzte Bundestagswahl statt und wie viele Sitze hat der 21. Bundestag?",
      back: "Die letzte Bundestagswahl war am 23. Februar 2025; der 21. Bundestag hat 630 Sitze."
    },
    {
      front: "Welche Fraktionen sitzen im 21. Bundestag?",
      back: "CDU/CSU (stärkste Fraktion), AfD, SPD, Bündnis 90/Die Grünen und Die Linke. Dazu der SSW mit 1 Sitz."
    },
    {
      front: "Welche Parteien bilden die Regierungskoalition nach der Bundestagswahl 2025?",
      back: "CDU/CSU und SPD."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was bedeutet der Grundsatz der Volkssouveränität?",
      options: [
        "Der Staat hat uneingeschränkte Macht über das Volk.",
        "Alle Staatsgewalt geht vom Volk aus.",
        "Das Parlament wählt den Staatspräsident direkt.",
        "Nur Bürger mit Wohnsitz dürfen wählen."
      ],
      correct: [1],
      explanation: "Volkssouveränität bedeutet, dass alle Staatsgewalt vom Volk ausgeht.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist der Unterschied zwischen einer Koalition und einer Fraktion?",
      options: [
        "Koalition ist ein Zusammenschluss im Parlament, Fraktion ein Wahlbündnis.",
        "Beide Begriffe bezeichnen dasselbe.",
        "Koalition ist ein Parteienbündnis zur Regierungsbildung, Fraktion der Zusammenschluss von Abgeordneten einer Partei im Parlament.",
        "Eine Fraktion muss mindestens 50 Abgeordnete haben."
      ],
      correct: [2],
      explanation: "Eine Koalition ist ein Bündnis mehrerer Parteien zur Regierungsbildung, während eine Fraktion die Abgeordneten einer Partei im Parlament zusammenfasst.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher der folgenden Begriffe gehört NICHT zu den fünf Wahlrechtsgrundsätzen?",
      options: [
        "Allgemein",
        "Geheim",
        "Mehrheitlich",
        "Frei"
      ],
      correct: [2],
      explanation: "Die fünf Wahlrechtsgrundsätze lauten: allgemein, unmittelbar, frei, gleich, geheim. 'Mehrheitlich' gehört nicht dazu.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wofür gibt der Wähler bei der Bundestagswahl die Zweitstimme ab?",
      options: [
        "Für den Direktkandidaten im Wahlkreis.",
        "Für den Bundeskanzler.",
        "Für eine Partei, die über die Sitzverteilung entscheidet.",
        "Für den Bundespräsident."
      ],
      correct: [2],
      explanation: "Die Zweitstimme gilt der Partei und ist entscheidend für die Sitzverteilung im Bundestag.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was besagt die 5-Prozent-Hürde bei Bundestagswahlen?",
      options: [
        "Eine Partei muss mindestens 5 Direktmandate gewinnen.",
        "Eine Partei muss mindestens 5 Prozent der Zweitstimmen erhalten, um in den Bundestag einzuziehen.",
        "Jede Partei erhält mindestens 5 Sitze im Bundestag.",
        "5 Prozent der Abgeordneten können den Kanzler abwählen."
      ],
      correct: [1],
      explanation: "Die 5-Prozent-Hürde verlangt, dass eine Partei mindestens 5 Prozent der Zweitstimmen bundesweit erzielt, um in den Bundestag einzuziehen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist das konstruktive Misstrauensvotum?",
      options: [
        "Der Bundestag kann den Kanzler jederzeit durch einfache Mehrheit abwählen.",
        "Der Kanzler kann nur abgewählt werden, wenn gleichzeitig ein Nachfolger gewählt wird.",
        "Der Bundesrat kann dem Kanzler das Misstrauen aussprechen.",
        "Das Volk stimmt direkt über den Kanzler ab."
      ],
      correct: [1],
      explanation: "Beim konstruktiven Misstrauensvotum kann der Bundestag den Kanzler nur abwählen, wenn er gleichzeitig einen neuen Kanzler wählt.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wann fand die letzte Bundestagswahl statt?",
      options: [
        "15. September 2024",
        "23. Februar 2025",
        "7. Oktober 2024",
        "1. März 2025"
      ],
      correct: [1],
      explanation: "Die letzte Bundestagswahl fand am 23. Februar 2025 statt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie viele Sitze hat der 21. Bundestag?",
      options: [
        "598",
        "736",
        "630",
        "709"
      ],
      correct: [2],
      explanation: "Der 21. Bundestag hat 630 Sitze.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Fraktion ist die stärkste im 21. Bundestag?",
      options: [
        "AfD",
        "SPD",
        "Bündnis 90/Die Grünen",
        "CDU/CSU"
      ],
      correct: [3],
      explanation: "CDU/CSU ist die stärkste Fraktion im 21. Bundestag.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Koalition regiert nach der Bundestagswahl 2025?",
      options: [
        "CDU/CSU und AfD",
        "SPD und Bündnis 90/Die Grünen",
        "CDU/CSU und SPD",
        "CDU/CSU, SPD und FDP"
      ],
      correct: [2],
      explanation: "Nach der Bundestagswahl 2025 bilden CDU/CSU und SPD die Regierungskoalition.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Die Erststimme bei der Bundestagswahl entscheidet über die Sitzverteilung der Parteien im Bundestag.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "Falsch. Die Zweitstimme (Parteistimme) ist entscheidend für die Sitzverteilung. Die Erststimme bestimmt den Direktkandidaten im Wahlkreis.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "In Deutschland gilt das aktive Wahlrecht ab 18 Jahren.",
      options: ["Wahr", "Falsch"],
      correct: [0],
      explanation: "Richtig. Das aktive Wahlrecht beginnt in Deutschland mit dem 18. Lebensjahr.",
      difficulty: 1
    }
  ],
};

export default supplement;
