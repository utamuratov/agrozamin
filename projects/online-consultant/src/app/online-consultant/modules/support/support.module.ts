import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportRoutes } from './support.routing';

@NgModule({
  imports: [
    CommonModule,
    SupportRoutes
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
