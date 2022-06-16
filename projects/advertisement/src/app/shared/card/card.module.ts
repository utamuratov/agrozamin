import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { TagModule } from '../tag/tag.module';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NoImageModule } from '../no-image/no-image.module';
import { CurrencyModule } from '../currency/currency.module';

@NgModule({
  declarations: [CardComponent],
  imports: [
    CommonModule,

    TagModule,
    NoImageModule,
    CurrencyModule,

    NzButtonModule,
    NzTypographyModule,
    NzGridModule,
  ],
  exports: [CardComponent],
})
export class CardModule {}
