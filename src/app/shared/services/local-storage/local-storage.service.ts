import { Injectable, inject } from '@angular/core';
import { WINDOW } from '@shared/injection-tokens';

export enum LocalStorageKey {
  Token = 'token',
  Conta = 'last-account'
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private prefix = 'reports@';

  private window = inject(WINDOW);

  get<T = string>(key: LocalStorageKey): T | null {
    const value = this.window.localStorage.getItem(this.prefix+key);

    if (value === null) { return null; }

    return JSON.parse(value);
  }

  set<T = any>(key: LocalStorageKey, value: T): void {
    this.window.localStorage.setItem(this.prefix+key, JSON.stringify(value ?? null));
  }

  remove(key: LocalStorageKey): void {
    this.window.localStorage.removeItem(this.prefix+key);
  }

  clear() {
    const keys = Object.values(LocalStorageKey) as string[];
    keys.forEach((key) => this.window.localStorage.removeItem(this.prefix+key));
  }
}
