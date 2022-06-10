import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultantPageComponent } from './consultant-page.component';
import { ConsultantPageRoutes } from './consultant-page.routing';

@NgModule({
  imports: [
    CommonModule,
    ConsultantPageRoutes
  ],
  declarations: [ConsultantPageComponent]
})
export class ConsultantPageModule { }
