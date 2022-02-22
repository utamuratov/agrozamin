import { NgModule } from '@angular/core';
import { SignInRoutingModule } from './sign-in-routing.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InputPhoneEmailModule } from '../../shared/input-phone-email/input-phone-email.module';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { SignInPage } from './components/sign-in-page/sign-in.page';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';

@NgModule({
  declarations: [SignInPage],
  imports: [
    SignInRoutingModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    InputPhoneEmailModule,
    NzFormsSharedModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzDividerModule,
    NzTypographyModule
  ],
})
export class SignInModule {}
