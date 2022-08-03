import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { LanguageHelper } from 'ngx-az-core';

@Component({
  selector: 'az-language-mobile',
  templateUrl: './language-mobile.component.html',
  styleUrls: ['./language-mobile.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageMobileComponent extends LanguageHelper {
  /**
   *
   */
  @Output()
  closeLanguage = new EventEmitter<boolean>();

  /**
   *
   * @param router
   * @param translate
   * @param $store
   */
  constructor(
    protected override router: Router,
    protected override translate: TranslateService,
    protected override $store: Store
  ) {
    super(router, translate, $store);
  }
}
