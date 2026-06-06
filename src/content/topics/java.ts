import type { RawTopic } from '../types';

const topic: RawTopic = {
  slug: 'java',
  title: 'Java',
  description: 'Java-Grundlagen: Datentypen, Operatoren, Schleifen, OOP, Output vorhersagen, Fehler finden.',
  flashcards: [
    {
      front: 'Was sind die primitiven Datentypen in Java?',
      back: 'byte, short, int, long (Ganzzahlen), float, double (Gleitkomma), char (Zeichen), boolean (wahr/falsch). String ist kein primitiver Typ, sondern eine Klasse.',
    },
    {
      front: 'Was ist der Unterschied zwischen int und double in Java?',
      back: 'int speichert ganze Zahlen (z. B. 5, -3). double speichert Dezimalzahlen (z. B. 5.0, 3.14). Bei Ganzzahldivision mit int fällt der Rest weg: 7 / 2 = 3.',
    },
    {
      front: 'Was macht der Modulo-Operator % in Java?',
      back: '% liefert den Rest einer Division. Beispiel: 7 % 2 = 1, weil 7 = 3 * 2 + 1. Sehr nützlich, um gerade/ungerade Zahlen zu prüfen: n % 2 == 0 → gerade.',
    },
    {
      front: 'Was ist der Unterschied zwischen == und .equals() bei Strings?',
      back: '== vergleicht Referenzen (ob zwei Variablen auf dasselbe Objekt zeigen). .equals() vergleicht den Inhalt. new String("abc") == new String("abc") ist false; .equals() wäre true.',
    },
    {
      front: 'Was ist der Unterschied zwischen i++ und ++i?',
      back: 'i++ (Nachinkrement) gibt zuerst den alten Wert zurück, dann wird i erhöht. ++i (Vorinkrement) erhöht zuerst i, dann wird der neue Wert zurückgegeben. int i=5; int a=i++; → a=5, i=6. int b=++i; → b=7, i=7.',
    },
    {
      front: 'Was ist eine ArrayIndexOutOfBoundsException?',
      back: 'Diese Laufzeitfehler-Ausnahme tritt auf, wenn auf einen ungültigen Array-Index zugegriffen wird. Bei int[] a = new int[3] sind nur die Indizes 0, 1, 2 gültig. a[3] würde diese Exception auslösen.',
    },
    {
      front: 'Wie funktioniert die String-Konkatenation mit + in Java?',
      back: 'Mit + werden Strings verbunden. Steht links ein String, wird der rechte Operand in einen String umgewandelt. Beispiel: "Wert: " + 3 → "Wert: 3". Achtung: 1 + 2 + "x" → "3x" (Zahlen zuerst addiert), "x" + 1 + 2 → "x12" (Zeichenkette zuerst).',
    },
    {
      front: 'Was ist ein Konstruktor in Java?',
      back: 'Ein Konstruktor ist eine spezielle Methode, die beim Erzeugen eines Objekts aufgerufen wird. Er hat denselben Namen wie die Klasse und keinen Rückgabetyp. Beispiel: public Hund(String name) { this.name = name; }',
    },
    {
      front: 'Was bedeutet das Schlüsselwort "void" in Java?',
      back: 'void bedeutet, dass eine Methode keinen Wert zurückgibt. Beispiel: public void sagHallo() { System.out.println("Hallo"); } Im Gegensatz dazu hat eine Methode mit Rückgabe z. B. public int addiere(int a, int b) { return a + b; }',
    },
    {
      front: 'Was ist Vererbung in Java und wie wird sie implementiert?',
      back: 'Vererbung ermöglicht einer Klasse, Eigenschaften und Methoden einer anderen Klasse zu übernehmen. Sie wird mit dem Schlüsselwort "extends" implementiert. Beispiel: public class Hund extends Tier { } Hund erbt alle nicht-privaten Attribute und Methoden von Tier.',
    },
    {
      front: 'Was ist der Unterschied zwischen einer for-Schleife und einer while-Schleife?',
      back: 'Eine for-Schleife wird genutzt, wenn die Anzahl der Iterationen bekannt ist. Eine while-Schleife wird genutzt, wenn die Bedingung vor jedem Durchlauf geprüft wird und die Anzahl nicht bekannt ist. Eine do-while-Schleife wird mindestens einmal ausgeführt.',
    },
    {
      front: 'Was passiert bei einem switch-Statement ohne break?',
      back: 'Ohne break-Anweisung tritt "Fall-through" auf: Nachdem ein case zutrifft, werden alle folgenden cases ebenfalls ausgeführt, bis ein break oder das Ende des switch erreicht wird. Dies ist oft ein Fehler, kann aber auch bewusst eingesetzt werden.',
    },
    {
      front: 'Was ist Casting in Java?',
      back: 'Casting ist die explizite Umwandlung eines Datentyps in einen anderen. Beispiel: int x = (int) 3.9; ergibt x = 3 (Nachkommastellen werden abgeschnitten). double d = (double) 7 / 2; ergibt 3.5 (nicht 3).',
    },
    {
      front: 'Was ist der char-Datentyp in Java?',
      back: 'char speichert ein einzelnes Zeichen und wird mit einfachen Anführungszeichen geschrieben: char c = \'A\';. Intern wird der Unicode-Wert gespeichert: \'A\' = 65, \'B\' = 66 usw. char-Werte können arithmetisch verknüpft werden.',
    },
    {
      front: 'Wie wird ein Array in Java deklariert und initialisiert?',
      back: 'Deklaration: int[] zahlen; Initialisierung mit Größe: zahlen = new int[5]; (Werte sind 0). Direkte Initialisierung: int[] zahlen = {1, 2, 3, 4, 5}; Arrays haben feste Größe und Indizes von 0 bis length-1.',
    },
    {
      front: 'Was ist der Unterschied zwischen einer Klasse und einem Objekt?',
      back: 'Eine Klasse ist eine Blaupause/Vorlage (z. B. class Auto). Ein Objekt ist eine konkrete Instanz dieser Klasse (z. B. Auto meinAuto = new Auto();). Eine Klasse kann beliebig viele Objekte erzeugen.',
    },
    {
      front: 'Was ist "this" in Java?',
      back: '"this" bezieht sich auf das aktuelle Objekt der Klasse. Es wird verwendet, um Attribute von lokalen Parametern zu unterscheiden: public void setName(String name) { this.name = name; } Hier ist this.name das Attribut, name der Parameter.',
    },
    {
      front: 'Was ist eine NullPointerException?',
      back: 'Eine NullPointerException tritt auf, wenn eine Methode oder ein Attribut eines Objekts aufgerufen wird, das null ist. Beispiel: String s = null; s.length(); → NullPointerException. Variablen müssen vor der Nutzung initialisiert werden.',
    },
    {
      front: 'Was sind Zugriffsmodifikatoren in Java?',
      back: 'public: überall zugänglich. private: nur innerhalb der eigenen Klasse. protected: in der Klasse, Unterklassen und im selben Paket. (kein Modifikator): Paketzugriff. Gutes OOP-Design: Attribute private, Zugriff über public getter/setter.',
    },
    {
      front: 'Was ist der Unterschied zwischen einer statischen Methode und einer Instanzmethode?',
      back: 'Eine statische Methode (static) gehört zur Klasse und kann ohne Objekt aufgerufen werden: Math.abs(-5). Eine Instanzmethode gehört zu einem Objekt und benötigt eine Instanz: meinHund.bellen(). static kann nicht auf Instanzattribute zugreifen.',
    },
    {
      front: 'Wie funktioniert die do-while-Schleife in Java?',
      back: 'Die do-while-Schleife führt den Rumpf mindestens einmal aus, bevor die Bedingung geprüft wird. Syntax: do { // Code } while (bedingung); Im Gegensatz zur while-Schleife erfolgt die Prüfung am Ende.',
    },
    {
      front: 'Was gibt System.out.println() vs. System.out.print() aus?',
      back: 'System.out.println() gibt den Text aus und fügt am Ende einen Zeilenumbruch hinzu. System.out.print() gibt den Text aus, ohne Zeilenumbruch. System.out.printf() ermöglicht formatierte Ausgabe wie in C (z. B. %.2f für 2 Nachkommastellen).',
    },
    {
      front: 'Was ist Polymorphismus in Java?',
      back: 'Polymorphismus bedeutet, dass ein Objekt einer Unterklasse auch als Objekt der Oberklasse behandelt werden kann. Tier t = new Hund(); ist gültig, wenn Hund extends Tier. Methoden können in Unterklassen überschrieben werden (@Override).',
    },
  ],
  questions: [
    // ---- order_output ----
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `System.out.println(7 / 2);`,
      options: ["3", "3.5", "4", "3,5"],
      correct: [0],
      explanation: "Ganzzahl-Division: 7 und 2 sind beide int, daher fällt der Nachkommaanteil weg. 7 / 2 = 3 (nicht 3.5).",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Welche Ausgabe erscheint?',
      code: `System.out.println(7 % 2);`,
      options: ["3", "1", "0", "2"],
      correct: [1],
      explanation: "Der Modulo-Operator % liefert den Rest der Division. 7 = 3 * 2 + 1, also 7 % 2 = 1.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Welche Ausgabe erscheint?',
      code: `String s = "x";
System.out.println(1 + 2 + s);`,
      options: ["3x", "12x", "x12", "x3"],
      correct: [0],
      explanation: "Die Operatoren werden von links nach rechts ausgewertet. 1 + 2 ergibt zuerst 3 (beide int), dann wird 3 + \"x\" zu \"3x\".",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Welche Ausgabe erscheint?',
      code: `String s = "x";
System.out.println(s + 1 + 2);`,
      options: ["x12", "x3", "3x", "12x"],
      correct: [0],
      explanation: "Da s zuerst steht, wird sofort String-Konkatenation aktiviert. \"x\" + 1 = \"x1\", dann \"x1\" + 2 = \"x12\".",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt der folgende Code aus?',
      code: `int i = 5;
System.out.println(i++);
System.out.println(i);`,
      options: ["5\n6", "6\n6", "5\n5", "6\n7"],
      correct: [0],
      explanation: "i++ (Nachinkrement) gibt zuerst den alten Wert 5 zurück, dann wird i auf 6 erhöht. Daher: erste Zeile 5, zweite Zeile 6.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt der folgende Code aus?',
      code: `int i = 5;
System.out.println(++i);
System.out.println(i);`,
      options: ["6\n6", "5\n6", "6\n5", "5\n5"],
      correct: [0],
      explanation: "++i (Vorinkrement) erhöht i zuerst auf 6 und gibt dann 6 zurück. Beide println-Aufrufe geben 6 aus.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `double d = 7.0 / 2;
System.out.println(d);`,
      options: ["3.5", "3", "3.0", "4.0"],
      correct: [0],
      explanation: "7.0 ist ein double-Literal. Wenn ein Operand double ist, wird der andere (2) automatisch zu 2.0 konvertiert. Rechnung: 7.0 / 2.0 = 3.5 (Gleitkomma-Division, keine Ganzzahldivision).",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Welche Ausgabe erzeugt dieser Code?',
      code: `int x = 10;
if (x > 5) {
  System.out.println("groß");
} else {
  System.out.println("klein");
}`,
      options: ["groß", "klein", "groß\nklein", "kein Output"],
      correct: [0],
      explanation: "10 > 5 ist true, also wird der if-Zweig ausgeführt und \"groß\" ausgegeben.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `for (int i = 0; i < 4; i++) {
  System.out.print(i + " ");
}`,
      options: ["0 1 2 3 ", "1 2 3 4 ", "0 1 2 3 4 ", "0 1 2 "],
      correct: [0],
      explanation: "Die Schleife läuft mit i = 0, 1, 2, 3 (Bedingung i < 4). Bei i = 4 ist die Bedingung false. Ausgabe: 0 1 2 3 (mit je einem Leerzeichen).",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int sum = 0;
for (int i = 1; i <= 5; i++) {
  sum += i;
}
System.out.println(sum);`,
      options: ["15", "10", "14", "5"],
      correct: [0],
      explanation: "Die Schleife addiert 1+2+3+4+5 = 15. sum += i ist Kurzform für sum = sum + i.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `char c = 'A';
System.out.println((int) c);`,
      options: ["65", "A", "97", "1"],
      correct: [0],
      explanation: "Der char 'A' hat den Unicode/ASCII-Wert 65. Durch den Cast (int) wird dieser numerische Wert ausgegeben.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `System.out.println("Hallo" + " " + "Welt");`,
      options: ["Hallo Welt", "HalloWelt", "Hallo+Welt", "Fehler"],
      correct: [0],
      explanation: "Die drei String-Literale werden mit + verkettet: \"Hallo\" + \" \" + \"Welt\" = \"Hallo Welt\".",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Welche Ausgabe erzeugt dieser Code?',
      code: `int a = 3;
int b = 4;
System.out.println(a * b + 2);`,
      options: ["14", "18", "20", "12"],
      correct: [0],
      explanation: "Punkt vor Strich: a * b = 3 * 4 = 12, dann 12 + 2 = 14.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `boolean b = true;
System.out.println(!b);`,
      options: ["false", "true", "0", "Fehler"],
      correct: [0],
      explanation: "Der Operator ! (logisches NICHT) kehrt einen boolean-Wert um. !true ergibt false.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int x = 8;
System.out.println(x % 3);`,
      options: ["2", "1", "0", "3"],
      correct: [0],
      explanation: "8 % 3: 8 = 2 * 3 + 2, also ist der Rest 2.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int n = 10;
while (n > 0) {
  System.out.print(n + " ");
  n -= 3;
}`,
      options: ["10 7 4 1 ", "10 7 4 ", "10 7 4 1 -2 ", "Unendlich"],
      correct: [0],
      explanation: "n beginnt bei 10, wird je Durchlauf um 3 verringert: 10, 7, 4, 1. Bei n = 1 - 3 = -2 ist die Bedingung n > 0 false. Ausgabe: 10 7 4 1.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `String s1 = "Hallo";
String s2 = "Hallo";
System.out.println(s1 == s2);`,
      options: ["true", "false", "Fehler", "null"],
      correct: [0],
      explanation: "String-Literale werden im String-Pool gespeichert. Da beide denselben Inhalt haben, zeigen s1 und s2 auf dasselbe Objekt im Pool, daher liefert == true.",
      difficulty: 3,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `String s1 = new String("Hallo");
String s2 = new String("Hallo");
System.out.println(s1 == s2);`,
      options: ["false", "true", "Fehler", "null"],
      correct: [0],
      explanation: "new String() erzeugt jeweils ein neues Objekt auf dem Heap. s1 und s2 zeigen auf verschiedene Objekte, daher ist == false. .equals() wäre true.",
      difficulty: 3,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int[] arr = {10, 20, 30};
System.out.println(arr[1]);`,
      options: ["20", "10", "30", "1"],
      correct: [0],
      explanation: "Array-Indizes beginnen bei 0. arr[0] = 10, arr[1] = 20, arr[2] = 30. Daher gibt arr[1] den Wert 20 aus.",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int x = 5;
int y = 2;
System.out.println(x / y);
System.out.println(x % y);`,
      options: ["2\n1", "2.5\n1", "2\n0", "3\n1"],
      correct: [0],
      explanation: "5 / 2 = 2 (Ganzzahldivision, Rest wird abgeschnitten). 5 % 2 = 1 (Rest der Division). Ausgabe: 2, dann 1.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int count = 0;
for (int i = 0; i < 10; i += 2) {
  count++;
}
System.out.println(count);`,
      options: ["5", "10", "4", "6"],
      correct: [0],
      explanation: "i läuft: 0, 2, 4, 6, 8 (5 Schritte). Bei i = 10 ist i < 10 false. count wird 5 Mal erhöht, Ausgabe: 5.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int x = 4;
switch (x) {
  case 3:
    System.out.println("drei");
    break;
  case 4:
    System.out.println("vier");
    break;
  case 5:
    System.out.println("fuenf");
    break;
  default:
    System.out.println("anders");
}`,
      options: ["vier", "drei", "fuenf", "anders"],
      correct: [0],
      explanation: "x = 4, daher wird case 4 ausgeführt. Das break verhindert Fall-through. Ausgabe: \"vier\".",
      difficulty: 1,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus? (Achtung: kein break!)',
      code: `int x = 2;
switch (x) {
  case 1:
    System.out.println("eins");
  case 2:
    System.out.println("zwei");
  case 3:
    System.out.println("drei");
  default:
    System.out.println("default");
}`,
      options: ["zwei\ndrei\ndefault", "zwei", "zwei\ndrei", "eins\nzwei\ndrei\ndefault"],
      correct: [0],
      explanation: "Da kein break vorhanden ist, tritt Fall-through auf. case 2 trifft zu, dann werden case 3 und default ebenfalls ausgeführt. Ausgabe: zwei, drei, default.",
      difficulty: 3,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int a = 5;
int b = a;
b = 10;
System.out.println(a);`,
      options: ["5", "10", "15", "Fehler"],
      correct: [0],
      explanation: "Primitive Typen werden by value kopiert. b = a kopiert den Wert 5 in b. Das spätere Ändern von b hat keinen Einfluss auf a. Ausgabe: 5.",
      difficulty: 2,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `System.out.println(10 / 3 * 3);`,
      options: ["9", "10", "1", "3"],
      correct: [0],
      explanation: "Von links nach rechts: 10 / 3 = 3 (Ganzzahldivision), dann 3 * 3 = 9. Ergebnis: 9 (nicht 10!).",
      difficulty: 3,
    },
    {
      type: 'order_output',
      prompt: 'Was gibt dieser Code aus?',
      code: `int x = (int) 9.9;
System.out.println(x);`,
      options: ["9", "10", "9.9", "Fehler"],
      correct: [0],
      explanation: "Ein Cast von double zu int schneidet die Nachkommastellen ab (keine Rundung!). 9.9 wird zu 9.",
      difficulty: 2,
    },

    // ---- find_error ----
    {
      type: 'find_error',
      prompt: 'Wo liegt der Fehler?',
      code: `int[] a = {1, 2, 3};
for (int i = 0; i <= a.length; i++) {
  System.out.println(a[i]);
}`,
      options: [
        "i <= a.length muss i < a.length sein",
        "Array falsch initialisiert",
        "System.out.println ist falsch",
        "int i = 0 muss int i = 1 sein",
      ],
      correct: [0],
      explanation: "a.length ist 3. Mit <= läuft i bis einschließlich 3, aber a[3] existiert nicht (gültige Indizes: 0, 1, 2) → ArrayIndexOutOfBoundsException. Richtig: i < a.length.",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Welcher Fehler verhindert die Kompilierung?',
      code: `public class Test {
  public static void main(String[] args) {
    int x = 5.5;
    System.out.println(x);
  }
}`,
      options: [
        "5.5 ist ein double-Literal und passt nicht in int ohne Cast",
        "System.out.println akzeptiert kein int",
        "main muss ohne Argumente definiert sein",
        "public class ist falsch geschrieben",
      ],
      correct: [0],
      explanation: "5.5 ist standardmäßig ein double-Literal. Ohne expliziten Cast (int x = (int) 5.5;) oder Änderung des Typs (double x = 5.5;) gibt es einen Compile-Fehler.",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Was ist der Fehler in diesem Code?',
      code: `public class Tier {
  private String name;

  public Tier(String name) {
    name = name;
  }
}`,
      options: [
        "name = name weist dem Parameter sich selbst zu; korrekt wäre this.name = name",
        "Der Konstruktor muss void zurückgeben",
        "private String name muss public sein",
        "String wird nicht importiert",
      ],
      correct: [0],
      explanation: "Im Konstruktor verweisen beide Seiten auf den Parameter name. Das Attribut wird nie gesetzt. Korrekt: this.name = name; — so wird das Attribut der Klasse gesetzt.",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Was ist der logische Fehler?',
      code: `int n = 5;
int fakultaet = 0;
for (int i = 1; i <= n; i++) {
  fakultaet *= i;
}
System.out.println(fakultaet);`,
      options: [
        "fakultaet muss mit 1 initialisiert werden, nicht mit 0",
        "Die Schleifenbedingung muss i < n sein",
        "Das Zeichen *= ist kein gültiger Operator",
        "n muss als double deklariert werden",
      ],
      correct: [0],
      explanation: "0 * irgendwas ist immer 0. Die Fakultät muss mit 1 beginnen (neutrales Element der Multiplikation). Richtig: int fakultaet = 1;",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Welcher Fehler steckt in diesem Code?',
      code: `public class Rechner {
  public int addiere(int a, int b) {
    int ergebnis = a + b;
  }
}`,
      options: [
        "Die Methode hat int als Rückgabetyp, gibt aber nichts zurück (kein return)",
        "Parameter müssen double sein",
        "Methode muss static sein",
        "int ergebnis muss außerhalb der Methode deklariert werden",
      ],
      correct: [0],
      explanation: "Der Rückgabetyp int verspricht einen Rückgabewert, aber es fehlt das return-Statement. Entweder return ergebnis; hinzufügen oder den Rückgabetyp auf void setzen.",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Was ist der Fehler?',
      code: `String name = null;
System.out.println(name.length());`,
      options: [
        "name ist null, der Aufruf von .length() führt zur NullPointerException",
        "length() gibt es bei String nicht",
        "null muss groß geschrieben werden (Null)",
        "String name muss als char[] deklariert werden",
      ],
      correct: [0],
      explanation: "Auf null kann man keine Methoden aufrufen. Der Aufruf von .length() auf eine null-Referenz führt zur NullPointerException zur Laufzeit.",
      difficulty: 2,
    },
    {
      type: 'find_error',
      prompt: 'Was ist falsch an diesem Code?',
      code: `for (int i = 10; i > 0; i++) {
  System.out.println(i);
}`,
      options: [
        "i++ erhöht i, aber die Bedingung i > 0 ist immer true → Endlosschleife",
        "Die Startbedingung muss 0 sein",
        "System.out.println ist hier nicht erlaubt",
        "for-Schleifen dürfen nicht mit i++ enden",
      ],
      correct: [0],
      explanation: "i startet bei 10, und i++ erhöht i weiter. Da i > 0 immer erfüllt bleibt (i wird nie negativ), entsteht eine Endlosschleife. Korrekt wäre i-- zum Herunterzählen.",
      difficulty: 3,
    },
    {
      type: 'find_error',
      prompt: 'Was ist der Fehler in diesem Code?',
      code: `public class Hund extends Tier {
  public Hund() {
    System.out.println("Hund erstellt");
  }
}

class Tier {
  private String name = "Tier";
}`,
      options: [
        "Das Attribut name in Tier ist private und für Hund nicht zugänglich; es sollte protected oder public sein",
        "extends ist kein gültiges Schlüsselwort",
        "Hund muss denselben Konstruktor wie Tier haben",
        "Klassen können nicht in derselben Datei stehen",
      ],
      correct: [0],
      explanation: "Private Attribute sind nur innerhalb der eigenen Klasse sichtbar. Unterklassen haben keinen direkten Zugriff auf private Attribute der Oberklasse. Lösung: protected String name; oder Getter/Setter verwenden.",
      difficulty: 3,
    },

    // ---- mc / Wissensfragen ----
    {
      type: 'mc',
      prompt: 'Was ist das Ergebnis von: int x = 10 / 3; in Java?',
      options: ["3", "3.33", "4", "3.0"],
      correct: [0],
      explanation: "Ganzzahldivision: 10 / 3 = 3, der Rest (1) wird verworfen. Da beide Operanden int sind, ist das Ergebnis ebenfalls int.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welcher Datentyp wird für Wahrheitswerte (wahr/falsch) in Java verwendet?',
      options: ["boolean", "bit", "bool", "int"],
      correct: [0],
      explanation: "In Java heißt der Wahrheitswert-Datentyp boolean. Mögliche Werte: true und false. In anderen Sprachen (C++) heißt er bool.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage über Arrays in Java ist richtig?',
      options: [
        "Arrays haben eine feste Größe, die nach der Erstellung nicht geändert werden kann",
        "Arrays beginnen bei Index 1",
        "Arrays können automatisch wachsen",
        "Arrays dürfen nur Zahlen speichern",
      ],
      correct: [0],
      explanation: "Arrays in Java haben eine feste Größe (length), die beim Erstellen festgelegt wird. Für dynamische Größen verwendet man ArrayList.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was bewirkt das Schlüsselwort "static" bei einer Methode?',
      options: [
        "Die Methode gehört zur Klasse und kann ohne Objekt aufgerufen werden",
        "Die Methode kann nicht überschrieben werden",
        "Die Methode ist nur lesbar",
        "Die Methode wird automatisch beim Laden der Klasse aufgerufen",
      ],
      correct: [0],
      explanation: "static-Methoden gehören zur Klasse, nicht zu einer Instanz. Aufruf: Klassenname.methode() statt objekt.methode(). Beispiel: Math.sqrt(4).",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Wie viele Mal wird der Rumpf dieser Schleife ausgeführt? for (int i = 0; i < 5; i++)',
      options: ["5", "4", "6", "0"],
      correct: [0],
      explanation: "i läuft von 0 bis 4 (bei i = 5 ist i < 5 false). Das sind 5 Iterationen (0, 1, 2, 3, 4).",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ist der Unterschied zwischen .equals() und == beim String-Vergleich?',
      options: [
        ".equals() vergleicht den Inhalt, == vergleicht die Referenz (Speicheradresse)",
        "== vergleicht den Inhalt, .equals() vergleicht die Referenz",
        "Beide vergleichen immer denselben Wert",
        ".equals() funktioniert nur bei primitiven Typen",
      ],
      correct: [0],
      explanation: "== prüft, ob zwei Variablen auf dasselbe Objekt zeigen. .equals() prüft, ob der Inhalt gleich ist. Für inhaltliche String-Vergleiche sollte immer .equals() verwendet werden.",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was ist der ASCII-Wert von \'A\'?',
      options: ["65", "64", "97", "41"],
      correct: [0],
      explanation: "Das Zeichen 'A' hat den ASCII/Unicode-Wert 65. 'a' (Kleinbuchstabe) hat den Wert 97. 'B' hat den Wert 66 usw.",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welches Schlüsselwort wird für Vererbung in Java verwendet?',
      options: ["extends", "implements", "inherits", "super"],
      correct: [0],
      explanation: "Mit extends erbt eine Klasse von einer anderen: class Hund extends Tier. implements wird für Interfaces verwendet. super bezieht sich auf die Oberklasse.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ist eine Endlosschleife?',
      options: [
        "Eine Schleife, deren Abbruchbedingung niemals false wird",
        "Eine Schleife, die genau 1000 Mal läuft",
        "Eine Schleife ohne Schleifenrumpf",
        "Eine Schleife, die bei einer Exception abbricht",
      ],
      correct: [0],
      explanation: "Eine Endlosschleife tritt auf, wenn die Abbruchbedingung immer true bleibt. Beispiel: while (true) { } oder for(;;). Sie blockiert das Programm und muss von außen abgebrochen werden.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welcher Zugriffsmodifikator macht ein Attribut nur innerhalb der eigenen Klasse sichtbar?',
      options: ["private", "protected", "public", "static"],
      correct: [0],
      explanation: "private schränkt den Zugriff auf die eigene Klasse ein. Dies ist das Grundprinzip der Kapselung (Encapsulation) in der OOP.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was passiert, wenn in einem switch-Statement kein break steht?',
      options: [
        "Fall-through: Alle nachfolgenden case-Blöcke werden ebenfalls ausgeführt",
        "Nur der passende case wird ausgeführt",
        "Es entsteht ein Compile-Fehler",
        "Das Programm springt zum default-Block",
      ],
      correct: [0],
      explanation: "Ohne break tritt Fall-through auf. Die Ausführung setzt nach dem gefundenen case nahtlos fort, bis ein break oder das Ende des switch erreicht wird.",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was ist der Unterschied zwischen einer while- und einer do-while-Schleife?',
      options: [
        "do-while wird mindestens einmal ausgeführt; while prüft die Bedingung zuerst",
        "while wird mindestens einmal ausgeführt; do-while prüft zuerst",
        "do-while ist schneller als while",
        "Es gibt keinen Unterschied",
      ],
      correct: [0],
      explanation: "Bei while wird die Bedingung vor dem ersten Durchlauf geprüft. Bei do-while wird der Rumpf zuerst ausgeführt, die Bedingung erst danach geprüft — mindestens ein Durchlauf ist garantiert.",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Anweisung gibt die Länge eines Arrays arr aus?',
      options: [
        "System.out.println(arr.length);",
        "System.out.println(arr.length());",
        "System.out.println(arr.size());",
        "System.out.println(length(arr));",
      ],
      correct: [0],
      explanation: "Bei Arrays wird die Länge mit dem Attribut .length (ohne Klammern) abgerufen. Bei ArrayList und anderen Collections verwendet man .size(). Strings haben .length() (mit Klammern).",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ist ein Konstruktor?',
      options: [
        "Eine spezielle Methode, die beim Erstellen eines Objekts aufgerufen wird und keinen Rückgabetyp hat",
        "Eine Methode, die ein Objekt zerstört",
        "Eine Methode mit dem Rückgabetyp void",
        "Eine Methode, die automatisch bei Programmstart aufgerufen wird",
      ],
      correct: [0],
      explanation: "Ein Konstruktor hat denselben Namen wie die Klasse und keinen Rückgabetyp (auch nicht void). Er wird mit new aufgerufen und initialisiert das neue Objekt.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ergibt der Ausdruck: "Wert: " + 3 + 2 in Java?',
      options: ["\"Wert: 32\"", "\"Wert: 5\"", "\"Wert:32\"", "Fehler"],
      correct: [0],
      explanation: "Da \"Wert: \" ein String ist, wird alles danach als String-Konkatenation behandelt. \"Wert: \" + 3 = \"Wert: 3\", dann \"Wert: 3\" + 2 = \"Wert: 32\".",
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was gibt arr.length bei int[] arr = new int[7]; zurück?',
      options: ["7", "6", "0", "8"],
      correct: [0],
      explanation: "new int[7] erzeugt ein Array mit 7 Elementen (Indizes 0 bis 6). arr.length gibt die Kapazität 7 zurück.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was passiert bei: int x = 5; x += 3; System.out.println(x);',
      options: ["8", "5", "3", "15"],
      correct: [0],
      explanation: "x += 3 ist die Kurzform von x = x + 3. Startwert 5 + 3 = 8. Ausgabe: 8.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Ausgabe erzeugt System.out.println(Math.max(3, 7)); ?',
      options: ["7", "3", "10", "4"],
      correct: [0],
      explanation: "Math.max(a, b) gibt das Maximum zweier Zahlen zurück. Math.max(3, 7) = 7.",
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ist "Kapselung" (Encapsulation) in der OOP?',
      options: [
        "Attribute werden private gemacht; der Zugriff erfolgt über öffentliche Getter/Setter-Methoden",
        "Alle Methoden werden in einer Klasse zusammengefasst",
        "Eine Klasse erbt Methoden einer anderen Klasse",
        "Eine Methode kann verschiedene Parametertypen annehmen",
      ],
      correct: [0],
      explanation: "Kapselung schützt Attribute vor direktem Zugriff von außen (private). Getter-Methoden lesen Werte, Setter-Methoden setzen sie — mit Möglichkeit zur Validierung.",
      difficulty: 2,
    },
  ],
};

export default topic;
