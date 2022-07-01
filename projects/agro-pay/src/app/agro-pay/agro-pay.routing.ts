import { Routes, RouterModule } from '@angular/router';
import { AgroPayComponent } from './agro-pay.component';

const routes: Routes = [
  {
    path: '',
    component: AgroPayComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'pay',
        loadChildren: () =>
          import('./modules/pay/pay.module').then((m) => m.PayModule),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('./modules/my-cards/my-cards.module').then(
            (m) => m.MyCardsModule
          ),
      },
      {
        path: 'transfer',
        loadChildren: () =>
          import('./modules/transfers/transfers.module').then(
            (m) => m.TransfersModule
          ),
      },
      {
        path: 'support',
        loadChildren: () =>
          import('./modules/support/support.module').then(
            (m) => m.SupportModule
          ),
      },
      {
        path: 'history',
        loadChildren: () =>
          import('./modules/history/history.module').then(
            (m) => m.HistoryModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./modules/details/details.module').then(
            (m) => m.DetailsModule
          ),
      },
    ],
  },
];

export const AgroPayRoutes = RouterModule.forChild(routes);
