import { Routes, RouterModule } from '@angular/router';
import { AddAdvertisementComponent } from './add-advertisement.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  {
    path: 'add',
    component: AddAdvertisementComponent,
  },
  { path: 'edit/:id', component: AddAdvertisementComponent },
];

export const AddAdvertisementRoutes = RouterModule.forChild(routes);
