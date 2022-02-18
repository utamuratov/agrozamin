import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpConfirmationComponent } from './sign-up-confirmation.component';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';

@NgModule({
  imports: [
    CommonModule,
    
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    NzDividerModule,
    NzSpinModule,
    NzTypographyModule,
    NzIconModule
  ],
  declarations: [SignUpConfirmationComponent],
  exports: [SignUpConfirmationComponent],
})
export class SignUpConfirmationModule {}
