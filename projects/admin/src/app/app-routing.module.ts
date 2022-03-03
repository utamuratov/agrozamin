import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Constants, LanguageGuard, LanguageUtilit } from 'ngx-az-core';
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
    canActivate: [LanguageGuard],
    children: [
      {
        path: '',
        redirectTo: LanguageUtilit.currentLanguage,
        pathMatch: 'full',
      },
      {
        path: ':language',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: ':language/sign-in',
        loadChildren: () =>
          import('./pages/sign-in/sign-in.module').then((m) => m.SignInModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
