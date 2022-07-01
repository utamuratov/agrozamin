import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportComponent } from './support.component';
import { SupportsRoutes } from './supports.routing';

@NgModule({
  imports: [
    CommonModule,
    SupportsRoutes
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
