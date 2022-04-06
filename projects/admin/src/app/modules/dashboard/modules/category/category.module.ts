import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    CategoryRoutingModule,

    /**
     * CUSTOM MODULES
     */
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
  ],
})
export class CategoryModule {}
