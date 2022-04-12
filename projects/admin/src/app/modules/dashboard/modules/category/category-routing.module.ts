import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { FilterListComponent } from './pages/filter-list/filter-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'list' },
      {
        path: 'list',
        component: CategoryListComponent,
        data: {
          bc: 'category',
        },
      },
      {
        path: 'filter',
        component: FilterListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
