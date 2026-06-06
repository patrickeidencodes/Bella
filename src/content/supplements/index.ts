import type { RawSupplement } from '../types';

// Deutsch
import rechtschreibung from './rechtschreibung';
import zeichensetzung from './zeichensetzung';
import grammatik from './grammatik';
import zeitformen from './zeitformen';
import synonyme from './synonyme';
import antonyme from './antonyme';
import fremdwoerter from './fremdwoerter';
import wortanalogien from './wortanalogien';
import oberbegriffe from './oberbegriffe';
import sprichwoerter from './sprichwoerter';
import lueckentext from './lueckentext';
import textverstaendnis from './textverstaendnis';

// Allgemeinbildung
import politischesSystem from './politisches-system';
import amtstraeger from './amtstraeger';
import grundgesetz from './grundgesetz';
import gewaltenteilung from './gewaltenteilung';
import demokratieWahlen from './demokratie-wahlen';
import sozialversicherung from './sozialversicherung';
import eu from './eu';
import internationalePolitik from './internationale-politik';
import recht from './recht';
import wirtschaft from './wirtschaft';
import geschichte from './geschichte';
import geografie from './geografie';
import weltwissen from './weltwissen';
import technikNaturwissenschaft from './technik-naturwissenschaft';
import verwaltungSaarland from './verwaltung-saarland';

// Informatik
import hardware from './hardware';
import softwareCloud from './software-cloud';
import zahlensysteme from './zahlensysteme';
import netzwerkeDatenbanken from './netzwerke-datenbanken';
import softwareentwicklung from './softwareentwicklung';
import programmierGrundlagen from './programmier-grundlagen';
import itSicherheit from './it-sicherheit';
import edvAbkuerzungen from './edv-abkuerzungen';
import java from './java';

/**
 * Ergänzungen aus dem Master-Lernskript (PDF) je Themen-Slug. Diese werden in
 * src/content/index.ts an die Basis-Inhalte des Themas angehängt; ihre Fragen
 * werden dabei als Herkunft 'pdf' markiert.
 */
export const supplements: Record<string, RawSupplement> = {
  rechtschreibung,
  zeichensetzung,
  grammatik,
  zeitformen,
  synonyme,
  antonyme,
  fremdwoerter,
  wortanalogien,
  oberbegriffe,
  sprichwoerter,
  lueckentext,
  textverstaendnis,
  'politisches-system': politischesSystem,
  amtstraeger,
  grundgesetz,
  gewaltenteilung,
  'demokratie-wahlen': demokratieWahlen,
  sozialversicherung,
  eu,
  'internationale-politik': internationalePolitik,
  recht,
  wirtschaft,
  geschichte,
  geografie,
  weltwissen,
  'technik-naturwissenschaft': technikNaturwissenschaft,
  'verwaltung-saarland': verwaltungSaarland,
  hardware,
  'software-cloud': softwareCloud,
  zahlensysteme,
  'netzwerke-datenbanken': netzwerkeDatenbanken,
  softwareentwicklung,
  'programmier-grundlagen': programmierGrundlagen,
  'it-sicherheit': itSicherheit,
  'edv-abkuerzungen': edvAbkuerzungen,
  java,
};
