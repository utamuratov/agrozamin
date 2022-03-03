import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { Constants } from '../../config/constants';
import { Language } from '../../models/language.interface';
import { LanguageUtilit } from '../../utilits/language.utilit';
import { LanguageService } from './language.service';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
})
export class LanguageComponent implements OnInit {
  /**
   *
   */
  language$!: Observable<Language[]>;

  /**
   *
   */
  currentLanguageCode!: string;

  /**
   *
   */
  constructor(
    private router: Router,
    private translate: TranslateService,
    private $language: LanguageService
  ) {
    translate.setDefaultLang(Constants.DEFAULT_LANGUAGE_CODE);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getLanguages();
    this.currentLanguageCode = LanguageUtilit.currentLanguage;
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  getLanguages() {
    this.language$ = this.$language.getLanguages().pipe(
      map((result) => {
        if (result.success) {
          return result.data;
        }

        // !REMOVE ALERT and DO ANOTHER JOB
        alert(
          'SERVER ISSUE: The Language list has not brought from the server!'
        );
        return [];
      })
    );
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
