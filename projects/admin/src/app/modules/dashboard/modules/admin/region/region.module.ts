import { NgModule } from '@angular/core';
import { RegionRoutes } from './region.routing';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { RegionListComponent } from './region-list/region-list.component';
import { AddEditRegionComponent } from './add-edit-region/add-edit-region.component';

@NgModule({
  imports: [RegionRoutes, DashboardSharedModule],
  declarations: [RegionListComponent, AddEditRegionComponent],
})
export class RegionModule {}
