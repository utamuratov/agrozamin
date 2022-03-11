import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalcScrollPipe } from '../pipes/calc-scroll.pipe';

@NgModule({
  declarations: [CalcScrollPipe],
  imports: [CommonModule],
  exports: [CalcScrollPipe],
})
export class AdminSharedModule {}
