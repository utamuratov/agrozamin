import { NgModule } from '@angular/core';
import { PaginationComponent } from './pagination.component';
import { SharedModule } from 'ngx-az-core';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [SharedModule, NzPaginationModule, NzGridModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent],
})
export class PaginationModule {}
