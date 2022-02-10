import { SignUpPage } from './pages/sign-up/sign-up.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroIdComponent } from './components/agro-id/agro-id.component';
import { AgroIdRoutes } from './agro-id.routing';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* Sign Components */
import { SignUpLoginComponent } from './components/sign-up-login/sign-up-login.component';
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

@NgModule({
  imports: [
    AgroIdRoutes,
    ReactiveFormsModule, 
    FormsModule, 
    
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
    NzTypographyModule
  ],
  declarations: [
    AgroIdComponent,
    SignUpPage,
    SignInPage,
    SignUpLoginComponent,
    SignUpConfirmationComponent,
    SignUpSuccessComponent
  ],
})
export class AgroIdModule {}
