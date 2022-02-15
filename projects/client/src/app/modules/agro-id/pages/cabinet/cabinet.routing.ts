import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { LegalPersonComponent } from './pages/legal-person/legal-person.component';
import { PersonalComponent } from './pages/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      { path: '', redirectTo: 'personal', pathMatch: 'full' },
      { path: 'personal', component: PersonalComponent },
      { path: 'legalperson', component: LegalPersonComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
