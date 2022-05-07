import { NgModule } from '@angular/core';
import { CarouselFooterComponent } from './carousel-footer.component';
import { SharedModule } from '../shared.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  declarations: [CarouselFooterComponent],
  imports: [SharedModule, NzCarouselModule, NzGridModule],
  exports: [CarouselFooterComponent],
})
export class CarouselFooterModule {}
