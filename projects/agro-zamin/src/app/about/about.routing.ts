import { Routes, RouterModule } from '@angular/router';
import { BannerComponent } from './components/banner/banner.component';

const routes: Routes = [
  { path: '', component: BannerComponent },
];

export const AboutRoutes = RouterModule.forChild(routes);
