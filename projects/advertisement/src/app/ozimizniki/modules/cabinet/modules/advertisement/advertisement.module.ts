import { NgModule } from '@angular/core';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementRoutes } from './advertisement.routing';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SortModule } from 'projects/advertisement/src/app/shared/sort/sort.module';
import { TagModule } from 'projects/advertisement/src/app/shared/tag/tag.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'ngx-az-core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CurrencyModule } from 'projects/advertisement/src/app/shared/currency/currency.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NoImageModule } from 'projects/advertisement/src/app/shared/no-image/no-image.module';
import { PaginationModule } from 'projects/advertisement/src/app/shared/pagination/pagination.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  imports: [
    AdvertisementRoutes,
    FormsModule,

    SharedModule,
    SortModule,
    TagModule,
    CurrencyModule,
    NoImageModule,
    PaginationModule,

    NzSelectModule,
    NzGridModule,
    NzButtonModule,
    NzPopoverModule,
    NzTypographyModule,
    NzIconModule,
    NzToolTipModule
  ],
  declarations: [AdvertisementComponent],
})
export class AdvertisementModule {}
