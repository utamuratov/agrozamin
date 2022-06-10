import { Routes, RouterModule } from '@angular/router';
import { FindConsultantComponent } from './find-consultant.component';

const routes: Routes = [
  { path: '', component: FindConsultantComponent },
];

export const FindConsultantRoutes = RouterModule.forChild(routes);
