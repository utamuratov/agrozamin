import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { prefixPath } from '../core/utilits/online-consultant.utilit';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';

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
          import('./online-consultant/online-consultant.module').then(
            (m) => m.OnlineConsultantModule
          ),
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
