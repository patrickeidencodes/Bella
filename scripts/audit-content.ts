/** Einmalige Prüfung der Inhalts-Mindestmengen und -Integrität. */
import { content, topicById, areaById } from '../src/content';

const WORDLIST = new Set([
  'synonyme', 'antonyme', 'fremdwoerter', 'wortanalogien', 'oberbegriffe', 'sprichwoerter',
]);

let problems = 0;

for (const topic of content.topics) {
  const fcs = content.flashcards.filter((f) => f.topicId === topic.id);
  const qs = content.questions.filter((q) => q.topicId === topic.id);
  const isKuer = topic.slug.endsWith('-kuer'); // Zusatz/Kür: kleinere Mindestmengen
  const minFc = isKuer ? 5 : 15;
  const minQ = isKuer ? 8 : topic.slug === 'java' ? 40 : WORDLIST.has(topic.slug) ? 50 : 30;

  const flags: string[] = [];
  if (fcs.length < minFc) flags.push(`Karten ${fcs.length}<${minFc}`);
  if (qs.length < minQ) flags.push(`Fragen ${qs.length}<${minQ}`);

  for (const q of qs) {
    if (q.type === 'mc' && (q.options?.length ?? 0) !== 4) flags.push(`mc!=4opt q${q.id}`);
    if (q.type !== 'fill') {
      for (const c of q.correct as number[]) {
        if (typeof c !== 'number' || !q.options || c < 0 || c >= q.options.length) {
          flags.push(`badIdx q${q.id}`);
        }
      }
    } else if (!Array.isArray(q.correct) || q.correct.length === 0) {
      flags.push(`fill ohne correct q${q.id}`);
    }
    if (!q.explanation?.trim()) flags.push(`keine Erklärung q${q.id}`);
  }

  const area = areaById.get(topic.areaId)?.title ?? '?';
  const status = flags.length ? `❌ ${flags.join(', ')}` : '✅';
  if (flags.length) problems += 1;
  console.log(`${status}  [${area}] ${topic.title}: ${fcs.length} Karten, ${qs.length} Fragen`);
}

// Typverteilung Fragen gesamt
const byType: Record<string, number> = {};
for (const q of content.questions) byType[q.type] = (byType[q.type] ?? 0) + 1;

console.log('\nFragetypen gesamt:', byType);
console.log(`\nGesamt: ${content.flashcards.length} Karten, ${content.questions.length} Fragen, ${content.topics.length} Themen.`);
console.log(problems === 0 ? '\n✅ Alle Mindestmengen & Integritätschecks bestanden.' : `\n❌ ${problems} Thema/Themen mit Problemen.`);
void topicById;
