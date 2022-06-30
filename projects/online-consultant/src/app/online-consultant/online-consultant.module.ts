import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './online-consultant.component';
import { OnlineConsultantRoutingModule } from './online-consultant.routing';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzNotificationModule } from 'ng-zorro-antd/notification';


@NgModule({
  imports: [
    CommonModule,
    OnlineConsultantRoutingModule,
    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzDrawerModule,
    NzDividerModule,
    NzTypographyModule,
    NzPopoverModule,
    NzTabsModule,
    NzNotificationModule
  ],
  declarations: [OnlineConsultantComponent, HeaderComponent, FooterComponent],
})
export class OnlineConsultantModule {}
