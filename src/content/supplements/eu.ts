import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Welche Aufgabe hat das Europäische Parlament und wo tagt es?",
      back: "Das Europäische Parlament wird direkt von den EU-Bürgern gewählt und ist gemeinsam mit dem Rat der EU für die Gesetzgebung zuständig. Es tagt in Straßburg und Brüssel."
    },
    {
      front: "Was ist der Europäische Rat und wer gehört ihm an?",
      back: "Der Europäische Rat besteht aus den Staats- und Regierungschefs der EU-Mitgliedstaaten. Er gibt die politischen Leitlinien und Prioritäten der EU vor."
    },
    {
      front: "Was ist der Rat der EU (Ministerrat) und welche Aufgabe hat er?",
      back: "Im Rat der EU treffen sich die Fachminister der Mitgliedstaaten. Er ist gemeinsam mit dem Europäischen Parlament für die EU-Gesetzgebung verantwortlich."
    },
    {
      front: "Welche Rolle spielt die Europäische Kommission und wo hat sie ihren Sitz?",
      back: "Die Europäische Kommission ist die Exekutive der EU – vergleichbar mit einer Regierung. Sie hat ihren Sitz in Brüssel und schlägt Gesetze vor."
    },
    {
      front: "Was ist die Aufgabe des Europäischen Gerichtshofs (EuGH) und wo sitzt er?",
      back: "Der EuGH legt das EU-Recht verbindlich aus und sorgt für seine einheitliche Anwendung in allen Mitgliedstaaten. Er hat seinen Sitz in Luxemburg."
    },
    {
      front: "Was ist die Aufgabe der Europäischen Zentralbank (EZB) und wo ist sie ansässig?",
      back: "Die EZB ist für die Geldpolitik der Eurozone zuständig – sie steuert z. B. die Geldmenge und die Zinsen. Ihr Sitz ist Frankfurt am Main."
    },
    {
      front: "Wie viele Mitgliedstaaten hat die EU und wie viele Länder nutzen den Euro?",
      back: "Die EU hat 27 Mitgliedstaaten. Den Euro als Währung verwenden 21 Länder (Eurozone, Stand 2026 inkl. Bulgarien)."
    },
    {
      front: "Was symbolisieren die 12 Sterne auf der Europaflagge und was bedeutet das Schengener Abkommen?",
      back: "Die 12 Sterne der Europaflagge stehen für Einheit, Solidarität und Harmonie. Das Schengener Abkommen ermöglicht Reisefreiheit ohne Grenzkontrollen – im Alltag z. B. im Saarland deutlich spürbar."
    },
    {
      front: "Wer sind die aktuellen Amtsträger an der Spitze der EU-Institutionen (Stand 2026)?",
      back: "EU-Kommissionspräsidentin: Ursula von der Leyen (seit Dez. 2024 in ihrer 2. Amtszeit). Präsident des Europäischen Rates: António Costa. EU-Parlamentspräsidentin: Roberta Metsola."
    },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Wie viele Mitgliedstaaten hat die Europäische Union (Stand 2026)?",
      options: ["25", "27", "30", "32"],
      correct: [1],
      explanation: "Die EU hat 27 Mitgliedstaaten.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wo hat die Europäische Zentralbank (EZB) ihren Sitz?",
      options: ["Brüssel", "Luxemburg", "Frankfurt am Main", "Straßburg"],
      correct: [2],
      explanation: "Die EZB ist für die Geldpolitik des Euro zuständig und hat ihren Sitz in Frankfurt am Main.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Institution der EU legt das EU-Recht verbindlich aus?",
      options: ["Europäische Kommission", "Europäisches Parlament", "Europäischer Gerichtshof (EuGH)", "Rat der EU"],
      correct: [2],
      explanation: "Der EuGH mit Sitz in Luxemburg ist für die verbindliche Auslegung des EU-Rechts zuständig.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wer ist seit Dezember 2024 in ihrer zweiten Amtszeit EU-Kommissionspräsidentin?",
      options: ["Roberta Metsola", "Christine Lagarde", "Ursula von der Leyen", "Angela Merkel"],
      correct: [2],
      explanation: "Ursula von der Leyen ist seit Dezember 2024 in ihrer zweiten Amtszeit als EU-Kommissionspräsidentin tätig.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wie viele Sterne hat die Europaflagge?",
      options: ["15", "27", "12", "10"],
      correct: [2],
      explanation: "Die Europaflagge trägt 12 goldene Sterne, die für Einheit, Solidarität und Harmonie stehen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Institution setzt sich aus den Fachministern der EU-Mitgliedstaaten zusammen?",
      options: ["Europäisches Parlament", "Europäische Kommission", "Europäischer Rat", "Rat der EU (Ministerrat)"],
      correct: [3],
      explanation: "Im Rat der EU (Ministerrat) treffen sich die zuständigen Fachminister der Mitgliedstaaten, um gemeinsam mit dem Parlament Gesetze zu beschließen.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Das Europäische Parlament wird direkt von den Bürgerinnen und Bürgern der EU gewählt.",
      options: ["Richtig", "Falsch"],
      correct: [0],
      explanation: "Richtig. Das Europäische Parlament ist das einzige direkt gewählte Organ der EU.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Die Europäische Kommission hat ihren Hauptsitz in Straßburg.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Falsch. Die Europäische Kommission hat ihren Sitz in Brüssel. Straßburg ist der Hauptsitz des Europäischen Parlaments.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wer ist Präsident des Europäischen Rates (Stand 2026)?",
      options: ["Charles Michel", "António Costa", "Donald Tusk", "Herman Van Rompuy"],
      correct: [1],
      explanation: "António Costa ist seit Dezember 2024 Präsident des Europäischen Rates.",
      difficulty: 3
    },
    {
      type: "mc",
      prompt: "Wie viele Länder nutzen den Euro als Währung (Stand 2026, inkl. Bulgarien)?",
      options: ["19", "20", "21", "27"],
      correct: [2],
      explanation: "Die Eurozone umfasst seit 2026 mit Bulgarien 21 Länder.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Das Schengener Abkommen ermöglicht Reisefreiheit ohne Grenzkontrollen zwischen den Schengen-Staaten.",
      options: ["Richtig", "Falsch"],
      correct: [0],
      explanation: "Richtig. Das Schengen-Abkommen schafft einen gemeinsamen Reiseraum ohne Grenzkontrollen, was z. B. im Saarland im grenznahen Alltag deutlich spürbar ist.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche internationale Organisation ist ein Verteidigungsbündnis mit 32 Mitgliedern (Stand 2026)?",
      options: ["UNO", "WTO", "NATO", "EU"],
      correct: [2],
      explanation: "Die NATO ist ein Verteidigungsbündnis und hat 32 Mitglieder. Die UNO sind die Vereinten Nationen, die WTO die Welthandelsorganisation.",
      difficulty: 2
    },
  ],
};

export default supplement;
