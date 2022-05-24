import { NgModule } from '@angular/core';
import { AdvertisementRoutingModule } from './advertisement-routing.module';
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementListComponent } from './advertisement-list/advertisement-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { AdvertisementService } from './services/advertisement.service';

@NgModule({
  declarations: [AdvertisementComponent, AdvertisementListComponent],
  imports: [AdvertisementRoutingModule, DashboardSharedModule],
  providers: [AdvertisementService],
})
export class AdvertisementModule {}
