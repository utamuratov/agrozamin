import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SEOResolver } from 'ngx-az-core';
import { AgroZaminComponent } from './agro-zamin.component';

const routes: Routes = [
  {
    path: '',
    component: AgroZaminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
        resolve: [SEOResolver],
        data: {
          meta: {
            title: 'agrozamin.home.title',
            description: 'agrozamin.home.description',
          },
        },
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
        resolve: [SEOResolver],
        data: {
          meta: {
            title: 'aboutTheProject',
            description: 'about.description',
          },
        },
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./modules/faq/faq.module').then((m) => m.FaqModule),
        resolve: [SEOResolver],
        data: {
          meta: {
            title: 'help',
            description: 'faq.description',
          },
        },
      },
      {
        path: 'partnership',
        loadChildren: () =>
          import('./modules/partnership/partnership.module').then(
            (m) => m.PartnershipModule
          ),
        resolve: [SEOResolver],
        data: {
          meta: {
            title: 'partnership',
            description: 'partnership.description',
          },
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroZaminRoutingModule {}
