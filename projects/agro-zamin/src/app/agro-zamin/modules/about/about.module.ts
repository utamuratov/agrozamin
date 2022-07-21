import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutRoutes } from './about.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { MissionComponent } from './components/mission/mission.component';
import { InviteToPartnershipComponent } from './components/invite-to-partnership/invite-to-partnership.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { TargetsComponent } from './components/targets/targets.component';
import { ServicesComponent } from './components/services/services.component';

@NgModule({
  imports: [
    CommonModule,
    AboutRoutes,
    NzGridModule,
    NzTypographyModule,
    NzButtonModule,
  ],
  declarations: [
    AboutComponent,
    BannerComponent,
    MissionComponent,
    InviteToPartnershipComponent,
    TargetsComponent,
    ServicesComponent
  ],
})
export class AboutModule {}
