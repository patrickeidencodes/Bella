import type { RawSupplement } from '../../types';

const supplement: RawSupplement = {
  flashcards: [
    {
      front: 'Was bedeuten die Teststufen SIT und UAT?',
      back: 'SIT = System-Integrationstest (Zusammenspiel mehrerer Teile). UAT = User-Acceptance-Test, die Abnahme durch den Kunden. Ein Unit-Test prüft dagegen einen isolierten Code-Teil.',
    },
    {
      front: "Was bedeuten 'main' und 'localhost' bei der Entwicklung?",
      back: "'main' ist der Hauptzweig (Branch) mit dem fertigen Code. 'localhost' ist der eigene Rechner zum Testen.",
    },
    {
      front: 'Was ist ein Log – und was bedeutet Debuggen?',
      back: 'Ein Log ist ein automatisch geführtes Protokoll von Ereignissen und Fehlern. Debuggen heißt, Fehler im Code zu suchen und zu beheben.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Wofür steht UAT?',
      options: [
        'User-Acceptance-Test (Abnahme durch den Kunden)',
        'Universal Application Tool',
        'Unit-Analyse-Test',
        'User Access Token',
      ],
      correct: [0],
      explanation: 'UAT = User-Acceptance-Test (Kundenabnahme). SIT = System-Integrationstest (Zusammenspiel mehrerer Teile).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: "Was bezeichnet 'localhost'?",
      options: [
        'den eigenen Rechner zum Testen',
        'den Hauptzweig mit dem fertigen Code',
        'einen zentralen Server im Internet',
        'den Namen einer Datenbank',
      ],
      correct: [0],
      explanation: "'localhost' ist der eigene Rechner (lokales Testen). 'main' ist der Hauptzweig mit dem fertigen Code.",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was ist ein Log?',
      options: [
        'ein automatisches Protokoll von Ereignissen und Fehlern',
        'ein Programmierfehler',
        'ein Testverfahren',
        'ein Versionszweig',
      ],
      correct: [0],
      explanation: 'Ein Log protokolliert Ereignisse und Fehler automatisch und hilft beim Debuggen.',
      difficulty: 1,
    },
  ],
};

export default supplement;
