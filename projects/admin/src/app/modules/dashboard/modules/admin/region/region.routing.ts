import { Routes, RouterModule } from '@angular/router';
import { RegionListComponent } from './region-list/region-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegionListComponent,
    data: {
      bc: 'regions',
    },
  },
];

export const RegionRoutes = RouterModule.forChild(routes);
