import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Was sind Maschinencode und Assembler?',
      back: 'Maschinencode besteht nur aus 0 und 1 und ist das Einzige, was die CPU direkt versteht. Assembler ist eine maschinennahe Sprache, die in Maschinencode übersetzt wird.',
    },
    {
      front: 'Welche Rolle haben HTML, CSS und JavaScript?',
      back: 'HTML = Struktur einer Webseite, CSS = Design/Gestaltung, JavaScript = Dynamik/Interaktion. Nur JavaScript ist eine echte Programmiersprache.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Was versteht die CPU direkt?',
      options: ['Maschinencode (nur 0 und 1)', 'Assembler', 'HTML', 'Java'],
      correct: [0],
      explanation:
        'Nur Maschinencode (0 und 1) versteht die CPU direkt. Assembler ist maschinennah und wird erst in Maschinencode übersetzt.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche der drei Webtechniken ist eine echte Programmiersprache?',
      options: ['JavaScript', 'HTML', 'CSS', 'keine davon'],
      correct: [0],
      explanation: 'Nur JavaScript ist eine Programmiersprache (Dynamik). HTML liefert die Struktur, CSS das Design.',
      difficulty: 2,
    },
  ],
};

export default supplement;
