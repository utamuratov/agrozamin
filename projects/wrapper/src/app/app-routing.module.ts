import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard, SEOResolver } from 'ngx-az-core';
import { AuthGuard } from 'projects/admin/src/app/core/gurad/auth.guard';
import { AgroIdRoutingSharedModule } from 'projects/agro-id/src/app/app.module';
import { AgroZaminRoutingSharedModule } from '../../../agro-zamin/src/app/app.module';
import { LayoutComponent } from './layout/layout.component';
import { RootLayoutComponent } from './root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
  },
  {
    path: Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
    component: RootLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: Constants.DEFAULT_LANGUAGE_CODE,
        pathMatch: 'full',
      },
      {
        path: ':language',
        component: LayoutComponent,
        canActivate: [LanguageGuard],
        children: [
          {
            path: '',
            redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH,
            pathMatch: 'full',
          },
          {
            path: Constants.AGRO_ZAMIN_ROUTE_PATH,
            loadChildren: () =>
              import('../../../agro-zamin/src/app/app.module').then(
                (m) => m.AgroZaminRoutingSharedModule
              ),
            canActivate: [AuthGuard],
            resolve: [SEOResolver],
            data: {
              meta: {
                title: 'home.title',
                description: 'home.description',
              },
            },
          },
          {
            path: Constants.AGROID_ROUTE_PATH,
            loadChildren: () =>
              import('../../../agro-id/src/app/app.module').then(
                (m) => m.AgroIdRoutingSharedModule
              ),
            canActivate: [LanguageGuard],
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgroZaminRoutingSharedModule.forRoot(),
    AgroIdRoutingSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
