import { Routes, RouterModule } from '@angular/router';
import { SpamCategoryListComponent } from './spam-category-list/spam-category-list.component';

const routes: Routes = [
  {
    path: '',
    component: SpamCategoryListComponent,
  },
];

export const SpamCategoryRoutes = RouterModule.forChild(routes);
