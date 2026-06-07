import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Unterschied zwischen Frontend und Backend?',
      back: 'Frontend = der sichtbare Teil einer Anwendung für die Nutzer (Oberfläche). Backend = Logik und Datenbank im Hintergrund.',
    },
    {
      front: 'Was sind Docker und Kubernetes?',
      back: 'Docker verpackt Software in Container, die überall gleich laufen. Kubernetes verwaltet und steuert viele Container automatisch.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Was bezeichnet das Backend einer Anwendung?',
      options: [
        'die Logik und Datenbank im Hintergrund',
        'die sichtbare Benutzeroberfläche',
        'das Farbdesign der Website',
        'die Internetverbindung',
      ],
      correct: [0],
      explanation:
        'Das Backend ist der nicht sichtbare Teil (Logik, Datenverarbeitung, Datenbank). Das Frontend ist die sichtbare Oberfläche.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wozu dient Docker?',
      options: [
        'Software in Container verpacken, die überall gleich laufen',
        'Viren aufspüren und entfernen',
        'Webseiten grafisch gestalten',
        'Passwörter sicher speichern',
      ],
      correct: [0],
      explanation:
        'Docker verpackt Anwendungen in Container. Kubernetes verwaltet anschließend viele dieser Container automatisch.',
      difficulty: 2,
    },
  ],
};

export default supplement;
