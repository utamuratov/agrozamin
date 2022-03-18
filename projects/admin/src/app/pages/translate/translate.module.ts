import { NgModule } from '@angular/core';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { TranslateApiService } from './services/translate-api.service';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FormsModule } from '@angular/forms';
import { AddTranslationComponent } from './components/add-translation/add-translation.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslationComponent } from './translation/translation.component';
import { AdminSharedModule } from '../../shared/admin-shared.module';

@NgModule({
  declarations: [
    TranslateComponent,
    TranslationComponent,
    AddTranslationComponent,
  ],
  imports: [
    TranslateRoutingModule,
    FormsModule,

    /**
     * CUSTOM MODULES
     */
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzTypographyModule,
    NzToolTipModule,
  ],
  providers: [TranslateApiService],
})
export class TranslateModule {}
