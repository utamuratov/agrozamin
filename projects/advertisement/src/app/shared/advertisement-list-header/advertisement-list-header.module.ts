import { NgModule } from '@angular/core';
import { AdvertisementListHeaderComponent } from './advertisement-list-header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { SortModule } from '../sort/sort.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    SharedModule,
    SortModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
  ],
  declarations: [AdvertisementListHeaderComponent],
  exports: [AdvertisementListHeaderComponent],
})
export class AdvertisementListHeaderModule {}
