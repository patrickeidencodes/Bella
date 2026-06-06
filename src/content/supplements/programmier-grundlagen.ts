import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Was sind die drei Grundbausteine jedes Ablaufs?", back: "Sequenz (nacheinander), Auswahl/Verzweigung (etwas passiert nur, wenn eine Bedingung stimmt), Schleife (etwas wird wiederholt)." },
    { front: "Was ist eine Sequenz?", back: "Anweisungen werden nacheinander ausgefuehrt, eine nach der anderen." },
    { front: "Was ist eine Auswahl/Verzweigung?", back: "Etwas passiert nur, WENN eine Bedingung stimmt. Der Ablauf teilt sich je nach Bedingung auf." },
    { front: "Was ist eine Schleife?", back: "Eine Anweisung oder ein Block von Anweisungen wird wiederholt ausgefuehrt." },
    { front: "Was ist eine Variable?", back: "Ein benannter Behaelter, in dem ein Wert gespeichert ist." },
    { front: "Nenne die drei grundlegenden Datentypen.", back: "Zahl (Integer), Text (String), Wahr/Falsch (Boolean)." },
    { front: "Was ist der Datentyp Integer?", back: "Eine ganze Zahl, z. B. 5 oder -3." },
    { front: "Was ist der Datentyp String?", back: "Text, also eine Zeichenkette, z. B. 'Hallo'." },
    { front: "Was ist der Datentyp Boolean?", back: "Ein Wahrheitswert: entweder Wahr oder Falsch." },
    { front: "Was ist Quellcode?", back: "Der vom Menschen geschriebene Programmtext." },
    { front: "Was ist der Unterschied zwischen Compiler und Interpreter?", back: "Ein Compiler uebersetzt das ganze Programm vorab. Ein Interpreter uebersetzt Zeile fuer Zeile beim Ausfuehren." },
    { front: "Was ist Syntax?", back: "Die Schreibregeln einer Programmiersprache." },
    { front: "Was ist Semantik?", back: "Die Bedeutung von Code oder Anweisungen." },
    { front: "Was ist ein Kommentar im Code?", back: "Eine Notiz im Code, die das Programm ignoriert. Sie dient nur dem Lesenden." },
    { front: "Ist HTML eine Programmiersprache?", back: "Nein. HTML ist eine Auszeichnungssprache. Sie beschreibt nur den Aufbau einer Webseite und enthaelt keine Programmlogik." },
    { front: "Nenne Beispiele fuer Programmiersprachen.", back: "Java, Python, C++, JavaScript." },
    { front: "Was stellt ein Oval in einem Flussdiagramm dar?", back: "Start oder Ende des Ablaufs." },
    { front: "Was stellt ein Rechteck in einem Flussdiagramm dar?", back: "Eine Anweisung (eine auszufuehrende Aktion)." },
    { front: "Was stellt eine Raute in einem Flussdiagramm dar?", back: "Eine Entscheidung (eine Bedingung, die geprueft wird)." },
    { front: "Was stellen Pfeile in einem Flussdiagramm dar?", back: "Die Reihenfolge, in der die Schritte ausgefuehrt werden." },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welche der folgenden Aussagen beschreibt eine Schleife korrekt?",
      options: [
        "Anweisungen werden nacheinander einmal ausgefuehrt.",
        "Eine Anweisung wird wiederholt ausgefuehrt.",
        "Der Ablauf teilt sich je nach Bedingung auf.",
        "Das Programm wartet auf eine Benutzereingabe."
      ],
      correct: [1],
      explanation: "Eine Schleife wiederholt eine Anweisung oder einen Block. Nacheinander ausfuehren ist eine Sequenz, aufteilen je nach Bedingung ist eine Auswahl.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist eine Variable in der Programmierung?",
      options: [
        "Eine Regel fuer die Schreibweise von Code.",
        "Ein Befehl, der eine Schleife startet.",
        "Ein benannter Behaelter, in dem ein Wert gespeichert ist.",
        "Ein Symbol im Flussdiagramm fuer Entscheidungen."
      ],
      correct: [2],
      explanation: "Eine Variable ist ein benannter Behaelter zur Speicherung eines Wertes. Schreibregeln sind Syntax, und das Flussdiagramm-Symbol fuer Entscheidungen ist eine Raute.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welcher Datentyp speichert den Wert 'Hallo Welt'?",
      options: [
        "Integer",
        "Boolean",
        "Float",
        "String"
      ],
      correct: [3],
      explanation: "Text wird als String gespeichert. Integer speichert ganze Zahlen, Boolean speichert Wahr/Falsch.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist der Unterschied zwischen einem Compiler und einem Interpreter?",
      options: [
        "Ein Compiler fuehrt Code direkt aus; ein Interpreter speichert ihn.",
        "Ein Compiler uebersetzt das ganze Programm vorab; ein Interpreter uebersetzt Zeile fuer Zeile beim Ausfuehren.",
        "Ein Compiler ist nur fuer Python; ein Interpreter ist nur fuer Java.",
        "Beide tun dasselbe, haben aber verschiedene Namen."
      ],
      correct: [1],
      explanation: "Der Compiler uebersetzt das gesamte Programm vor der Ausfuehrung. Der Interpreter uebersetzt und fuehrt den Code Zeile fuer Zeile beim Ausfuehren aus.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Was versteht man unter Syntax in einer Programmiersprache?",
      options: [
        "Die Bedeutung der Anweisungen.",
        "Die Schreibregeln der Programmiersprache.",
        "Die Ausfuehrungsgeschwindigkeit des Programms.",
        "Notizen im Code, die ignoriert werden."
      ],
      correct: [1],
      explanation: "Syntax bezeichnet die Schreibregeln. Semantik bezeichnet die Bedeutung. Kommentare sind Notizen, die ignoriert werden.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "HTML ist eine Programmiersprache.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "HTML ist KEINE Programmiersprache, sondern eine Auszeichnungssprache. Sie beschreibt nur den Aufbau einer Webseite und enthaelt keine Programmlogik wie Schleifen oder Bedingungen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Form hat das Symbol fuer eine Entscheidung im Flussdiagramm?",
      options: [
        "Oval",
        "Rechteck",
        "Raute",
        "Pfeil"
      ],
      correct: [2],
      explanation: "Eine Raute steht im Flussdiagramm fuer eine Entscheidung (Bedingungspruefung). Das Oval steht fuer Start/Ende, das Rechteck fuer eine Anweisung, Pfeile zeigen die Reihenfolge.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was beschreibt eine Auswahl/Verzweigung als Grundbaustein eines Ablaufs?",
      options: [
        "Anweisungen werden immer der Reihe nach ausgefuehrt.",
        "Anweisungen werden so lange wiederholt, bis eine Bedingung erfuellt ist.",
        "Etwas passiert nur, wenn eine Bedingung stimmt.",
        "Das Programm wird in mehrere unabhaengige Teile geteilt."
      ],
      correct: [2],
      explanation: "Bei der Auswahl/Verzweigung wird eine Bedingung geprueft und nur bei Ergebnis 'wahr' ein bestimmter Pfad ausgefuehrt. Das Wiederholen beschreibt eine Schleife, das Nacheinander eine Sequenz.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche der folgenden Sprachen ist KEINE Programmiersprache?",
      options: [
        "Python",
        "Java",
        "HTML",
        "JavaScript"
      ],
      correct: [2],
      explanation: "HTML ist eine Auszeichnungssprache und beschreibt nur den Aufbau einer Webseite. Python, Java und JavaScript sind echte Programmiersprachen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist Quellcode?",
      options: [
        "Das ausgefuehrte Maschinenprogramm.",
        "Der vom Menschen geschriebene Programmtext.",
        "Die grafische Darstellung eines Programmablaufs.",
        "Ein Behaelter fuer gespeicherte Werte."
      ],
      correct: [1],
      explanation: "Quellcode ist der vom Menschen lesbare und geschriebene Programmtext. Maschinenprogramme sind das Ergebnis der Uebersetzung. Ein Flussdiagramm ist eine grafische Darstellung. Ein Behaelter fuer Werte ist eine Variable.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was bedeutet ein Rechteck in einem Flussdiagramm?",
      options: [
        "Start oder Ende des Ablaufs.",
        "Eine Entscheidung wird getroffen.",
        "Eine Anweisung wird ausgefuehrt.",
        "Die Richtung des Ablaufs."
      ],
      correct: [2],
      explanation: "Ein Rechteck steht fuer eine auszufuehrende Anweisung. Das Oval steht fuer Start/Ende, die Raute fuer eine Entscheidung, Pfeile fuer die Reihenfolge.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Ein Kommentar im Code wird vom Programm ausgefuehrt.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "Kommentare sind Notizen im Code, die das Programm vollstaendig ignoriert. Sie dienen nur dem Verstaendnis fuer den Lesenden.",
      difficulty: 1
    },
  ],
};
export default supplement;
