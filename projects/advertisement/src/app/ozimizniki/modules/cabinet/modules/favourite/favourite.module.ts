import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteComponent } from './favourite.component';
import { FavouriteAdvertisementComponent } from './pages/favourite-advertisement/favourite-advertisement.component';
import { FavouriteSellersComponent } from './pages/favourite-sellers/favourite-sellers.component';
import { FavouriteFiltersComponent } from './pages/favourite-filters/favourite-filters.component';
import { SharedModule } from 'ngx-az-core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { PaginationModule } from 'projects/advertisement/src/app/shared/pagination/pagination.module';
import { CardModule } from 'projects/advertisement/src/app/shared/card/card.module';
import { SortModule } from 'projects/advertisement/src/app/shared/sort/sort.module';

@NgModule({
  declarations: [
    FavouriteComponent,
    FavouriteAdvertisementComponent,
    FavouriteSellersComponent,
    FavouriteFiltersComponent,
  ],
  imports: [
    FavouriteRoutingModule,
    FormsModule,

    SharedModule,
    PaginationModule,
    CardModule,
    SortModule,

    NzGridModule,
    NzDropDownModule,
    NzPopoverModule,
    NzButtonModule,
  ],
})
export class FavouriteModule {}