import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisementTypeListComponent } from './advertisement-type-list/advertisement-type-list.component';
import { AdvertisementTypeComponent } from './advertisement-type.component';

const routes: Routes = [
  {
    path: '',
    component: AdvertisementTypeComponent,
    children: [{ path: '', component: AdvertisementTypeListComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementTypeRoutingModule {}
