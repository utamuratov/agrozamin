import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabinetComponent } from './cabinet.component';
import { CabinetRoutes } from './cabinet.routing';

@NgModule({
  imports: [
    CommonModule,
    CabinetRoutes
  ],
  declarations: [CabinetComponent]
})
export class CabinetModule { }
