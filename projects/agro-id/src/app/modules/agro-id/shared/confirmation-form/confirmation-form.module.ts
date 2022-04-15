import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationFormComponent } from './confirmation-form.component';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { EmailAsteriskPipe } from './email-asterisk.pipe';
import { PhoneAsteriskPipe } from './phone-asterisk.pipe';

@NgModule({
  imports: [
    CommonModule,

    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    NzSpinModule,
  ],
  declarations: [
    ConfirmationFormComponent,
    EmailAsteriskPipe,
    PhoneAsteriskPipe,
  ],
  exports: [ConfirmationFormComponent, EmailAsteriskPipe, PhoneAsteriskPipe],
})
export class ConfirmationFormModule {}
