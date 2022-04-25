import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgroZaminRoutingModule } from './agro-zamin-routing.module';
import { AgroZaminComponent } from './agro-zamin.component';


@NgModule({
  declarations: [
    AgroZaminComponent
  ],
  imports: [
    CommonModule,
    AgroZaminRoutingModule
  ]
})
export class AgroZaminModule { }
