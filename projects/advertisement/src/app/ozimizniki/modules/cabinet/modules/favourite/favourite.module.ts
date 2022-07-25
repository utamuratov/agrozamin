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
import { SortModule } from 'projects/advertisement/src/app/shared/sort/sort.module';
import { AdvertisementListHeaderModule } from 'projects/advertisement/src/app/shared/advertisement-list-header/advertisement-list-header.module';
import { GridModule } from 'projects/advertisement/src/app/shared/grid/grid.module';
import { NoImageModule } from 'projects/advertisement/src/app/shared/no-image/no-image.module';
import { ActiveFromModule } from 'projects/advertisement/src/app/shared/active-from/active-from.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperModule } from 'swiper/angular';
import { TagModule } from '../../../../../shared/tag/tag.module';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { EmptyModule } from 'projects/advertisement/src/app/shared/empty/empty.module';

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
    GridModule,
    SortModule,
    AdvertisementListHeaderModule,
    NoImageModule,
    ActiveFromModule,
    NzIconModule,
    SwiperModule,
    TagModule,
    NzCheckboxModule,
    NzGridModule,
    NzDropDownModule,
    NzPopoverModule,
    NzButtonModule,
    EmptyModule
  ],
})
export class FavouriteModule {}
