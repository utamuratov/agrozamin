import { NgModule } from '@angular/core';
import { RegionComponent } from './region.component';
import { RegionRoutes } from './region.routing';
import { RegionService } from './service/region.service';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { RegionListComponent } from './region-list/region-list.component';
import { AddEditRegionComponent } from './add-edit-region/add-edit-region.component';

@NgModule({
  imports: [RegionRoutes, DashboardSharedModule],
  declarations: [RegionComponent, RegionListComponent, AddEditRegionComponent],
  providers: [RegionService],
})
export class RegionModule {}
