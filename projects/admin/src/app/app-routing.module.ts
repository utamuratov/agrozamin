import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
    pathMatch: 'full',
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
        loadChildren: () =>
          import('./modules/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
        canActivate: [LanguageGuard],
      },
      {
        path: ':language/sign-in',
        loadChildren: () =>
          import('./modules/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
        canActivate: [LanguageGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
