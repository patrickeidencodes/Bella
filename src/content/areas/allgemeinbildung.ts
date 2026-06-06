import type { RawArea } from '../types';
import politischesSystem from '../topics/politisches-system';
import amtstraeger from '../topics/amtstraeger';
import grundgesetz from '../topics/grundgesetz';
import gewaltenteilung from '../topics/gewaltenteilung';
import demokratieWahlen from '../topics/demokratie-wahlen';
import sozialversicherung from '../topics/sozialversicherung';
import eu from '../topics/eu';
import internationalePolitik from '../topics/internationale-politik';
import recht from '../topics/recht';
import wirtschaft from '../topics/wirtschaft';
import geschichte from '../topics/geschichte';
import geografie from '../topics/geografie';
import weltwissen from '../topics/weltwissen';
import technikNaturwissenschaft from '../topics/technik-naturwissenschaft';
import verwaltungSaarland from '../topics/verwaltung-saarland';

export const allgemeinbildung: RawArea = {
  slug: 'allgemeinbildung',
  title: 'Allgemeinbildung / Politische Bildung',
  topics: [
    politischesSystem,
    amtstraeger,
    grundgesetz,
    gewaltenteilung,
    demokratieWahlen,
    sozialversicherung,
    eu,
    internationalePolitik,
    recht,
    wirtschaft,
    geschichte,
    geografie,
    weltwissen,
    technikNaturwissenschaft,
    verwaltungSaarland,
  ],
};
