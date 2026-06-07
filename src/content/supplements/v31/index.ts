import type { RawSupplement } from '../../types';
import amtstraeger from './amtstraeger';
import demokratieWahlen from './demokratie-wahlen';
import eu from './eu';
import verwaltungSaarland from './verwaltung-saarland';
import softwareCloud from './software-cloud';
import softwareentwicklung from './softwareentwicklung';
import programmierGrundlagen from './programmier-grundlagen';
import itSicherheit from './it-sicherheit';

/**
 * Ergänzungen aus dem Master-Lernskript v3.1 (zweite PDF-Ebene). Werden – wie
 * die übrigen Ergänzungen – in src/content/index.ts an die Themen angehängt und
 * als Herkunft 'pdf' markiert.
 */
export const supplementsV31: Record<string, RawSupplement> = {
  amtstraeger,
  'demokratie-wahlen': demokratieWahlen,
  eu,
  'verwaltung-saarland': verwaltungSaarland,
  'software-cloud': softwareCloud,
  softwareentwicklung,
  'programmier-grundlagen': programmierGrundlagen,
  'it-sicherheit': itSicherheit,
};
