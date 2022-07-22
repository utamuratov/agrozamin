import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperModule } from 'swiper/angular';
import { HistoryContentComponent } from './history-content.component';

@NgModule({
  declarations: [HistoryContentComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    SwiperModule,
  ],
  exports: [HistoryContentComponent],
})
export class HistoryContentModule {}
