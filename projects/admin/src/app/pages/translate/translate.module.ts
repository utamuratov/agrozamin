import { InterfaceComponent } from './interface/interface.component';
import { NgModule } from '@angular/core';
import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { TranslateApiService } from './services/translate-api.service';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { FormsModule } from '@angular/forms';
import { AddTranslationComponent } from './components/add-translation/add-translation.component';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [
    TranslateComponent,
    InterfaceComponent,
    AddTranslationComponent,
  ],
  imports: [
    TranslateRoutingModule,
    FormsModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzTypographyModule,
    NzNotificationModule,
    NzToolTipModule,
    NzTransferModule,
    NzDividerModule,
    NzTableModule,
    NzModalModule,
  ],
  providers: [TranslateApiService],
})
export class TranslateModule {}
