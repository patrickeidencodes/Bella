import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    { front: "Was bedeutet LAN?", back: "LAN = Local Area Network, ein kleines Netz vor Ort, z. B. im Buero." },
    { front: "Was bedeutet WAN?", back: "WAN = Wide Area Network, ein grosses Netz ueber weite Strecken, z. B. das Internet." },
    { front: "Was ist WLAN und was steckt dahinter?", back: "WLAN ist ein drahtloses Netzwerk; Wi-Fi ist die Technik dahinter." },
    { front: "Wofuer steht eine IP-Adresse?", back: "Die IP-Adresse ist die Hausnummer eines Geraets im Netz, damit Daten den richtigen Empfaenger finden." },
    { front: "Was ist DNS und wozu dient es?", back: "DNS ist das Telefonbuch des Internets: Es uebersetzt Namen wie google.de in die zugehoerige IP-Adresse." },
    { front: "Was versteht man unter dem Client-Server-Modell?", back: "Der Client (z. B. der Browser) fragt etwas an, der Server liefert die Antwort." },
    { front: "Was ist der Unterschied zwischen HTTP und HTTPS?", back: "HTTP und HTTPS sind die Sprache zwischen Browser und Webseite; bei HTTPS ist die Verbindung verschluesselt und abhoersicher." },
    { front: "Was ist eine relationale Datenbank?", back: "Eine relationale Datenbank speichert Daten in verknuepften Tabellen. Eine Zeile ist ein Datensatz, eine Spalte ein Attribut." },
    { front: "Was ist ein Primaerschluessel?", back: "Der Primaerschluessel ist eine eindeutige Nummer (oder ein eindeutiges Attribut), die jeden Datensatz in einer Tabelle unverwechselbar kennzeichnet." },
    { front: "Was ist ein Fremdschluessel?", back: "Ein Fremdschluessel ist ein Verweis aus einer Tabelle auf einen Datensatz in einer anderen Tabelle und stellt so die Verknuepfung zwischen Tabellen her." },
    { front: "Was ist SQL?", back: "SQL ist die Abfragesprache fuer relationale Datenbanken, mit der Daten abgefragt, eingefuegt, geaendert und geloescht werden." }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Was bezeichnet der Begriff LAN?",
      options: [
        "Ein grosses Netz ueber weite Strecken wie das Internet",
        "Ein drahtloses Netzwerk basierend auf Wi-Fi",
        "Ein kleines Netz vor Ort, z. B. im Buero",
        "Die Abfragesprache fuer Datenbanken"
      ],
      correct: [2],
      explanation: "LAN steht fuer Local Area Network und bezeichnet ein kleines Netz vor Ort, etwa in einem Buero.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Aussage zu WAN ist korrekt?",
      options: [
        "WAN ist ein drahtloses Netzwerk im Nahbereich",
        "WAN verbindet Geraete ueber weite Strecken, z. B. das Internet",
        "WAN steht fuer Wireless Access Node",
        "WAN ist eine Datenbanktechnik"
      ],
      correct: [1],
      explanation: "WAN steht fuer Wide Area Network und bezeichnet ein grosses Netz ueber weite Strecken, beispielsweise das Internet.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Funktion hat eine IP-Adresse?",
      options: [
        "Sie verschluesselt den Datenverkehr",
        "Sie uebersetzt Domainnamen in Zahlen",
        "Sie ist die eindeutige Hausnummer eines Geraets im Netz",
        "Sie verbindet Tabellen in einer Datenbank"
      ],
      correct: [2],
      explanation: "Die IP-Adresse funktioniert wie eine Hausnummer im Netz und sorgt dafuer, dass Daten den richtigen Empfaenger erreichen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was macht ein DNS-Server?",
      options: [
        "Er verschluesselt die Verbindung zwischen Browser und Server",
        "Er speichert Webseiteninhalte zwischen",
        "Er uebersetzt Domainnamen wie google.de in IP-Adressen",
        "Er verwaltet Benutzerpasswoerter"
      ],
      correct: [2],
      explanation: "DNS steht fuer Domain Name System und funktioniert wie ein Telefonbuch: Es uebersetzt lesbare Namen in IP-Adressen.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Rolle nimmt der Client im Client-Server-Modell ein?",
      options: [
        "Er liefert die Antwort auf eine Anfrage",
        "Er stellt eine Anfrage und erhaelt eine Antwort vom Server",
        "Er verwaltet die Datenbank",
        "Er vergibt IP-Adressen"
      ],
      correct: [1],
      explanation: "Im Client-Server-Modell stellt der Client (z. B. ein Browser) eine Anfrage, und der Server liefert die entsprechende Antwort.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was unterscheidet HTTPS von HTTP?",
      options: [
        "HTTPS ist schneller als HTTP",
        "HTTPS funktioniert nur im lokalen Netzwerk",
        "Bei HTTPS ist die Verbindung verschluesselt und abhoersicher",
        "HTTPS wird nur fuer E-Mails genutzt"
      ],
      correct: [2],
      explanation: "HTTPS ist die verschluesselte Variante von HTTP. Die Verbindung zwischen Browser und Webseite ist dadurch abhoersicher.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Was beschreibt eine Zeile in einer relationalen Datenbanktabelle?",
      options: [
        "Ein Attribut (eine Eigenschaft)",
        "Einen Datensatz",
        "Einen Primaerschluessel",
        "Eine SQL-Abfrage"
      ],
      correct: [1],
      explanation: "In einer relationalen Datenbank entspricht eine Zeile einem Datensatz, waehrend eine Spalte ein Attribut (eine Eigenschaft) repraesentiert.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wofuer wird ein Fremdschluessel in einer Datenbank verwendet?",
      options: [
        "Um einen Datensatz innerhalb einer Tabelle eindeutig zu identifizieren",
        "Um die Verbindung zum Internet herzustellen",
        "Um auf einen Datensatz in einer anderen Tabelle zu verweisen",
        "Um SQL-Abfragen zu verschluesseln"
      ],
      correct: [2],
      explanation: "Ein Fremdschluessel verweist auf einen Datensatz in einer anderen Tabelle und verknuepft so zwei Tabellen miteinander.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Was ist SQL?",
      options: [
        "Ein Netzwerkprotokoll zur Datenuebertragung",
        "Die Abfragesprache fuer relationale Datenbanken",
        "Ein Verschluesselungsverfahren fuer HTTPS",
        "Ein Geraet zur IP-Vergabe"
      ],
      correct: [1],
      explanation: "SQL (Structured Query Language) ist die standardisierte Abfragesprache fuer relationale Datenbanken.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "WLAN und Wi-Fi bezeichnen dasselbe: Wi-Fi ist die Technik hinter dem drahtlosen Netzwerk WLAN.",
      options: ["Wahr", "Falsch"],
      correct: [0],
      explanation: "Diese Aussage ist korrekt. WLAN bezeichnet das drahtlose Netzwerk, und Wi-Fi ist die konkrete Technik (Standard), die dahintersteckt.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "Ein Primaerschluessel darf in einer Tabelle mehrfach vorkommen, um Datensaetze zu gruppieren.",
      options: ["Wahr", "Falsch"],
      correct: [1],
      explanation: "Falsch. Ein Primaerschluessel muss eindeutig sein und identifiziert jeden Datensatz in einer Tabelle unverwechselbar.",
      difficulty: 2
    }
  ],
};
export default supplement;
