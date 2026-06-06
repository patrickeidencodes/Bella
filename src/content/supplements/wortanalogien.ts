import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was bedeutet das Analogie-Prinzip 'Beruf : Arbeitsort'?",
      back: "Eine Person (Beruf) ist einem Ort (Arbeitsort) zugeordnet, an dem sie taetig ist. Beispiel: Arzt arbeitet im Krankenhaus, Lehrer arbeitet in der Schule."
    },
    {
      front: "Wortanalogie: Arzt : Krankenhaus = Lehrer : ?",
      back: "Schule. Prinzip: Beruf : Arbeitsort – jeder Beruf hat einen typischen Arbeitsort."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Geraet : Taetigkeit'?",
      back: "Ein Geraet (Werkzeug oder Fahrzeug) wird einer typischen Taetigkeit zugeordnet. Beispiel: Auto – fahren, Flugzeug – fliegen."
    },
    {
      front: "Wortanalogie: Auto : fahren = Flugzeug : ?",
      back: "fliegen. Prinzip: Geraet : Taetigkeit – das Geraet ist dem typischen Vorgang zugeordnet, fuer den es genutzt wird."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Steigerung'?",
      back: "Zwei Woerter stehen in einem Steigerungsverhaeltnis zueinander (schwaecher zu staerker). Beispiel: warm – heiss, kuehl – kalt."
    },
    {
      front: "Wortanalogie: warm : heiss = kuehl : ?",
      back: "kalt. Prinzip: Steigerung – 'warm' ist die schwaecher ausgepragte Form von 'heiss'; genauso ist 'kuehl' die schwaecher ausgepragte Form von 'kalt'."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Ganzes : Teil'?",
      back: "Ein Ganzes wird einem seiner Teile zugeordnet. Beispiel: Hand enthaelt Finger, Fuss enthaelt Zehe."
    },
    {
      front: "Wortanalogie: Hand : Finger = Fuss : ?",
      back: "Zehe. Prinzip: Ganzes : Teil – der Finger ist ein Teil der Hand, die Zehe ist ein Teil des Fusses."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Arzt : Krankenhaus = Lehrer : ?",
      options: ["Buero", "Schule", "Bibliothek", "Universitaet"],
      correct: [1],
      explanation: "Der Arzt arbeitet im Krankenhaus, der Lehrer arbeitet in der Schule. Das Prinzip lautet Beruf : Arbeitsort.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Auto : fahren = Flugzeug : ?",
      options: ["schwimmen", "laufen", "fliegen", "tauchen"],
      correct: [2],
      explanation: "Das Auto wird zum Fahren genutzt, das Flugzeug wird zum Fliegen genutzt. Das Prinzip lautet Geraet : Taetigkeit.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "warm : heiss = kuehl : ?",
      options: ["frisch", "kalt", "eisig", "mild"],
      correct: [1],
      explanation: "Warm ist die abgeschwaechtere Form von heiss. Genauso ist kuehl die abgeschwaechtere Form von kalt. Das Prinzip lautet Steigerung.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Hand : Finger = Fuss : ?",
      options: ["Bein", "Knoechen", "Nagel", "Zehe"],
      correct: [3],
      explanation: "Der Finger ist ein Teil der Hand, die Zehe ist ein Teil des Fusses. Das Prinzip lautet Ganzes : Teil.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'Arzt : Krankenhaus = Lehrer : Schule'?",
      options: ["Geraet : Taetigkeit", "Ganzes : Teil", "Beruf : Arbeitsort", "Steigerung"],
      correct: [2],
      explanation: "Arzt und Krankenhaus sowie Lehrer und Schule beschreiben je eine Person in ihrem typischen Arbeitsumfeld: Beruf : Arbeitsort.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'warm : heiss = kuehl : kalt'?",
      options: ["Steigerung", "Beruf : Arbeitsort", "Ganzes : Teil", "Geraet : Taetigkeit"],
      correct: [0],
      explanation: "Warm und heiss sowie kuehl und kalt bilden je ein Paar aus schwaecher und staerker ausgepraegte Form desselben Merkmals: Steigerung.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Wort vervollstaendigt die Analogie: 'Hand : Finger = Fuss : ?'?",
      options: ["Ferse", "Zehe", "Knie", "Sohle"],
      correct: [1],
      explanation: "Der Finger ist ein Teil der Hand, entsprechend ist die Zehe ein Teil des Fusses. Prinzip: Ganzes : Teil.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'Auto : fahren = Flugzeug : fliegen'?",
      options: ["Beruf : Arbeitsort", "Ganzes : Teil", "Steigerung", "Geraet : Taetigkeit"],
      correct: [3],
      explanation: "Auto und Flugzeug sind Geraete, 'fahren' und 'fliegen' sind die jeweils typischen Taetigkeiten. Prinzip: Geraet : Taetigkeit.",
      difficulty: 2
    }
  ],
};

export default supplement;
