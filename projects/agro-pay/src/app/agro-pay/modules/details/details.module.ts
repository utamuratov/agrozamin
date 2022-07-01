import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DetailsRoutes } from './details.routing';

@NgModule({
  imports: [CommonModule, DetailsRoutes],
  declarations: [DetailsComponent],
})
export class DetailsModule {}
