import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Constants, Language, LanguageUtilit } from 'ngx-az-core';

@Component({
  selector: 'app-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less'],
})
export class CabinetComponent implements OnInit {
  menuFixed = false;
  isCollapsed = false;
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

  handleSidebarStyles($event: any): void {
    this.menuFixed = $event;
  }
}
