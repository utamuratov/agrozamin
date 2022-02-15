import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { TriangleComponent } from './components/triangle/triangle.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    CommonModule,
    TriangleComponent
  ],
  declarations: [
    TriangleComponent
  ]
})
export class SharedModule { }
