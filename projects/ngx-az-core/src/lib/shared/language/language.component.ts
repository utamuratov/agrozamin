import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Language } from '../../models/language.interface';
import { CurrentLanguage } from '../store/language/language.action';
import { LanguageState } from '../store/language/language.state';

@Component({
  selector: 'language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
})
export class LanguageComponent implements OnInit {
  /**
   *
   */
  language$: Observable<Language[]> = this.$store.select(
    LanguageState.languages
  );

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
    private $store: Store
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.currentLanguageCode = this.$store.selectSnapshot(
      LanguageState.currentLanguage
    );
    this.setCurrentLanguage(this.currentLanguageCode);
  }

  /**
   *
   */
  onChangeLanguage(language: Language) {
    const previousLanguageCode = this.currentLanguageCode;
    this.currentLanguageCode = language.code;
    this.$store.dispatch(new CurrentLanguage(this.currentLanguageCode));
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
