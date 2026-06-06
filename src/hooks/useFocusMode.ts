import { useSyncExternalStore } from 'react';

/**
 * Fokus-Modus: blendet die Tab-Navigation aus (z. B. während einer laufenden
 * Prüfungssimulation), damit auf Mobile/Tablet kein versehentlicher Tab-Tipp
 * den Prüfungsfortschritt verwirft.
 */
let focus = false;
const listeners = new Set<() => void>();

export function setFocusMode(value: boolean) {
  if (focus !== value) {
    focus = value;
    for (const l of listeners) l();
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return focus;
}

export function useFocusMode(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
