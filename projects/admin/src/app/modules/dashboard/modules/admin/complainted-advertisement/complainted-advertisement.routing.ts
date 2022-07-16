import { Routes, RouterModule } from '@angular/router';
import { ComplaintedAdvertisementListComponent } from './complainted-advertisement-list/complainted-advertisement-list.component';

const routes: Routes = [
  {
    path: '',
    component: ComplaintedAdvertisementListComponent,
  },
];

export const ComplaintedAdvertisementRoutes = RouterModule.forChild(routes);
