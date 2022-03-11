import { NgModule } from '@angular/core';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslateApiService } from './services/translate-api.service';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { FormsModule } from '@angular/forms';
import { AddTranslationComponent } from './components/add-translation/add-translation.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { TransferProjectsComponent } from './components/transfer-projects/transfer-projects.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { TranslationComponent } from './translation/translation.component';
import { AdminSharedModule } from '../../shared/admin-shared/admin-shared.module';

@NgModule({
  declarations: [
    TranslateComponent,
    TranslationComponent,
    AddTranslationComponent,
    TransferProjectsComponent,
  ],
  imports: [
    TranslateRoutingModule,
    FormsModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzIconModule,
    NzTypographyModule,
    NzToolTipModule,
    NzTransferModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
  ],
  providers: [TranslateApiService],
})
export class TranslateModule {}
