import { NgModule } from '@angular/core';
import { ConfirmationComponent } from './confirmation.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { ConfirmationFormModule } from '../confirmation-form/confirmation-form.module';

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    ConfirmationFormModule,

    /**
     * NG ZORRO MODULES
     */
    NzDividerModule,
    NzSpinModule,
    NzTypographyModule,
    NzIconModule,
    NzButtonModule,
  ],
  exports: [ConfirmationComponent],
})
export class ConfirmationModule {}
