import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzResultModule } from 'ng-zorro-antd/result';
import { SignUpConfirmationModule } from './components/sign-up-confirmation/sign-up-confirmation.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { SignUpPage } from './components/sign-up-page/sign-up.page';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';
import { BackAndLanguageModule } from '../../shared/back-and-language/back-and-language.module';
import { SignUpSetPasswordComponent } from './components/sign-up-set-password/sign-up-set-password.component';
import { NgxMaskModule } from 'ngx-mask';
import { PasswordShowHideModule } from '../../shared/password-eye/password-show-hide.module';
import { ConfirmationModule } from '../../shared/confirmation/confirmation.module';

@NgModule({
  declarations: [
    SignUpPage,
    SignUpComponent,
    SignUpSuccessComponent,
    SignUpSetPasswordComponent,
  ],
  imports: [
    SignUpRoutingModule,
    NgxMaskModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    // SignUpConfirmationModule,
    ConfirmationModule,
    BackAndLanguageModule,
    PasswordShowHideModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzDividerModule,
    NzStepsModule,
    NzResultModule,
    NzCheckboxModule,
    NzTypographyModule,
  ],
})
export class SignUpModule {}
