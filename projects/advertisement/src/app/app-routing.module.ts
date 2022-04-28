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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
