import { Routes, RouterModule } from '@angular/router';
import { BecomeConsultantComponent } from './become-consultant.component';

const routes: Routes = [
  { path: '', component: BecomeConsultantComponent },
];

export const BecomeConsultantRoutes = RouterModule.forChild(routes);
