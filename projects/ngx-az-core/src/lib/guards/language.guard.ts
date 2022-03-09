import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { map, Observable } from 'rxjs';
import { LanguageService } from '../shared/language/language.service';
import { Constants } from '../config/constants';
import { Store } from '@ngxs/store';
import { LanguageState } from '../../lib/shared/store/language/language.state';
import {
  DefaultLanguage,
  CurrentLanguage,
} from '../../lib/shared/store/language/language.action';
import { BaseResponse } from '../models/base-response.interface';

@Injectable({
  providedIn: 'root',
})
export class LanguageGuard implements CanActivate {
  /**
   *
   */
  get language() {
    return this.$store.selectSnapshot(LanguageState.get);
  }

  /**
   *
   * @param router
   * @param $language
   * @param $translate
   * @param $store
   */
  constructor(
    private router: Router,
    private $language: LanguageService,
    private $translate: TranslateService,
    private $store: Store
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.language.defautLanguage || !this.language.currentLanguage) {
      return this.$language.getDefaultLanguageCode().pipe(
        map((result) => {
          if (result.success) {
            const defaultLanguageCode = this.getDefaultLanguage(result);
            this.setDefaultLanguage(defaultLanguageCode);
            this.setCurrentLanguage(defaultLanguageCode);
            this.setLanguageToNgxTranslate(
              defaultLanguageCode,
              defaultLanguageCode
            );
            this.router.navigate([
              Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
              defaultLanguageCode,
            ]);
          } else {
            if (result.error[0]?.field === Constants.SERVER_ERROR) {
              this.router.navigate(['internal-server-error']);
            }
          }
          return false;
        })
      );
    }
    this.setLanguageToNgxTranslate(
      this.language.defautLanguage,
      this.language.currentLanguage
    );
    return true;
  }

  /**
   *
   * @param defaultLanguageCode
   */
  private setCurrentLanguage(defaultLanguageCode: string) {
    if (!this.language.currentLanguage) {
      this.$store.dispatch(new CurrentLanguage(defaultLanguageCode));
    }
  }

  /**
   *
   * @param defaultLanguageCode
   */
  private setDefaultLanguage(defaultLanguageCode: string) {
    if (!this.language.defautLanguage) {
      this.$store.dispatch(new DefaultLanguage(defaultLanguageCode));
    }
  }

  /**
   *
   * @param result
   * @returns
   */
  private getDefaultLanguage(result: BaseResponse<{ language: string }>) {
    let defaultLanguageCode = result.data.language;
    if (!defaultLanguageCode) {
      defaultLanguageCode = Constants.DEFAULT_LANGUAGE_CODE;
    }
    return defaultLanguageCode;
  }

  /**
   *
   * Sets default and current language for NGX TRANSLATE
   */
  private setLanguageToNgxTranslate(
    defaultLanguage: string,
    currentLanguage: string
  ) {
    this.$translate.setDefaultLang(defaultLanguage);
    this.$translate.use(currentLanguage);
  }
}
