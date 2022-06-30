import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardListComponent } from './card-list.component';
import { CardModule } from '../card/card.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SkeletonModule } from '../skeleton/skeleton.module';

@NgModule({
  imports: [CommonModule, CardModule, SkeletonModule, NzGridModule],
  declarations: [CardListComponent],
  exports: [CardListComponent],
})
export class CardListModule {}
