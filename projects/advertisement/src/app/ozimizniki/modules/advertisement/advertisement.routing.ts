import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementDetailsPage } from './pages/advertisement-details/advertisement-details.page';
import { AdvertisementListByCategoryPage } from './pages/advertisement-list-by-category/advertisement-list-by-category.page';
import { AdvertisementListPage } from './pages/advertisement-list/advertisement-list.page';
import { AdvertisementDetailsResolver } from './services/advertisment-edit.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementComponent,
    children: [
      { path: '', component: AdvertisementListPage },
      {
        path: ':categoryId',
        component: AdvertisementListByCategoryPage,
      },
      {
        path: ':categoryId/:advertisementId',
        component: AdvertisementDetailsPage,
        resolve: { advertisment: AdvertisementDetailsResolver },
      },
    ],
  },
];

export const AdvertisementRoutes = RouterModule.forChild(routes);
