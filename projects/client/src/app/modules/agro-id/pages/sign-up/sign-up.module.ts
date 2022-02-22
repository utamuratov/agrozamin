import { NgModule } from '@angular/core';

import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InputPhoneEmailModule } from '../../shared/input-phone-email/input-phone-email.module';
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

@NgModule({
  declarations: [SignUpPage, SignUpComponent, SignUpSuccessComponent],
  imports: [
    SignUpRoutingModule,

    /**
     * CUSTOM MODULES
     */
    SignUpConfirmationModule,
    ReactiveFormsSharedModule,
    InputPhoneEmailModule,
    NzFormsSharedModule,

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
