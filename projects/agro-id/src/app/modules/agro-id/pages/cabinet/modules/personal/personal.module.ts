import { NgModule } from '@angular/core';

import { PersonalRoutingModule } from './personal-routing.module';
import { PersonalComponent } from './components/personal/personal.component';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { SuccessChangesComponent } from './components/success-changes/success-changes.component';
import { UserEmailModalComponent } from './components/user-email-modal/user-email-modal.component';
import { UserLoginModalComponent } from './components/user-login-modal/user-login-modal.component';
import { UserNameModalComponent } from './components/user-name-modal/user-name-modal.component';
import { UserPasswordModalComponent } from './components/user-password-modal/user-password-modal.component';
import { UserPhoneModalComponent } from './components/user-phone-modal/user-phone-modal.component';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonalComponent,
    UserNameModalComponent,
    UserEmailModalComponent,
    UserPhoneModalComponent,
    UserLoginModalComponent,
    UserPasswordModalComponent,
    SuccessChangesComponent,
    ConfirmModalComponent,
    AddAvatarComponent,
  ],
  imports: [
    PersonalRoutingModule,

    FormsModule,

    /**
     * CUSTOM SHARED MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzModalModule,
    NzAvatarModule,
    NzDividerModule,
    NzIconModule,
    NzTypographyModule,
    NzSliderModule,
  ],
})
export class PersonalModule {}
