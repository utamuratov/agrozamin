import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { prefixPath } from './core/utilits/agro-pay-consultant.utilit';

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
          import('./agro-pay/agro-pay.module').then((m) => m.AgroPayModule),
        canActivate: [LanguageGuard],
      },
    ],
  },
  // THIS ROUTE IS NEEDED FOR DEV MODE
  // {
  //   path: 'sign-in',
  //   loadChildren: () => import('ngx-az-core').then((m) => m.SignInHelperModule),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
