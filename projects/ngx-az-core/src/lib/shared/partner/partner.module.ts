import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [PartnerComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzButtonModule,
    NzIconModule,
    SwiperModule,
  ],
  exports: [PartnerComponent],
})
export class PartnerModule {}
