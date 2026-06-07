import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was ist Standardsoftware?",
      back: "Fertige Software von der Stange für alle Nutzer, z. B. Word oder Excel."
    },
    {
      front: "Was ist Individualsoftware?",
      back: "Massgeschneiderte Software für einen bestimmten Kunden, z. B. ein Bürgerportal."
    },
    {
      front: "Was unterscheidet proprietäre Software von Open Source?",
      back: "Proprietäre Software hat geschlossenen Quellcode (z. B. Windows); Open Source hat offenen, einsehbaren Quellcode (z. B. Linux)."
    },
    {
      front: "Was ist ein Betriebssystem (OS)?",
      back: "Der Manager des Computers, der Hardware und Software koordiniert. Beispiele: Windows, Linux, macOS, Android."
    },
    {
      front: "Was ist eine IDE?",
      back: "Eine integrierte Entwicklungsumgebung zum Schreiben, Testen und Fehlersuchen von Code."
    },
    {
      front: "Was bedeutet Cloud-Computing?",
      back: "Speicher und Programme liegen nicht auf dem eigenen Gerät, sondern auf fremden Servern im Internet, z. B. Google Drive oder iCloud."
    },
    {
      front: "Was bedeutet IaaS?",
      back: "Infrastructure as a Service: Man mietet nur die technische Infrastruktur (Server, Netzwerk, Speicher)."
    },
    {
      front: "Was bedeutet PaaS?",
      back: "Platform as a Service: Man mietet einen Entwicklungs-Baukasten, um eigene Anwendungen zu bauen."
    },
    {
      front: "Was bedeutet SaaS?",
      back: "Software as a Service: Man nutzt fertige Software direkt über das Internet, ohne sie zu installieren."
    },
    {
      front: "Nenne je ein Beispiel für proprietäre Software und Open-Source-Software.",
      back: "Proprietär: Windows. Open Source: Linux."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welche Aussage beschreibt Standardsoftware korrekt?",
      options: [
        "Sie wird speziell für einen einzelnen Kunden entwickelt.",
        "Sie ist für alle Nutzer fertig verfügbar, z. B. Word oder Excel.",
        "Sie hat immer offenen Quellcode.",
        "Sie kann nur auf Linux betrieben werden."
      ],
      correct: [1],
      explanation: "Standardsoftware ist fertige Software von der Stange für alle Nutzer, wie z. B. Word oder Excel. Individualsoftware hingegen wird massgeschneidert für einen Kunden erstellt.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was ist ein typisches Beispiel für Individualsoftware?",
      options: [
        "Microsoft Excel",
        "Google Chrome",
        "Ein Bürgerportal für eine Gemeindeverwaltung",
        "Das Betriebssystem Windows"
      ],
      correct: [2],
      explanation: "Individualsoftware ist massgeschneidert für einen bestimmten Kunden, z. B. ein Bürgerportal für eine Gemeindeverwaltung.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Merkmal kennzeichnet Open-Source-Software?",
      options: [
        "Der Quellcode ist geschlossen und nicht einsehbar.",
        "Sie darf ausschließlich kostenlos genutzt werden.",
        "Der Quellcode ist offen und für jeden einsehbar.",
        "Sie läuft nur auf Windows."
      ],
      correct: [2],
      explanation: "Open-Source-Software hat offenen, einsehbaren Quellcode. Linux ist ein bekanntes Beispiel. Proprietäre Software wie Windows hat dagegen geschlossenen Quellcode.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches der folgenden Systeme ist KEIN Beispiel für ein Betriebssystem?",
      options: [
        "Linux",
        "Android",
        "Microsoft Word",
        "macOS"
      ],
      correct: [2],
      explanation: "Windows, Linux, macOS und Android sind Betriebssysteme. Microsoft Word ist eine Anwendungssoftware, kein Betriebssystem.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Aufgabe hat eine IDE?",
      options: [
        "Dateien im Internet speichern",
        "Das Netzwerk verwalten",
        "Schreiben, Testen und Fehlersuchen von Code",
        "Betriebssystem-Updates durchführen"
      ],
      correct: [2],
      explanation: "Eine IDE (Integrated Development Environment) ist eine Entwicklungsumgebung, die Werkzeuge zum Schreiben, Testen und Fehlersuchen von Code vereint.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was beschreibt Cloud-Computing treffend?",
      options: [
        "Programme werden ausschließlich lokal auf dem eigenen Gerät gespeichert.",
        "Speicher und Programme liegen auf fremden Servern im Internet.",
        "Eine spezielle Art von Betriebssystem.",
        "Ein Werkzeug zur Softwareentwicklung."
      ],
      correct: [1],
      explanation: "Beim Cloud-Computing liegen Speicher und Programme nicht auf dem eigenen Gerät, sondern auf fremden Servern im Internet, z. B. Google Drive oder iCloud.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Bei welchem Cloud-Modell mietet man nur die technische Infrastruktur wie Server und Netzwerk?",
      options: [
        "SaaS",
        "PaaS",
        "IaaS",
        "IDE"
      ],
      correct: [2],
      explanation: "IaaS (Infrastructure as a Service) bedeutet, dass man nur die technische Infrastruktur (Server, Netzwerk, Speicher) mietet und selbst verwaltet.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Ein Entwickler-Team möchte einen fertigen Baukasten mieten, um eine eigene Webanwendung zu erstellen, ohne sich um die Infrastruktur zu kümmern. Welches Cloud-Modell passt?",
      options: [
        "IaaS",
        "SaaS",
        "PaaS",
        "Open Source"
      ],
      correct: [2],
      explanation: "PaaS (Platform as a Service) bietet einen Entwicklungs-Baukasten, der Infrastruktur und Laufzeitumgebung bereitstellt, sodass sich Entwickler auf den Code konzentrieren können.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Cloud-Modell beschreibt die Nutzung fertiger Software direkt über das Internet?",
      options: [
        "IaaS",
        "SaaS",
        "PaaS",
        "Proprietäre Software"
      ],
      correct: [1],
      explanation: "SaaS (Software as a Service) bedeutet, dass fertige Software direkt über das Internet genutzt wird, ohne lokale Installation.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Linux ist ein Beispiel für proprietäre Software mit geschlossenem Quellcode.",
      options: [
        "Wahr",
        "Falsch"
      ],
      correct: [1],
      explanation: "Falsch. Linux ist Open-Source-Software mit offenem, einsehbarem Quellcode. Windows ist ein Beispiel für proprietäre Software.",
      difficulty: 1
    }
  ],
};

export default supplement;
