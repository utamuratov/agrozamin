import { NgModule } from '@angular/core';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { AdvertisementService } from './services/advertisement.service';
import { AddEditAdvertisementComponent } from './add-edit-advertisement/add-edit-advertisement.component';
import { AddEditAdvertisementFullModule } from 'projects/advertisement/src/app/ozimizniki/modules/add-advertisement/add-edit-advertisement-full/add-edit-advertisement-full.module';

@NgModule({
  declarations: [
    AdvertisementComponent,
    AdvertisementListComponent,
    AddEditAdvertisementComponent,
  ],
  imports: [
    AdvertisementRoutingModule,
    DashboardSharedModule,

    AddEditAdvertisementFullModule,
  ],
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
