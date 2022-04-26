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
            title: 'home.title',
            description: 'home.description',
          },
        },
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./modules/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./modules/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'partnership',
        loadChildren: () =>
          import('./modules/partnership/partnership.module').then(
            (m) => m.PartnershipModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgroZaminRoutingModule {}
