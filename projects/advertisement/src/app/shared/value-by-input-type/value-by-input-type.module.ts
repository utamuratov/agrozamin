import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValueByInputTypePipe } from './valueByInputType.pipe';

@NgModule({
  declarations: [ValueByInputTypePipe],
  imports: [CommonModule],
  exports: [ValueByInputTypePipe],
})
export class ValueByInputTypeModule {}
