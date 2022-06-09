import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './online-consultant.component';
import { OnlineConsultantRoutingModule } from './online-consultant.routing';

@NgModule({
  imports: [CommonModule, OnlineConsultantRoutingModule],
  declarations: [OnlineConsultantComponent],
})
export class OnlineConsultantModule {}
