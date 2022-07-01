import { Routes, RouterModule } from '@angular/router';
import { TransfersComponent } from './transfers.component';

const routes: Routes = [
  { path: '', component: TransfersComponent },
];

export const TransfersRoutes = RouterModule.forChild(routes);
