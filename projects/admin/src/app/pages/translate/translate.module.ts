import { InterfaceComponent } from './interface/interface.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';


@NgModule({
  declarations: [
    TranslateComponent,
    InterfaceComponent
  ],
  imports: [
    CommonModule,
    TranslateRoutingModule
  ]
})
export class TranslateModule { }
