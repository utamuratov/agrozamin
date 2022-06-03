import { Routes, RouterModule } from '@angular/router';
import { AddAdvertisementComponent } from './add-advertisement.component';
import { AdvertisementEditResolver } from './advertisment-edit.resolver';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add' },
  {
    path: 'add',
    component: AddAdvertisementComponent,
  },
  {
    path: 'edit/:id',
    component: AddAdvertisementComponent,
    resolve: { advertisment: AdvertisementEditResolver },
  },
];

export const AddAdvertisementRoutes = RouterModule.forChild(routes);
