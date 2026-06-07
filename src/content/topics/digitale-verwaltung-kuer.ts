import type { RawTopic } from '../types';

/**
 * Zusatz / Kür: Digitale Verwaltung – Feinheiten über den Pflichtstoff hinaus.
 * Als Kür gekennzeichnet durch „(Kür)" im Titel und Relevanz „weniger relevant".
 * (E-Akte und eID sind bereits im Thema „IT-Sicherheit & digitale Verwaltung".)
 */
const topic: RawTopic = {
  slug: 'digitale-verwaltung-kuer',
  title: 'Digitale Verwaltung (Kür)',
  description: 'Zusatzwissen zur digitalen Verwaltung – über den Pflichtstoff hinaus.',
  flashcards: [
    {
      front: 'Was ist die BundID?',
      back: 'Ein zentrales Servicekonto (Bürgerkonto), mit dem man sich für Online-Behördengänge anmeldet.',
    },
    {
      front: 'Wofür steht eIDAS?',
      back: 'Eine EU-Verordnung für digitale Identitäten und rechtsgültige elektronische Signaturen.',
    },
    {
      front: 'Was ist eine elektronische Signatur?',
      back: 'Eine rechtsgültige digitale Unterschrift. Der rechtliche Rahmen dafür ist die EU-Verordnung eIDAS.',
    },
    {
      front: 'Was ist der IT-Grundschutz?',
      back: 'Ein Standard des BSI (Bundesamt für Sicherheit in der Informationstechnik) für sichere Behörden-IT.',
    },
    {
      front: 'Was regelt die BITV (Barrierefreiheit)?',
      back: 'Öffentliche Websites und Apps müssen barrierefrei sein, damit alle Menschen sie nutzen können.',
    },
    {
      front: 'Was besagt das Once-Only-Prinzip?',
      back: 'Bürger müssen ihre Daten nur einmal angeben; die Behörden tauschen sie anschließend untereinander aus.',
    },
    {
      front: 'Was ist die Registermodernisierung?',
      back: 'Die Verknüpfung staatlicher Register – sie schafft die technische Grundlage für das Once-Only-Prinzip.',
    },
    {
      front: 'Was ist der IT-Planungsrat?',
      back: 'Ein Gremium, das die IT und Digitalisierung von Bund und Ländern koordiniert.',
    },
  ],
  questions: [
    { type: 'mc', prompt: 'Was ist die BundID?', options: ['ein Bürger-/Servicekonto für Online-Behördengänge', 'ein neuer Personalausweis', 'eine Steuernummer', 'ein Virenscanner'], correct: [0], explanation: 'Die BundID ist ein zentrales Servicekonto (Bürgerkonto) für Online-Behördengänge.', difficulty: 1 },
    { type: 'mc', prompt: 'Wofür steht eIDAS?', options: ['ein Verschlüsselungsalgorithmus', 'eine internationale Datenschutzbehörde', 'EU-Verordnung für digitale Identitäten und E-Signaturen', 'ein Bürgerportal'], correct: [2], explanation: 'eIDAS ist die EU-Verordnung für digitale Identitäten und rechtsgültige elektronische Signaturen.', difficulty: 2 },
    { type: 'mc', prompt: 'Was ist der IT-Grundschutz?', options: ['ein Virenscanner', 'ein BSI-Standard für sichere Behörden-IT', 'ein Steuergesetz', 'eine Programmiersprache'], correct: [1], explanation: 'Der IT-Grundschutz ist ein Standard des BSI für sichere Behörden-IT.', difficulty: 2 },
    { type: 'mc', prompt: 'Wofür sorgt die BITV?', options: ['Barrierefreiheit öffentlicher Websites und Apps', 'schnellere Internetverbindung', 'sichere Passwörter', 'Cookie-Hinweise'], correct: [0], explanation: 'Die BITV stellt sicher, dass öffentliche Websites und Apps barrierefrei sind.', difficulty: 2 },
    { type: 'mc', prompt: 'Was besagt das Once-Only-Prinzip?', options: ['jeder Antrag darf nur einmal gestellt werden', 'Daten müssen nur einmal angegeben werden; Behörden tauschen sie aus', 'Daten dürfen nur einmal gespeichert werden', 'man darf eine Behörde nur einmal besuchen'], correct: [1], explanation: 'Beim Once-Only-Prinzip geben Bürger ihre Daten nur einmal an; die Behörden tauschen sie untereinander aus.', difficulty: 2 },
    { type: 'mc', prompt: 'Welches Gremium koordiniert die IT von Bund und Ländern?', options: ['der Bundesrat', 'das BSI', 'der IT-Planungsrat', 'die Datenschutzkonferenz'], correct: [2], explanation: 'Der IT-Planungsrat koordiniert IT und Digitalisierung von Bund und Ländern.', difficulty: 2 },
    { type: 'truefalse', prompt: 'Öffentliche Websites und Apps müssen barrierefrei sein.', options: ['Richtig', 'Falsch'], correct: [0], explanation: 'Richtig. Das schreibt die Barrierefreie-Informationstechnik-Verordnung (BITV) vor.', difficulty: 1 },
    { type: 'mc', prompt: 'Wer gibt den IT-Grundschutz heraus?', options: ['das BSI', 'die EU-Kommission', 'der TÜV', 'die Bundesnetzagentur'], correct: [0], explanation: 'Der IT-Grundschutz stammt vom BSI (Bundesamt für Sicherheit in der Informationstechnik).', difficulty: 2 },
    { type: 'mc', prompt: 'Was ist eine elektronische Signatur?', options: ['ein eingescanntes Dokument', 'eine rechtsgültige digitale Unterschrift', 'ein Passwort', 'eine E-Mail-Adresse'], correct: [1], explanation: 'Eine elektronische Signatur ist eine rechtsgültige digitale Unterschrift; ihr Rechtsrahmen ist eIDAS.', difficulty: 2 },
    { type: 'mc', prompt: 'Wozu dient die Registermodernisierung?', options: ['neue Steuern einzuführen', 'den Personalausweis abzuschaffen', 'die Grundlage für das Once-Only-Prinzip zu schaffen', 'Cookies zu regulieren'], correct: [2], explanation: 'Die Registermodernisierung verknüpft staatliche Register und schafft so die Grundlage für das Once-Only-Prinzip.', difficulty: 3 },
  ],
};

export default topic;
