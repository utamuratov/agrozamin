import { Routes, RouterModule } from '@angular/router';
import { PartnershipComponent } from './partnership.component';

const routes: Routes = [
  { path: '', component: PartnershipComponent },
];

export const PartnershipRoutes = RouterModule.forChild(routes);
