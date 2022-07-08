import { Routes, RouterModule } from '@angular/router';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionComponent } from './region.component';

const routes: Routes = [
  {
    path: '',
    component: RegionComponent,
    children: [{ path: '', component: RegionListComponent }],
  },
];

export const RegionRoutes = RouterModule.forChild(routes);
