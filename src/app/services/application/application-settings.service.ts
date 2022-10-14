import {Injectable} from '@angular/core';
import {BehaviorSubject, Subscription} from "rxjs";
import {ThemeType} from "./models/theme-type.enum";

@Injectable({
  providedIn: 'root'
})
export class ApplicationSettingsService {

  private themeSubject = new BehaviorSubject<ThemeType>(ThemeType.LIGHT);

  constructor() {
    this.subscribeToSettingsChanges();
  }

  private subscribeToSettingsChanges() {
    this.currentTheme;
    window.addEventListener('storage', (event: StorageEvent) => {
      if (event.key === 'theme') {
        this.setTheme();
      }
    })
  }

  private setTheme() {
    const themeString = localStorage.getItem('theme');
    // @ts-ignore
    const theme = themeString ? ThemeType[themeString] : ThemeType.LIGHT;

    if (!this.themeSubject || this.themeSubject !== theme) {
      this.themeSubject.next(theme);
    }
  }

  public subscribeToTheme(next: (themeType: ThemeType) => void): Subscription {
    return this.themeSubject.subscribe(next);
  }

  public get currentTheme(): ThemeType {
    let themeString = localStorage.getItem('theme');
    // @ts-ignore
    const theme = themeString ? ThemeType[localStorage.getItem('theme')] : ThemeType.LIGHT;

    if (!this.themeSubject.value || this.themeSubject.value !== theme) {
      this.themeSubject.next(theme);
    }

    if (!themeString) {
      localStorage.setItem('theme', theme);
    }

    if (!this.themeSubject || this.themeSubject !== theme) {
      this.themeSubject.next(theme);
    }

    return theme;
  }

  public set currentTheme(theme: ThemeType) {
    if (this.themeSubject.value !== theme) {
      this.themeSubject.next(theme);
    }
    localStorage.setItem('theme', theme);
  }
}
