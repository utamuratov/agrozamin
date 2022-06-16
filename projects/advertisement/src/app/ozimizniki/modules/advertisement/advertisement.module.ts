import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdvertisementRoutes } from './advertisement.routing';
/* NG-ZORRO */
import { NzTypographyModule } from 'ng-zorro-antd/typography';
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
import { NzCardModule } from 'ng-zorro-antd/card';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
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
import { AdvertisementComponent } from './advertisement.component';
import { AdvertisementListPage } from './pages/advertisement-list/advertisement-list.page';
import { AdvertisementListByCategoryPage } from './pages/advertisement-list-by-category/advertisement-list-by-category.page';
import { AdvertisementDetailsPage } from './pages/advertisement-details/advertisement-details.page';
import { AdvertisementListComponent } from './components/advertisement-list/advertisement-list.component';
import { AdvertisementListHeaderComponent } from './components/advertisement-list/advertisement-list-header/advertisement-list-header.component';
import { JustAdvertisementComponent } from './components/advertise/just-advertisement.component';
import { SharedModule } from 'ngx-az-core';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AdvertisementRoutes,

    SharedModule,
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
    AdvertisementComponent,
    AdvertisementListPage,
    AdvertisementListByCategoryPage,
    AdvertisementDetailsPage,
    AdvertisementListComponent,
    AdvertisementListHeaderComponent,
    JustAdvertisementComponent,

    CategoryFilterComponent,
    SingleCategoryComponent,
    SimilarItemsComponent,
  ],
})
export class AdvertisementModule {}
