import { NgModule } from '@angular/core';
import { ConfirmationModalComponent } from './confirmation-modal.component';
import { ConfirmationFormModule } from '../../../../../shared/confirmation-form/confirmation-form.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { SharedModule } from 'ngx-az-core';

@NgModule({
  imports: [
    SharedModule,
    ConfirmationFormModule,

    NzModalModule,
    NzButtonModule,
    NzTypographyModule,
    NzSpinModule,
  ],
  declarations: [ConfirmationModalComponent],
  exports: [ConfirmationModalComponent],
})
export class ConfirmationModalModule {}
