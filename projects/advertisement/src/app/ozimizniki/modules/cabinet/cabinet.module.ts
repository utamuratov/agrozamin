import { NzGridModule } from 'ng-zorro-antd/grid';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { MessagesComponent } from './components/messages/messages.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes, 
    FormsModule, 
    ReactiveFormsModule,
    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule
  ],
  declarations: [
    CabinetComponent,
    AdvertisementComponent,
    MessagesComponent,
    FavouritesComponent,
  ],
})
export class CabinetModule {}
