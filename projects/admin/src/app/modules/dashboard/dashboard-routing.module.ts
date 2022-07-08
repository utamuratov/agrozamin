import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConstants } from '../../core/admin-constants';
import { DashboardComponent } from './dashboard.component';

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
        loadChildren: () =>
          import('./modules/category/category.module').then(
            (m) => m.CategoryModule
          ),
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
      {
        path: 'region',
        loadChildren: () =>
          import('./modules/region/region.module').then((m) => m.RegionModule),
      },
      {
        path: 'district',
        loadChildren: () =>
          import('./modules/district/district.module').then(
            (m) => m.DistrictModule
          ),
      },
      {
        path: 'advertisement-type',
        loadChildren: () =>
          import('./modules/advertisement-type/advertisement-type.module').then(
            (m) => m.AdvertisementTypeModule
          ),
      },
      {
        path: 'advertisement',
        loadChildren: () =>
          import('./modules/advertisement/advertisement.module').then(
            (m) => m.AdvertisementModule
          ),
      },
      {
        path: 'reject-reason',
        loadChildren: () =>
          import('./modules/reject-reason/reject-reason.module').then(
            (m) => m.RejectReasonModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
