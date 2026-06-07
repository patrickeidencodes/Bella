import type { Relevance } from '../types';

/**
 * Einschätzung der Prüfungsrelevanz JE THEMA für den Einstellungstest
 * (öffentlicher Dienst, Verwaltungsinformatik Saarland).
 *   1 = wichtig            (hohe Trefferwahrscheinlichkeit / Kernstoff)
 *   2 = normal             (kann gut drankommen)
 *   3 = weniger relevant   (breit/tief – seltener bzw. weniger vorhersehbar)
 *
 * Grundlage: das Master-Lernskript (PDF) selbst – es markiert z. B. „Aktuelle
 * Amtsträger – sehr beliebt", die klassischen Sprach-Aufgabentypen sowie den
 * Java-Teil als prüfungsnah und kennzeichnet die Verwaltungs-Vertiefung als
 * „tiefer als ein typischer Einstellungstest meist verlangt".
 *
 * Default für nicht gelistete Themen: 2 (normal). Einzelne Fragen können die
 * Themen-Relevanz über das Feld `relevance` in der Frage übersteuern.
 */
export const topicRelevance: Record<string, Relevance> = {
  // --- Deutsch ---
  rechtschreibung: 1, // das/dass & Co. – Klassiker
  grammatik: 1, // die vier Fälle, Wortarten – häufig
  synonyme: 1, // typischer Wortschatz-Aufgabentyp
  antonyme: 1,
  fremdwoerter: 1,
  wortanalogien: 1, // typischer Aufgabentyp
  oberbegriffe: 1, // typischer Aufgabentyp
  zeichensetzung: 2,
  zeitformen: 2,
  sprichwoerter: 2,
  lueckentext: 2,
  textverstaendnis: 2,

  // --- Allgemeinbildung / Politische Bildung ---
  amtstraeger: 1, // PDF: „sehr beliebt"
  'politisches-system': 1,
  grundgesetz: 1,
  gewaltenteilung: 1,
  'demokratie-wahlen': 1,
  sozialversicherung: 2,
  eu: 2,
  recht: 2,
  wirtschaft: 2,
  geschichte: 2,
  geografie: 2,
  'technik-naturwissenschaft': 2,
  'verwaltung-saarland': 2, // Vertiefung tief, aber Saarland-/Ministeriumsfakten beliebt
  zahlenreihen: 2, // Logiktraining; je nach Auswahlverfahren unterschiedlich relevant
  'landeskunde-saarland-kuer': 3, // Kür / Zusatz – über den Pflichtstoff hinaus
  'internationale-politik': 3, // sehr breit (G7/G20, Organisationen)
  weltwissen: 3, // breit & wenig vorhersehbar

  // --- Informatik ---
  hardware: 1, // Grundlagen
  zahlensysteme: 1, // Klassiker
  'edv-abkuerzungen': 1, // sehr häufig
  'it-sicherheit': 1, // DSGVO & digitale Verwaltung – aktuell/relevant
  java: 1, // eigener Prüfungsteil
  'software-cloud': 2,
  'netzwerke-datenbanken': 2,
  'programmier-grundlagen': 2,
  softwareentwicklung: 3, // ISO-Normen, Tuckman u. Ä. – tiefer/seltener
  'digitale-verwaltung-kuer': 3, // Kür / Zusatz – über den Pflichtstoff hinaus
};

export function relevanceForTopic(slug: string): Relevance {
  return topicRelevance[slug] ?? 2;
}

export const relevanceLabel: Record<Relevance, string> = {
  1: 'Wichtig',
  2: 'Normal',
  3: 'Weniger relevant',
};
