import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was besagt das Minimalprinzip?",
      back: "Ein festes Ziel wird mit möglichst wenig Mitteln erreicht."
    },
    {
      front: "Was besagt das Maximalprinzip?",
      back: "Mit festen Mitteln wird das größtmögliche Ergebnis erzielt."
    },
    {
      front: "Welche Wirtschaftsordnung hat Deutschland?",
      back: "Soziale Marktwirtschaft – eine Kombination aus freiem Markt und staatlichem Sozialausgleich."
    },
    {
      front: "Wer wird als „Vater des Wirtschaftswunders“ bezeichnet?",
      back: "Ludwig Erhard, maßgeblicher Architekt der sozialen Marktwirtschaft in Deutschland."
    },
    {
      front: "Was ist ein Monopol?",
      back: "Ein einziger Anbieter beherrscht den gesamten Markt für ein Gut oder eine Dienstleistung."
    },
    {
      front: "Was ist ein Kartell und warum ist es verboten?",
      back: "Eine Absprache mehrerer Unternehmen über Preise oder Mengen; verboten, weil es den Wettbewerb verfälscht. Das Bundeskartellamt in Bonn überwacht dies."
    },
    {
      front: "Was bedeutet Skonto?",
      back: "Ein prozentualer Preisnachlass, den ein Käufer erhält, wenn er eine Rechnung innerhalb einer bestimmten Frist begleicht."
    },
    {
      front: "Was ist Prokura?",
      back: "Eine weitreichende Handlungsvollmacht, die ein Unternehmer einer anderen Person erteilt, um im Namen des Unternehmens zu handeln."
    },
    {
      front: "Was bedeuten Liquidität und Insolvenz?",
      back: "Liquidität = Zahlungsfähigkeit (alle fälligen Verbindlichkeiten können bedient werden). Insolvenz = Zahlungsunfähigkeit."
    },
    {
      front: "Was ist Inflation und was ist Deflation?",
      back: "Inflation: allgemeiner Preisanstieg, das Geld verliert Kaufkraft. Deflation: allgemeiner Preisrückgang."
    },
    {
      front: "Wie ist die Einkommensteuer in Deutschland gestaltet?",
      back: "Progressiv – der Steuersatz steigt mit dem Einkommen. Spitzensatz: 42 %, Reichensteuer: 45 %. Umsatzsteuer: 19 % (ermäßigt 7 %)."
    },
    {
      front: "Was ist das BIP (Bruttoinlandsprodukt)?",
      back: "Der Gesamtwert aller Güter und Dienstleistungen, die in einem Land innerhalb eines Jahres produziert werden."
    },
    {
      front: "Welche Aufgabe hat die EZB und wer leitet sie?",
      back: "Die Europäische Zentralbank (Sitz: Frankfurt) steuert die Geldpolitik im Euroraum über den Leitzins. Präsidentin: Christine Lagarde."
    },
    {
      front: "Was unterscheidet DAX und MDAX?",
      back: "DAX: Index der größten deutschen Unternehmen. MDAX: Index mittelgroßer deutscher Unternehmen."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welches Prinzip beschreibt das Erreichen eines festen Ziels mit möglichst geringem Mitteleinsatz?",
      options: [
        "Maximalprinzip",
        "Minimalprinzip",
        "Rationalprinzip",
        "Optimalprinzip"
      ],
      correct: [1],
      explanation: "Das Minimalprinzip besagt, dass ein vorgegebenes Ziel mit dem geringstmöglichen Ressourceneinsatz erreicht werden soll.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Wirtschaftsordnung gilt in Deutschland?",
      options: [
        "Freie Marktwirtschaft",
        "Planwirtschaft",
        "Soziale Marktwirtschaft",
        "Gemischte Zentralwirtschaft"
      ],
      correct: [2],
      explanation: "Deutschland hat eine soziale Marktwirtschaft, die Marktelemente mit staatlichem Sozialausgleich verbindet.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wer wird als „Vater des Wirtschaftswunders“ bezeichnet?",
      options: [
        "Konrad Adenauer",
        "Willy Brandt",
        "Helmut Schmidt",
        "Ludwig Erhard"
      ],
      correct: [3],
      explanation: "Ludwig Erhard gilt als Vater des Wirtschaftswunders und war maßgeblich an der Einführung der sozialen Marktwirtschaft beteiligt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Behörde überwacht Kartelle in Deutschland?",
      options: [
        "Bundesfinanzamt in Berlin",
        "Bundeskartellamt in Bonn",
        "Bundeswirtschaftsministerium in Berlin",
        "Bundesbank in Frankfurt"
      ],
      correct: [1],
      explanation: "Das Bundeskartellamt mit Sitz in Bonn ist die zuständige Behörde zur Überwachung und Bekämpfung von Kartellen.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Ein Kartell ist eine legale Absprache mehrerer Unternehmen zur Preisgestaltung.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Kartelle sind in Deutschland und der EU verboten, da sie den Wettbewerb verfälschen und Verbraucher schädigen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was bedeutet der Begriff „Skonto“?",
      options: [
        "Eine staatliche Förderung für Unternehmen",
        "Ein Zinsvorteil bei Bankdarlehen",
        "Ein Preisnachlass bei schneller Zahlung",
        "Eine Handlungsvollmacht für Mitarbeiter"
      ],
      correct: [2],
      explanation: "Skonto ist ein prozentualer Nachlass auf den Rechnungsbetrag, den ein Käufer erhält, wenn er innerhalb einer kurzen Zahlungsfrist zahlt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher Begriff bezeichnet die Zahlungsunfähigkeit eines Unternehmens?",
      options: [
        "Liquidität",
        "Insolvenz",
        "Hypothek",
        "Prokura"
      ],
      correct: [1],
      explanation: "Insolvenz bedeutet Zahlungsunfähigkeit – das Unternehmen kann seine fälligen Verbindlichkeiten nicht mehr begleichen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie hoch ist der Spitzensteuersatz der Einkommensteuer in Deutschland?",
      options: [
        "35 %",
        "45 %",
        "42 %",
        "19 %"
      ],
      correct: [2],
      explanation: "Der reguläre Spitzensteuersatz beträgt 42 %. Für sehr hohe Einkommen gibt es zusätzlich die Reichensteuer von 45 %.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Wie hoch ist der reguläre Umsatzsteuersatz in Deutschland?",
      options: [
        "7 %",
        "19 %",
        "25 %",
        "16 %"
      ],
      correct: [1],
      explanation: "Der allgemeine Umsatzsteuersatz beträgt 19 %. Für bestimmte Güter gilt ein ermäßigter Satz von 7 %.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Inflation bedeutet, dass das Geld an Kaufkraft gewinnt.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Bei Inflation steigen die Preise allgemein, wodurch das Geld an Kaufkraft verliert – nicht gewinnt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wo hat die Europäische Zentralbank (EZB) ihren Sitz?",
      options: [
        "Brüssel",
        "Berlin",
        "Wien",
        "Frankfurt"
      ],
      correct: [3],
      explanation: "Die EZB hat ihren Sitz in Frankfurt am Main und steuert die Geldpolitik der Eurozone, u. a. über den Leitzins.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wer ist Präsidentin der Europäischen Zentralbank?",
      options: [
        "Ursula von der Leyen",
        "Christine Lagarde",
        "Angela Merkel",
        "Annalena Baerbock"
      ],
      correct: [1],
      explanation: "Christine Lagarde ist Präsidentin der EZB und verantwortlich für die Geldpolitik im Euroraum.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Was kennzeichnet eine „Baisse“ an der Börse?",
      options: [
        "Steigende Aktienkurse",
        "Gleichbleibende Kurse über längere Zeit",
        "Fallende Aktienkurse",
        "Hohe Dividendenausschüttungen"
      ],
      correct: [2],
      explanation: "Baisse bezeichnet eine Phase fallender Kurse an der Börse (Gegenteil: Hausse = steigende Kurse).",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Ereignis im Jahr 1929 löste die Weltwirtschaftskrise aus?",
      options: [
        "Der Zusammenbruch des Bretton-Woods-Systems",
        "Der Börsencrash an der Wall Street",
        "Die Hyperinflation in Deutschland",
        "Der Erste Weltkrieg"
      ],
      correct: [1],
      explanation: "Der Börsencrash von 1929 (Schwarzer Donnerstag) an der New Yorker Börse gilt als Auslöser der Weltwirtschaftskrise.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welche internationale Organisation ist für die Beilegung von Handelskonflikten zuständig?",
      options: [
        "IWF",
        "NATO",
        "WTO",
        "OECD"
      ],
      correct: [2],
      explanation: "Die WTO (World Trade Organization) regelt internationalen Handel und löst Handelsstreitigkeiten zwischen Mitgliedsstaaten.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Land hat in Europa die höchste Wirtschaftskraft pro Kopf?",
      options: [
        "Deutschland",
        "Schweiz",
        "Norwegen",
        "Luxemburg"
      ],
      correct: [3],
      explanation: "Luxemburg weist innerhalb Europas das höchste Bruttoinlandsprodukt pro Kopf auf.",
      difficulty: 3
    },
    {
      type: "mc",
      prompt: "Wie heißt das nordamerikanische Freihandelsabkommen, das die NAFTA abgelöst hat?",
      options: [
        "USMCA",
        "ASEAN",
        "Mercosur",
        "CETA"
      ],
      correct: [0],
      explanation: "Das frühere NAFTA-Abkommen (USA, Kanada, Mexiko) heißt heute USMCA.",
      difficulty: 2
    }
  ],
};

export default supplement;
