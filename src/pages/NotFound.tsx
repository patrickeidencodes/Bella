import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="card flex flex-col items-center gap-4 px-6 py-16 text-center">
      <div className="text-5xl">🤔</div>
      <h1 className="text-xl font-bold text-slate-800">Seite nicht gefunden</h1>
      <p className="text-sm text-slate-500">Diese Seite gibt es nicht (mehr).</p>
      <Link to="/" className="btn-primary">
        Zur Startseite
      </Link>
    </div>
  );
}
