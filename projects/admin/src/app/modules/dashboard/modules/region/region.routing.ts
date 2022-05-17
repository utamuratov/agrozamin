import { Routes, RouterModule } from '@angular/router';
import { AddEditRegionComponent } from './add-edit-region/add-edit-region.component';
import { RegionListComponent } from './region-list/region-list.component';
import { RegionComponent } from './region.component';

const routes: Routes = [
  {
    path: '',
    component: RegionComponent,
    children: [
      { path: '', component: RegionListComponent },
      { path: 'add', component: AddEditRegionComponent },
    ],
  },
];

export const RegionRoutes = RouterModule.forChild(routes);
