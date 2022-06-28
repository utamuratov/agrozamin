import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './favourite.component';
import { FavouriteAdvertisementComponent } from './pages/favourite-advertisement/favourite-advertisement.component';
import { FavouriteFiltersComponent } from './pages/favourite-filters/favourite-filters.component';
import { FavouriteSellersComponent } from './pages/favourite-sellers/favourite-sellers.component';
import { FavouriteAdvertisementResolver } from './services/favourite-advertisement.resolver';

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
          advertisements: FavouriteAdvertisementResolver,
        },
      },
      { path: 'sellers', component: FavouriteSellersComponent },
      { path: 'filter-options', component: FavouriteFiltersComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavouriteRoutingModule {}
