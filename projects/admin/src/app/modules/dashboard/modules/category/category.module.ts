import { NgModule } from '@angular/core';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './components/category/category.component';
import { AdminSharedModule } from 'projects/admin/src/app/shared/admin-shared.module';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { AddEditCategoryComponent } from './pages/category-list/add-edit-category/add-edit-category.component';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { FilterListComponent } from './pages/filter-list/filter-list.component';
import { AddEditFilterComponent } from './pages/filter-list/add-edit-filter/add-edit-filter.component';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';
import { CategoryService } from './services/category.service';
import { FilterService } from './services/filter.service';
import { AdvertisementTypeService } from './services/advertisement-type.service';

@NgModule({
  declarations: [
    CategoryComponent,
    AddEditCategoryComponent,
    CategoryListComponent,
    FilterListComponent,
    AddEditFilterComponent,
  ],
  imports: [
    CategoryRoutingModule,

    /**
     * CUSTOM MODULES
     */
    AdminSharedModule,

    /**
     * NG ZORRO MODULES
     */
    NzSelectModule,
    NzModalModule,
    NzCollapseModule,
    NzPopconfirmModule,
    NzDatePickerModule,
    NzSliderModule,
    NzInputNumberModule,
    NzRadioModule,
    NzTreeSelectModule,
  ],
  providers: [CategoryService, FilterService, AdvertisementTypeService],
})
export class CategoryModule {}
