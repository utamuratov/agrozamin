import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCardsComponent } from './my-cards.component';
import { MyCardsRoutes } from './my-cards.routing';

@NgModule({
  imports: [
    CommonModule,
    MyCardsRoutes
  ],
  declarations: [MyCardsComponent]
})
export class MyCardsModule { }
