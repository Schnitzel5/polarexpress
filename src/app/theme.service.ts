import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private static themes: string[] = ['basil', 'shrine'];
  constructor() { }
  switchTheme(theme: string): void {
    if (!ThemeService.themes.includes(theme.toLowerCase())) {
      return;
    }
    const root = document.getElementById('root');
    if (root == undefined) {
      return;
    }
    root.className = theme;
  }
}
