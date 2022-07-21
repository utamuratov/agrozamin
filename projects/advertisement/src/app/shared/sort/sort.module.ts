import { NgModule } from '@angular/core';
import { SortComponent } from './sort.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [SortComponent],
  imports: [SharedModule, NzGridModule, NzDropDownModule],
  exports: [SortComponent],
})
export class SortModule {}
