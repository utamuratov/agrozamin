import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { prefixPath } from './core/utilits/advertisement.utilits';
import { RootLayoutComponent } from './ozimizniki/components/root-layout/root-layout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: prefixPath,
  },
  {
    path: prefixPath,
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
          import('./ozimizniki/ozimizniki.module').then(
            (m) => m.OzimiznikiModule
          ),
        canActivate: [LanguageGuard],
      },
    ],
  },
  // THIS ROUTE IS NEEDED FOR DEV MODE
  {
    path: 'sign-in',
    loadChildren: () => import('ngx-az-core').then((m) => m.SignInHelperModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
