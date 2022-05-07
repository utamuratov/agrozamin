import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [NewsComponent],
  imports: [
    CommonModule,
    NzGridModule,
    NzTypographyModule,
    NzDropDownModule,
    NzDividerModule,
  ],
  exports: [NewsComponent],
})
export class NewsModule {}
