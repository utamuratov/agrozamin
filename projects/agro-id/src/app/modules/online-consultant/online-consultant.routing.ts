import { OnlineConsultantComponent } from './components/online-consultant/online-consultant.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: OnlineConsultantComponent,
  children: []
}];

export const OnlineConsultantRoutes = RouterModule.forChild(routes);
