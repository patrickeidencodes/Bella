import type { RawTopic } from '../types';

/**
 * Zusatz / Kür: Landeskunde Saarland – Feinheiten über den Pflichtstoff hinaus.
 * Als Kür gekennzeichnet durch „(Kür)" im Titel und Relevanz „weniger relevant".
 */
const topic: RawTopic = {
  slug: 'landeskunde-saarland-kuer',
  title: 'Landeskunde Saarland (Kür)',
  description: 'Zusatzwissen über das Saarland – über den Pflichtstoff hinaus.',
  flashcards: [
    {
      front: 'Was ist die Völklinger Hütte?',
      back: 'Ein stillgelegtes Eisenwerk im Saarland. Seit 1994 ist sie UNESCO-Weltkulturerbe.',
    },
    {
      front: 'Wie ist das Saarland verwaltungsmäßig gegliedert?',
      back: 'In 6 Kreise: der Regionalverband Saarbrücken sowie die fünf Landkreise Merzig-Wadern, Neunkirchen, Saarlouis, Saarpfalz-Kreis und St. Wendel.',
    },
    {
      front: 'Welches sind die größten Städte des Saarlandes?',
      back: 'Saarbrücken, Neunkirchen, Homburg, Völklingen und Saarlouis.',
    },
    {
      front: 'Montan-Geschichte des Saarlandes?',
      back: 'Das Saarland war eine Kohle- und Stahlregion. Der Steinkohlebergbau endete 2012; seitdem prägt der Strukturwandel die Region.',
    },
    {
      front: 'Was weißt du über die Verfassung des Saarlandes?',
      back: 'Die Verfassung des Saarlandes stammt von 1947. Der Ministerpräsident wird vom Landtag gewählt.',
    },
    {
      front: 'Wofür ist die Universität des Saarlandes bekannt?',
      back: 'Sie ist ein bedeutender Informatik-Standort. Dort sitzt unter anderem das CISPA, das Helmholtz-Zentrum für Informationssicherheit (IT-Sicherheit).',
    },
  ],
  questions: [
    { type: 'mc', prompt: 'Wie viele Kreise hat das Saarland insgesamt?', options: ['4', '5', '6', '7'], correct: [2], explanation: 'Es sind 6 Kreise: der Regionalverband Saarbrücken und fünf Landkreise (Merzig-Wadern, Neunkirchen, Saarlouis, Saarpfalz-Kreis, St. Wendel).', difficulty: 2 },
    { type: 'mc', prompt: 'Welches UNESCO-Weltkulturerbe liegt im Saarland?', options: ['Völklinger Hütte', 'Zeche Zollverein', 'Wartburg', 'Kölner Dom'], correct: [0], explanation: 'Die Völklinger Hütte ist seit 1994 UNESCO-Weltkulturerbe. Zollverein liegt in Essen, die Wartburg in Thüringen, der Kölner Dom in Köln.', difficulty: 1 },
    { type: 'truefalse', prompt: 'Die Völklinger Hütte ist seit 1994 UNESCO-Weltkulturerbe.', options: ['Richtig', 'Falsch'], correct: [0], explanation: 'Richtig. Das stillgelegte Eisenwerk wurde 1994 zum UNESCO-Weltkulturerbe erklärt.', difficulty: 1 },
    { type: 'mc', prompt: 'Wann endete der Steinkohlebergbau im Saarland?', options: ['1990', '2007', '2012', '2020'], correct: [2], explanation: 'Der Steinkohlebergbau im Saarland endete 2012.', difficulty: 2 },
    { type: 'mc', prompt: 'Aus welchem Jahr stammt die Verfassung des Saarlandes?', options: ['1947', '1949', '1957', '1990'], correct: [0], explanation: 'Die Verfassung des Saarlandes stammt von 1947. (1957 trat das Saarland der Bundesrepublik bei.)', difficulty: 2 },
    { type: 'mc', prompt: 'Wer wählt den Ministerpräsidenten des Saarlandes?', options: ['der Landtag', 'das Volk direkt', 'der Bundespräsident', 'der Bundesrat'], correct: [0], explanation: 'Der Ministerpräsident wird vom Landtag des Saarlandes gewählt (nicht direkt vom Volk).', difficulty: 2 },
    { type: 'mc', prompt: 'Wofür ist die Universität des Saarlandes besonders bekannt?', options: ['Schiffbau', 'Informatik und IT-Sicherheit (CISPA)', 'Bergbau', 'Weinbau'], correct: [1], explanation: 'Die Universität des Saarlandes ist ein Informatik-Standort; dort sitzt u. a. das CISPA (Helmholtz-Zentrum für IT-Sicherheit).', difficulty: 2 },
    { type: 'mc', prompt: 'Was ist das CISPA?', options: ['ein Stahlwerk', 'eine Steuerbehörde', 'ein Helmholtz-Zentrum für IT-Sicherheit', 'ein Naturpark'], correct: [2], explanation: 'Das CISPA ist das Helmholtz-Zentrum für Informationssicherheit an der Universität des Saarlandes.', difficulty: 3 },
    { type: 'mc', prompt: 'Welche dieser Städte gehört zu den größten im Saarland?', options: ['Homburg', 'Trier', 'Kaiserslautern', 'Mainz'], correct: [0], explanation: 'Zu den größten Städten zählen Saarbrücken, Neunkirchen, Homburg, Völklingen und Saarlouis. Trier, Kaiserslautern und Mainz liegen außerhalb des Saarlandes.', difficulty: 2 },
    { type: 'mc', prompt: 'Welcher Kreis ist KEIN saarländischer Landkreis?', options: ['Saarpfalz-Kreis', 'St. Wendel', 'Bitburg-Prüm', 'Merzig-Wadern'], correct: [2], explanation: 'Bitburg-Prüm (Eifelkreis) liegt in Rheinland-Pfalz. Saarländische Landkreise sind u. a. Saarpfalz-Kreis, St. Wendel und Merzig-Wadern.', difficulty: 3 },
  ],
};

export default topic;
