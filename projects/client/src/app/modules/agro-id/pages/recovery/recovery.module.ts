import { NgModule } from '@angular/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { InputPhoneEmailModule } from '../../shared/input-phone-email/input-phone-email.module';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/nz-forms-shared.module';
import { ReactiveFormsSharedModule } from 'projects/client/src/app/shared/forms-shared/reactive-forms-shared.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { BackAndLanguageModule } from '../../shared/back-and-language/back-and-language.module';
import { RecoverByContactsComponent } from './recover-by-contacts/recover-by-contacts/recover-by-contacts.component';
import { RecoverLoginOptionsComponent } from './recover-by-login/recover-login-options/recover-login-options.component';
import { RecoverLoginComponent } from './recover-by-login/recover-login/recover-login.component';
import { RecoverByLoginComponent } from './recover-by-login/recover-by-login/recover-by-login.component';
import { RecoverContactsComponent } from './recover-by-contacts/recover-contacts/recover-contacts.component';
import { RecoverTypesComponent } from './components/recover-types/recover-types.component';
import { ConfirmationModule } from '../../shared/confirmation/confirmation.module';
import { RecoveryRoutingModule } from './recovery-routing.module';
import { RecoveryPage } from './components/recover-page/recovery.page';

@NgModule({
  declarations: [
    RecoveryPage,
    CreateNewPasswordComponent,
    RecoverContactsComponent,
    RecoverByContactsComponent,
    RecoverTypesComponent,
    RecoverByLoginComponent,
    RecoverLoginComponent,
    RecoverLoginOptionsComponent,
  ],
  imports: [
    RecoveryRoutingModule,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    ConfirmationModule,
    InputPhoneEmailModule,
    NzFormsSharedModule,
    NzIconModule,
    NzTypographyModule,
    BackAndLanguageModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzDividerModule,
    NzStepsModule,
  ],
})
export class RecoveryModule {}
