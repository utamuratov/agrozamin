import { Routes, RouterModule } from '@angular/router';
import { ConsultantPageComponent } from './consultant-page.component';

const routes: Routes = [
  { path: '', component: ConsultantPageComponent },
];

export const ConsultantPageRoutes = RouterModule.forChild(routes);
