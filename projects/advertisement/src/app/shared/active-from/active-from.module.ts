import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveFromPipe } from './activeFrom.pipe';

@NgModule({
  declarations: [ActiveFromPipe],
  imports: [CommonModule],
  exports: [ActiveFromPipe],
})
export class ActiveFromModule {}
