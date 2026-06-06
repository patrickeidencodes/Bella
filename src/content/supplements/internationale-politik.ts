import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Welche 5 Staaten sind ständige Mitglieder des UN-Sicherheitsrats mit Vetorecht?",
      back: "USA, Russland, China, Großbritannien und Frankreich."
    },
    {
      front: "Wie viele Mitglieder hat der UN-Sicherheitsrat insgesamt?",
      back: "15 Mitglieder: 5 ständige (mit Vetorecht) + 10 nichtständige Mitglieder."
    },
    {
      front: "Welche Länder gehören zur G7?",
      back: "USA, Kanada, Deutschland, Frankreich, Großbritannien, Italien, Japan – sowie die EU als Teilnehmer."
    },
    {
      front: "Was ist der Unterschied zwischen G7 und G20?",
      back: "Die G7 umfasst 7 große Industriestaaten + EU; die G20 umfasst 19 führende Wirtschaftsnationen + EU + Afrikanische Union, darunter auch Schwellenländer wie China, Indien und Brasilien."
    },
    {
      front: "Was ist der Europarat und wo hat er seinen Sitz?",
      back: "Der Europarat ist eine Menschenrechtsorganisation mit 46 Mitgliedsstaaten und Sitz in Straßburg. Er ist NICHT identisch mit der EU."
    },
    {
      front: "Welches Gericht gehört zum Europarat und wo befindet es sich?",
      back: "Der Europäische Gerichtshof für Menschenrechte (EGMR) – Sitz ebenfalls in Straßburg."
    },
    {
      front: "Wofür steht die Abkürzung WHO?",
      back: "WHO steht für Weltgesundheitsorganisation; sie gehört zur UNO."
    },
    {
      front: "Was ist der IWF (IMF) und welche Aufgabe hat er?",
      back: "Der Internationale Währungsfonds (IWF/IMF) sichert die Stabilität des internationalen Finanzsystems."
    },
    {
      front: "Was ist die OPEC?",
      back: "Die OPEC ist die Organisation erdölexportierender Länder."
    },
    {
      front: "Wer ist aktuell (Stand 2026) NATO-Generalsekretär und wie viele Mitglieder hat die NATO?",
      back: "NATO-Generalsekretär ist Mark Rutte; die NATO hat 32 Mitgliedsstaaten."
    },
    {
      front: "Wer ist der amtierende UN-Generalsekretär (Stand 2026)?",
      back: "António Guterres ist Generalsekretär der Vereinten Nationen."
    },
    {
      front: "Wann begann Russlands Angriffskrieg gegen die Ukraine?",
      back: "Am 24. Februar 2022."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welches ist das wichtigste Organ der Vereinten Nationen für die Wahrung von Frieden und Sicherheit?",
      options: ["Die UN-Generalversammlung", "Der UN-Sicherheitsrat", "Der Internationale Gerichtshof", "Das UN-Sekretariat"],
      correct: [1],
      explanation: "Der UN-Sicherheitsrat ist das zentrale Organ der UNO für Frieden und internationale Sicherheit.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie viele ständige Mitglieder mit Vetorecht hat der UN-Sicherheitsrat?",
      options: ["3", "7", "5", "10"],
      correct: [2],
      explanation: "Fünf Staaten sind ständige Mitglieder mit Vetorecht: USA, Russland, China, Großbritannien und Frankreich.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher Staat ist KEIN ständiges Mitglied des UN-Sicherheitsrats?",
      options: ["Russland", "Deutschland", "China", "Frankreich"],
      correct: [1],
      explanation: "Deutschland ist kein ständiges Mitglied des UN-Sicherheitsrats. Die fünf ständigen Mitglieder sind USA, Russland, China, Großbritannien und Frankreich.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welche Ländergruppe umfasst auch Schwellenländer wie China, Indien und Brasilien?",
      options: ["G7", "Europarat", "G20", "OPEC"],
      correct: [2],
      explanation: "Die G20 besteht aus 19 führenden Wirtschaftsnationen + EU + Afrikanische Union und schließt ausdrücklich Schwellenländer ein.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Der Europarat und die Europäische Union (EU) sind dieselbe Organisation.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Der Europarat ist eine separate Menschenrechtsorganisation mit 46 Mitgliedsstaaten und Sitz in Straßburg. Er ist NICHT identisch mit der EU.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wo hat der Europarat seinen Sitz?",
      options: ["Brüssel", "Genf", "Wien", "Straßburg"],
      correct: [3],
      explanation: "Der Europarat hat seinen Sitz in Straßburg – ebenso wie der dazugehörige Europäische Gerichtshof für Menschenrechte (EGMR).",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wie viele Mitgliedsstaaten hat der Europarat (Stand 2026)?",
      options: ["27", "32", "46", "54"],
      correct: [2],
      explanation: "Der Europarat zählt 46 Mitgliedsstaaten und ist damit deutlich größer als die EU.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welche Organisation ist für die Stabilität des internationalen Finanzsystems zuständig?",
      options: ["Weltbank", "OPEC", "WHO", "IWF (IMF)"],
      correct: [3],
      explanation: "Der Internationale Währungsfonds (IWF/IMF) hat die Aufgabe, die Stabilität des Weltfinanzsystems zu sichern.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Die Weltbank finanziert Entwicklungsprojekte weltweit.",
      options: ["Richtig", "Falsch"],
      correct: [0],
      explanation: "Die Weltbank hat die Aufgabe, Entwicklung weltweit finanziell zu fördern und zu finanzieren.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wer ist aktuell (Stand 2026) NATO-Generalsekretär?",
      options: ["Jens Stoltenberg", "António Guterres", "Mark Rutte", "Ursula von der Leyen"],
      correct: [2],
      explanation: "Mark Rutte ist seit 2024 NATO-Generalsekretär und löste damit Jens Stoltenberg ab.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wie viele Mitgliedsstaaten hat die NATO aktuell (Stand 2026)?",
      options: ["27", "30", "32", "35"],
      correct: [2],
      explanation: "Die NATO hat aktuell 32 Mitgliedsstaaten.",
      difficulty: 2
    },
    {
      type: "fill",
      prompt: "Russlands Angriffskrieg gegen die Ukraine begann am ___.",
      correct: ["24. Februar 2022", "24.02.2022"],
      explanation: "Der russische Angriffskrieg gegen die Ukraine begann am 24. Februar 2022.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche der folgenden Organisationen ist KEINE UN-Unterorganisation oder UN-Sonderorganisation?",
      options: ["WHO", "IWF (IMF)", "OPEC", "Weltbank"],
      correct: [2],
      explanation: "Die OPEC (Organisation erdölexportierender Länder) ist eine eigenständige zwischenstaatliche Organisation und gehört nicht zur UNO. WHO, IWF und Weltbank sind UN-Sonderorganisationen.",
      difficulty: 3
    },
    {
      type: "mc",
      prompt: "Wer ist aktuell (Stand 2026) Präsident der Vereinigten Staaten?",
      options: ["Joe Biden", "Barack Obama", "Kamala Harris", "Donald Trump"],
      correct: [3],
      explanation: "Donald Trump ist seit Januar 2025 erneut US-Präsident.",
      difficulty: 1
    }
  ],
};

export default supplement;
