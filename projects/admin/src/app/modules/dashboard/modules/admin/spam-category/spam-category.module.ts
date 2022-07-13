import { NgModule } from '@angular/core';
import { SpamCategoryListComponent } from './spam-category-list/spam-category-list.component';
import { AddEditSpamCategoryComponent } from './add-edit-spam-category/add-edit-spam-category.component';
import { SpamCategoryRoutes } from './spam-category.routing';
import { DashboardSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';

@NgModule({
  imports: [SpamCategoryRoutes, DashboardSharedModule],
  declarations: [SpamCategoryListComponent, AddEditSpamCategoryComponent],
})
export class SpamCategoryModule {}
