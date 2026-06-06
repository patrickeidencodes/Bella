import type { RawFlashcard, RawQuestion } from '../types';

const supplement: { flashcards: RawFlashcard[]; questions: RawQuestion[] } = {
  flashcards: [
    {
      front: "Was ist der Unterschied zwischen i++ und ++i?",
      back: "i++ (Post-Inkrement): erst wird der aktuelle Wert verwendet, dann wird i erhöht. ++i (Prä-Inkrement): erst wird i erhöht, dann wird der neue Wert verwendet. Beispiel: int i=5; x=i++ → x=5, i=6; x=++i → x=6, i=6."
    },
    {
      front: "Was ist der Off-by-one-Fehler bei Schleifen (< vs <=)?",
      back: "Bei i < n läuft die Schleife n-mal (0 bis n-1). Bei i <= n läuft sie n+1-mal (0 bis n). Merksatz: < schließt die obere Grenze AUS, <= schließt sie EIN."
    },
    {
      front: "Wie erkenne ich eine Endlosschleife?",
      back: "Eine Endlosschleife entsteht, wenn die Abbruchbedingung nie erfüllt wird. Häufige Ursachen: (1) vergessenes i++ im Schleifenrumpf, (2) falsche Richtung (i-- statt i++), (3) Bedingung ist von Anfang an immer wahr (while(true))."
    },
    {
      front: "Was passiert bei String-Verkettung mit + in Java?",
      back: "Sobald einer der Operanden ein String ist, wird + zur Verkettung. Beispiel: \"Summe: \" + 2 + 3 ergibt \"Summe: 23\", nicht \"Summe: 5\". Um die Zahl zu berechnen, muss man klammern: \"Summe: \" + (2 + 3) → \"Summe: 5\"."
    },
    {
      front: "Ab welchem Index beginnt charAt() in Java?",
      back: "charAt() beginnt bei Index 0. Bei s=\"HALLO\" ist s.charAt(0)='H', s.charAt(1)='A', s.charAt(4)='O'. Der letzte gültige Index ist length()-1."
    },
    {
      front: "Ab welchem Index beginnt ein Array in Java, und was ist der letzte gültige Index?",
      back: "Arrays beginnen bei Index 0. Der letzte gültige Index ist array.length - 1. Zugriff auf array[array.length] wirft eine ArrayIndexOutOfBoundsException."
    },
    {
      front: "Warum sollte man Strings in Java nicht mit == vergleichen?",
      back: "== vergleicht Referenzen (ob es dasselbe Objekt im Speicher ist), nicht den Inhalt. Für Inhaltsvergleiche muss man .equals() verwenden. Beispiel: s1.equals(s2) prüft, ob beide Strings denselben Text enthalten."
    },
    {
      front: "Was gibt String.length() zurück und wie unterscheidet es sich von Array.length?",
      back: "String.length() ist eine Methode und gibt die Anzahl der Zeichen zurück (mit Klammern aufrufen). Array.length ist ein Attribut (ohne Klammern). Beispiel: \"HALLO\".length() → 5; int[] a = {1,2,3}; a.length → 3."
    }
  ],
  questions: [
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `int i = 5;
int x = i++;
System.out.println(x + " " + i);`,
      options: ["5 5", "6 6", "5 6", "6 5"],
      correct: [2],
      explanation: "i++ ist Post-Inkrement: zuerst wird x der aktuelle Wert von i (5) zugewiesen, danach wird i auf 6 erhöht. Ausgabe: \"5 6\".",
      difficulty: 2
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `int i = 5;
int x = ++i;
System.out.println(x + " " + i);`,
      options: ["5 6", "5 5", "6 5", "6 6"],
      correct: [3],
      explanation: "++i ist Prä-Inkrement: zuerst wird i auf 6 erhöht, dann wird x der neue Wert (6) zugewiesen. Beide Variablen sind 6. Ausgabe: \"6 6\".",
      difficulty: 2
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `for (int i = 0; i <= 3; i++) {
    System.out.print(i + " ");
}`,
      options: ["0 1 2", "0 1 2 3 4 ", "1 2 3 ", "0 1 2 3 "],
      correct: [3],
      explanation: "Die Bedingung ist i <= 3, also läuft die Schleife für i = 0, 1, 2 und 3 (vier Durchläufe). Ausgabe: \"0 1 2 3 \".",
      difficulty: 1
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `int n = 3;
while (n > 0) {
    System.out.print(n + " ");
    n--;
}`,
      options: ["1 2 3 ", "0 1 2 ", "3 2 1 ", "3 2 1 0 "],
      correct: [2],
      explanation: "n startet bei 3. Solange n > 0: ausgeben und dann n--. Durchläufe: n=3 → \"3 \", n=2 → \"2 \", n=1 → \"1 \". Bei n=0 wird abgebrochen. Ausgabe: \"3 2 1 \".",
      difficulty: 1
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `int a = 2, b = 3;
System.out.println("Summe: " + a + b);`,
      options: ["Summe: 5", "Summe: 23", "Fehler", "23"],
      correct: [1],
      explanation: "Der +-Operator wird von links nach rechts ausgewertet. Erst wird \"Summe: \" + 2 zu \"Summe: 2\", dann \"Summe: 2\" + 3 zu \"Summe: 23\". Für 5 wäre (a+b) nötig. Ausgabe: \"Summe: 23\".",
      difficulty: 2
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `int summe = 0;
for (int i = 1; i <= 4; i++) {
    summe += i;
}
System.out.println(summe);`,
      options: ["4", "6", "10", "12"],
      correct: [2],
      explanation: "Die Schleife addiert 1+2+3+4 = 10. summe beginnt bei 0, dann: 0+1=1, 1+2=3, 3+3=6, 6+4=10. Ausgabe: \"10\".",
      difficulty: 1
    },
    {
      type: "order_output",
      prompt: "Was gibt der folgende Code aus?",
      code: `String s = "HALLO";
System.out.println(s.charAt(1));
System.out.println(s.length());`,
      options: ["H\n5", "A\n4", "H\n4", "A\n5"],
      correct: [3],
      explanation: "charAt(1) gibt das Zeichen an Index 1 zurück. Da Indizes bei 0 beginnen: Index 0='H', Index 1='A'. length() gibt die Anzahl der Zeichen zurück: \"HALLO\" hat 5 Zeichen. Ausgabe: \"A\" (Zeile 1), \"5\" (Zeile 2).",
      difficulty: 2
    },
    {
      type: "find_error",
      prompt: "Was ist der Fehler in diesem Code?",
      code: `int i = 0;
while (i < 5) {
    System.out.println(i);
}`,
      options: [
        "Die Bedingung i < 5 ist falsch; es muss i <= 5 heißen.",
        "i wird nie verändert, dadurch entsteht eine Endlosschleife. Korrektur: i++ im Schleifenrumpf ergänzen.",
        "System.out.println darf nicht in einer while-Schleife stehen.",
        "Der Startwert i = 0 ist falsch; die Schleife muss bei i = 1 beginnen."
      ],
      correct: [1],
      explanation: "Da i nie erhöht wird, ist i immer 0 und die Bedingung i < 5 bleibt immer wahr. Die Schleife läuft endlos. Lösung: i++ am Ende des Schleifenrumpfs einfügen.",
      difficulty: 2
    },
    {
      type: "find_error",
      prompt: "Was ist der Fehler in diesem Code?",
      code: `for (int i = 0; i < 5; i--) {
    System.out.println(i);
}`,
      options: [
        "Die Schleife muss bei i = 1 starten, nicht bei i = 0.",
        "i < 5 ist die falsche Bedingung; es muss i > 5 heißen.",
        "i-- macht i immer kleiner, dadurch wird die Bedingung i < 5 nie falsch – Endlosschleife. Korrektur: i-- durch i++ ersetzen.",
        "System.out.println sollte System.out.print sein."
      ],
      correct: [2],
      explanation: "i-- dekrementiert i bei jedem Durchlauf. Da i bei 0 startet und immer kleiner wird (0, -1, -2, ...), ist i < 5 immer wahr. Lösung: i-- durch i++ ersetzen.",
      difficulty: 2
    },
    {
      type: "find_error",
      prompt: "Was ist der Fehler in diesem Code?",
      code: `int[] a = {10, 20, 30};
for (int i = 0; i <= a.length; i++) {
    System.out.println(a[i]);
}`,
      options: [
        "Das Array muss mit new int[3] deklariert werden.",
        "Die Schleife verwendet i <= a.length, wodurch bei i=3 auf a[3] zugegriffen wird, das nicht existiert. Korrektur: i < a.length.",
        "System.out.println kann kein int-Array ausgeben.",
        "Der Startwert muss i = 1 sein, da Arrays bei 1 beginnen."
      ],
      correct: [1],
      explanation: "Das Array hat 3 Elemente (Indizes 0, 1, 2). Mit i <= a.length (also i <= 3) wird auch i=3 ausgeführt, was eine ArrayIndexOutOfBoundsException auslöst. Korrekt ist i < a.length.",
      difficulty: 2
    },
    {
      type: "find_error",
      prompt: "Was ist der Fehler in diesem Code?",
      code: `for (int i = 1; i > 5; i++) {
    System.out.println(i);
}`,
      options: [
        "System.out.println sollte außerhalb der Schleife stehen.",
        "i++ sollte i-- sein, damit die Schleife rückwärts läuft.",
        "Die Schleife gibt alle Zahlen von 1 bis 5 aus – das ist korrekt.",
        "Die Bedingung i > 5 ist bei i = 1 sofort falsch, daher wird die Schleife nie ausgeführt. Korrektur: i <= 5."
      ],
      correct: [3],
      explanation: "Bei i = 1 ist die Bedingung i > 5 bereits falsch. Die Schleife wird kein einziges Mal ausgeführt und es gibt keine Ausgabe. Korrekt wäre i <= 5 als Bedingung.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Welche Ausgabe liefert folgender Ausdruck? System.out.println(\"Wert: \" + 3 + 4);",
      options: ["Wert: 7", "Wert: 34", "7", "Fehler"],
      correct: [1],
      explanation: "Da ein String beteiligt ist, wirkt + als Verkettung. \"Wert: \" + 3 ergibt \"Wert: 3\", dann \"Wert: 3\" + 4 ergibt \"Wert: 34\". Für \"Wert: 7\" müsste man \"Wert: \" + (3 + 4) schreiben.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Ein Array ist wie folgt deklariert: int[] zahlen = {5, 10, 15, 20}; Welcher Aufruf gibt das letzte Element aus?",
      options: ["zahlen[4]", "zahlen[zahlen.length]", "zahlen[zahlen.length - 1]", "zahlen.last()"],
      correct: [2],
      explanation: "Das Array hat 4 Elemente (Indizes 0–3). Der letzte gültige Index ist length - 1 = 3. zahlen[zahlen.length - 1] gibt zahlen[3] = 20 aus. zahlen[4] würde eine ArrayIndexOutOfBoundsException werfen.",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Zwei Strings sollen auf gleichen Inhalt verglichen werden. Welche Methode ist in Java korrekt?",
      options: [
        "if (s1 == s2)",
        "if (s1.equals(s2))",
        "if (s1.compare(s2) == 0)",
        "if (s1 === s2)"
      ],
      correct: [1],
      explanation: "In Java vergleicht == bei Objekten (wie String) nur die Referenz (ob es dasselbe Objekt im Speicher ist), nicht den Inhalt. Für Inhaltsvergleiche muss .equals() verwendet werden. === gibt es in Java nicht (das ist JavaScript).",
      difficulty: 2
    },
    {
      type: "mc",
      prompt: "Was ist der Unterschied zwischen s.length() bei einem String und a.length bei einem Array?",
      options: [
        "Beide sind identisch und können austauschbar verwendet werden.",
        "length() ist eine Methode (mit Klammern) für Strings; length ist ein Attribut (ohne Klammern) für Arrays.",
        "length wird für Strings verwendet, length() für Arrays.",
        "Beide liefern die Anzahl der Bytes, nicht der Zeichen."
      ],
      correct: [1],
      explanation: "String.length() wird als Methode mit Klammern aufgerufen, da String ein Objekt ist. Array.length hingegen ist ein öffentliches Attribut und wird ohne Klammern verwendet.",
      difficulty: 1
    },
    {
      type: "mc",
      prompt: "Welche Schleife wird garantiert mindestens einmal ausgeführt, bevor die Bedingung geprüft wird?",
      options: [
        "for-Schleife",
        "while-Schleife",
        "do-while-Schleife",
        "foreach-Schleife"
      ],
      correct: [2],
      explanation: "Bei der do-while-Schleife (do { ... } while(Bedingung);) wird der Rumpf zuerst ausgeführt und die Bedingung danach geprüft. Dadurch wird der Rumpf mindestens einmal durchlaufen, auch wenn die Bedingung von Anfang an falsch ist.",
      difficulty: 1
    }
  ],
};

export default supplement;
