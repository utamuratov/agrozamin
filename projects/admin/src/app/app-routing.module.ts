import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanguageUtilit } from 'ngx-az-core';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
