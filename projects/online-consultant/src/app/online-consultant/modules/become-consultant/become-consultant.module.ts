import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BecomeConsultantComponent } from './become-consultant.component';
import { BecomeConsultantRoutes } from './become-consultant.routing';

@NgModule({
  imports: [
    CommonModule,
    BecomeConsultantRoutes
  ],
  declarations: [BecomeConsultantComponent]
})
export class BecomeConsultantModule { }
