import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, CabinetRoutes, FormsModule, ReactiveFormsModule],
  declarations: [
    CabinetComponent,
    AdvertisementComponent,
    MessagesComponent,
    FavouritesComponent,
  ],
})
export class CabinetModule {}
