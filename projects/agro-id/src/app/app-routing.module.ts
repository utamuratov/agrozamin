import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Constants, LanguageGuard } from 'ngx-az-core';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { prefixPath } from './core/utilits/agro-id.utilit';

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
        canActivate: [LanguageGuard],
        loadChildren: () =>
          import('./agro-id/agro-id.module').then((m) => m.AgroIdModule),
      },
      {
        path: ':language/404',
        component: NotFoundPageComponent,
        canActivate: [LanguageGuard],
      },
    ],
  },
  {
    path: 'internal-server-error',
    component: InternalServerErrorComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: `${prefixPath}/${Constants.DEFAULT_LANGUAGE_CODE}/404`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
