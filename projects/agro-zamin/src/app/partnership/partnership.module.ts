import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnershipComponent } from './partnership.component';
import { PartnershipRoutes } from './partnership.routing';

@NgModule({
  imports: [
    CommonModule, PartnershipRoutes
  ],
  declarations: [PartnershipComponent]
})
export class PartnershipModule { }
