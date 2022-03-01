import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { BiznesCardsComponent } from './pages/biznes-cards/biznes-cards.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: PersonalComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'legalperson', component: LegalPersonComponent },
      { path: 'biznescards', component: BiznesCardsComponent },
      { path: 'settings', component: BiznesCardsComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
