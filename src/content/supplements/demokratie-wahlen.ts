import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was bedeutet Volkssouveraenitaet?",
      back: "Alle Staatsgewalt geht vom Volk aus."
    },
    {
      front: "Was ist eine Koalition?",
      back: "Ein Parteienbuendnis zur Regierungsbildung."
    },
    {
      front: "Was ist eine Fraktion?",
      back: "Der Zusammenschluss der Abgeordneten einer Partei im Parlament."
    },
    {
      front: "Nenne die fuenf Wahlrechtsgrundsaetze.",
      back: "Allgemein, unmittelbar, frei, gleich, geheim."
    },
    {
      front: "Ab welchem Alter gilt das aktive Wahlrecht in Deutschland?",
      back: "Ab 18 Jahren."
    },
    {
      front: "Wofuer steht die Erststimme bei der Bundestagswahl?",
      back: "Fuer den Direktkandidaten im Wahlkreis."
    },
    {
      front: "Wofuer steht die Zweitstimme und warum ist sie wichtig?",
      back: "Die Zweitstimme gilt der Partei und ist entscheidend fuer die Sitzverteilung im Bundestag."
    },
    {
      front: "Was besagt die 5-Prozent-Huerde?",
      back: "Eine Partei muss mindestens 5 Prozent der Zweitstimmen erhalten, um in den Bundestag einzuziehen."
    },
    {
      front: "Was ist das konstruktive Misstrauensvotum?",
      back: "Der Kanzler ist nur abwaehlbar, wenn gleichzeitig ein Nachfolger gewaehlt wird."
    },
    {
      front: "Wann fand die letzte Bundestagswahl statt und wie viele Sitze hat der 21. Bundestag?",
      back: "Die letzte Bundestagswahl war am 23. Februar 2025; der 21. Bundestag hat 630 Sitze."
    },
    {
      front: "Welche Fraktionen sitzen im 21. Bundestag?",
      back: "CDU/CSU (staerkste Fraktion), AfD, SPD, Buendnis 90/Die Gruenen und Die Linke. Dazu der SSW mit 1 Sitz."
    },
    {
      front: "Welche Parteien bilden die Regierungskoalition nach der Bundestagswahl 2025?",
      back: "CDU/CSU und SPD."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was bedeutet der Grundsatz der Volkssouveraenitaet?",
      options: [
        "Der Staat hat uneingeschraenkte Macht ueber das Volk.",
        "Alle Staatsgewalt geht vom Volk aus.",
        "Das Parlament waehlt den Staatspraesident direkt.",
        "Nur Buerger mit Wohnsitz duerfen waehlen."
      ],
      correct: [1],
      explanation: "Volkssouveraenitaet bedeutet, dass alle Staatsgewalt vom Volk ausgeht.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist der Unterschied zwischen einer Koalition und einer Fraktion?",
      options: [
        "Koalition ist ein Zusammenschluss im Parlament, Fraktion ein Wahlbuendnis.",
        "Beide Begriffe bezeichnen dasselbe.",
        "Koalition ist ein Parteienbuendnis zur Regierungsbildung, Fraktion der Zusammenschluss von Abgeordneten einer Partei im Parlament.",
        "Eine Fraktion muss mindestens 50 Abgeordnete haben."
      ],
      correct: [2],
      explanation: "Eine Koalition ist ein Buendnis mehrerer Parteien zur Regierungsbildung, waehrend eine Fraktion die Abgeordneten einer Partei im Parlament zusammenfasst.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher der folgenden Begriffe gehoert NICHT zu den fuenf Wahlrechtsgrundsaetzen?",
      options: [
        "Allgemein",
        "Geheim",
        "Mehrheitlich",
        "Frei"
      ],
      correct: [2],
      explanation: "Die fuenf Wahlrechtsgrundsaetze lauten: allgemein, unmittelbar, frei, gleich, geheim. 'Mehrheitlich' gehoert nicht dazu.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wofuer gibt der Waehler bei der Bundestagswahl die Zweitstimme ab?",
      options: [
        "Fuer den Direktkandidaten im Wahlkreis.",
        "Fuer den Bundeskanzler.",
        "Fuer eine Partei, die ueber die Sitzverteilung entscheidet.",
        "Fuer den Bundespraesident."
      ],
      correct: [2],
      explanation: "Die Zweitstimme gilt der Partei und ist entscheidend fuer die Sitzverteilung im Bundestag.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was besagt die 5-Prozent-Huerde bei Bundestagswahlen?",
      options: [
        "Eine Partei muss mindestens 5 Direktmandate gewinnen.",
        "Eine Partei muss mindestens 5 Prozent der Zweitstimmen erhalten, um in den Bundestag einzuziehen.",
        "Jede Partei erhaelt mindestens 5 Sitze im Bundestag.",
        "5 Prozent der Abgeordneten koennen den Kanzler abwaehlen."
      ],
      correct: [1],
      explanation: "Die 5-Prozent-Huerde verlangt, dass eine Partei mindestens 5 Prozent der Zweitstimmen bundesweit erzielt, um in den Bundestag einzuziehen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist das konstruktive Misstrauensvotum?",
      options: [
        "Der Bundestag kann den Kanzler jederzeit durch einfache Mehrheit abwaehlen.",
        "Der Kanzler kann nur abgewaehlt werden, wenn gleichzeitig ein Nachfolger gewaehlt wird.",
        "Der Bundesrat kann dem Kanzler das Misstrauen aussprechen.",
        "Das Volk stimmt direkt ueber den Kanzler ab."
      ],
      correct: [1],
      explanation: "Beim konstruktiven Misstrauensvotum kann der Bundestag den Kanzler nur abwaehlen, wenn er gleichzeitig einen neuen Kanzler waehlt.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wann fand die letzte Bundestagswahl statt?",
      options: [
        "15. September 2024",
        "23. Februar 2025",
        "7. Oktober 2024",
        "1. Maerz 2025"
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
      prompt: "Welche Fraktion ist die staerkste im 21. Bundestag?",
      options: [
        "AfD",
        "SPD",
        "Buendnis 90/Die Gruenen",
        "CDU/CSU"
      ],
      correct: [3],
      explanation: "CDU/CSU ist die staerkste Fraktion im 21. Bundestag.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Koalition regiert nach der Bundestagswahl 2025?",
      options: [
        "CDU/CSU und AfD",
        "SPD und Buendnis 90/Die Gruenen",
        "CDU/CSU und SPD",
        "CDU/CSU, SPD und FDP"
      ],
      correct: [2],
      explanation: "Nach der Bundestagswahl 2025 bilden CDU/CSU und SPD die Regierungskoalition.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Die Erststimme bei der Bundestagswahl entscheidet ueber die Sitzverteilung der Parteien im Bundestag.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "Falsch. Die Zweitstimme (Parteistimme) ist entscheidend fuer die Sitzverteilung. Die Erststimme bestimmt den Direktkandidaten im Wahlkreis.",
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
