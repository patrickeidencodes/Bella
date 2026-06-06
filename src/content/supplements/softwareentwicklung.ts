import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was ist ein Algorithmus?",
      back: "Eine eindeutige Schritt-für-Schritt-Anleitung zur Lösung eines Problems – vergleichbar mit einem Kochrezept."
    },
    {
      front: "Was ist ein Lastenheft?",
      back: "Das Lastenheft wird vom Kunden erstellt und beschreibt WAS er will – also seine Anforderungen (Wunschzettel)."
    },
    {
      front: "Was ist ein Pflichtenheft?",
      back: "Das Pflichtenheft wird vom Auftragnehmer erstellt und beschreibt WIE er die Anforderungen umsetzt – also das konkrete Angebot."
    },
    {
      front: "Was bedeutet Black-Box-Test?",
      back: "Beim Black-Box-Test wird Software getestet, ohne den Code zu kennen. Nur Eingaben und Ausgaben werden geprüft."
    },
    {
      front: "Was bedeutet White-Box-Test?",
      back: "Beim White-Box-Test testet man mit vollem Einblick in den Quellcode – interne Strukturen und Logik werden überprüft."
    },
    {
      front: "Was ist ein Grey-Box-Test?",
      back: "Der Grey-Box-Test kombiniert Black-Box und White-Box: Der Tester hat nur teilweise Einblick in den Code."
    },
    {
      front: "Wofür steht die Norm ISO 25010?",
      back: "ISO 25010 ist der Maßstab (Norm) für Software-Qualität – sie definiert Qualitätskriterien für Softwareprodukte."
    },
    {
      front: "Wofür steht die Norm ISO 9001?",
      back: "ISO 9001 ist der Maßstab für Qualitätsmanagement in Unternehmen – sie beschreibt Anforderungen an das Managementsystem."
    },
    {
      front: "Nenne die 7 Qualitätskriterien nach ISO 25010.",
      back: "Funktionalität, Zuverlässigkeit, Benutzbarkeit, Sicherheit, Effizienz, Wartbarkeit, Adaptierbarkeit."
    },
    {
      front: "Was ist der Unterschied zwischen Top-Down- und Bottom-Up-Planung?",
      back: "Top-Down: Planung vom Groben ins Detail. Bottom-Up: Planung von einzelnen Bausteinen zum Gesamtsystem."
    },
    {
      front: "Nenne die 4 Teamphasen nach Tuckman in der richtigen Reihenfolge.",
      back: "Forming (Kennenlernen) → Storming (Konflikte) → Norming (Regeln finden) → Performing (gute Zusammenarbeit)."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welche Aussage beschreibt einen Algorithmus am besten?",
      options: [
        "Ein Algorithmus ist eine ungeordnete Sammlung von Ideen.",
        "Ein Algorithmus ist eine eindeutige Schritt-für-Schritt-Anleitung zur Lösung eines Problems.",
        "Ein Algorithmus ist ausschließlich in Maschinensprache geschrieben.",
        "Ein Algorithmus beschreibt nur grafische Oberflächen."
      ],
      correct: [1],
      explanation: "Ein Algorithmus ist – wie ein Kochrezept – eine eindeutige, geordnete Schritt-für-Schritt-Anleitung zur Lösung eines Problems.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wer erstellt das Lastenheft?",
      options: [
        "Der Auftragnehmer, um die Umsetzung zu beschreiben.",
        "Das Entwicklungsteam, um Meilensteine festzulegen.",
        "Der Kunde, um seine Anforderungen (WAS er will) zu beschreiben.",
        "Der Projektleiter, um den Zeitplan zu definieren."
      ],
      correct: [2],
      explanation: "Das Lastenheft wird vom Kunden erstellt und enthält seine Wünsche und Anforderungen – also WAS er will.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was beschreibt das Pflichtenheft?",
      options: [
        "WAS der Kunde sich wünscht.",
        "WIE der Auftragnehmer die Anforderungen umsetzt.",
        "Welche Teamphasen durchlaufen werden.",
        "Welche Qualitätsnormen einzuhalten sind."
      ],
      correct: [1],
      explanation: "Das Pflichtenheft wird vom Auftragnehmer verfasst und beschreibt WIE die Anforderungen des Kunden technisch umgesetzt werden.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Bei welcher Testart hat der Tester KEINEN Einblick in den Quellcode?",
      options: [
        "White-Box-Test",
        "Grey-Box-Test",
        "Black-Box-Test",
        "Unit-Test"
      ],
      correct: [2],
      explanation: "Beim Black-Box-Test kennt der Tester den internen Code nicht – er prüft nur Eingaben und die daraus resultierenden Ausgaben.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Norm definiert den Maßstab für Software-Qualität?",
      options: [
        "ISO 9001",
        "ISO 27001",
        "ISO 25010",
        "ISO 14001"
      ],
      correct: [2],
      explanation: "ISO 25010 ist die Norm für Software-Qualität und legt Qualitätskriterien wie Funktionalität, Zuverlässigkeit und Sicherheit fest.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wofür steht die Norm ISO 9001?",
      options: [
        "Qualitätsmanagement in Unternehmen",
        "Software-Qualität",
        "Datenschutz und IT-Sicherheit",
        "Netzwerk-Protokolle"
      ],
      correct: [0],
      explanation: "ISO 9001 beschreibt Anforderungen an das Qualitätsmanagementsystem eines Unternehmens – unabhängig von der Branche.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Der White-Box-Test prüft Software ausschließlich anhand von Eingaben und Ausgaben, ohne den Quellcode zu kennen.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Diese Aussage beschreibt den Black-Box-Test. Beim White-Box-Test hat der Tester vollen Einblick in den Quellcode.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches der folgenden Elemente gehört NICHT zu den Qualitätskriterien nach ISO 25010?",
      options: [
        "Zuverlässigkeit",
        "Adaptierbarkeit",
        "Profitabilität",
        "Wartbarkeit"
      ],
      correct: [2],
      explanation: "Profitabilität ist kein Qualitätskriterium nach ISO 25010. Die Kriterien sind: Funktionalität, Zuverlässigkeit, Benutzbarkeit, Sicherheit, Effizienz, Wartbarkeit und Adaptierbarkeit.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Was zeigt ein Gantt-Diagramm in der Projektplanung?",
      options: [
        "Die Abhängigkeiten zwischen Aufgaben als Netzwerk.",
        "Den zeitlichen Ablauf von Aufgaben als Balkenplan.",
        "Die Teamphasen nach Tuckman.",
        "Die Qualitätskriterien eines Produkts."
      ],
      correct: [1],
      explanation: "Ein Gantt-Diagramm ist ein Balkenplan, der zeigt, wann welche Aufgabe beginnt und endet – also den zeitlichen Ablauf.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Planungswerkzeug zeigt Abhängigkeiten zwischen Aufgaben?",
      options: [
        "Gantt-Diagramm",
        "Meilensteinplan",
        "Netzplan",
        "Pflichtenheft"
      ],
      correct: [2],
      explanation: "Der Netzplan stellt Aufgaben und ihre Abhängigkeiten als Netzwerk dar – im Gegensatz zum Gantt-Diagramm, das nur den Zeitplan zeigt.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "In welcher Phase des Tuckman-Modells entstehen typischerweise Konflikte im Team?",
      options: [
        "Forming",
        "Norming",
        "Storming",
        "Performing"
      ],
      correct: [2],
      explanation: "In der Storming-Phase treten Meinungsverschiedenheiten und Konflikte auf, da die Teammitglieder unterschiedliche Vorstellungen haben.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was kennzeichnet die Performing-Phase im Tuckman-Modell?",
      options: [
        "Das Team lernt sich kennen.",
        "Konflikte und Machtkämpfe prägen die Zusammenarbeit.",
        "Das Team arbeitet effizient und harmonisch zusammen.",
        "Regeln und Normen werden erst festgelegt."
      ],
      correct: [2],
      explanation: "In der Performing-Phase hat das Team Regeln etabliert und arbeitet produktiv und gut zusammen – das ist die Hochleistungsphase.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Beim Bottom-Up-Ansatz beginnt die Planung beim Gesamtbild und wird schrittweise verfeinert.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Diese Beschreibung gilt für den Top-Down-Ansatz. Bottom-Up startet bei einzelnen Bausteinen und fügt sie zum Gesamtsystem zusammen.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welche Reihenfolge der Tuckman-Phasen ist korrekt?",
      options: [
        "Forming → Norming → Storming → Performing",
        "Storming → Forming → Norming → Performing",
        "Forming → Storming → Norming → Performing",
        "Norming → Forming → Storming → Performing"
      ],
      correct: [2],
      explanation: "Die korrekte Reihenfolge lautet: Forming (Kennenlernen), Storming (Konflikte), Norming (Regeln finden), Performing (produktive Zusammenarbeit).",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Ein Meilensteinplan in der Projektplanung dient dazu ...",
      options: [
        "... den Quellcode in Abschnitte zu gliedern.",
        "... wichtige Etappen und Zwischenziele eines Projekts zu markieren.",
        "... Abhängigkeiten zwischen Aufgaben darzustellen.",
        "... die Qualität der Software nach ISO 25010 zu messen."
      ],
      correct: [1],
      explanation: "Ein Meilensteinplan zeigt wichtige Etappen (Meilensteine) im Projektverlauf – also entscheidende Zwischenziele oder Lieferpunkte.",
      difficulty: 1
    }
  ],
};

export default supplement;
