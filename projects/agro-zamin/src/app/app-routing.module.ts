import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { prefixPath } from '../core/utilits/agro-zamin.utilit';
import { RootLayoutComponent } from './agro-zamin/components/root-layout/root-layout.component';

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
          import('./agro-zamin/agro-zamin.module').then(
            (m) => m.AgroZaminModule
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
