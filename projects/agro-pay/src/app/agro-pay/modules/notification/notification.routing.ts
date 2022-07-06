import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification.component';

const routes: Routes = [
  { path: '', component: NotificationComponent },
];

export const NotificationRoutes = RouterModule.forChild(routes);
