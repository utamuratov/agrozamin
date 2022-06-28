import { Routes, RouterModule } from '@angular/router';
import { AdvertisementConstants } from '../core/constants/advertisement.constants';
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
        path: AdvertisementConstants.ROUTER_PATH_ADVERTISEMENTS,
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
