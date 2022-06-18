import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagComponent } from './tag.component';
import { ClassByCategoryIdPipe } from './pipes/classByCategoryId.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TagComponent, ClassByCategoryIdPipe],
  exports: [TagComponent],
})
export class TagModule {}
