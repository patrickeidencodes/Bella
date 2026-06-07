import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "CPU", back: "Central Processing Unit (Zentralprozessor) – das Rechenwerk eines Computers" },
    { front: "RAM", back: "Arbeitsspeicher – flüchtig, speichert aktive Programme und Daten während des Betriebs" },
    { front: "SSD", back: "dauerhafter Speicher (Solid State Drive) – nicht-flüchtiger Massenspeicher ohne bewegliche Teile" },
    { front: "OS", back: "Betriebssystem (Operating System) – verwaltet Hardware und stellt Basisdienste für Software bereit" },
    { front: "LAN / WLAN", back: "LAN = kabelgebundenes Netz (Local Area Network); WLAN = drahtloses Netz (Wireless LAN)" },
    { front: "DNS", back: "Domain Name System – übersetzt Domainnamen (z. B. example.com) in IP-Adressen" },
    { front: "SQL", back: "Datenbank-Abfragesprache (Structured Query Language) – Standard für relationale Datenbanken" },
    { front: "HTML", back: "HyperText Markup Language – Auszeichnungssprache für Webseiten" },
    { front: "HTTPS", back: "HyperText Transfer Protocol Secure – verschlüsseltes Uebertragungsprotokoll für Webinhalte" },
    { front: "IKT", back: "Informations- und Kommunikationstechnik – Oberbegriff für digitale Technologien zur Verarbeitung und Uebertragung von Information" },
  ],
  questions: [
    {
      type: "mc",
      prompt: "Wofür steht die Abkürzung CPU?",
      options: [
        "Central Processing Unit",
        "Computer Program Utility",
        "Central Power Unit",
        "Core Processing Utility"
      ],
      correct: [0],
      explanation: "CPU steht für Central Processing Unit, also den Zentralprozessor eines Computers.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was beschreibt der Begriff RAM in der EDV?",
      options: [
        "Einen dauerhaften Festspeicher",
        "Den Arbeitsspeicher eines Computers",
        "Ein Netzwerkprotokoll",
        "Eine Datenbanksprache"
      ],
      correct: [1],
      explanation: "RAM steht für Arbeitsspeicher. Er speichert flüchtig aktive Daten und Programme während des Betriebs.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Für was steht SSD im Bereich der Computerhardware?",
      options: [
        "System Software Driver",
        "Secure Socket Domain",
        "Dauerhafter Speicher (Solid State Drive)",
        "Structured Storage Device"
      ],
      correct: [2],
      explanation: "SSD (Solid State Drive) ist ein dauerhafter, nicht-flüchtiger Massenspeicher ohne bewegliche Teile.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was versteht man in der EDV unter OS?",
      options: [
        "Online Service",
        "Output System",
        "Open Source",
        "Betriebssystem"
      ],
      correct: [3],
      explanation: "OS steht für Operating System, also das Betriebssystem, das Hardware verwaltet und Basisdienste bereitstellt.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welche Aussage beschreibt den Unterschied zwischen LAN und WLAN korrekt?",
      options: [
        "LAN ist drahtlos, WLAN ist kabelgebunden",
        "LAN und WLAN bezeichnen dasselbe Netz",
        "LAN ist kabelgebunden, WLAN ist drahtlos",
        "LAN ist ein Weitverkehrsnetz, WLAN ein lokales Netz"
      ],
      correct: [2],
      explanation: "LAN (Local Area Network) bezeichnet ein kabelgebundenes Netz, WLAN (Wireless LAN) ein drahtloses lokales Netz.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Welche Funktion hat das DNS?",
      options: [
        "Es verschlüsselt Datenpakete im Internet",
        "Es übersetzt Domainnamen in IP-Adressen",
        "Es verwaltet Datenbankabfragen",
        "Es regelt den Zugriff auf den Arbeitsspeicher"
      ],
      correct: [1],
      explanation: "Das Domain Name System (DNS) übersetzt menschenlesbare Domainnamen (z. B. example.com) in numerische IP-Adressen.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Wofür steht SQL?",
      options: [
        "System Query Logic",
        "Structured Query Language (Datenbank-Abfragesprache)",
        "Secure Queue Link",
        "Software Quality Level"
      ],
      correct: [1],
      explanation: "SQL steht für Structured Query Language und ist die Standard-Abfragesprache für relationale Datenbanken.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was bedeutet die Abkürzung HTML?",
      options: [
        "HyperText Markup Language",
        "High Transfer Management Language",
        "Hyperlink and Text Modeling Logic",
        "HyperText Media Link"
      ],
      correct: [0],
      explanation: "HTML steht für HyperText Markup Language und ist die Auszeichnungssprache, mit der Webseiten strukturiert werden.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was unterscheidet HTTPS von HTTP?",
      options: [
        "HTTPS ist schneller als HTTP",
        "HTTPS übermittelt Daten ohne Verschlüsselung",
        "HTTPS ist ein verschlüsseltes Uebertragungsprotokoll für Webinhalte",
        "HTTPS wird nur für interne Netzwerke genutzt"
      ],
      correct: [2],
      explanation: "HTTPS (HyperText Transfer Protocol Secure) ist die verschlüsselte Variante von HTTP und schützt Daten bei der Uebertragung.",
      difficulty: 1,
    },
    {
      type: "mc",
      prompt: "Was beschreibt die Abkürzung IKT?",
      options: [
        "Internes Kommunikations-Tool",
        "Informations- und Kommunikationstechnik",
        "Interaktive Kontroll-Technologie",
        "Integrierte Kodierungs-Technik"
      ],
      correct: [1],
      explanation: "IKT steht für Informations- und Kommunikationstechnik und ist der Oberbegriff für digitale Technologien zur Verarbeitung und Uebertragung von Information.",
      difficulty: 1,
    },
  ],
};
export default supplement;
