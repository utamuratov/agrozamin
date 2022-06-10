import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnlineConsultantComponent } from './online-consultant.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineConsultantComponent,
    children: [      
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      {
        path: 'home',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./modules/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./modules/support/support.module').then((m) => m.SupportModule),
      },
      {
        path: 'find',
        loadChildren: () =>
          import('./modules/find-consultant/find-consultant.module').then((m) => m.FindConsultantModule),
      },
      {
        path: 'consultant-page',
        loadChildren: () =>
          import('./modules/consultant-page/consultant-page.module').then((m) => m.ConsultantPageModule),
      },
      {
        path: 'become-consultant',
        loadChildren: () =>
          import('./modules/become-consultant/become-consultant.module').then((m) => m.BecomeConsultantModule),
      },
      {
        path: 'cabinet',
        loadChildren: () =>
          import('./modules/cabinet/cabinet.module').then((m) => m.CabinetModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineConsultantRoutingModule {}
