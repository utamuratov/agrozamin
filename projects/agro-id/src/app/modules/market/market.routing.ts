import { MarketComponent } from './components/market/market.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: MarketComponent,
  children: []
}];

export const MarketRoutes = RouterModule.forChild(routes);
