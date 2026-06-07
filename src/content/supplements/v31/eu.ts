import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Was ist der Élysée-Vertrag (1963)?',
      back: 'Der deutsch-französische Freundschaftsvertrag von 1963. Er wurde 2019 durch den Vertrag von Aachen ergänzt und vertieft.',
    },
    {
      front: 'Was regelt der Vertrag von Aachen (2019)?',
      back: 'Er erneuert und vertieft die deutsch-französische Zusammenarbeit – als Nachfolge bzw. Ergänzung des Élysée-Vertrags von 1963.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Was wurde 1963 mit dem Élysée-Vertrag besiegelt?',
      options: [
        'die deutsch-französische Freundschaft und Zusammenarbeit',
        'der Beitritt zur EWG',
        'die Einführung des Euro',
        'die deutsche Wiedervereinigung',
      ],
      correct: [0],
      explanation:
        'Der Élysée-Vertrag (1963) ist der deutsch-französische Freundschaftsvertrag. 2019 folgte der Vertrag von Aachen.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wofür steht der Vertrag von Aachen (2019)?',
      options: [
        'Vertiefung der deutsch-französischen Zusammenarbeit',
        'Gründung der NATO',
        'Schaffung des Schengen-Raums',
        'Einführung des Euro-Bargelds',
      ],
      correct: [0],
      explanation:
        'Der Vertrag von Aachen (2019) erneuert und vertieft die deutsch-französische Zusammenarbeit (Nachfolge des Élysée-Vertrags).',
      difficulty: 2,
    },
  ],
};

export default supplement;
