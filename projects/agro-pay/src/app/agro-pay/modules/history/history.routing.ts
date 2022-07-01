import { Routes, RouterModule } from '@angular/router';
import { HistoryComponent } from './history.component';

const routes: Routes = [
  { path: '', component: HistoryComponent },
];

export const HistoryRoutes = RouterModule.forChild(routes);
