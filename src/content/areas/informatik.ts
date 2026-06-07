import type { RawArea } from '../types';
import hardware from '../topics/hardware';
import softwareCloud from '../topics/software-cloud';
import zahlensysteme from '../topics/zahlensysteme';
import netzwerkeDatenbanken from '../topics/netzwerke-datenbanken';
import softwareentwicklung from '../topics/softwareentwicklung';
import programmierGrundlagen from '../topics/programmier-grundlagen';
import itSicherheit from '../topics/it-sicherheit';
import edvAbkuerzungen from '../topics/edv-abkuerzungen';
import java from '../topics/java';
import digitaleVerwaltungKuer from '../topics/digitale-verwaltung-kuer';

export const informatik: RawArea = {
  slug: 'informatik',
  title: 'Informatik',
  topics: [
    hardware,
    softwareCloud,
    zahlensysteme,
    netzwerkeDatenbanken,
    softwareentwicklung,
    programmierGrundlagen,
    itSicherheit,
    edvAbkuerzungen,
    java,
    digitaleVerwaltungKuer,
  ],
};
