import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgroPayComponent } from './agro-pay.component';
import { AgroPayRoutes } from './agro-pay.routing';

@NgModule({
  imports: [CommonModule, AgroPayRoutes],
  declarations: [AgroPayComponent],
})
export class AgroPayModule {}
