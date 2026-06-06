import type { RawFlashcard, RawQuestion } from '../types';
const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Wann schreibt man 'das' und wann 'dass'?",
      back: "'das' ist richtig, wenn man es durch 'dieses', 'jenes' oder 'welches' ersetzen kann (Artikel oder Pronomen). 'dass' leitet einen Nebensatz ein und ist nicht durch diese Woerter ersetzbar."
    },
    {
      front: "Wie prueft man, ob 'das' oder 'dass' korrekt ist?",
      back: "Ersatzprobe: Kann man das Wort durch 'dieses', 'jenes' oder 'welches' ersetzen, schreibt man 'das'. Wenn nicht, schreibt man 'dass'."
    },
    {
      front: "Welche Woerter signalisieren, dass das folgende Wort grossgeschrieben wird?",
      back: "Signalwoerter fuer Substantivierung: das, beim, zum, etwas, nichts. Beispiele: das Lesen, beim Schreiben, etwas Neues."
    },
    {
      front: "Was ist eine Substantivierung und wie wird sie geschrieben?",
      back: "Substantivierungen sind Verben oder Adjektive, die als Nomen verwendet werden. Sie werden grossgeschrieben. Beispiele: das Lesen, das Schreiben, etwas Neues, nichts Besonderes."
    },
    {
      front: "Wann schreibt man 'ss' und wann 'sz' (scharfes s)?",
      back: "Nach kurzem Vokal steht 'ss' (Beispiel: Fluss). Nach langem Vokal oder Doppellaut (Diphthong) steht 'sz' (Beispiel: Strasse)."
    },
    {
      front: "Wie schreibt man 'Fluss' und warum?",
      back: "'Fluss' schreibt man mit 'ss', weil der Vokal 'u' kurz gesprochen wird."
    },
    {
      front: "Wie schreibt man 'Strasse' und warum?",
      back: "'Strasse' schreibt man mit 'sz', weil der Vokal 'a' lang gesprochen wird."
    },
    {
      front: "Wie schreibt man 'Adresse' korrekt?",
      back: "'Adresse' - nicht 'Addresse'. Nur ein 'd' am Anfang."
    },
    {
      front: "Wie schreibt man 'Standard' korrekt?",
      back: "'Standard' - nicht 'Standart'. Das Wort endet auf '-ard', nicht '-art'."
    },
    {
      front: "Wie schreibt man 'naemlich' korrekt?",
      back: "'naemlich' - nicht 'naehmlich'. Kein 'h' nach dem 'a'."
    },
    {
      front: "Wie schreibt man die elektronische Post korrekt?",
      back: "'E-Mail' mit Bindestrich und grossem M - nicht 'Email' ohne Bindestrich."
    },
    {
      front: "Wie schreibt man 'separat' korrekt?",
      back: "'separat' - nicht 'seperat'. Das zweite 'e' ist ein 'a': sep-a-rat."
    },
    {
      front: "Wie schreibt man 'Ressourcen' korrekt?",
      back: "'Ressourcen' mit Doppel-s - nicht 'Resourcen' mit einfachem s."
    },
    {
      front: "Wie schreibt man 'widerspiegeln' korrekt?",
      back: "'widerspiegeln' - nicht 'wiederspiegeln'. Das Praefix lautet 'wider-' (entgegen), nicht 'wieder-' (erneut)."
    },
    {
      front: "Wie schreibt man 'auf jeden Fall' korrekt?",
      back: "'auf jeden Fall' - drei getrennte Woerter, nicht zusammengeschrieben als 'aufjedenfall'."
    },
    {
      front: "Wie schreibt man die Kurzform von 'gibt es' korrekt?",
      back: "'gibt's' mit Apostroph - nicht 'gibts' ohne Apostroph. Der Apostroph ersetzt das weggelassene 'e'."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Welcher Satz verwendet 'das' korrekt?",
      options: [
        "Ich hoffe, das du kommst.",
        "Das Buch, das ich lese, ist spannend.",
        "Er sagt, das es klappt.",
        "Ich weiss, das sie recht hat."
      ],
      correct: [1],
      explanation: "In 'das Buch, das ich lese' kann 'das' durch 'welches' ersetzt werden (das Buch, welches ich lese) - also Relativpronomen, korrekt mit einfachem 's'. In den anderen Saetzen leitet 'das' einen Nebensatz ein und muesste 'dass' geschrieben werden.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welcher Satz verwendet 'dass' korrekt?",
      options: [
        "Das Auto, dass dort steht, gehoert mir.",
        "Ich freue mich, dass du da bist.",
        "Weisst du, wo dass Buch liegt?",
        "Er nimmt dass Heft."
      ],
      correct: [1],
      explanation: "'Ich freue mich, dass du da bist' - hier leitet 'dass' einen Nebensatz ein und kann nicht durch 'dieses' oder 'jenes' ersetzt werden. In den anderen Optionen waere 'das' korrekt.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Die Ersatzprobe fuer 'das' lautet: Wenn man es durch 'dieses', 'jenes' oder 'welches' ersetzen kann, schreibt man 'das'.",
      options: ["Richtig", "Falsch"],
      correct: [0],
      explanation: "Genau so funktioniert die Ersatzprobe: Ist die Ersetzung durch 'dieses', 'jenes' oder 'welches' moeglich, handelt es sich um einen Artikel oder ein Pronomen und man schreibt 'das'. Andernfalls schreibt man 'dass'.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Signalwort deutet darauf hin, dass das folgende Wort grossgeschrieben werden muss?",
      options: [
        "und",
        "aber",
        "beim",
        "oder"
      ],
      correct: [2],
      explanation: "'beim' ist ein Signalwort fuer Substantivierungen (z. B. 'beim Schreiben'). Die Woerter 'und', 'aber' und 'oder' sind Konjunktionen und keine Signalwoerter fuer Grossschreibung.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches der folgenden Beispiele ist eine korrekt grossgeschriebene Substantivierung?",
      options: [
        "das lesen",
        "Das Lesen",
        "Beim schreiben",
        "etwas neues"
      ],
      correct: [1],
      explanation: "'Das Lesen' ist korrekt: Das Verb 'lesen' wird nach dem Signalwort 'das' substantiviert und grossgeschrieben. Alle anderen Optionen haben einen Fehler bei der Gross- oder Kleinschreibung.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "Nach einem langen Vokal schreibt man 'ss' (Beispiel: Strasse mit 'ss').",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Falsch. Nach einem langen Vokal oder Doppellaut schreibt man 'sz' (scharfes s), also 'Strasse'. 'ss' steht nach kurzem Vokal, z. B. 'Fluss'.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Wort wird nach der ss/sz-Regel korrekt geschrieben?",
      options: [
        "Flus",
        "Fluß",
        "Fluss",
        "Flusss"
      ],
      correct: [2],
      explanation: "In 'Fluss' ist der Vokal 'u' kurz, deshalb steht 'ss'. 'Flus' (ein s) ist falsch, 'Flusss' (drei s) ist falsch, und 'Fluß' waere nach alter Rechtschreibung moeglich, ist aber heute nicht mehr die Standardschreibung.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Schreibweise ist korrekt?",
      options: [
        "Addresse",
        "Adresse",
        "Adrresse",
        "Adrese"
      ],
      correct: [1],
      explanation: "'Adresse' ist korrekt - mit einem 'd' und einem Doppel-s. 'Addresse' mit Doppel-d ist ein haeufiger Fehler.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie schreibt man das Wort fuer eine festgelegte Norm oder Massgabe korrekt?",
      options: [
        "Standart",
        "Standard",
        "Stantard",
        "Stanndard"
      ],
      correct: [1],
      explanation: "'Standard' endet auf '-ard', nicht auf '-art'. 'Standart' ist ein sehr haeufiger Rechtschreibfehler.",
      difficulty: 1
    },
    {
      type: "truefalse",
      prompt: "'naemlich' wird korrekt mit 'h' nach dem 'ae' geschrieben: 'naehmlich'.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Falsch. Die korrekte Schreibweise ist 'naemlich' ohne 'h'. 'naehmlich' ist ein haeufiger Fehler.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Schreibweise der elektronischen Post ist korrekt?",
      options: [
        "email",
        "Email",
        "E-Mail",
        "e-mail"
      ],
      correct: [2],
      explanation: "'E-Mail' ist korrekt: mit Bindestrich und grossem 'M'. Das Wort ist aus dem Englischen entlehnt und wird im Deutschen mit Bindestrich und Grossbuchstaben geschrieben.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Schreibweise von 'separat' ist korrekt?",
      options: [
        "seperat",
        "seperrat",
        "separat",
        "sepparat"
      ],
      correct: [2],
      explanation: "'separat' ist korrekt - mit 'a' als zweitem Vokal, nicht 'e'. Die Eselsbruecke: sep-a-rat.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie lautet die korrekte Schreibweise des Plurals von Ressource?",
      options: [
        "Resourcen",
        "Ressourcen",
        "Ressourecen",
        "Resourcchen"
      ],
      correct: [1],
      explanation: "'Ressourcen' ist korrekt - mit Doppel-s. 'Resourcen' mit einfachem s ist falsch.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Schreibweise ist korrekt: 'widerspiegeln' oder 'wiederspiegeln'?",
      options: [
        "'wiederspiegeln', weil der Spiegel etwas wiederholt",
        "'widerspiegeln', weil das Praefix 'wider-' entgegen bedeutet",
        "Beide Schreibweisen sind gleichwertig korrekt",
        "'Widerspiegeln' nur am Satzanfang, sonst 'wiederspiegeln'"
      ],
      correct: [1],
      explanation: "'widerspiegeln' ist korrekt. Das Praefix 'wider-' bedeutet entgegen oder zurueck (wie in Widerspruch). 'wieder-' bedeutet erneut (wie in wiederholen). Etwas spiegelt etwas anderes wider, nicht wieder.",
      difficulty: 2
    },
    {
      type: "truefalse",
      prompt: "'auf jeden Fall' wird als ein zusammengeschriebenes Wort 'aufjedenfall' geschrieben.",
      options: ["Richtig", "Falsch"],
      correct: [1],
      explanation: "Falsch. 'auf jeden Fall' sind drei getrennte Woerter. Die Zusammenschreibung 'aufjedenfall' ist falsch.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Wie schreibt man die Kurzform von 'gibt es' korrekt?",
      options: [
        "gibts",
        "gibt's",
        "gibt`s",
        "Gibs"
      ],
      correct: [1],
      explanation: "'gibt's' mit einem geraden Apostroph ist korrekt. Der Apostroph zeigt an, dass das 'e' von 'es' weggelassen wurde. 'gibts' ohne Apostroph ist falsch.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Signalwort aus der folgenden Liste deutet auf eine Substantivierung hin?",
      options: [
        "weil",
        "etwas",
        "trotzdem",
        "obwohl"
      ],
      correct: [1],
      explanation: "'etwas' ist ein Signalwort fuer Substantivierungen (z. B. 'etwas Neues'). 'weil', 'trotzdem' und 'obwohl' sind Konjunktionen und keine Signalwoerter fuer Grossschreibung.",
      difficulty: 2
    },
    {
      type: "fill",
      prompt: "Ergaenze die Regel: Nach kurzem Vokal schreibt man ___, nach langem Vokal oder Doppellaut schreibt man ___.",
      options: [],
      correct: ["ss", "sz"],
      explanation: "Nach kurzem Vokal steht 'ss' (Beispiel: Fluss), nach langem Vokal oder Doppellaut steht 'sz' (Beispiel: Strasse).",
      difficulty: 2
    }
  ],
};
export default supplement;
