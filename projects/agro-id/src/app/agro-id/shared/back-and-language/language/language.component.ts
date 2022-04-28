import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngxs/store';
import { LanguageHelper } from 'projects/ngx-az-core/src/public-api';

@Component({
  selector: 'az-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.less'],
})
export class LanguageComponent extends LanguageHelper {
  constructor(
    protected override router: Router,
    protected override translate: TranslateService,
    protected override $store: Store
  ) {
    super(router, translate, $store);
  }
}
