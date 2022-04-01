import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConstants } from '../../core/admin-constants';
import { DashboardComponent } from './dashboard.component';
import { CategoryComponent } from './modules/category/category.component';

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
        loadChildren: () =>
          import('./modules/user/user.module').then((m) => m.UserModule),
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          bc: 'category',
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
        path: AdminConstants.ROUTER_ADMIN,
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
