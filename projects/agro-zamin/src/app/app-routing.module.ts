import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
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
            path: Constants.AGRO_ZAMIN_ROUTE_PATH,
            loadChildren: () =>
              import('./home/home.module').then((m) => m.HomeModule),
          },
          {
            path: '',
            redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH,
            pathMatch: 'full',
          },
          {
            path: 'about',
            loadChildren: () =>
              import('./about/about.module').then((m) => m.AboutModule),
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
