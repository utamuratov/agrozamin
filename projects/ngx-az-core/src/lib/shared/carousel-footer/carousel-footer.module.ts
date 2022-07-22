import { NgModule } from '@angular/core';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { SwiperModule } from 'swiper/angular';
import { SharedModule } from '../shared.module';
import { CarouselFooterComponent } from './carousel-footer.component';

@NgModule({
  declarations: [CarouselFooterComponent],
  imports: [SharedModule, NzGridModule, SwiperModule],
  exports: [CarouselFooterComponent],
})
export class CarouselFooterModule {}
