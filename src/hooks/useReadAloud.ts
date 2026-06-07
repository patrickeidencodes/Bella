import { useSyncExternalStore } from 'react';

/**
 * Globale, persistente Einstellung „automatisch vorlesen" (Lernen & Üben).
 */
const KEY = 'etvi.readAloud.v1';

function load(): boolean {
  try {
    return localStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
}

let enabled = load();
const listeners = new Set<() => void>();

export function setReadAloud(value: boolean): void {
  enabled = value;
  try {
    localStorage.setItem(KEY, value ? '1' : '0');
  } catch {
    /* ignore */
  }
  for (const l of listeners) l();
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return enabled;
}

export function useReadAloud(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}
