import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from '../../core/config/constants';
import { LanguageUtilit } from '../../core/utilits/language.utilit';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  languages = Constants.LANGUAGES;

  /**
   *
   */
  currentLanguageCode!: string;

  /**
   *
   */
  constructor(
    private router: Router,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE_CODE);
   }

   /**
    *
    */
  ngOnInit() {
    this.currentLanguageCode = LanguageUtilit.currentLanguage;
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  onChangeLanguage() {
    const previousLanguageCode = LanguageUtilit.currentLanguage;
    LanguageUtilit.currentLanguage = this.currentLanguageCode;
    this.router.navigateByUrl(this.router.url.replace(previousLanguageCode, this.currentLanguageCode));
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
   private setCurrentLanguage(curentLanguage: string) {
    this.translate.use(curentLanguage);
  }
}
