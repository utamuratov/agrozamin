import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq.component';
import { FaqRoutes } from './faq.routing';

@NgModule({
  imports: [
    CommonModule,
    FaqRoutes
  ],
  declarations: [FaqComponent]
})
export class FaqModule { }
