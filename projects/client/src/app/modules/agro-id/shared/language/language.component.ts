import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { LanguageUtilit } from 'projects/client/src/app/core/utilits/language.utilit';
import { Language } from 'projects/client/src/app/shared/models/language.interface';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
})
export class LanguageComponent implements OnInit {
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
  constructor(private router: Router, private translate: TranslateService) {
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE_CODE);
  }

  ngOnInit(): void {
    this.currentLanguageCode = LanguageUtilit.currentLanguage;
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  onChangeLanguage(language: Language) {
    const previousLanguageCode = this.currentLanguageCode;
    this.currentLanguageCode = language.code;
    LanguageUtilit.currentLanguage = this.currentLanguageCode;
    this.router.navigateByUrl(
      this.router.url.replace(previousLanguageCode, this.currentLanguageCode)
    );
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  private setCurrentLanguage(curentLanguage: string) {
    this.translate.use(curentLanguage);
  }
}
