import { Routes, RouterModule } from '@angular/router';
import { OzimiznikiComponent } from './ozimizniki.component';

const routes: Routes = [
  {
    path: '',
    component: OzimiznikiComponent,
    data: {
      bc: 'main',
    },
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./modules/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'advertisements',
        loadChildren: () =>
          import('./modules/advertisement/advertisement.module').then(
            (m) => m.AdvertisementModule
          ),
      },
      {
        path: 'members',
        loadChildren: () =>
          import(
            './modules/catalog-members-partner/catalog-members-partner.module'
          ).then((m) => m.CatalogMembersPartnerModule),
      },
      {
        path: 'cabinet',
        loadChildren: () =>
          import('./modules/cabinet/cabinet.module').then(
            (m) => m.CabinetModule
          ),
      },
    ],
  },
];

export const OzimiznikiRoutes = RouterModule.forChild(routes);
