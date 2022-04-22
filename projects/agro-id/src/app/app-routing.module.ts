import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Constants, LanguageGuard, SEOResolver } from 'ngx-az-core';
import { RootLayoutComponent } from './components/root-layout/root-layout.component';
import { InternalServerErrorComponent } from './components/internal-server-error/internal-server-error.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

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
          // {
          //   path: '',
          //   loadChildren: () =>
          //     import('./pages/home/home.module').then((m) => m.HomeModule),
          //   canActivate: [AuthGuard],
          //   resolve: [SEOResolver],
          //   data: {
          //     meta: {
          //       title: 'home.title',
          //       description: 'home.description',
          //     },
          //   },
          // },
          // {
          //   path: 'market',
          //   loadChildren: () =>
          //     import('./modules/market/market.module').then(
          //       (m) => m.MarketModule
          //     ),
          //   data: {
          //     bc: 'market.breadcrumb',
          //     meta: {
          //       title: 'monitorTitle',
          //       description: 'monitorDescription',
          //     },
          //   },
          // },
          // {
          //   path: 'online-consultant',
          //   loadChildren: () =>
          //     import(
          //       './modules/online-consultant/online-consultant.module'
          //     ).then((m) => m.OnlineConsultantModule),
          //   data: {
          //     bc: 'onlineConsultant.breadcrumb',
          //     meta: {
          //       title: 'monitorTitle',
          //       description: 'monitorDescription',
          //     },
          //   },
          //   resolve: [SEOResolver],
          // },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
