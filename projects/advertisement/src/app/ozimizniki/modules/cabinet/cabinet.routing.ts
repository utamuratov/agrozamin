import { Routes, RouterModule } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { CabinetComponent } from './cabinet.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { FavouriteAdvertComponent } from './components/favourites/components/favourite-advert/favourite-advert.component';
import { FilterOptionsComponent } from './components/favourites/components/filter-options/filter-options.component';
import { SellersComponent } from './components/favourites/components/sellers/sellers.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { Messages1Component } from './components/messages/components/messages1/messages1.component';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { MessagesComponent } from './components/messages/messages.component';
import { SupportChatComponent } from './components/support-chat/support-chat.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {
        path: '',
        redirectTo: `advertisement/${AdvertisementStatus.STATUS_CONFIRMED}`,
        pathMatch: 'full',
      },
      {
        path: `advertisement/${AdvertisementStatus.STATUS_CONFIRMED}`,
        component: AdvertisementComponent,
      },
      {
        path: `advertisement/${AdvertisementStatus.STATUS_NEW}`,
        component: AdvertisementComponent,
      },
      {
        path: `advertisement/${AdvertisementStatus.STATUS_REJECTED}`,
        component: AdvertisementComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
        children: [
          { path: 'messages1', component: Messages1Component },
          { path: 'messages2', component: Messages2Component },
        ],
      },
      {
        path: 'favourites',
        component: FavouritesComponent,
        children: [
          { path: 'favourite-advert', component: FavouriteAdvertComponent },
          { path: 'filter-options', component: FilterOptionsComponent },
          { path: 'sellers', component: SellersComponent },
        ],
      },
      { path: 'support', component: SupportChatComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
