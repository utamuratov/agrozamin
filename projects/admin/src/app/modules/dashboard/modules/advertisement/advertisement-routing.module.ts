import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { AdvertisementComponent } from './advertisement.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementComponent,
    children: [
      {
        path: '',
        component: AdvertisementListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
