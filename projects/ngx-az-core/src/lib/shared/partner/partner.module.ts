import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerComponent } from './partner.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [PartnerComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzCarouselModule,
    NzButtonModule,
    NzIconModule,
  ],
  exports: [PartnerComponent],
})
export class PartnerModule {}
