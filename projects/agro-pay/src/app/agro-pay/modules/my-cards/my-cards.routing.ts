import { Routes, RouterModule } from '@angular/router';
import { MyCardsComponent } from './my-cards.component';

const routes: Routes = [
  { path: '', component: MyCardsComponent },
];

export const MyCardsRoutes = RouterModule.forChild(routes);
