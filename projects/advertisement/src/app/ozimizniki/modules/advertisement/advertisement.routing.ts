import { RouterModule, Routes } from '@angular/router';
import { AdvertisementConstants } from '../../../core/constants/advertisement.constants';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementDetailsPage } from './pages/advertisement-details/advertisement-details.page';
import { AdvertisementListByCategoryPage } from './pages/advertisement-list-by-category/advertisement-list-by-category.page';
import { AdvertisementListPage } from './pages/advertisement-list/advertisement-list.page';
import { AdvertisementDetailsResolver } from './services/advertisment-details.resolver';
import { AdvertisementListByCategoryResolver } from './services/advertisment-list-by-category.resolver';
import { AdvertisementListResolver } from './services/advertisment-list.resolver';
import { BreadcrumbByCategorySequenceResolver } from './services/breadcrumb-by-category-sequence.resolver';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementComponent,
    data: {
      bc: 'catalogue',
    },
    children: [
      {
        path: '',
        component: AdvertisementListPage,
        resolve: {
          categories: AdvertisementListResolver,
        },
      },
      {
        path: ':categoryId',
        component: AdvertisementListByCategoryPage,
        resolve: {
          [AdvertisementConstants.RESOLVERS_ADVERTISEMENTS_BY_CATEGORY]:
            AdvertisementListByCategoryResolver,
          [AdvertisementConstants.RESOLVERS_BREADCRUMB_BY_CATEGORY_SEQUENCE]:
            BreadcrumbByCategorySequenceResolver,
        },
      },
      {
        path: ':categoryId/:advertisementId',
        component: AdvertisementDetailsPage,
        resolve: {
          [AdvertisementConstants.RESOLVERS_ADVERTISEMENT_DETAILS]:
            AdvertisementDetailsResolver,
          [AdvertisementConstants.RESOLVERS_BREADCRUMB_BY_CATEGORY_SEQUENCE]:
            BreadcrumbByCategorySequenceResolver,
        },
      },
    ],
  },
];

export const AdvertisementRoutes = RouterModule.forChild(routes);
