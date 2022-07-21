import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagePipe } from './noImage.pipe';

@NgModule({
  declarations: [NoImagePipe],
  imports: [CommonModule],
  exports: [NoImagePipe],
})
export class NoImageModule {}
