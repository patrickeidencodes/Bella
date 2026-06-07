import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Nenne die Bundeskanzler der Bundesrepublik in der richtigen Reihenfolge (seit 1949).',
      back: 'Konrad Adenauer (CDU), Ludwig Erhard (CDU), Kurt Georg Kiesinger (CDU), Willy Brandt (SPD), Helmut Schmidt (SPD), Helmut Kohl (CDU), Gerhard Schröder (SPD), Angela Merkel (CDU), Olaf Scholz (SPD), Friedrich Merz (CDU, seit 2025).',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?',
      options: ['Konrad Adenauer', 'Ludwig Erhard', 'Willy Brandt', 'Theodor Heuss'],
      correct: [0],
      explanation:
        'Konrad Adenauer (CDU) war ab 1949 der erste Bundeskanzler. Theodor Heuss war zur selben Zeit der erste Bundespräsident.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welcher Partei gehörte Bundeskanzler Willy Brandt an?',
      options: ['SPD', 'CDU', 'FDP', 'Bündnis 90/Die Grünen'],
      correct: [0],
      explanation: 'Willy Brandt war SPD-Bundeskanzler (1969–1974).',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Wer war Bundeskanzler unmittelbar vor Friedrich Merz?',
      options: ['Olaf Scholz', 'Angela Merkel', 'Gerhard Schröder', 'Helmut Kohl'],
      correct: [0],
      explanation: 'Olaf Scholz (SPD) war der direkte Amtsvorgänger von Friedrich Merz.',
      difficulty: 2,
    },
  ],
};

export default supplement;
