import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { BiznesCardsComponent } from './pages/biznes-cards/biznes-cards.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { NotificationComponent } from './pages/notification/notification.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'legalperson', component: LegalPersonComponent },
      { path: 'biznescards', component: BiznesCardsComponent },
      { path: 'notification', component: NotificationComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
