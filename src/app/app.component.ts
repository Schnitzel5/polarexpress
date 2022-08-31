import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PolarExpress';
  footer: string[] = [];
  constructor(private translate: TranslateService, private themes: ThemeService) {
    this.translate.setDefaultLang('en');
    for (let i = 0; i < 12; i++) {
      this.footer.push('Test');
    }
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
  switchTheme(theme: string) {
    this.themes.switchTheme(theme);
  }
}
