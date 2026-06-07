import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Wie viele Stimmen hat der Bundesrat insgesamt?',
      back: 'Der Bundesrat hat insgesamt 69 Stimmen. Jedes Bundesland hat je nach Einwohnerzahl 3 bis 6 Stimmen.',
    },
    {
      front: 'Welche Farben haben die wichtigsten Parteien?',
      back: 'SPD = rot, CDU/CSU = schwarz, Bündnis 90/Die Grünen = grün, FDP = gelb, AfD = blau, Die Linke = dunkelrot/magenta.',
    },
    {
      front: 'Was ist eine Große Koalition („GroKo")?',
      back: 'Ein Bündnis aus Union (CDU/CSU) und SPD – nach den Parteifarben „Schwarz-Rot". Es bildet aktuell die Bundesregierung unter Kanzler Friedrich Merz.',
    },
    {
      front: 'Welche Parteien bilden eine „Ampel"-Koalition?',
      back: 'SPD + FDP + Grüne (rot-gelb-grün). Die Ampel unter Olaf Scholz war die vorherige Bundesregierung (2021–2025), sie zerbrach und führte zur Neuwahl 2025.',
    },
    {
      front: 'Welche Parteien bilden eine „Jamaika"-Koalition?',
      back: 'Union + FDP + Grüne – nach den Farben Schwarz-Gelb-Grün (wie die Flagge Jamaikas).',
    },
    {
      front: 'Welche Parteien bilden eine „Kenia"-Koalition?',
      back: 'Union + SPD + Grüne – nach den Farben Schwarz-Rot-Grün (wie die Flagge Kenias).',
    },
    {
      front: 'Was bedeuten „Rot-Grün" und „Schwarz-Gelb"?',
      back: 'Rot-Grün = SPD + Grüne. Schwarz-Gelb = Union (CDU/CSU) + FDP.',
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
    {
      type: 'mc',
      prompt: 'Welche Parteien bilden die „Ampel"-Koalition?',
      options: ['Union und SPD', 'Union, FDP und Grüne', 'SPD, FDP und Grüne', 'SPD und Grüne'],
      correct: [2],
      explanation: 'Die „Ampel" steht für SPD (rot), FDP (gelb) und Grüne (grün).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wie nennt man die Koalition aus Union und SPD?',
      options: ['Ampel', 'Große Koalition (Schwarz-Rot)', 'Jamaika', 'Kenia'],
      correct: [1],
      explanation: 'Union + SPD heißt Große Koalition bzw. „GroKo" (Schwarz-Rot).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Farbe wird der FDP zugeordnet?',
      options: ['grün', 'blau', 'rot', 'gelb'],
      correct: [3],
      explanation: 'Die FDP hat die Parteifarbe Gelb.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Koalition besteht aus Union, FDP und Grünen?',
      options: ['Jamaika', 'Kenia', 'Ampel', 'Große Koalition'],
      correct: [0],
      explanation: 'Union (schwarz) + FDP (gelb) + Grüne (grün) ergeben „Jamaika" (Schwarz-Gelb-Grün).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Koalition regiert aktuell im Bund (Kanzler Friedrich Merz)?',
      options: [
        'Ampel (SPD, FDP, Grüne)',
        'Rot-Grün (SPD, Grüne)',
        'Schwarz-Rot (Union und SPD)',
        'Jamaika (Union, FDP, Grüne)',
      ],
      correct: [2],
      explanation:
        'Aktuell regiert eine Große Koalition / Schwarz-Rot aus Union und SPD unter Bundeskanzler Friedrich Merz.',
      difficulty: 2,
    },
    {
      type: 'truefalse',
      prompt: 'Die „Ampel"-Koalition war die Bundesregierung vor der aktuellen.',
      options: ['Richtig', 'Falsch'],
      correct: [0],
      explanation:
        'Richtig. Die Ampel (SPD, FDP, Grüne) unter Olaf Scholz (2021–2025) war die vorherige Bundesregierung; nach ihrem Bruch kam es zur Neuwahl 2025.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Farbe wird der SPD zugeordnet?',
      options: ['schwarz', 'rot', 'gelb', 'grün'],
      correct: [1],
      explanation: 'Die SPD hat die Parteifarbe Rot.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Parteien bilden eine „Kenia"-Koalition?',
      options: ['SPD, FDP und Grüne', 'Union, FDP und Grüne', 'Union und SPD', 'Union, SPD und Grüne'],
      correct: [3],
      explanation: 'Kenia = Union (schwarz) + SPD (rot) + Grüne (grün), also Schwarz-Rot-Grün.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Welche Farbe wird der AfD zugeordnet?',
      options: ['blau', 'grün', 'gelb', 'schwarz'],
      correct: [0],
      explanation: 'Die AfD hat die Parteifarbe Blau.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: '„Schwarz-Gelb" bezeichnet eine Koalition aus …?',
      options: ['SPD und Grünen', 'SPD und FDP', 'Union und FDP', 'Union und Grünen'],
      correct: [2],
      explanation: 'Schwarz-Gelb = Union (CDU/CSU, schwarz) + FDP (gelb).',
      difficulty: 2,
    },
  ],
};

export default supplement;
