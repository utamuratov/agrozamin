import { NgModule } from '@angular/core';
import { AdvertisementListHeaderComponent } from './advertisement-list-header.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { SortModule } from '../sort/sort.module';

@NgModule({
  imports: [SharedModule, SortModule, NzGridModule],
  declarations: [AdvertisementListHeaderComponent],
  exports: [AdvertisementListHeaderComponent],
})
export class AdvertisementListHeaderModule {}
