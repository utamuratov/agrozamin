import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './components/main/main.component';
import { AddWidgetComponent } from './components/add-widget/add-widget.component';
import { AgroBankComponent } from './components/agro-bank/agro-bank.component';
import { AgroJobComponent } from './components/agro-job/agro-job.component';
import { BizningZaminComponent } from './components/bizning-zamin/bizning-zamin.component';
import { MyCardsWidgetComponent } from './components/my-cards-widget/my-cards-widget.component';
import { MyCompaniesWidgetComponent } from './components/my-companies-widget/my-companies-widget.component';
import { ProfileWidgetComponent } from './components/profile-widget/profile-widget.component';
import { SettingsWidgetComponent } from './components/settings-widget/settings-widget.component';
import { TeleVeterinariaComponent } from './components/tele-veterinaria/tele-veterinaria.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormsSharedModule, ReactiveFormsSharedModule } from 'ngx-az-core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { LegalPersonModule } from '../legal-person/legal-person.module';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    MainComponent,
    BizningZaminComponent,
    AgroJobComponent,
    AgroBankComponent,
    TeleVeterinariaComponent,
    ProfileWidgetComponent,
    SettingsWidgetComponent,
    MyCardsWidgetComponent,
    MyCompaniesWidgetComponent,
    AddWidgetComponent,
  ],
  imports: [
    MainRoutingModule,

    // TODO: REMOVE AFTER COMPANY MODAL TO BE SHARED
    LegalPersonModule,

    /**
     * CUSTOM SHARED MODULES
     */
    ReactiveFormsSharedModule,
    NzFormsSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzModalModule,
    NzCardModule,
    NzBadgeModule,
    NzDividerModule,
    NzTypographyModule,
    NzCollapseModule,
    NzAvatarModule,
    NzPopoverModule,
    NzIconModule,
  ],
})
export class MainModule {}
