import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Language } from '../models/language.interface';
import { CurrentLanguage } from '../shared/store/language/language.action';
import { LanguageState } from '../shared/store/language/language.state';

export class LanguageHelper {
  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  currentLanguageCode!: string;

  /**
   *
   */
  constructor(
    protected router: Router,
    protected translate: TranslateService,
    protected $store: Store
  ) {
    this.currentLanguageCode = this.$store.selectSnapshot(
      LanguageState.currentLanguage
    );
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  onChangeLanguage(selectedLanguageCode: string) {
    const previousLanguageCode = this.currentLanguageCode;
    this.currentLanguageCode = selectedLanguageCode;
    this.$store.dispatch(new CurrentLanguage(this.currentLanguageCode));
    this.setCurrentLanguage(this.currentLanguageCode);
    this.router.navigateByUrl(
      this.router.url.replace(previousLanguageCode, this.currentLanguageCode)
    );
  }

  /**
   *
   */
  private setCurrentLanguage(curentLanguage: string) {
    this.translate.use(curentLanguage);
  }
}
