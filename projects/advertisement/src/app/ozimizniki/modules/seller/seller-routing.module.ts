import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerComponent } from './seller.component';
import { SellerResolver } from './services/seller.resolver';

const routes: Routes = [
  {
    path: '',
    component: SellerComponent,
    resolve: { sellerDetails: SellerResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule {}
