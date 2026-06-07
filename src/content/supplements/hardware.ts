import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Was ist Hardware?", back: "Hardware ist alles, was man anfassen kann, z.B. Bildschirm, Tastatur und Gehäuse." },
    { front: "Was ist Software?", back: "Software sind die Programme, die man nicht anfassen kann." },
    { front: "Was beschreibt das EVA-Prinzip?", back: "EVA steht für Eingabe - Verarbeitung - Ausgabe." },
    { front: "Was ist die CPU und welche Aufgabe hat sie?", back: "Die CPU (Prozessor) ist das Gehirn des Computers und arbeitet Befehle Schritt für Schritt ab." },
    { front: "Welche Bestandteile hat die CPU?", back: "Die CPU besteht aus Rechenwerk, Steuerwerk und Registern." },
    { front: "Was ist der RAM?", back: "Der RAM (Arbeitsspeicher) ist ein kurzfristiger Speicher, der beim Ausschalten des Computers geleert wird." },
    { front: "Was ist der Unterschied zwischen SSD und HDD?", back: "Beide sind dauerhafte Speicher, aber die SSD ist schneller und hat keine beweglichen Teile." },
    { front: "Was ist das Mainboard?", back: "Das Mainboard ist die Hauptplatine, auf der alle Teile des Computers verbunden sind." },
    { front: "Was sind Peripheriegeräte? Nenne Beispiele.", back: "Peripheriegeräte sind Eingabegeräte (Maus, Tastatur, Scanner) und Ausgabegeräte (Monitor, Drucker)." },
    { front: "Was ist Dual-Channel beim Arbeitsspeicher?", back: "Beim Dual-Channel nutzt der Arbeitsspeicher zwei Kanäle gleichzeitig und wird dadurch schneller." },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was versteht man unter Hardware?",
      options: [
        "Programme, die auf dem Computer laufen",
        "Alles, was man anfassen kann, z.B. Bildschirm und Tastatur",
        "Das Betriebssystem eines Computers",
        "Dateien, die auf der Festplatte gespeichert sind"
      ],
      correct: [1],
      explanation: "Hardware ist alles, was man anfassen kann, wie Bildschirm, Tastatur und Gehäuse. Software hingegen sind die Programme.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Wofür steht die Abkürzung EVA?",
      options: [
        "Einheit - Verfahren - Ausführung",
        "Elektronik - Verarbeitung - Anzeige",
        "Eingabe - Verarbeitung - Ausgabe",
        "Erfassung - Verwaltung - Ablage"
      ],
      correct: [2],
      explanation: "EVA steht für Eingabe - Verarbeitung - Ausgabe und beschreibt den grundlegenden Ablauf der Datenverarbeitung.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welche Bestandteile hat eine CPU?",
      options: [
        "Netzteil, Lüfter und Kühlkörper",
        "Rechenwerk, Steuerwerk und Register",
        "RAM, ROM und Cache",
        "Mainboard, Grafikkarte und Soundkarte"
      ],
      correct: [1],
      explanation: "Die CPU besteht aus Rechenwerk, Steuerwerk und Registern. Sie ist das Gehirn des Computers und verarbeitet Befehle Schritt für Schritt.",
      difficulty: 2,
    },
    {
      type: "mc",
      prompt: "Was passiert mit den Daten im RAM, wenn der Computer ausgeschaltet wird?",
      options: [
        "Sie werden automatisch auf der Festplatte gespeichert",
        "Sie bleiben dauerhaft erhalten",
        "Sie werden in die Cloud hochgeladen",
        "Sie gehen verloren, da der RAM ein kurzfristiger Speicher ist"
      ],
      correct: [3],
      explanation: "Der RAM ist ein kurzfristiger Speicher. Beim Ausschalten des Computers werden alle darin enthaltenen Daten gelöscht.",
      difficulty: 1,
    },
    {
      type: "truefalse",
      prompt: "Eine SSD hat keine beweglichen Teile und ist schneller als eine HDD.",
      options: ["Wahr", "Falsch"],
      correct: [0],
      explanation: "Das stimmt. Die SSD hat keine beweglichen Teile, was sie robuster und schneller als eine herkömmliche HDD macht. Beide speichern Daten dauerhaft.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was ist das Mainboard?",
      options: [
        "Ein externer Datenspeicher",
        "Das Netzteil des Computers",
        "Die Hauptplatine, auf der alle Teile verbunden sind",
        "Ein Eingabegerät zur Dateneingabe"
      ],
      correct: [2],
      explanation: "Das Mainboard ist die Hauptplatine des Computers, auf der alle Komponenten wie CPU, RAM und Erweiterungskarten verbunden werden.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welches der folgenden Geräte ist ein Eingabegerät?",
      options: [
        "Monitor",
        "Drucker",
        "Lautsprecher",
        "Scanner"
      ],
      correct: [3],
      explanation: "Der Scanner ist ein Eingabegerät. Monitor, Drucker und Lautsprecher sind Ausgabegeräte.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bewirkt Dual-Channel beim Arbeitsspeicher?",
      options: [
        "Der RAM wird gekühlt und verbraucht weniger Strom",
        "Zwei RAM-Module sichern sich gegenseitig ab",
        "Der Arbeitsspeicher nutzt zwei Kanäle gleichzeitig und wird dadurch schneller",
        "Der RAM wird auf zwei Festplatten gespiegelt"
      ],
      correct: [2],
      explanation: "Dual-Channel bedeutet, dass der Arbeitsspeicher zwei Datenkanäle gleichzeitig nutzt. Das erhoht die Datenübertragungsrate und macht das System schneller.",
      difficulty: 2,
    },
    {
      type: "truefalse",
      prompt: "Die HDD speichert Daten dauerhaft und bleibt auch nach dem Ausschalten erhalten.",
      options: ["Wahr", "Falsch"],
      correct: [0],
      explanation: "Richtig. Die HDD (wie auch die SSD) ist ein dauerhafter Speicher. Die Daten bleiben nach dem Ausschalten erhalten, anders als beim RAM.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welche Beschreibung trifft auf die CPU zu?",
      options: [
        "Sie speichert Daten dauerhaft auf einer Magnetscheibe",
        "Sie verbindet alle Komponenten des Computers auf einer Platine",
        "Sie ist das Gehirn des Computers und arbeitet Befehle Schritt für Schritt ab",
        "Sie gibt Bilder auf dem Bildschirm aus"
      ],
      correct: [2],
      explanation: "Die CPU (Prozessor) ist das Gehirn des Computers. Sie verarbeitet Befehle sequenziell und besteht aus Rechenwerk, Steuerwerk und Registern.",
      difficulty: 1,
    },
  ],
};
export default supplement;
