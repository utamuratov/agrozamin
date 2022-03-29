import { NgModule } from '@angular/core';
import { CabinetComponent } from './cabinet.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { CabinetRoutes } from './cabinet.routing';
import { UserNameModalComponent } from './pages/personal/components/user-name-modal/user-name-modal.component';
import { BusinessCardModalComponent } from './components/business-card-modal/business-card-modal.component';
/* NG-ZORRO */
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { TriangleModule } from 'projects/client/src/app/shared/triangle/triangle.module';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { ReactiveFormsSharedModule } from 'ngx-az-core';
import { SettingsComponent } from './pages/settings/settings.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { UserEmailModalComponent } from './pages/personal/components/user-email-modal/user-email-modal.component';
import { UserPhoneModalComponent } from './pages/personal/components/user-phone-modal/user-phone-modal.component';
import { UserLoginModalComponent } from './pages/personal/components/user-login-modal/user-login-modal.component';
import { UserPasswordModalComponent } from './pages/personal/components/user-password-modal/user-password-modal.component';
import { SuccessChangesComponent } from './pages/personal/components/success-changes/success-changes.component';
import { ConfirmModalComponent } from './pages/personal/components/confirm-modal/confirm-modal.component';
import { BizningZaminComponent } from './pages/main/components/bizning-zamin/bizning-zamin.component';
import { AgroJobComponent } from './pages/main/components/agro-job/agro-job.component';
import { AgroBankComponent } from './pages/main/components/agro-bank/agro-bank.component';
import { TeleVeterinariaComponent } from './pages/main/components/tele-veterinaria/tele-veterinaria.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ProfileWidgetComponent } from './pages/main/components/profile-widget/profile-widget.component';
import { SettingsWidgetComponent } from './pages/main/components/settings-widget/settings-widget.component';
import { MyCardsWidgetComponent } from './pages/main/components/my-cards-widget/my-cards-widget.component';
import { MyCompaniesWidgetComponent } from './pages/main/components/my-companies-widget/my-companies-widget.component';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { CompanyModalComponent } from './pages/legal-person/components/company-modal/company-modal.component';
import { AddWidgetComponent } from './pages/main/components/add-widget/add-widget.component';
import { AddAvatarComponent } from './components/add-avatar/add-avatar.component';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [
    CabinetRoutes,

    /**
     * CUSTOM MODULES
     */
    ReactiveFormsSharedModule,
    TriangleModule,

    /**
     * NG-ZORRO-MODULES
     */
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
    NzTypographyModule,
    NzGridModule,
    NzDividerModule,
    NzButtonModule,
    NzAvatarModule,
    NzModalModule,
    NzFormModule,
    NzInputModule,
    NzCardModule,
    NzUploadModule,
    NzBadgeModule,
    NzListModule,
    NzTableModule,
    NzSpaceModule,
    NzAlertModule,
    NzDropDownModule,
    NzTagModule,
    NzDescriptionsModule,
    NzSelectModule,
    NzCheckboxModule,
    NzCollapseModule,
    NzSwitchModule,
    FormsModule,
    NzSliderModule,
    NzPopoverModule,
    NzToolTipModule,
  ],
  declarations: [
    CabinetComponent,
    PersonalComponent,
    LegalPersonComponent,
    UserNameModalComponent,
    BusinessCardModalComponent,
    SocialLinksComponent,
    HeaderComponent,
    MainComponent,
    SettingsComponent,
    UserEmailModalComponent,
    UserPhoneModalComponent,
    UserLoginModalComponent,
    UserPasswordModalComponent,
    SuccessChangesComponent,
    ConfirmModalComponent,
    BizningZaminComponent,
    AgroJobComponent,
    AgroBankComponent,
    TeleVeterinariaComponent,
    ProfileWidgetComponent,
    SettingsWidgetComponent,
    MyCardsWidgetComponent,
    MyCompaniesWidgetComponent,
    CompanyModalComponent,
    AddWidgetComponent,
    AddAvatarComponent,
  ],
})
export class CabinetModule {}
