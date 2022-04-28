import { Routes, RouterModule } from '@angular/router';
import { CabinetComponent } from './cabinet.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { MessagesComponent } from './components/messages/messages.component';

const routes: Routes = [
  {
    path: '',
    component: CabinetComponent,
    children: [
      {path: '', redirectTo: 'advert', pathMatch: 'full'},
      { path: 'advert', component: AdvertisementComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'favourites', component: FavouritesComponent },
    ],
  },
];

export const CabinetRoutes = RouterModule.forChild(routes);
