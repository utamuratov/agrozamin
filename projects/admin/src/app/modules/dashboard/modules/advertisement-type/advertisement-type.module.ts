import { NgModule } from '@angular/core';
import { AdvertisementTypeRoutingModule } from './advertisement-type-routing.module';
import { AdvertisementTypeComponent } from './advertisement-type.component';
import { AdvertisementTypeListComponent } from './advertisement-type-list/advertisement-type-list.component';
import { AddEditAdvertisementTypeComponent } from './add-edit-advertisement-type/add-edit-advertisement-type.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { AdvertisementTypeService } from './services/advertisement-type.service';

@NgModule({
  declarations: [
    AdvertisementTypeComponent,
    AdvertisementTypeListComponent,
    AddEditAdvertisementTypeComponent,
  ],
  imports: [AdvertisementTypeRoutingModule, DashboardSharedModule],
  providers: [AdvertisementTypeService],
})
export class AdvertisementTypeModule {}
