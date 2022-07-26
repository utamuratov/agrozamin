import { Routes, RouterModule } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { AdvertisementStatusList } from './advertisement-menu-list';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementResolver } from './services/advertisment.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${AdvertisementStatus.STATUS_CONFIRMED}`,
    pathMatch: 'full',
  },
  {
    path: `${AdvertisementStatus.STATUS_CONFIRMED}`,
    component: AdvertisementComponent,
    data: {
      bc: {
        name:
          'advertisement.' +
          AdvertisementStatus[AdvertisementStatus.STATUS_CONFIRMED],
        value: AdvertisementStatus.STATUS_CONFIRMED.toString(),
        list: AdvertisementStatusList,
      },
    },
    resolve: { advertisment: AdvertisementResolver },
  },
  {
    path: `${AdvertisementStatus.STATUS_ARCHIVED}`,
    component: AdvertisementComponent,
    data: {
      bc: {
        name:
          'advertisement.' +
          AdvertisementStatus[AdvertisementStatus.STATUS_ARCHIVED],
        value: AdvertisementStatus.STATUS_ARCHIVED.toString(),
        list: AdvertisementStatusList,
      },
    },
    resolve: { advertisment: AdvertisementResolver },
  },
  {
    path: `${AdvertisementStatus.STATUS_NEW}`,
    component: AdvertisementComponent,
    data: {
      bc: {
        name:
          'advertisement.' +
          AdvertisementStatus[AdvertisementStatus.STATUS_NEW],
        value: AdvertisementStatus.STATUS_NEW.toString(),
        list: AdvertisementStatusList,
      },
    },
    resolve: { advertisment: AdvertisementResolver },
  },
  {
    path: `${AdvertisementStatus.STATUS_REJECTED}`,
    component: AdvertisementComponent,
    data: {
      bc: {
        name:
          'advertisement.' +
          AdvertisementStatus[AdvertisementStatus.STATUS_REJECTED],
        value: AdvertisementStatus.STATUS_REJECTED.toString(),
        list: AdvertisementStatusList,
      },
    },
    resolve: { advertisment: AdvertisementResolver },
  },
];

export const AdvertisementRoutes = RouterModule.forChild(routes);
