import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { LanguageHelper } from 'ngx-az-core';

type template = 'dropdown' | 'button';

@Component({
  selector: 'az-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LanguageComponent extends LanguageHelper {
  /**
   *
   */
  @Input()
  template?: template;

  /**
   *
   */
  @Input()
  title?: string;

  constructor(
    protected override router: Router,
    protected override translate: TranslateService,
    protected override $store: Store
  ) {
    super(router, translate, $store);
  }
}
