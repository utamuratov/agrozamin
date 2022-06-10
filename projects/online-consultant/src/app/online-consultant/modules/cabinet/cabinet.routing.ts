import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';

const routes: Routes = [
  { path: '', component: CabinetComponent },
];

export const CabinetRoutes = RouterModule.forChild(routes);
