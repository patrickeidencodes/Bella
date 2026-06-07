import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Wie viele Einwohner hat die Landeshauptstadt Saarbrücken etwa?',
      back: 'Rund 187.000 Einwohner. Der namensgebende Fluss des Saarlandes ist die Saar.',
    },
    {
      front: 'Wie viele Gemeinden hat das Saarland?',
      back: 'Das Saarland hat 52 Gemeinden, davon 17 Städte.',
    },
    {
      front: 'Was ist die Großregion?',
      back: 'Ein grenzüberschreitender Verbund aus Saarland, Rheinland-Pfalz, Luxemburg, Lothringen und Wallonien (Belgien).',
    },
    {
      front: 'Wie ist der Landtag des Saarlandes zusammengesetzt?',
      back: 'Er hat 51 Sitze. Aktuell sind drei Parteien vertreten: SPD, CDU und AfD. Die SPD regiert mit absoluter Mehrheit.',
    },
    {
      front: 'Wann finden die saarländischen Landtagswahlen statt?',
      back: 'Letzte Wahl: März 2022. Nächste Wahl: 18. April 2027.',
    },
    {
      front: 'Was ist der Saarlandpakt?',
      back: 'Ein Pakt zur finanziellen Entlastung der überschuldeten saarländischen Städte und Kommunen.',
    },
    {
      front: 'Wofür steht der Strukturwandel im Saarland?',
      back: 'Den Umbau der Stahl- und Industrieproduktion in Richtung grüner Wasserstoff.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Wie viele Gemeinden hat das Saarland?',
      options: ['36', '52', '69', '102'],
      correct: [1],
      explanation: 'Das Saarland hat 52 Gemeinden (davon 17 Städte).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wie viele Sitze hat der Landtag des Saarlandes?',
      options: ['51', '69', '120', '199'],
      correct: [0],
      explanation: 'Der saarländische Landtag hat 51 Sitze.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wann ist die nächste Landtagswahl im Saarland?',
      options: ['18. April 2027', 'März 2022', '2025', '2026'],
      correct: [0],
      explanation: 'Die nächste saarländische Landtagswahl ist für den 18. April 2027 angesetzt (letzte Wahl: März 2022).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was ist der Saarlandpakt?',
      options: [
        'Hilfe zur Entschuldung der Städte und Kommunen',
        'ein Verkehrsprojekt',
        'ein Schulgesetz',
        'ein Naturschutzabkommen',
      ],
      correct: [0],
      explanation: 'Der Saarlandpakt entlastet die überschuldeten saarländischen Städte und Kommunen finanziell.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Regionen bilden die Großregion?',
      options: [
        'Saarland, Rheinland-Pfalz, Luxemburg, Lothringen, Wallonien',
        'nur Saarland und Luxemburg',
        'Saarland, Bayern, Hessen',
        'Saarland, Elsass, Baden',
      ],
      correct: [0],
      explanation: 'Die Großregion umfasst Saarland, Rheinland-Pfalz, Luxemburg, Lothringen und Wallonien (Belgien).',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Etwa wie viele Einwohner hat die Stadt Saarbrücken?',
      options: ['rund 187.000', 'rund 50.000', 'rund 1 Million', 'rund 600.000'],
      correct: [0],
      explanation: 'Saarbrücken hat rund 187.000 Einwohner. (Das gesamte Saarland hat rund 1 Million Einwohner.)',
      difficulty: 2,
    },
    {
      type: 'truefalse',
      prompt: 'Im Saarland regiert die SPD aktuell mit absoluter Mehrheit.',
      options: ['Richtig', 'Falsch'],
      correct: [0],
      explanation:
        'Richtig. Im saarländischen Landtag (51 Sitze) hat die SPD die absolute Mehrheit; außerdem sind CDU und AfD vertreten.',
      difficulty: 2,
    },
  ],
};

export default supplement;
