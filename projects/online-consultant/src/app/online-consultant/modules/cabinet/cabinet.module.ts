import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { ChatComponent } from './components/chat/chat.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ClientPaymentComponent } from './components/client/client-payment/client-payment.component';
import { ClientRequestComponent } from './components/client/client-request/client-request.component';
import { MyRequestComponent } from './components/consultant/my-request/my-request.component';
import { PaymentComponent } from './components/consultant/payment/payment.component';
import { ResumeComponent } from './components/consultant/resume/resume.component';
import { TimetableComponent } from './components/consultant/timetable/timetable.component';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NgChartsModule } from 'ng2-charts';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';


@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes,
    NzGridModule,
    FormsModule,
    ReactiveFormsModule,
    NzMenuModule,
    NzCollapseModule,
    NzTabsModule,
    NzIconModule,
    NzSelectModule,
    NzTableModule,
    NzCommentModule,
    NzAvatarModule,
    NzButtonModule,
    NgChartsModule,
    NzTimePickerModule,
    NzSwitchModule,
    NzInputModule,
    NzTypographyModule,
    NzBadgeModule,
    NzDrawerModule
  ],
  declarations: [
    CabinetComponent,
    ChatComponent,
    SettingsComponent,
    ClientPaymentComponent,
    ClientRequestComponent,
    MyRequestComponent,
    PaymentComponent,
    ResumeComponent,
    TimetableComponent,
  ],
})
export class CabinetModule {}
