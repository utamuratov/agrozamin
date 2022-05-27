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
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { SupportChatComponent } from './components/support-chat/support-chat.component';
import { SellersComponent } from './components/favourites/components/sellers/sellers.component';
import { FilterOptionsComponent } from './components/favourites/components/filter-options/filter-options.component';
import { FavouriteAdvertComponent } from './components/favourites/components/favourite-advert/favourite-advert.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { Messages1Component } from './components/messages/components/messages1/messages1.component';
import { Messages2Component } from './components/messages/components/messages2/messages2.component';
import { CurrencyModule } from '../../../shared/currency/currency.module';
import { ClassByCategoryIdPipe } from './components/advertisement/pipes/suffixByCategoryId.pipe';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes,
    FormsModule,
    ReactiveFormsModule,

    CurrencyModule,

    NzGridModule,
    NzMenuModule,
    NzButtonModule,
    NzIconModule,
    NzToolTipModule,
    NzInputModule,
    NzDropDownModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzDividerModule,
  ],
  declarations: [
    CabinetComponent,
    AdvertisementComponent,
    MessagesComponent,
    FavouritesComponent,
    SupportChatComponent,
    SellersComponent,
    FilterOptionsComponent,
    FavouriteAdvertComponent,
    Messages1Component,
    Messages2Component,

    ClassByCategoryIdPipe,
  ],
})
export class CabinetModule {}
