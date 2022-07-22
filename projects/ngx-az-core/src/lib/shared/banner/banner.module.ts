import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, NzGridModule, NzButtonModule, SwiperModule],
  exports: [BannerComponent],
})
export class BannerModule {}
