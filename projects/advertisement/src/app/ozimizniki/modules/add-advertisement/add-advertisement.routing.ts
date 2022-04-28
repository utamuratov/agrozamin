import { Routes, RouterModule } from '@angular/router';
import { AddAdvertisementComponent } from './add-advertisement.component';

const routes: Routes = [
  {path: '', component:  AddAdvertisementComponent },
];

export const AddAdvertisementRoutes = RouterModule.forChild(routes);
