import { Routes, RouterModule } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementResolver } from './services/advertisment.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: `${AdvertisementStatus.STATUS_CONFIRMED}`,
    pathMatch: 'full',
  },
  {
    path: `:status`,
    component: AdvertisementComponent,
    data: {
      bc: 'advertisements',
    },
    resolve: { advertisment: AdvertisementResolver },
  },
];

export const AdvertisementRoutes = RouterModule.forChild(routes);
