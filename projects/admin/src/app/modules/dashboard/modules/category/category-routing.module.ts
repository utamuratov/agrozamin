import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Project } from 'projects/admin/src/app/core/enums/project.enum';
import { CategoryComponent } from './components/category/category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { FilterListComponent } from './pages/filter-list/filter-list.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent,
    data: {
      bc: 'category',
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'filter' },
      {
        path: 'filter',
        component: FilterListComponent,
      },
      {
        path: Project[Project.uzimizniki],
        component: CategoryListComponent,
        data: {
          bc: 'uzimizniki',
        },
      },
      {
        path: Project[Project.consultant],
        component: CategoryListComponent,
        data: {
          bc: 'consultant',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}
