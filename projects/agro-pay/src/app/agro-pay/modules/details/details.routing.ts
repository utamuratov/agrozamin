import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';

const routes: Routes = [
  { path: '', component: DetailsComponent },
];

export const DetailsRoutes = RouterModule.forChild(routes);
