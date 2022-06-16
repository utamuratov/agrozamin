import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category.component';
import { AllCategoriesComponent } from './components/AllCategories/AllCategories.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { CategoryProductPageComponent } from './pages/category-product-page/category-product-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      { path: '', component: AllCategoriesComponent },
      {
        path: ':categoryId',
        component: CategoryPageComponent,
      },
      {
        path: ':categoryId/:productId',
        component: CategoryProductPageComponent,
      },
    ],
  },
];

export const CategoryRoutes = RouterModule.forChild(routes);
