import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { LanguageService } from '../shared/language/language.service';
import { Constants } from '../config/constants';
import { LanguageUtilit } from '../utilits/language.utilit';

@Injectable({
  providedIn: 'root',
})
export class LanguageGuard implements CanActivate {
  constructor(
    private router: Router,
    private $language: LanguageService,
    private $translate: TranslateService
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!LanguageUtilit.currentLanguage || !LanguageUtilit.defaultLanguage) {
      return this.$language.getDefaultLanguageCode().pipe(
        map((result) => {
          if (result.success) {
            const defaultLanguageCode = this.getDefaultLanguage(
              result.data.language
            );
            this.setLanguage();
            this.router.navigate([
              Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
              defaultLanguageCode,
            ]);
          } else {
            if (result.error[0].field === Constants.SERVER_ERROR) {
              this.router.navigate(['internal-server-error']);
            }
          }
          return false;
        })
      );
    }
    this.setLanguage();
    return true;
  }

  /**
   *
   * Sets default and current language for NGX TRANSLATE
   */
  private setLanguage() {
    this.$translate.use(LanguageUtilit.currentLanguage);
    this.$translate.setDefaultLang(LanguageUtilit.defaultLanguage);
  }

  /**
   *
   * @param defaultLanguageCode
   * @returns
   */
  private getDefaultLanguage(defaultLanguageCode: string) {
    if (!defaultLanguageCode) {
      defaultLanguageCode = Constants.DEFAULT_LANGUAGE_CODE;
    }

    if (!LanguageUtilit.defaultLanguage) {
      LanguageUtilit.defaultLanguage = defaultLanguageCode;
    }

    if (!LanguageUtilit.currentLanguage) {
      LanguageUtilit.currentLanguage = defaultLanguageCode;
    }
    return defaultLanguageCode;
  }
}
