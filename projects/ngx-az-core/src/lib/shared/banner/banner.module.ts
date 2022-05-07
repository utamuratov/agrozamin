import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [BannerComponent],
  imports: [CommonModule, NzCarouselModule, NzGridModule, NzButtonModule],
  exports: [BannerComponent],
})
export class BannerModule {}
