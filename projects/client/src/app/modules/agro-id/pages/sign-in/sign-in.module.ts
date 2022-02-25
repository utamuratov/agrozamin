import { NgModule } from '@angular/core';
import { SignInRoutingModule } from './sign-in-routing.module';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { SignInPage } from './components/sign-in-page/sign-in.page';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { BackAndLanguageModule } from '../../shared/back-and-language/back-and-language.module';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { PasswordShowHideModule } from '../../shared/password-eye/password-show-hide.module';

@NgModule({
  declarations: [SignInPage],
  imports: [
    SignInRoutingModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,
    BackAndLanguageModule,
    PasswordShowHideModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzDividerModule,
    NzTypographyModule,
    NzSpaceModule,
    NzIconModule,
  ],
})
export class SignInModule {}
