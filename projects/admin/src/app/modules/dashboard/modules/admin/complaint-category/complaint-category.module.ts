import { NgModule } from '@angular/core';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { AddEditComplaintCategoryComponent } from './add-edit-complaint-category/add-edit-complaint-category.component';
import { ComplaintCategoryListComponent } from './complaint-category-list/complaint-category-list.component';
import { ComplaintCategoryRoutes } from './complaint-category.routing';

@NgModule({
  imports: [ComplaintCategoryRoutes, DashboardSharedModule],
  declarations: [
    ComplaintCategoryListComponent,
    AddEditComplaintCategoryComponent,
  ],
})
export class ComplaintCategoryModule {}
