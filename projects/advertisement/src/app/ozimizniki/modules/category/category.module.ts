import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
/* NG-ZORRO */
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AllCategoriesComponent } from './components/AllCategories/AllCategories.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { AllCategoryItemsComponent } from './components/all-category-items/all-category-items.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { TagComponent } from './components/tag/tag.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoryProductPageComponent } from './pages/category-product-page/category-product-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SimilarItemsComponent } from './components/similar-items/similar-items.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { PaginationModule } from '../../../shared/pagination/pagination.module';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { CardModule } from '../../../shared/card/card.module';
import { SkeletonModule } from '../../../shared/skeleton/skeleton.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutes,

    PaginationModule,
    CardModule,
    SkeletonModule,

    /* NG-ZORRO */
    NzTypographyModule,
    NzGridModule,
    NzCollapseModule,
    NzFormModule,
    NzIconModule,
    NzSliderModule,
    NzInputModule,
    NzButtonModule,
    NzCheckboxModule,
    NzTagModule,
    NzCardModule,
    NzCarouselModule,
    NzRateModule,
    NzTabsModule,
    NzDividerModule,
    NzSkeletonModule,
    NzPaginationModule,
    NzPopoverModule,
    NzDropDownModule,
    NzDrawerModule,
    NzBreadCrumbModule,
    NzSelectModule,
  ],
  declarations: [
    CategoryComponent,
    AllCategoriesComponent,
    CategoryFilterComponent,
    AllCategoryItemsComponent,
    SortByComponent,
    TagComponent,
    AdvertiseComponent,
    CategoryPageComponent,
    SingleCategoryComponent,
    SubcategoryComponent,
    CategoryProductPageComponent,
    SimilarItemsComponent,
  ],
})
export class CategoryModule {}
