import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PolarExpress';
  footer: string[] = [];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    for (let i = 0; i < 12; i++) {
      this.footer.push('Test');
    }
  }
  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
