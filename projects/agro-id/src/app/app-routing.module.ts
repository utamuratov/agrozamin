import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Constants, LanguageGuard, SEOResolver } from 'ngx-az-core';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { AgroZaminRoutingSharedModule } from 'projects/agro-zamin/src/app/app.module';

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
            path: '',
            redirectTo: Constants.AGRO_ZAMIN_ROUTE_PATH,
            pathMatch: 'full',
          },
          {
            path: Constants.AGRO_ZAMIN_ROUTE_PATH,
            loadChildren: () =>
              import('../../../agro-zamin/src/app/app.module').then(
                (m) => m.AgroZaminRoutingSharedModule
              ),
            canActivate: [AuthGuard],
            resolve: [SEOResolver],
            data: {
              meta: {
                title: 'home.title',
                description: 'home.description',
              },
            },
          },
        ],
      },
      {
        path: `:language/${Constants.AGROID_ROUTE_PATH}`,
        loadChildren: () =>
          import('./modules/agro-id/agro-id.module').then(
            (m) => m.AgroIdModule
          ),
        canActivate: [LanguageGuard],
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
    redirectTo: `${Constants.AGROZAMIN_PREFIX_ROUTE_PATH}/${Constants.DEFAULT_LANGUAGE_CODE}/404`,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AgroZaminRoutingSharedModule.forRoot(),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
