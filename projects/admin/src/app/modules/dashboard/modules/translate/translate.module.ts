import { NgModule } from '@angular/core';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { TranslateApiService } from './services/translate-api.service';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { FormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TranslationComponent } from './components/translation/translation.component';
import { AddEditTranslationComponent } from './components/add-edit-translation/add-edit-translation.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';

@NgModule({
  declarations: [
    TranslateComponent,
    TranslationComponent,
    AddEditTranslationComponent,
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