import { NgModule } from '@angular/core';

import { DistrictRoutingModule } from './district-routing.module';
import { AddEditDistrictComponent } from './add-edit-district/add-edit-district.component';
import { DistrictListComponent } from './district-list/district-list.component';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { DistrictService } from './services/district.service';
import { RegionService } from '../region/service/region.service';

@NgModule({
  declarations: [AddEditDistrictComponent, DistrictListComponent],
  imports: [DistrictRoutingModule, DashboardSharedModule, NzSelectModule],
  providers: [DistrictService, RegionService],
})
export class DistrictModule {}
