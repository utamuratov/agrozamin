import { MarketRoutes } from './market.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './components/market/market.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutes
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
