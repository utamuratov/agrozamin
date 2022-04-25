import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessModalComponent } from './success-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';

@NgModule({
  imports: [
    CommonModule,
    NzModalModule,
    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
  ],
  declarations: [SuccessModalComponent],
  exports: [SuccessModalComponent],
})
export class SuccessModalModule {}
