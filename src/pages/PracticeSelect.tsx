import TopicPicker from '../components/TopicPicker';

export default function PracticeSelect() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-2xl font-bold text-slate-900">Kategorie üben</h1>
        <p className="mt-1 text-sm text-slate-500">
          Wähle ein oder mehrere Themen (auch bereichsübergreifend) und beantworte die Fragen.
          Nach jeder Antwort siehst du sofort, ob sie richtig war – inklusive Erklärung.
        </p>
      </header>
      <TopicPicker basePath="/ueben" countKind="questions" />
    </div>
  );
}
