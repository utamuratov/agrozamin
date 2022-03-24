import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './modules/category/category.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user',
        component: UserComponent,
        data: {
          bc: 'user',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          bc: 'category',
          meta: {
            title: 'monitorTitle',
            description: 'monitorDescription',
          },
        },
      },
      {
        path: 'translate',
        loadChildren: () =>
          import('./modules/translate/translate.module').then(
            (m) => m.TranslateModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./modules/admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
