import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CategoryComponent } from './category.component';
import { CategoryRoutes } from './category.routing';
/* NG-ZORRO */
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AllCategoriesComponent } from './components/AllCategories/AllCategories.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { CategoryItemComponent } from './components/category-item/category-item.component';
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
import { CategoryPageComponent } from './components/category-page/category-page.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { CategoryProductPageComponent } from './components/category-product-page/category-product-page.component';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SimilarItemsComponent } from './components/similar-items/similar-items.component';
import { SkeletonComponent } from './components/skeleton/skeleton.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CategoryRoutes,
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
    NzDropDownModule,
    NzDrawerModule
  ],
  declarations: [
    CategoryComponent,
    AllCategoriesComponent,
    CategoryItemComponent,
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
    SkeletonComponent,
  ],
})
export class CategoryModule {}
