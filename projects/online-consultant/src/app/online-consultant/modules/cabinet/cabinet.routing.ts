import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { ChatComponent } from './components/chat/chat.component';
import { ClientPaymentComponent } from './components/client/client-payment/client-payment.component';
import { ClientRequestComponent } from './components/client/client-request/client-request.component';
import { MyRequestComponent } from './components/consultant/my-request/my-request.component';
import { PaymentComponent } from './components/consultant/payment/payment.component';
import { ResumeComponent } from './components/consultant/resume/resume.component';
import { TimetableComponent } from './components/consultant/timetable/timetable.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
  { path: '', component: CabinetComponent, children: [
    {path: '', redirectTo: 'client/request', pathMatch: 'full'},
    {path: 'client/request', component: ClientRequestComponent},
    {path: 'client/payment', component: ClientPaymentComponent},
    {path: 'client/chat', component: ChatComponent},
    {path: 'client/settings', component: SettingsComponent},
    {path: 'consultant/request', component: MyRequestComponent},
    {path: 'consultant/payment', component: PaymentComponent},
    {path: 'consultant/resume', component: ResumeComponent},
    {path: 'consultant/timetable', component: TimetableComponent},
    {path: 'consultant/chat', component: ChatComponent},
    {path: 'consultant/settings', component: SettingsComponent},
  ] },
];

export const CabinetRoutes = RouterModule.forChild(routes);
