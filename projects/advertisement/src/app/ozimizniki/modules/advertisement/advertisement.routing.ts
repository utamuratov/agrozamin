import { RouterModule, Routes } from '@angular/router';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementDetailsPage } from './pages/advertisement-details/advertisement-details.page';
import { AdvertisementListByCategoryPage } from './pages/advertisement-list-by-category/advertisement-list-by-category.page';
import { AdvertisementListPage } from './pages/advertisement-list/advertisement-list.page';

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
        path: ':categoryId/:productId',
        component: AdvertisementDetailsPage,
      },
    ],
  },
];

export const AdvertisementRoutes = RouterModule.forChild(routes);
