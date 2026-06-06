/**
 * Erzeugt db/seed.sql aus denselben Quelldaten, die auch die App nutzt
 * (src/content). So sind App-Inhalte und Datenbank garantiert identisch.
 *
 * Ausführen:  npm run seed:gen
 */
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { buildContent, validateRawAreas } from '../src/content/build';
import { rawAreas } from '../src/content';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(__dirname, '../db/seed.sql');

function sqlStr(value: string): string {
  return `'${value.replace(/'/g, "''")}'`;
}

function sqlNullableStr(value: string | undefined | null): string {
  return value == null ? 'null' : sqlStr(value);
}

function sqlJson(value: unknown): string {
  if (value === undefined || value === null) return 'null';
  return `${sqlStr(JSON.stringify(value))}::jsonb`;
}

function main() {
  const warnings = validateRawAreas(rawAreas);
  if (warnings.length) {
    console.warn(`\n⚠️  ${warnings.length} Hinweis(e) bei den Inhalten:`);
    for (const w of warnings.slice(0, 30)) console.warn('   - ' + w);
    if (warnings.length > 30) console.warn(`   … und ${warnings.length - 30} weitere`);
  }

  const { areas, topics, flashcards, questions } = buildContent(rawAreas);

  const lines: string[] = [];
  lines.push('-- =============================================================================');
  lines.push('-- Einstellungstest Verwaltungsinformatik – Seed-Daten');
  lines.push('-- AUTOMATISCH ERZEUGT aus src/content via `npm run seed:gen` – nicht von Hand ändern.');
  lines.push('-- Zuerst db/schema.sql einspielen, dann diese Datei.');
  lines.push('-- =============================================================================');
  lines.push('');
  lines.push('begin;');
  lines.push('');
  lines.push('-- Vorhandene Inhalte leeren und IDs zurücksetzen');
  lines.push('truncate areas, topics, flashcards, questions restart identity cascade;');
  lines.push('');

  lines.push('-- Bereiche');
  for (const a of areas) {
    lines.push(
      `insert into areas (id, slug, title, sort_order) values ` +
        `(${a.id}, ${sqlStr(a.slug)}, ${sqlStr(a.title)}, ${a.sortOrder});`,
    );
  }
  lines.push('');

  lines.push('-- Themen');
  for (const t of topics) {
    lines.push(
      `insert into topics (id, area_id, slug, title, description, sort_order) values ` +
        `(${t.id}, ${t.areaId}, ${sqlStr(t.slug)}, ${sqlStr(t.title)}, ${sqlNullableStr(t.description)}, ${t.sortOrder});`,
    );
  }
  lines.push('');

  lines.push('-- Karteikarten');
  for (const f of flashcards) {
    lines.push(
      `insert into flashcards (id, topic_id, front, back, source) values ` +
        `(${f.id}, ${f.topicId}, ${sqlStr(f.front)}, ${sqlStr(f.back)}, ${sqlStr(f.source)});`,
    );
  }
  lines.push('');

  lines.push('-- Fragen');
  for (const q of questions) {
    lines.push(
      `insert into questions (id, topic_id, type, prompt, code, options, correct, explanation, difficulty, relevance, source) values ` +
        `(${q.id}, ${q.topicId}, ${sqlStr(q.type)}, ${sqlStr(q.prompt)}, ${sqlNullableStr(q.code)}, ` +
        `${sqlJson(q.options)}, ${sqlJson(q.correct)}, ${sqlStr(q.explanation)}, ${q.difficulty}, ${q.relevance}, ${sqlStr(q.source)});`,
    );
  }
  lines.push('');

  // Sequenzen an die höchsten IDs anpassen
  lines.push('-- Sequenzen aktualisieren');
  lines.push(`select setval('areas_id_seq', ${areas.length});`);
  lines.push(`select setval('topics_id_seq', ${topics.length});`);
  lines.push(`select setval('flashcards_id_seq', ${flashcards.length});`);
  lines.push(`select setval('questions_id_seq', ${questions.length});`);
  lines.push('');
  lines.push('commit;');
  lines.push('');

  writeFileSync(OUT, lines.join('\n'), 'utf8');

  console.log(`\n✅ db/seed.sql erzeugt:`);
  console.log(`   ${areas.length} Bereiche, ${topics.length} Themen, ` +
    `${flashcards.length} Karteikarten, ${questions.length} Fragen.`);
}

main();
