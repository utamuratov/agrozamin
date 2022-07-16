import { NgModule } from '@angular/core';
import { CarouselFooterComponent } from './carousel-footer.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { SharedModule } from 'ngx-az-core';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [CarouselFooterComponent],
  imports: [SharedModule, NzCarouselModule, NzGridModule, SwiperModule],
  exports: [CarouselFooterComponent],
})
export class CarouselFooterModule {}
