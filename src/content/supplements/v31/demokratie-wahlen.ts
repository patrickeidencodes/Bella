import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Wie viele Stimmen hat der Bundesrat insgesamt?',
      back: 'Der Bundesrat hat insgesamt 69 Stimmen. Jedes Bundesland hat je nach Einwohnerzahl 3 bis 6 Stimmen.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Wie viele Stimmen hat der Bundesrat insgesamt?',
      options: ['60', '69', '83', '630'],
      correct: [1],
      explanation:
        'Der Bundesrat hat insgesamt 69 Stimmen (je Land 3 bis 6, abhängig von der Einwohnerzahl). 630 ist die Sitzzahl des Bundestags.',
      difficulty: 2,
    },
  ],
};

export default supplement;
