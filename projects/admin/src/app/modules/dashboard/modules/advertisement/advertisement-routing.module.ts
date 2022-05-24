import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditAdvertisementComponent } from './add-edit-advertisement/add-edit-advertisement.component';
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
      { path: 'edit/:id', component: AddEditAdvertisementComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
