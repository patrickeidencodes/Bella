import TopicPicker from '../components/TopicPicker';

export default function LearnSelect() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Karteikarten lernen</h1>
        <p className="mt-1 text-sm text-slate-500">
          Wähle ein oder mehrere Themen (auch bereichsübergreifend) und starte eine
          gemeinsame Lern-Session. Drehe jede Karte um und schätze dich selbst ein – nicht
          gewusste Karten kommen im selben Durchgang erneut.
        </p>
      </header>
      <TopicPicker basePath="/lernen" countKind="flashcards" />
    </div>
  );
}
