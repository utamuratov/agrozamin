import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { FavouriteComponent } from './favourite.component';
import { FavouriteAdvertisementComponent } from './pages/favourite-advertisement/favourite-advertisement.component';
import { FavouriteFiltersComponent } from './pages/favourite-filters/favourite-filters.component';
import { FavouriteSellersComponent } from './pages/favourite-sellers/favourite-sellers.component';
import { FavouriteAdvertisementResolver } from './services/favourite-advertisement.resolver';
import { FavouriteFilterResolver } from './services/favourite-filter.resolver';
import { FavouriteSellerResolver } from './services/favourite-seller.resolver';

const routes: Routes = [
  {
    path: '',
    component: FavouriteComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'advertisements' },
      {
        path: 'advertisements',
        component: FavouriteAdvertisementComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_FAVORITE_ADVERTISEMENTS]:
            FavouriteAdvertisementResolver,
        },
      },
      {
        path: 'sellers',
        component: FavouriteSellersComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_SELLERS]: FavouriteSellerResolver,
        },
      },
      {
        path: 'filter-options',
        component: FavouriteFiltersComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_FAVORITE_FILTERS]:
            FavouriteFilterResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteRoutingModule {}
