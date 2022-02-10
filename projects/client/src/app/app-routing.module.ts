import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './components/app/app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { SEOResolver } from './core/resolvers/seo.resolver';
import { LanguageUtilit } from './core/utilits/language.utilit';

const routes: Routes = [
  {
    path: '',
    redirectTo: LanguageUtilit.currentLanguage,
    pathMatch: 'full',
  },
  {
    path: ':language',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent,
            resolve: [SEOResolver],
            data: {
              meta: {
                title: 'home.title',
                description: 'home.description',
              }
            }
          },
          {
            path: 'market',
            loadChildren: () =>
              import('./modules/market/market.module').then(
                (m) => m.MarketModule
              ),
            data: {
              bc: 'market.breadcrumb',
              meta: {
                title: 'monitorTitle',
                description: 'monitorDescription',
              },
            },
          },
          {
            path: 'online-consultant',
            loadChildren: () =>
              import(
                './modules/online-consultant/online-consultant.module'
              ).then((m) => m.OnlineConsultantModule),
            data: {
              bc: 'onlineConsultant.breadcrumb',
              meta: {
                title: 'monitorTitle',
                description: 'monitorDescription',
              },
            },
            resolve: [SEOResolver],
          },
        ],
      },
      {
        path: 'agro-id',
        loadChildren: () =>
          import('./modules/agro-id/agro-id.module').then(
            (m) => m.AgroIdModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
