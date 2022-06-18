import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonComponent } from './skeleton.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  declarations: [SkeletonComponent],
  imports: [CommonModule, NzSkeletonModule],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
