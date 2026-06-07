import type { RawTopic } from '../types';

/**
 * Zahlenreihen (leicht bis mittel) – logische Zahlenfolgen erkennen und fortsetzen.
 * In den Erklärungen steht jeweils die zugrunde liegende Regel.
 */
const topic: RawTopic = {
  slug: 'zahlenreihen',
  title: 'Zahlenreihen',
  description: 'Logische Zahlenfolgen erkennen und fortsetzen (leicht bis mittel).',
  flashcards: [
    {
      front: 'Was ist eine Zahlenreihe?',
      back: 'Eine Folge von Zahlen, die einer bestimmten Regel folgt. Aufgabe: die Regel erkennen und die Reihe fortsetzen.',
    },
    {
      front: 'Wie geht man eine Zahlenreihe systematisch an?',
      back: 'Zuerst die Differenz benachbarter Zahlen prüfen (+/−). Passt das nicht, auf Multiplikation/Division (×/÷) testen, dann auf Quadrat-/Kubikzahlen oder verschachtelte Reihen.',
    },
    {
      front: 'Arithmetische Reihe (konstante Addition)',
      back: 'Zu jeder Zahl wird derselbe Wert addiert. Beispiel: 2, 4, 6, 8, … (+2). Nächste Zahl: 10.',
    },
    {
      front: 'Reihe mit konstanter Subtraktion',
      back: 'Von jeder Zahl wird derselbe Wert abgezogen. Beispiel: 20, 18, 16, 14, … (−2). Nächste Zahl: 12.',
    },
    {
      front: 'Geometrische Reihe (Multiplikation)',
      back: 'Jede Zahl wird mit demselben Faktor multipliziert. Beispiel: 2, 4, 8, 16, … (×2). Nächste Zahl: 32.',
    },
    {
      front: 'Reihe mit Division',
      back: 'Jede Zahl wird durch denselben Wert geteilt. Beispiel: 81, 27, 9, 3, … (÷3). Nächste Zahl: 1.',
    },
    {
      front: 'Reihe mit wachsender Differenz',
      back: 'Die Differenz wird in jedem Schritt größer. Beispiel: 1, 2, 4, 7, 11, … (+1, +2, +3, +4). Nächste Zahl: 16.',
    },
    {
      front: 'Quadratzahlen',
      back: 'Die Reihe der Quadrate: 1, 4, 9, 16, 25, … (1², 2², 3², 4², 5²). Nächste Zahl: 36 (6²).',
    },
    {
      front: 'Kubikzahlen',
      back: 'Die Reihe der dritten Potenzen: 1, 8, 27, 64, … (1³, 2³, 3³, 4³). Nächste Zahl: 125 (5³).',
    },
    {
      front: 'Fibonacci-Reihe',
      back: 'Jede Zahl ist die Summe der beiden vorherigen: 1, 1, 2, 3, 5, 8, 13, … Nach 5 und 8 folgt 13.',
    },
    {
      front: 'Verschachtelte (alternierende) Reihen',
      back: 'Zwei Reihen wechseln sich ab. Beispiel: 1, 10, 2, 20, 3, … → eine Reihe ist 1, 2, 3, … die andere 10, 20, 30, … Nächste Zahl: 30.',
    },
    {
      front: 'Gerade und ungerade Zahlen',
      back: 'Gerade Zahlen: 2, 4, 6, 8, … Ungerade Zahlen: 1, 3, 5, 7, … (jeweils +2).',
    },
    {
      front: 'Vielfache einer Zahl',
      back: 'Eine Reihe kann aus Vielfachen bestehen. Beispiel: 3, 6, 9, 12, … (Vielfache von 3, +3 je Schritt).',
    },
    {
      front: 'Tipp: zweite Differenz',
      back: 'Ist die Differenz nicht konstant, kann die Differenz der Differenzen konstant sein (z. B. bei Quadratzahlen: Differenzen 3, 5, 7, 9 → +2).',
    },
    {
      front: 'Tipp: die einfachste passende Regel wählen',
      back: 'Oft passen mehrere Regeln. Bevorzuge die einfachste, die zu allen gegebenen Zahlen passt – meist +/−, dann ×/÷.',
    },
    {
      front: 'Tipp: bei großen Sprüngen an ×/÷ denken',
      back: 'Wenn die Zahlen schnell stark wachsen oder fallen, liegt meist Multiplikation oder Division vor (nicht Addition).',
    },
  ],
  questions: [
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 4, 6, 8, ?', options: ['9', '10', '11', '12'], correct: [1], explanation: 'Jede Zahl ist um 2 größer (+2). Nach 8 folgt 10.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 5, 10, 15, 20, ?', options: ['22', '24', '25', '30'], correct: [2], explanation: 'Konstante Addition +5. Nach 20 folgt 25.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 3, 6, 9, 12, ?', options: ['13', '14', '15', '18'], correct: [2], explanation: 'Vielfache von 3 (+3). Nach 12 folgt 15.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 10, 20, 30, 40, ?', options: ['45', '50', '55', '60'], correct: [1], explanation: 'Konstante Addition +10. Nach 40 folgt 50.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 3, 5, 7, ?', options: ['8', '9', '10', '11'], correct: [1], explanation: 'Ungerade Zahlen (+2). Nach 7 folgt 9.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 20, 18, 16, 14, ?', options: ['15', '13', '12', '10'], correct: [2], explanation: 'Konstante Subtraktion −2. Nach 14 folgt 12.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 100, 90, 80, 70, ?', options: ['75', '65', '60', '50'], correct: [2], explanation: 'Konstante Subtraktion −10. Nach 70 folgt 60.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 7, 14, 21, 28, ?', options: ['30', '32', '35', '42'], correct: [2], explanation: 'Vielfache von 7 (+7). Nach 28 folgt 35.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 5, 8, 11, ?', options: ['12', '13', '14', '15'], correct: [2], explanation: 'Konstante Addition +3. Nach 11 folgt 14.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 6, 11, 16, 21, ?', options: ['24', '25', '26', '27'], correct: [2], explanation: 'Konstante Addition +5. Nach 21 folgt 26.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 50, 45, 40, 35, ?', options: ['25', '28', '30', '32'], correct: [2], explanation: 'Konstante Subtraktion −5. Nach 35 folgt 30.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 4, 8, 12, 16, ?', options: ['18', '20', '22', '24'], correct: [1], explanation: 'Vielfache von 4 (+4). Nach 16 folgt 20.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 12, 10, 8, 6, ?', options: ['2', '3', '4', '5'], correct: [2], explanation: 'Konstante Subtraktion −2. Nach 6 folgt 4.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 7, 9, 11, 13, ?', options: ['14', '15', '16', '17'], correct: [1], explanation: 'Konstante Addition +2. Nach 13 folgt 15.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 4, 8, 16, ?', options: ['24', '30', '32', '64'], correct: [2], explanation: 'Jede Zahl wird verdoppelt (×2). Nach 16 folgt 32.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 3, 9, 27, ?', options: ['54', '72', '81', '108'], correct: [2], explanation: 'Jede Zahl wird mit 3 multipliziert (×3). Nach 27 folgt 81.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 3, 6, 12, 24, ?', options: ['36', '42', '48', '60'], correct: [2], explanation: 'Jede Zahl wird verdoppelt (×2). Nach 24 folgt 48.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 5, 10, 20, 40, ?', options: ['60', '70', '80', '100'], correct: [2], explanation: 'Jede Zahl wird verdoppelt (×2). Nach 40 folgt 80.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 6, 18, 54, ?', options: ['108', '150', '162', '216'], correct: [2], explanation: 'Jede Zahl wird mit 3 multipliziert (×3). Nach 54 folgt 162.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 64, 32, 16, 8, ?', options: ['2', '3', '4', '6'], correct: [2], explanation: 'Jede Zahl wird halbiert (÷2). Nach 8 folgt 4.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 81, 27, 9, 3, ?', options: ['0', '1', '2', '3'], correct: [1], explanation: 'Jede Zahl wird durch 3 geteilt (÷3). Nach 3 folgt 1.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 80, 40, 20, 10, ?', options: ['2', '4', '5', '8'], correct: [2], explanation: 'Jede Zahl wird halbiert (÷2). Nach 10 folgt 5.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 90, 80, 70, 60, ?', options: ['40', '50', '55', '65'], correct: [1], explanation: 'Konstante Subtraktion −10. Nach 60 folgt 50.', difficulty: 1 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 4, 9, 16, ?', options: ['20', '24', '25', '30'], correct: [2], explanation: 'Quadratzahlen: 1², 2², 3², 4², dann 5² = 25.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 4, 9, 16, 25, ?', options: ['30', '35', '36', '49'], correct: [2], explanation: 'Quadratzahlen: nach 5² = 25 folgt 6² = 36.', difficulty: 2 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 2, 4, 7, 11, ?', options: ['14', '15', '16', '18'], correct: [2], explanation: 'Die Differenz wächst: +1, +2, +3, +4, +5. Nach 11 folgt 16.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 3, 5, 8, 12, ?', options: ['15', '16', '17', '18'], correct: [2], explanation: 'Die Differenz wächst: +1, +2, +3, +4, +5. Nach 12 folgt 17.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 1, 2, 3, 5, ?', options: ['6', '7', '8', '9'], correct: [2], explanation: 'Fibonacci: jede Zahl ist die Summe der beiden vorherigen. 3 + 5 = 8.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 1, 2, 3, 5, 8, ?', options: ['11', '12', '13', '15'], correct: [2], explanation: 'Fibonacci: 5 + 8 = 13.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 1, 8, 27, 64, ?', options: ['100', '121', '125', '216'], correct: [2], explanation: 'Kubikzahlen: 1³, 2³, 3³, 4³, dann 5³ = 125.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 2, 4, 7, 11, 16, ?', options: ['20', '21', '22', '24'], correct: [2], explanation: 'Die Differenz wächst: +2, +3, +4, +5, +6. Nach 16 folgt 22.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die verschachtelte Reihe fort: 1, 10, 2, 20, 3, ?', options: ['4', '21', '30', '40'], correct: [2], explanation: 'Zwei verschachtelte Reihen: 1, 2, 3, … und 10, 20, 30, … Nach der 3 folgt aus der zweiten Reihe die 30.', difficulty: 3 },
    { type: 'mc', prompt: 'Setze die Reihe fort: 10, 9, 7, 4, ?', options: ['0', '1', '2', '3'], correct: [0], explanation: 'Die Differenz wächst negativ: −1, −2, −3, −4. 4 − 4 = 0.', difficulty: 3 },
    { type: 'fill', prompt: 'Setze die Reihe fort (Zahl eingeben): 3, 6, 9, 12, 15, ?', correct: ['18'], explanation: 'Vielfache von 3 (+3). Nach 15 folgt 18.', difficulty: 1 },
    { type: 'fill', prompt: 'Setze die Reihe fort (Zahl eingeben): 2, 4, 8, 16, 32, ?', correct: ['64'], explanation: 'Jede Zahl wird verdoppelt (×2). Nach 32 folgt 64.', difficulty: 2 },
    { type: 'fill', prompt: 'Setze die Reihe fort (Zahl eingeben): 1, 4, 9, 16, 25, 36, ?', correct: ['49'], explanation: 'Quadratzahlen: nach 6² = 36 folgt 7² = 49.', difficulty: 3 },
  ],
};

export default topic;
