import { MarketRoutes } from './market.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './components/market/market.component';
import { SharedModule } from 'ngx-az-core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MarketRoutes
  ],
  declarations: [MarketComponent]
})
export class MarketModule { }
