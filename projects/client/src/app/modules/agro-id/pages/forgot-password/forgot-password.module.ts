import { NgModule } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InputPhoneEmailModule } from '../../shared/input-phone-email/input-phone-email.module';
import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { SignUpConfirmationModule } from '../sign-up/components/sign-up-confirmation/sign-up-confirmation.module';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { RecoverLoginComponent } from './components/recover-login/recover-login.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { ForgotPasswordPage } from './components/forgot-password-page/forgot-password.page';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { ForgotButtonsComponent } from './components/forgot-buttons/forgot-buttons.component';

@NgModule({
  declarations: [
    ForgotPasswordPage,
    CreateNewPasswordComponent,
    RecoverLoginComponent,
    ForgotButtonsComponent
  ],
  imports: [
    ForgotPasswordRoutingModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    SignUpConfirmationModule,
    InputPhoneEmailModule,
    NzFormsSharedModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzDividerModule,
    NzStepsModule,
  ],
})
export class ForgotPasswordModule {}
