import { Routes, RouterModule } from '@angular/router';
import { LegalPersonPage } from './components/legal-person/legal-person.page';

const routes: Routes = [
  {
    path: '',
    component: LegalPersonPage,
  },
];

export const LegalPersonRoutes = RouterModule.forChild(routes);
