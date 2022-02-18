import { SignUpPage } from './pages/sign-up/sign-up.page';
import { NgModule } from '@angular/core';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Sign Components */
import { SignUpConfirmationComponent } from './components/sign-up-confirmation/sign-up-confirmation.component';
import { SignUpSuccessComponent } from './components/sign-up-success/sign-up-success.component';
/* NG-ZORRO-MODULES */
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SharedModule } from '../../shared/shared.module';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RecoverLoginComponent } from './components/recover-login/recover-login.component';
import { CreateNewPasswordComponent } from './components/create-new-password/create-new-password.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgxMaskModule } from 'ngx-mask';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { InputPhoneEmailComponent } from './components/input-phone-email/input-phone-email.component';

@NgModule({
  imports: [
    AgroIdRoutes,
    ReactiveFormsModule, 
    FormsModule, 
    NgxMaskModule,
    
    SharedModule,
    
    /* NG-ZORRO-MODULES */
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzIconModule,
    NzResultModule,
    NzStepsModule,
    NzCarouselModule,
    NzLayoutModule,
    NzDividerModule,
    NzAutocompleteModule,
    NzTypographyModule,
    NzSpinModule
  ],
  declarations: [
    AgroIdComponent,
    SignUpPage,
    SignInPage,
    SignUpComponent,
    SignUpConfirmationComponent,
    SignUpSuccessComponent,
    ForgotPasswordComponent,
    RecoverLoginComponent,
    CreateNewPasswordComponent,
    InputPhoneEmailComponent
  ],
})
export class AgroIdModule {}
