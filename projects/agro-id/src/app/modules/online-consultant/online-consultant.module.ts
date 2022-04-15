import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlineConsultantComponent } from './components/online-consultant/online-consultant.component';
import { OnlineConsultantRoutes } from './online-consultant.routing';
import { SharedModule } from 'ngx-az-core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OnlineConsultantRoutes
  ],
  declarations: [OnlineConsultantComponent]
})
export class OnlineConsultantModule { }
