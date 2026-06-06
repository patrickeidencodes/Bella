import type { RawTopic } from '../types';

const topic: RawTopic = {
  slug: 'sozialversicherung',
  title: 'Sozialversicherung',
  description: 'Die fünf Säulen der gesetzlichen Sozialversicherung.',
  flashcards: [
    {
      front: 'Welche fünf Säulen umfasst die gesetzliche Sozialversicherung in Deutschland?',
      back: '1) Gesetzliche Krankenversicherung (GKV), 2) Gesetzliche Rentenversicherung, 3) Arbeitslosenversicherung, 4) Gesetzliche Unfallversicherung, 5) Soziale Pflegeversicherung.',
    },
    {
      front: 'Wer gilt als Begründer der deutschen Sozialversicherung?',
      back: 'Otto von Bismarck. Er führte ab 1883 die gesetzliche Krankenversicherung ein und legte damit den Grundstein des deutschen Sozialversicherungssystems.',
    },
    {
      front: 'In welchem Jahr wurde die Soziale Pflegeversicherung in Deutschland eingeführt?',
      back: '1995. Sie ist die jüngste der fünf Säulen der Sozialversicherung.',
    },
    {
      front: 'Was bedeutet das Solidaritätsprinzip in der Sozialversicherung?',
      back: 'Stärkere tragen für Schwächere mit. Beiträge richten sich nach dem Einkommen, Leistungen nach dem Bedarf – unabhängig von der individuellen Einzahlungshöhe.',
    },
    {
      front: 'Was bedeutet das Äquivalenzprinzip in der Sozialversicherung?',
      back: 'Die Höhe der Leistung entspricht dem Umfang der eingezahlten Beiträge. In der Rentenversicherung gilt es stärker als in der Krankenversicherung.',
    },
    {
      front: 'Was ist paritätische Finanzierung in der Sozialversicherung?',
      back: 'Arbeitgeber und Arbeitnehmer tragen den Beitrag je zur Hälfte. Ausnahme: Die Unfallversicherung wird ausschließlich vom Arbeitgeber finanziert.',
    },
    {
      front: 'Wer ist der Träger der gesetzlichen Rentenversicherung?',
      back: 'Die Deutsche Rentenversicherung (DRV), bestehend aus der Deutschen Rentenversicherung Bund und den regionalen Trägern.',
    },
    {
      front: 'Wer trägt die Beiträge zur gesetzlichen Unfallversicherung?',
      back: 'Ausschließlich der Arbeitgeber. Arbeitnehmer zahlen keine Beiträge zur Unfallversicherung.',
    },
    {
      front: 'Welche Institution ist Träger der Arbeitslosenversicherung?',
      back: 'Die Bundesagentur für Arbeit (BA) mit Hauptsitz in Nürnberg.',
    },
    {
      front: 'Welche Institutionen sind Träger der gesetzlichen Unfallversicherung?',
      back: 'Die Berufsgenossenschaften (für den gewerblichen Bereich) und die Unfallkassen (für den öffentlichen Sektor).',
    },
    {
      front: 'Was ist der Unterschied zwischen Pflichtversicherung und freiwilliger Versicherung?',
      back: 'Bei der Pflichtversicherung besteht kraft Gesetzes automatisch Versicherungsschutz (z. B. für Arbeitnehmer bis zur Versicherungspflichtgrenze). Die freiwillige Versicherung kann man auf eigenen Antrag abschließen.',
    },
    {
      front: 'Welche Leistungen erbringt die gesetzliche Krankenversicherung (GKV)?',
      back: 'Arztbesuche, Krankenhausbehandlung, Medikamente, Vorsorgeuntersuchungen, Krankengeld bei längerer Arbeitsunfähigkeit sowie Familienversicherung für Angehörige.',
    },
    {
      front: 'Welche Leistungen erbringt die gesetzliche Rentenversicherung?',
      back: 'Altersrente, Erwerbsminderungsrente, Hinterbliebenenrente (Witwen-/Waisenrente) sowie Rehabilitationsmaßnahmen.',
    },
    {
      front: 'Welche Leistungen erbringt die Arbeitslosenversicherung?',
      back: 'Arbeitslosengeld I (ALG I), Förderung der beruflichen Weiterbildung, Berufsberatung und Vermittlung in Arbeit.',
    },
    {
      front: 'Welche Leistungen erbringt die gesetzliche Unfallversicherung?',
      back: 'Leistungen bei Arbeitsunfällen und Berufskrankheiten: medizinische Rehabilitation, Verletztenrente, Berufshilfe, Hinterbliebenenversorgung.',
    },
    {
      front: 'Welche Leistungen erbringt die Soziale Pflegeversicherung?',
      back: 'Pflegerische Versorgung zu Hause (ambulant) oder im Heim (stationär), Pflegegeld, Pflegesachleistungen, Kurzzeitpflege, Verhinderungspflege – gegliedert in Pflegegrade 1–5.',
    },
    {
      front: 'Was ist die Versicherungspflichtgrenze (Jahresarbeitsentgeltgrenze) in der GKV?',
      back: 'Eine jährlich angepasste Einkommensgrenze. Arbeitnehmer, deren Entgelt dauerhaft darüber liegt, können sich privat krankenversichern (PKV) oder bleiben freiwillig in der GKV.',
    },
    {
      front: 'Was ist der Unterschied zwischen GKV und PKV?',
      back: 'GKV: gesetzlich, einkommensabhängige Beiträge, Familienversicherung möglich, Solidarprinzip. PKV: privat, risikoabhängige Prämien, keine Familienversicherung, Äquivalenzprinzip.',
    },
    {
      front: 'Wann begann Bismarck mit dem Aufbau der deutschen Sozialversicherung?',
      back: '1883 (Krankenversicherung), 1884 (Unfallversicherung), 1889 (Rentenversicherung). Die Arbeitslosenversicherung folgte erst 1927.',
    },
    {
      front: 'Was versteht man unter dem Umlageverfahren in der Rentenversicherung?',
      back: 'Die aktuellen Beitragszahler finanzieren die laufenden Renten. Es findet kein individuelles Kapitalansparen statt – dies wird auch als Generationenvertrag bezeichnet.',
    },
  ],
  questions: [
    {
      type: 'mc',
      prompt: 'Welche Versicherung gehört NICHT zu den fünf Säulen der Sozialversicherung?',
      options: [
        'Hausratversicherung',
        'Krankenversicherung',
        'Pflegeversicherung',
        'Rentenversicherung',
      ],
      correct: [0],
      explanation:
        'Die Hausratversicherung ist eine private Sachversicherung und keine Sozialversicherung. Die fünf Säulen sind: Kranken-, Renten-, Arbeitslosen-, Unfall- und Pflegeversicherung.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'In welchem Jahr wurde die Soziale Pflegeversicherung in Deutschland eingeführt?',
      options: ['1983', '1995', '2001', '1927'],
      correct: [1],
      explanation:
        'Die Soziale Pflegeversicherung wurde 1995 eingeführt und ist damit die jüngste der fünf Säulen der gesetzlichen Sozialversicherung.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Wer gilt als Begründer der deutschen Sozialversicherung?',
      options: [
        'Kaiser Wilhelm II.',
        'Konrad Adenauer',
        'Otto von Bismarck',
        'Ludwig Erhard',
      ],
      correct: [2],
      explanation:
        'Otto von Bismarck führte ab 1883 die gesetzliche Krankenversicherung ein und gilt daher als Begründer des deutschen Sozialversicherungssystems.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Säule der Sozialversicherung wird ausschließlich vom Arbeitgeber finanziert?',
      options: [
        'Gesetzliche Krankenversicherung',
        'Gesetzliche Rentenversicherung',
        'Soziale Pflegeversicherung',
        'Gesetzliche Unfallversicherung',
      ],
      correct: [3],
      explanation:
        'Die gesetzliche Unfallversicherung wird als einzige Säule vollständig vom Arbeitgeber getragen. Bei allen anderen Zweigen teilen sich Arbeitgeber und Arbeitnehmer die Beiträge (paritätische Finanzierung).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Institution ist der zentrale Träger der Arbeitslosenversicherung in Deutschland?',
      options: [
        'Deutsche Rentenversicherung Bund',
        'Bundesagentur für Arbeit',
        'GKV-Spitzenverband',
        'Bundesministerium für Arbeit und Soziales',
      ],
      correct: [1],
      explanation:
        'Die Bundesagentur für Arbeit (BA) mit Hauptsitz in Nürnberg ist der Träger der gesetzlichen Arbeitslosenversicherung und erbringt Leistungen wie Arbeitslosengeld I.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was beschreibt das Solidaritätsprinzip in der Sozialversicherung?',
      options: [
        'Jeder erhält genau das, was er eingezahlt hat.',
        'Stärkere tragen für Schwächere mit; Beiträge nach Einkommen, Leistungen nach Bedarf.',
        'Nur Erwerbstätige sind versichert.',
        'Der Staat übernimmt alle Kosten aus Steuermitteln.',
      ],
      correct: [1],
      explanation:
        'Das Solidaritätsprinzip bedeutet, dass die Gemeinschaft füreinander einsteht. Beiträge richten sich nach der wirtschaftlichen Leistungsfähigkeit, Leistungen nach dem individuellen Bedarf.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was versteht man unter paritätischer Finanzierung in der Sozialversicherung?',
      options: [
        'Der Staat trägt die gesamten Sozialversicherungsbeiträge.',
        'Arbeitgeber und Arbeitnehmer tragen die Beiträge je zur Hälfte.',
        'Arbeitnehmer zahlen zwei Drittel, Arbeitgeber ein Drittel.',
        'Die Beiträge werden ausschließlich vom Arbeitnehmer getragen.',
      ],
      correct: [1],
      explanation:
        'Paritätische Finanzierung bedeutet, dass Arbeitgeber und Arbeitnehmer die Beiträge je zur Hälfte tragen. Ausnahme ist die Unfallversicherung, die allein der Arbeitgeber finanziert.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welcher Träger ist für die gesetzliche Unfallversicherung im gewerblichen Bereich zuständig?',
      options: [
        'Bundesagentur für Arbeit',
        'Berufsgenossenschaften',
        'Deutsche Rentenversicherung',
        'Gesetzliche Krankenkassen',
      ],
      correct: [1],
      explanation:
        'Die Berufsgenossenschaften sind die Träger der gesetzlichen Unfallversicherung für den gewerblichen Bereich. Für den öffentlichen Sektor sind die Unfallkassen zuständig.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Leistung erbringt die gesetzliche Rentenversicherung NICHT?',
      options: [
        'Altersrente',
        'Erwerbsminderungsrente',
        'Arbeitslosengeld I',
        'Hinterbliebenenrente',
      ],
      correct: [2],
      explanation:
        'Arbeitslosengeld I (ALG I) ist eine Leistung der Arbeitslosenversicherung, nicht der Rentenversicherung. Die Rentenversicherung zahlt Alters-, Erwerbsminderungs- und Hinterbliebenenrenten.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'In welchem Jahr führte Bismarck die gesetzliche Krankenversicherung ein?',
      options: ['1871', '1883', '1889', '1927'],
      correct: [1],
      explanation:
        '1883 wurde unter Bismarck das Krankenversicherungsgesetz verabschiedet – der Startpunkt des deutschen Sozialversicherungssystems.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Sozialversicherung wurde in Deutschland zuletzt (als letzte Säule) eingeführt?',
      options: [
        'Gesetzliche Unfallversicherung',
        'Arbeitslosenversicherung',
        'Soziale Pflegeversicherung',
        'Gesetzliche Rentenversicherung',
      ],
      correct: [2],
      explanation:
        'Die Soziale Pflegeversicherung wurde 1995 als bislang letzte Säule der deutschen Sozialversicherung eingeführt.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Was ist der Generationenvertrag in der gesetzlichen Rentenversicherung?',
      options: [
        'Ein schriftlicher Vertrag zwischen Eltern und Kindern über Unterhalt.',
        'Das Umlageverfahren, bei dem die Erwerbstätigen die laufenden Renten finanzieren.',
        'Ein staatlicher Sparplan für die Altersvorsorge.',
        'Die Verpflichtung des Staates, alle Rentenleistungen aus Steuern zu bezahlen.',
      ],
      correct: [1],
      explanation:
        'Der Generationenvertrag beschreibt das Umlageverfahren: Die aktuell Erwerbstätigen finanzieren durch ihre Beiträge die Renten der heutigen Rentnerinnen und Rentner.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zur Familienversicherung in der GKV ist korrekt?',
      options: [
        'Familienangehörige müssen stets eigene Beiträge zahlen.',
        'Nur Ehepartner können mitversichert werden, nicht Kinder.',
        'Nicht oder geringfügig verdienende Familienangehörige können beitragsfrei mitversichert werden.',
        'Die Familienversicherung ist in der PKV ebenfalls beitragsfrei.',
      ],
      correct: [2],
      explanation:
        'In der GKV können Ehepartner und Kinder ohne eigene Beiträge in der Familienversicherung mitversichert werden, sofern sie kein oder nur geringes Einkommen haben.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Leistung gehört zur gesetzlichen Unfallversicherung?',
      options: [
        'Krankengeld bei langer Erkrankung',
        'Altersrente nach Erreichen der Regelaltersgrenze',
        'Verletztenrente nach einem Arbeitsunfall',
        'Pflegegeld bei häuslicher Pflege',
      ],
      correct: [2],
      explanation:
        'Die Verletztenrente ist eine Leistung der gesetzlichen Unfallversicherung und wird bei dauerhafter Erwerbsminderung infolge eines Arbeitsunfalls oder einer Berufskrankheit gewährt.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welches Prinzip steht im Mittelpunkt der privaten Krankenversicherung (PKV)?',
      options: [
        'Solidaritätsprinzip',
        'Äquivalenzprinzip',
        'Umlageprinzip',
        'Subsidiaritätsprinzip',
      ],
      correct: [1],
      explanation:
        'In der PKV gilt das Äquivalenzprinzip: Die Prämie richtet sich nach dem individuellen Risiko (Alter, Gesundheitszustand). In der GKV dominiert das Solidaritätsprinzip.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Wann wurde in Deutschland die Arbeitslosenversicherung eingeführt?',
      options: ['1884', '1911', '1927', '1949'],
      correct: [2],
      explanation:
        '1927 wurde mit dem Gesetz über Arbeitsvermittlung und Arbeitslosenversicherung (AVAVG) die gesetzliche Arbeitslosenversicherung in Deutschland eingeführt.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zur gesetzlichen Unfallversicherung ist richtig?',
      options: [
        'Sie gilt nur für Unfälle auf dem Betriebsgelände, nicht auf dem Arbeitsweg.',
        'Sie deckt auch Wegeunfälle (Unfälle auf dem Weg zur Arbeit) ab.',
        'Sie wird hälftig von Arbeitgeber und Arbeitnehmer finanziert.',
        'Sie ist eine freiwillige Versicherung für Selbstständige.',
      ],
      correct: [1],
      explanation:
        'Die gesetzliche Unfallversicherung schützt auch bei Wegeunfällen, also auf dem direkten Weg zwischen Wohnung und Arbeitsstätte.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Pflegegrade gibt es in der sozialen Pflegeversicherung?',
      options: [
        'Pflegestufen 0 bis 3',
        'Pflegegrade 1 bis 5',
        'Pflegegrade 1 bis 4',
        'Pflegeklassen A bis E',
      ],
      correct: [1],
      explanation:
        'Seit 2017 gibt es in der sozialen Pflegeversicherung die Pflegegrade 1 bis 5, die den früheren Pflegestufen abgelöst haben und auch kognitive Beeinträchtigungen berücksichtigen.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zur Versicherungspflichtgrenze (Jahresarbeitsentgeltgrenze) in der GKV ist korrekt?',
      options: [
        'Sie gilt für alle Arbeitnehmer ohne Ausnahme.',
        'Wer dauerhaft über dieser Grenze verdient, kann in die PKV wechseln.',
        'Die Grenze wird alle fünf Jahre angepasst.',
        'Selbstständige sind grundsätzlich unter dieser Grenze versicherungspflichtig.',
      ],
      correct: [1],
      explanation:
        'Arbeitnehmer, deren Einkommen dauerhaft über der Versicherungspflichtgrenze liegt, haben die Möglichkeit, in die private Krankenversicherung zu wechseln. Die Grenze wird jährlich angepasst.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Welche der folgenden Institutionen ist KEIN Träger der Sozialversicherung?',
      options: [
        'Deutsche Rentenversicherung Bund',
        'Bundesagentur für Arbeit',
        'Bundeszentralamt für Steuern',
        'Berufsgenossenschaften',
      ],
      correct: [2],
      explanation:
        'Das Bundeszentralamt für Steuern ist eine Finanzbehörde, kein Träger der Sozialversicherung. Träger sind u. a. die Deutsche Rentenversicherung, die Bundesagentur für Arbeit und die Berufsgenossenschaften.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was leistet die soziale Pflegeversicherung bei häuslicher Pflege?',
      options: [
        'Nur stationäre Unterbringung im Pflegeheim',
        'Pflegegeld, Pflegesachleistungen und weitere ambulante Unterstützungsleistungen',
        'Ausschließlich medizinische Behandlung durch Ärzte',
        'Vollständige Übernahme aller Pflegekosten ohne Eigenbeteiligung',
      ],
      correct: [1],
      explanation:
        'Bei häuslicher Pflege zahlt die Pflegeversicherung u. a. Pflegegeld (bei Eigenorganisation der Pflege) oder Pflegesachleistungen (bei professionellen Pflegediensten) sowie weitere Unterstützungsleistungen.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Sozialversicherung wurde als erste unter Bismarck eingeführt?',
      options: [
        'Gesetzliche Rentenversicherung',
        'Gesetzliche Krankenversicherung',
        'Gesetzliche Unfallversicherung',
        'Arbeitslosenversicherung',
      ],
      correct: [1],
      explanation:
        '1883 wurde zunächst die gesetzliche Krankenversicherung eingeführt, gefolgt von der Unfallversicherung (1884) und der Rentenversicherung (1889).',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Leistung zahlt die Arbeitslosenversicherung bei Jobverlust?',
      options: [
        'Arbeitslosengeld II (Bürgergeld)',
        'Arbeitslosengeld I (ALG I)',
        'Sozialhilfe',
        'Kurzarbeitergeld (dauerhaft)',
      ],
      correct: [1],
      explanation:
        'Die Arbeitslosenversicherung zahlt Arbeitslosengeld I (ALG I), das einkommensbezogen ist und von der Bundesagentur für Arbeit ausgezahlt wird. Arbeitslosengeld II (heute Bürgergeld) ist eine steuerfinanzierte Grundsicherungsleistung.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Wie viele Säulen hat die gesetzliche Sozialversicherung in Deutschland?',
      options: ['Drei', 'Vier', 'Fünf', 'Sechs'],
      correct: [2],
      explanation:
        'Die deutsche Sozialversicherung besteht aus fünf Säulen: Kranken-, Renten-, Arbeitslosen-, Unfall- und Pflegeversicherung.',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zum Äquivalenzprinzip ist zutreffend?',
      options: [
        'Alle Versicherten erhalten unabhängig von Beiträgen gleiche Leistungen.',
        'Die Höhe der Leistung entspricht dem Umfang der eingezahlten Beiträge.',
        'Der Staat gleicht Unterschiede zwischen Arm und Reich vollständig aus.',
        'Arbeitgeber und Arbeitnehmer zahlen immer gleich hohe Beiträge.',
      ],
      correct: [1],
      explanation:
        'Das Äquivalenzprinzip besagt, dass Leistung und Gegenleistung in einem angemessenen Verhältnis stehen – wer mehr einzahlt, erhält mehr Leistung. Es gilt besonders stark in der Rentenversicherung.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zur Pflichtversicherung in der GKV ist korrekt?',
      options: [
        'Alle Einwohner Deutschlands sind automatisch pflichtversichert.',
        'Arbeitnehmer bis zur Versicherungspflichtgrenze sind grundsätzlich pflichtversichert.',
        'Selbstständige sind stets pflichtversichert.',
        'Pflichtversicherung gilt nur für Beamte.',
      ],
      correct: [1],
      explanation:
        'Arbeitnehmer sind bis zur Jahresarbeitsentgeltgrenze (Versicherungspflichtgrenze) gesetzlich krankenversicherungspflichtig. Beamte und Selbstständige sind in der Regel nicht pflichtversichert.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Was versteht man unter einer Berufskrankheit im Sinne der gesetzlichen Unfallversicherung?',
      options: [
        'Jede Erkrankung, die während der Arbeitszeit auftritt',
        'Eine in der Berufskrankheitenverordnung anerkannte Krankheit, die typisch für einen Beruf ist',
        'Eine Erkrankung, die durch Stress verursacht wird',
        'Alle chronischen Erkrankungen von Arbeitnehmern',
      ],
      correct: [1],
      explanation:
        'Als Berufskrankheit gilt nur eine Erkrankung, die in der Berufskrankheitenverordnung (BKV) gelistet ist und typischerweise durch die berufliche Tätigkeit verursacht wird (z. B. Lärmschwerhörigkeit, Silikose).',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Welche der folgenden Leistungen erbringt die Gesetzliche Krankenversicherung?',
      options: [
        'Altersrente',
        'Krankengeld bei längerer Arbeitsunfähigkeit',
        'Verletztenrente nach Arbeitsunfall',
        'Pflegegeld bei Pflegebedürftigkeit',
      ],
      correct: [1],
      explanation:
        'Krankengeld ist eine Leistung der GKV. Es wird ab der 7. Woche der Arbeitsunfähigkeit gezahlt (nach Ende der Lohnfortzahlung durch den Arbeitgeber).',
      difficulty: 1,
    },
    {
      type: 'mc',
      prompt: 'Welche Institution legt die Beitragssätze für die gesetzliche Rentenversicherung fest?',
      options: [
        'Die einzelnen Krankenkassen',
        'Die Bundesregierung per Verordnung auf Vorschlag der Deutschen Rentenversicherung',
        'Ausschließlich das Bundesministerium der Finanzen',
        'Der Bundestag durch Parlamentsbeschluss',
      ],
      correct: [1],
      explanation:
        'Der Beitragssatz zur gesetzlichen Rentenversicherung wird durch Bundesverordnung auf Grundlage der Berechnungen der Deutschen Rentenversicherung festgesetzt.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Was ist ein Wegeunfall im Sinne der gesetzlichen Unfallversicherung?',
      options: [
        'Ein Unfall auf einer Dienstreise im Ausland',
        'Ein Unfall auf dem direkten Weg zwischen Wohnung und Arbeitsstätte',
        'Ein Unfall bei der privaten Freizeitgestaltung nach der Arbeit',
        'Ein Unfall innerhalb des Betriebsgeländes',
      ],
      correct: [1],
      explanation:
        'Als Wegeunfall gilt ein Unfall auf dem unmittelbaren Weg zwischen Wohnung und Arbeitsstätte. Er ist wie ein Arbeitsunfall durch die gesetzliche Unfallversicherung abgesichert.',
      difficulty: 2,
    },
    {
      type: 'mc',
      prompt: 'Welche Aussage zur Finanzierung der sozialen Pflegeversicherung ist richtig?',
      options: [
        'Sie wird ausschließlich vom Arbeitgeber finanziert.',
        'Sie wird paritätisch von Arbeitgebern und Arbeitnehmern finanziert, Kinderlose zahlen einen Zuschlag.',
        'Sie wird vollständig aus Steuermitteln finanziert.',
        'Sie wird ausschließlich vom Arbeitnehmer finanziert.',
      ],
      correct: [1],
      explanation:
        'Die Pflegeversicherung wird paritätisch finanziert. Kinderlose Arbeitnehmer ab 23 Jahren zahlen einen gesetzlichen Beitragszuschlag, da sie das Rentensystem weniger durch Nachwuchs entlasten.',
      difficulty: 3,
    },
    {
      type: 'mc',
      prompt: 'Welche Aufgabe hat die Bundesagentur für Arbeit neben der Zahlung von Arbeitslosengeld?',
      options: [
        'Verwaltung der gesetzlichen Rentenversicherung',
        'Arbeitsvermittlung und Förderung der Berufsausbildung',
        'Festsetzung des Mindestlohns',
        'Überwachung der gesetzlichen Krankenversicherung',
      ],
      correct: [1],
      explanation:
        'Die Bundesagentur für Arbeit ist auch für die Arbeitsvermittlung, Berufsberatung, Förderung der beruflichen Weiterbildung und die Förderung der Berufsausbildung zuständig.',
      difficulty: 2,
    },
    {
      type: 'truefalse',
      prompt: 'Die gesetzliche Unfallversicherung wird zu gleichen Teilen von Arbeitgeber und Arbeitnehmer finanziert.',
      options: ['Richtig', 'Falsch'],
      correct: [1],
      explanation:
        'Falsch. Die gesetzliche Unfallversicherung wird ausschließlich vom Arbeitgeber finanziert. Arbeitnehmer zahlen keine Beiträge zur Unfallversicherung.',
      difficulty: 1,
    },
    {
      type: 'truefalse',
      prompt: 'Die Soziale Pflegeversicherung wurde bereits 1927 eingeführt.',
      options: ['Richtig', 'Falsch'],
      correct: [1],
      explanation:
        'Falsch. Die Soziale Pflegeversicherung wurde 1995 eingeführt. 1927 wurde die Arbeitslosenversicherung in Deutschland eingeführt.',
      difficulty: 1,
    },
    {
      type: 'fill',
      prompt: 'Die fünf Säulen der deutschen Sozialversicherung sind: Krankenversicherung, Rentenversicherung, Arbeitslosenversicherung, Unfallversicherung und ___.',
      options: ['Pflegeversicherung', 'Haftpflichtversicherung', 'Lebensversicherung', 'Berufsunfähigkeitsversicherung'],
      correct: [0],
      explanation:
        'Die fünfte Säule ist die Soziale Pflegeversicherung, eingeführt 1995.',
      difficulty: 1,
    },
  ],
};

export default topic;
