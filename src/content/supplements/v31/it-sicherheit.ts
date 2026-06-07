import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Was sind Cookies?',
      back: 'Kleine Textdateien, die eine Website im Browser speichert, um sich an den Nutzer und seine Einstellungen zu erinnern.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Was sind Cookies?',
      options: [
        'kleine Textdateien zum Wiedererkennen von Nutzern und Einstellungen',
        'Schadprogramme zum Ausspähen von Daten',
        'ein Verschlüsselungsverfahren',
        'kurze Netzwerkkabel',
      ],
      correct: [0],
      explanation:
        'Cookies sind kleine Textdateien, die eine Website speichert, um Nutzer und ihre Einstellungen wiederzuerkennen.',
      difficulty: 1,
    },
  ],
};

export default supplement;
