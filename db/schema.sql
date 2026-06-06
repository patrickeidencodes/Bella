-- =============================================================================
-- Einstellungstest Verwaltungsinformatik – Datenbankschema (Supabase / Postgres)
-- =============================================================================
-- Supabase ist OPTIONAL. Die App läuft auch vollständig ohne Datenbank
-- (Inhalte sind im Frontend gebündelt, Fortschritt liegt im localStorage).
-- Wer Supabase nutzen möchte, spielt zuerst dieses Schema und danach
-- db/seed.sql im SQL-Editor ein.
--
-- Hinweis: db/seed.sql wird aus denselben Quelldaten wie die App erzeugt
-- (npm run seed:gen). Beide Quellen sind daher garantiert identisch.
-- =============================================================================

-- Sauberer Neustart (Reihenfolge wegen Foreign Keys)
drop table if exists flashcard_reviews cascade;
drop table if exists attempts cascade;
drop table if exists questions cascade;
drop table if exists flashcards cascade;
drop table if exists topics cascade;
drop table if exists areas cascade;

-- Bereiche: die drei Prüfungsbereiche
create table areas (
  id          serial primary key,
  slug        text unique not null,         -- 'deutsch' | 'allgemeinbildung' | 'informatik'
  title       text not null,
  sort_order  int not null default 0
);

-- Themen (Kategorien) innerhalb eines Bereichs, z. B. 'Synonyme', 'Geschichte', 'Hardware'
create table topics (
  id          serial primary key,
  area_id     int references areas(id) on delete cascade,
  slug        text unique not null,
  title       text not null,
  description text,
  sort_order  int not null default 0
);

-- Karteikarten (Theorie zum Lernen)
create table flashcards (
  id        serial primary key,
  topic_id  int references topics(id) on delete cascade,
  front     text not null,                  -- Begriff / Frage
  back      text not null,                  -- Erklärung / Antwort
  source    text not null default 'generated' -- Herkunft: 'pdf' (Lernskript) | 'generated'
);

-- Fragen (für Übungstests & Simulation)
create table questions (
  id          serial primary key,
  topic_id    int references topics(id) on delete cascade,
  type        text not null,                -- 'mc' | 'truefalse' | 'fill' | 'order_output' | 'find_error'
  prompt      text not null,                -- die Frage / der Codeausschnitt
  code        text,                         -- optionaler Code-Block (monospace darstellen)
  options     jsonb,                        -- Array von Antwortoptionen (bei mc/truefalse)
  correct     jsonb not null,               -- Index/Indizes oder akzeptierte Texte (bei fill)
  explanation text not null,                -- kurze Begründung, wird nach Antwort gezeigt
  difficulty  int not null default 1,       -- 1=leicht, 2=mittel, 3=schwer
  relevance   int not null default 2,       -- Prüfungsrelevanz: 1=wichtig, 2=normal, 3=weniger relevant
  source      text not null default 'generated' -- Herkunft: 'pdf' (Lernskript) | 'generated'
);

-- Fortschritt pro beantworteter Frage
create table attempts (
  id          bigserial primary key,
  user_id     uuid,                         -- null erlaubt (anonym → localStorage-Fallback)
  question_id int references questions(id) on delete cascade,
  is_correct  boolean not null,
  answered_at timestamptz not null default now()
);

-- Karteikarten-Lernstand (einfaches Spaced-Repetition)
create table flashcard_reviews (
  id           bigserial primary key,
  user_id      uuid,
  flashcard_id int references flashcards(id) on delete cascade,
  known        boolean not null,            -- letzte Selbsteinschätzung
  reviewed_at  timestamptz not null default now()
);

-- Indizes für häufige Abfragen
create index if not exists idx_topics_area on topics(area_id);
create index if not exists idx_flashcards_topic on flashcards(topic_id);
create index if not exists idx_questions_topic on questions(topic_id);
create index if not exists idx_attempts_question on attempts(question_id);
create index if not exists idx_reviews_flashcard on flashcard_reviews(flashcard_id);

-- =============================================================================
-- Row Level Security
-- =============================================================================
alter table areas              enable row level security;
alter table topics             enable row level security;
alter table flashcards         enable row level security;
alter table questions          enable row level security;
alter table attempts           enable row level security;
alter table flashcard_reviews  enable row level security;

-- Inhalte: für alle lesbar
create policy "Inhalte öffentlich lesbar (areas)"      on areas      for select using (true);
create policy "Inhalte öffentlich lesbar (topics)"     on topics     for select using (true);
create policy "Inhalte öffentlich lesbar (flashcards)" on flashcards for select using (true);
create policy "Inhalte öffentlich lesbar (questions)"  on questions  for select using (true);

-- Fortschritt (Variante OHNE Login): offen für anon, da kein user_id gesetzt wird.
-- ------------------------------------------------------------------------------
create policy "Versuche offen lesen"     on attempts          for select using (true);
create policy "Versuche offen schreiben" on attempts          for insert with check (true);
create policy "Reviews offen lesen"      on flashcard_reviews for select using (true);
create policy "Reviews offen schreiben"  on flashcard_reviews for insert with check (true);

-- ------------------------------------------------------------------------------
-- Variante MIT Login (Supabase Auth): obige offene Policies löschen und diese
-- aktivieren, damit jede Person nur ihre eigenen Daten sieht/schreibt:
--
-- create policy "Eigene Versuche" on attempts
--   for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- create policy "Eigene Reviews" on flashcard_reviews
--   for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
-- ------------------------------------------------------------------------------
