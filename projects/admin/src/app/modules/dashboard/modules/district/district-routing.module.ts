import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditDistrictComponent } from './add-edit-district/add-edit-district.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DistrictComponent } from './district.component';

const routes: Routes = [
  {
    path: '',
    component: DistrictComponent,
    children: [
      { path: '', component: DistrictListComponent },
      { path: 'add', component: AddEditDistrictComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DistrictRoutingModule {}
