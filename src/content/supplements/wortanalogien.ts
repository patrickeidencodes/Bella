import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was bedeutet das Analogie-Prinzip 'Beruf : Arbeitsort'?",
      back: "Eine Person (Beruf) ist einem Ort (Arbeitsort) zugeordnet, an dem sie tätig ist. Beispiel: Arzt arbeitet im Krankenhaus, Lehrer arbeitet in der Schule."
    },
    {
      front: "Wortanalogie: Arzt : Krankenhaus = Lehrer : ?",
      back: "Schule. Prinzip: Beruf : Arbeitsort – jeder Beruf hat einen typischen Arbeitsort."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Gerät : Tätigkeit'?",
      back: "Ein Gerät (Werkzeug oder Fahrzeug) wird einer typischen Tätigkeit zugeordnet. Beispiel: Auto – fahren, Flugzeug – fliegen."
    },
    {
      front: "Wortanalogie: Auto : fahren = Flugzeug : ?",
      back: "fliegen. Prinzip: Gerät : Tätigkeit – das Gerät ist dem typischen Vorgang zugeordnet, für den es genutzt wird."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Steigerung'?",
      back: "Zwei Wörter stehen in einem Steigerungsverhältnis zueinander (schwächer zu stärker). Beispiel: warm – heiss, kühl – kalt."
    },
    {
      front: "Wortanalogie: warm : heiss = kühl : ?",
      back: "kalt. Prinzip: Steigerung – 'warm' ist die schwächer ausgepragte Form von 'heiss'; genauso ist 'kühl' die schwächer ausgepragte Form von 'kalt'."
    },
    {
      front: "Was bedeutet das Analogie-Prinzip 'Ganzes : Teil'?",
      back: "Ein Ganzes wird einem seiner Teile zugeordnet. Beispiel: Hand enthält Finger, Fuß enthält Zehe."
    },
    {
      front: "Wortanalogie: Hand : Finger = Fuß : ?",
      back: "Zehe. Prinzip: Ganzes : Teil – der Finger ist ein Teil der Hand, die Zehe ist ein Teil des Fusses."
    }
  ],
  questions: [
    {
      type: "mc",
      prompt: "Arzt : Krankenhaus = Lehrer : ?",
      options: ["Büro", "Schule", "Bibliothek", "Universität"],
      correct: [1],
      explanation: "Der Arzt arbeitet im Krankenhaus, der Lehrer arbeitet in der Schule. Das Prinzip lautet Beruf : Arbeitsort.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Auto : fahren = Flugzeug : ?",
      options: ["schwimmen", "laufen", "fliegen", "tauchen"],
      correct: [2],
      explanation: "Das Auto wird zum Fahren genutzt, das Flugzeug wird zum Fliegen genutzt. Das Prinzip lautet Gerät : Tätigkeit.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "warm : heiss = kühl : ?",
      options: ["frisch", "kalt", "eisig", "mild"],
      correct: [1],
      explanation: "Warm ist die abgeschwächtere Form von heiss. Genauso ist kühl die abgeschwächtere Form von kalt. Das Prinzip lautet Steigerung.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Hand : Finger = Fuß : ?",
      options: ["Bein", "Knoechen", "Nagel", "Zehe"],
      correct: [3],
      explanation: "Der Finger ist ein Teil der Hand, die Zehe ist ein Teil des Fusses. Das Prinzip lautet Ganzes : Teil.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'Arzt : Krankenhaus = Lehrer : Schule'?",
      options: ["Gerät : Tätigkeit", "Ganzes : Teil", "Beruf : Arbeitsort", "Steigerung"],
      correct: [2],
      explanation: "Arzt und Krankenhaus sowie Lehrer und Schule beschreiben je eine Person in ihrem typischen Arbeitsumfeld: Beruf : Arbeitsort.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'warm : heiss = kühl : kalt'?",
      options: ["Steigerung", "Beruf : Arbeitsort", "Ganzes : Teil", "Gerät : Tätigkeit"],
      correct: [0],
      explanation: "Warm und heiss sowie kühl und kalt bilden je ein Paar aus schwächer und stärker ausgeprägte Form desselben Merkmals: Steigerung.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welches Wort vervollständigt die Analogie: 'Hand : Finger = Fuß : ?'?",
      options: ["Ferse", "Zehe", "Knie", "Sohle"],
      correct: [1],
      explanation: "Der Finger ist ein Teil der Hand, entsprechend ist die Zehe ein Teil des Fusses. Prinzip: Ganzes : Teil.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welches Analogie-Prinzip liegt vor: 'Auto : fahren = Flugzeug : fliegen'?",
      options: ["Beruf : Arbeitsort", "Ganzes : Teil", "Steigerung", "Gerät : Tätigkeit"],
      correct: [3],
      explanation: "Auto und Flugzeug sind Geräte, 'fahren' und 'fliegen' sind die jeweils typischen Tätigkeiten. Prinzip: Gerät : Tätigkeit.",
      difficulty: 2
    }
  ],
};

export default supplement;
