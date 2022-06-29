import { Routes, RouterModule } from '@angular/router';
import { AgroPayComponent } from './agro-pay.component';

const routes: Routes = [
  {
    path: '',
    component: AgroPayComponent,
  },
];

export const AgroPayRoutes = RouterModule.forChild(routes);
