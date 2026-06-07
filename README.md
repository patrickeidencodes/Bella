# Einstellungstest Verwaltungsinformatik – Lern-App

Lern-Website zur Vorbereitung auf den Einstellungstest im öffentlichen Dienst
(**Verwaltungsinformatik, Saarland**). Drei gleich gewichtete Bereiche:

1. **Deutsch**
2. **Allgemeinbildung / Politische Bildung**
3. **Informatik-Grundkenntnisse** (inkl. Java-Teil)

Drei Modi:

- **Lernen** – Theorie als Karteikarten (umdrehen, „gewusst/nicht gewusst”, einfaches Spaced-Repetition)
- **Üben** – Kategorie-Tests mit vielen Aufgaben, sofortigem Feedback und Erklärung
- **Mehrere Kategorien kombinierbar** – beim Lernen und Üben lassen sich ein einzelnes Thema oder mehrere Themen (auch bereichsübergreifend, z. B. Rechtschreibung + Fremdwörter + Politisches System + Java) in einer Session zusammenstellen
- **Vorlesen (Text-to-Speech)** – Karten und Fragen können vorgelesen werden (🔊-Button an jeder Karte/Frage, optional automatisch). Nutzt die im Browser eingebaute deutsche Sprachausgabe (Web Speech API), kein externer Dienst
- **Prüfen** – Prüfungssimulation (Standard 70 Fragen in 30 Min) mit Countdown, ohne Zwischen-Feedback, mit vollständiger Auswertung

Oberfläche und Inhalte sind durchgehend **auf Deutsch**.

## Schnellstart

```bash
npm install
npm run dev
```

Die App läuft danach unter der angezeigten lokalen Adresse (Standard http://localhost:5173).

> **Kein Login, keine Datenbank nötig.** Alle Inhalte (919 Karteikarten, 1691 Fragen)
> sind in der App gebündelt; der Lernfortschritt wird im `localStorage` des Browsers
> gespeichert. Die App funktioniert komplett offline.

## Inhalte

| Bereich | Themen |
|---|---|
| Deutsch | 12 |
| Allgemeinbildung | 15 |
| Informatik | 9 |

- **919 Karteikarten** (mind. 17 pro Thema)
- **1691 Fragen** (mind. 33 pro Thema; Wortschatz-Themen 50+, Java 69)
- Fragetypen: Multiple Choice (immer genau 4 Optionen), Richtig/Falsch, Freitext, Java-Output vorhersagen, Java-Fehler finden
- **Prüfungsrelevanz** je Frage: Wichtig / Normal / Weniger relevant (Einschätzung auf Themen-Ebene, siehe [src/content/relevance.ts](src/content/relevance.ts); im Übungsmodus filterbar)
- **Quelle** je Frage UND je Karteikarte: direkt aus dem **Lernskript (PDF)** oder **zusätzlich generiert**. Sowohl beim **Üben** als auch beim **Lernen** pro Kategorie umschaltbar (nur PDF / nur Zusatz / alle). Die PDF-Teilmenge liegt isoliert in [src/content/supplements/](src/content/supplements/) und ist für alle 36 Themen vorhanden (412 PDF-Karteikarten + 443 PDF-Fragen).
- Inhalte basieren auf dem **Master-Lernskript (PDF)** als verbindlicher Quelle; politische Fakten auf dem Stand 2026 (z. B. Bundeskanzler Friedrich Merz, Saarland-MPin Anke Rehlinger)

Die PDF-Fakten werden über Ergänzungsdateien in [src/content/supplements/](src/content/supplements/) eingespielt und beim Laden an die jeweiligen Themen angehängt – die Basis-Inhalte bleiben dadurch unangetastet.

Die Inhalte liegen als TypeScript-Module unter [src/content/topics/](src/content/topics/).
Eine Themen-Datei (z. B. [src/content/topics/synonyme.ts](src/content/topics/synonyme.ts))
ist das kanonische Format und gut als Vorlage zum Erweitern geeignet.

## Optimiert für Mobile & Tablet

Die App ist primär für Smartphone und Tablet ausgelegt:

- **Tab-Leiste unten** (daumenfreundlich) auf Mobile/Tablet, klassische Top-Navigation ab Desktop
- **Große Touch-Ziele** (mind. 44–52 px), volle Breite für die wichtigsten Aktionen
- **Wisch-Gesten bei Karteikarten**: nach rechts = gewusst, nach links = nicht gewusst (zusätzlich zu den Buttons)
- **Safe-Area-Support** (Notch / Home-Indikator) via `viewport-fit=cover` und `env(safe-area-inset-*)`
- **Fokus-Modus** während der Prüfung: die Tab-Leiste wird ausgeblendet, damit kein versehentlicher Tipp den Lauf verwirft
- **Installierbar** als Home-Screen-App (Web-App-Manifest, eigener Splash/Theme)
- 16 px Eingabefelder (kein ungewolltes Zoomen auf iOS), reduziertes Tap-Highlight, sanfte Active-States

## Projektstruktur

```
src/
  components/   wiederverwendbare UI-Bausteine (Layout, QuestionView, ProgressBar …)
  content/      Inhalte (areas/, topics/) + Builder, der IDs vergibt
  hooks/        React-Query-Hooks & Fortschritts-Store
  lib/          supabase, progress (localStorage), exam-Logik, Statistik, utils
  pages/        Dashboard, Lernen, Üben, Prüfung, Statistik
  types/        zentrale TypeScript-Typen
db/             schema.sql + (generiertes) seed.sql für optionales Supabase
scripts/        generate-seed.ts, audit-content.ts
```

## Nützliche Skripte

```bash
npm run dev          # Entwicklungsserver
npm run build        # Typecheck + Produktions-Build (dist/)
npm run preview      # Produktions-Build lokal ansehen
npm run seed:gen     # db/seed.sql aus src/content neu erzeugen
npx tsx scripts/audit-content.ts   # Mindestmengen & Integrität der Inhalte prüfen
```

## Optional: Supabase

Die App braucht Supabase **nicht**. Wer den Fortschritt serverseitig speichern
möchte:

1. Projekt auf [supabase.com](https://supabase.com) anlegen.
2. [db/schema.sql](db/schema.sql) und danach [db/seed.sql](db/seed.sql) im SQL-Editor ausführen.
3. `.env.example` zu `.env` kopieren und ausfüllen:

```
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Sind diese Variablen gesetzt, spiegelt die App beantwortete Fragen und
Karteikarten-Bewertungen zusätzlich nach Supabase (siehe
[src/lib/progress.ts](src/lib/progress.ts)). Hinweise zur Auth-Variante mit
eigenen `user_id`-Policies stehen in [db/schema.sql](db/schema.sql).

## Deployment

Statischer Build (`npm run build` → `dist/`), deploybar auf **Vercel**, **Netlify**
o. ä. Für client-seitiges Routing eine SPA-Fallback-Regel auf `index.html` setzen
(bei Vercel/Netlify Standard für Vite-SPAs).

> Inhalte ohne Gewähr – als Lernhilfe gedacht.
