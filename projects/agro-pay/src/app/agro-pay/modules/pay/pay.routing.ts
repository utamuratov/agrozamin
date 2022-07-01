import { Routes, RouterModule } from '@angular/router';
import { PayComponent } from './pay.component';

const routes: Routes = [
  { path: '', component: PayComponent },
];

export const PayRoutes = RouterModule.forChild(routes);
