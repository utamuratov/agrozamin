import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Constants, LanguageUtilit } from 'ngx-az-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  constructor(private $translate: TranslateService) {
    this.$translate.setDefaultLang(Constants.DEFAULT_LANGUAGE_CODE);
    this.$translate.use(LanguageUtilit.currentLanguage);
  }
}
