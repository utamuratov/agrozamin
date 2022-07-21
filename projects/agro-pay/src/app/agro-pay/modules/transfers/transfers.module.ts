import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransfersComponent } from './transfers.component';
import { TransfersRoutes } from './transfers.routing';

@NgModule({
  imports: [
    CommonModule,
    TransfersRoutes
  ],
  declarations: [TransfersComponent]
})
export class TransfersModule { }
