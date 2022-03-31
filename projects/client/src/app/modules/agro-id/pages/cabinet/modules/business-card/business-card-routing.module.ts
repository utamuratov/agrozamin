import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessCardPage } from './components/business-card/business-card.page';

const routes: Routes = [
  {
    path: '',
    component: BusinessCardPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusinessCardRoutingModule {}
