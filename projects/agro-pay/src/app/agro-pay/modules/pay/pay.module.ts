import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PayComponent } from './pay.component';
import { PayRoutes } from './pay.routing';

@NgModule({
  imports: [CommonModule, PayRoutes],
  declarations: [PayComponent],
})
export class PayModule {}
