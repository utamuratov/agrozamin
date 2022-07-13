import { Routes, RouterModule } from '@angular/router';
import { ComplaintCategoryListComponent } from './complaint-category-list/complaint-category-list.component';
const routes: Routes = [
  {
    path: '',
    component: ComplaintCategoryListComponent,
  },
];

export const ComplaintCategoryRoutes = RouterModule.forChild(routes);
