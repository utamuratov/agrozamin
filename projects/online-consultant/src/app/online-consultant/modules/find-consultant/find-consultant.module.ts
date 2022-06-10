import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindConsultantComponent } from './find-consultant.component';
import { FindConsultantRoutes } from './find-consultant.routing';

@NgModule({
  imports: [
    CommonModule,
    FindConsultantRoutes
  ],
  declarations: [FindConsultantComponent]
})
export class FindConsultantModule { }
