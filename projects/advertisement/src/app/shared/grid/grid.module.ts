import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { CardListModule } from '../card-list/card-list.module';
import { PaginationModule } from '../pagination/pagination.module';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [CommonModule, CardListModule, PaginationModule, NzGridModule],
  declarations: [GridComponent],
  exports: [GridComponent],
})
export class GridModule {}
