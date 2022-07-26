import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CabinetMenu, CabinetMenuList } from '../../menu-type.enum';
import { FavoriteMenu, FavoriteMenuList } from './favorite-menu.enum';
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
    data: {
      bc: {
        name: CabinetMenu.favourites,
        value: CabinetMenu.favourites,
        list: CabinetMenuList,
      },
    },
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'advertisements' },
      {
        path: FavoriteMenu.advertisements,
        component: FavouriteAdvertisementComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_FAVORITE_ADVERTISEMENTS]:
            FavouriteAdvertisementResolver,
        },
        data: {
          bc: {
            name: FavoriteMenu.advertisements,
            value: FavoriteMenu.advertisements,
            list: FavoriteMenuList,
          },
        },
      },
      {
        path: FavoriteMenu.sellers,
        component: FavouriteSellersComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_SELLERS]: FavouriteSellerResolver,
        },
        data: {
          bc: {
            name: FavoriteMenu.sellers,
            value: FavoriteMenu.sellers,
            list: FavoriteMenuList,
          },
        },
      },
      {
        path: FavoriteMenu.filterOptions,
        component: FavouriteFiltersComponent,
        resolve: {
          [AdvertisementConstants.RESOLVERS_FAVORITE_FILTERS]:
            FavouriteFilterResolver,
        },
        data: {
          bc: {
            name: FavoriteMenu.filterOptions,
            value: FavoriteMenu.filterOptions,
            list: FavoriteMenuList,
          },
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
