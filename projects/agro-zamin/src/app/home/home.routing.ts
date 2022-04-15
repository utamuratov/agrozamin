import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent
   },
   {path: 'category', loadChildren: () => import('./category/category.module').then(m => m.CategoryModule)},
   {path: 'catalog-members', loadChildren: () => import('./catalog-members/catalog-members.module').then(m => m.CatalogMembersModule)},
];

export const HomeRoutes = RouterModule.forChild(routes);
