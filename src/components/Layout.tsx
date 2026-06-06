import { NavLink, Outlet, Link } from 'react-router-dom';
import { useFocusMode } from '../hooks/useFocusMode';

const navItems = [
  { to: '/', label: 'Start', icon: '🏠', end: true },
  { to: '/lernen', label: 'Lernen', icon: '🗂️' },
  { to: '/ueben', label: 'Üben', icon: '✅' },
  { to: '/pruefung', label: 'Prüfung', icon: '⏱️' },
  { to: '/statistik', label: 'Statistik', icon: '📊' },
];

export default function Layout() {
  const focusMode = useFocusMode();
  return (
    <div className="flex min-h-screen flex-col">
      {/* Kopfzeile: schlank, Safe-Area oben, Navigationslinks erst ab Desktop */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 pt-safe backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-600 text-white">ET</span>
            <span className="hidden sm:inline">Einstellungstest&nbsp;Vorbereitung</span>
            <span className="sm:hidden">Einstellungstest</span>
          </Link>
          <nav aria-label="Hauptnavigation" className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-brand-100 text-brand-800' : 'text-slate-600 hover:bg-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      {/* Inhalt: unten genug Platz lassen für die Tab-Leiste auf Mobile/Tablet */}
      <main
        className={`mx-auto w-full max-w-5xl flex-1 px-4 py-5 sm:py-7 lg:pb-10 ${
          focusMode ? 'pb-8' : 'pb-28'
        }`}
      >
        <Outlet />
      </main>

      <footer className="hidden border-t border-slate-200 bg-white lg:block">
        <div className="mx-auto max-w-5xl px-4 py-4 text-center text-xs text-slate-400">
          Lern-App zur Vorbereitung auf den Einstellungstest Verwaltungsinformatik (Saarland).
          Inhalte ohne Gewähr.
        </div>
      </footer>

      {/* Tab-Leiste unten – Hauptnavigation auf Mobile & Tablet (im Fokus-Modus ausgeblendet) */}
      <nav
        aria-label="Hauptnavigation"
        className={`fixed inset-x-0 bottom-0 z-30 border-t border-slate-200 bg-white/95 pb-safe backdrop-blur lg:hidden ${
          focusMode ? 'hidden' : ''
        }`}
      >
        <div className="mx-auto flex max-w-2xl items-stretch justify-around">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `flex min-h-[58px] flex-1 touch-manipulation flex-col items-center justify-center gap-0.5 py-1.5 text-[11px] font-medium transition-colors ${
                  isActive ? 'text-brand-700' : 'text-slate-500 active:bg-slate-100'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`text-xl leading-none transition-transform ${isActive ? 'scale-110' : ''}`}
                    aria-hidden
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
