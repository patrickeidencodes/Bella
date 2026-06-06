import type { RawArea } from '../types';
import rechtschreibung from '../topics/rechtschreibung';
import zeichensetzung from '../topics/zeichensetzung';
import grammatik from '../topics/grammatik';
import zeitformen from '../topics/zeitformen';
import synonyme from '../topics/synonyme';
import antonyme from '../topics/antonyme';
import fremdwoerter from '../topics/fremdwoerter';
import wortanalogien from '../topics/wortanalogien';
import oberbegriffe from '../topics/oberbegriffe';
import sprichwoerter from '../topics/sprichwoerter';
import lueckentext from '../topics/lueckentext';
import textverstaendnis from '../topics/textverstaendnis';

export const deutsch: RawArea = {
  slug: 'deutsch',
  title: 'Deutsch',
  topics: [
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
  ],
};
