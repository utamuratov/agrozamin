import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { SimilarItemsComponent } from './components/similar-items/similar-items.component';
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
import { JustAdvertisementComponent } from './components/advertise/just-advertisement.component';
import { SharedModule, YoutubeVideoIdSplitterModule } from 'ngx-az-core';
import { CurrencyModule } from '../../../shared/currency/currency.module';
import { TagModule } from '../../../shared/tag/tag.module';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { ChildCategoryComponent } from './components/child-category/child-category.component';
import { BreadcrumbModule } from '../../../shared/breadcrumb/breadcrumb.module';
import { BreadcrumbAdvertisementComponent } from './components/breadcrumb-advertisement/breadcrumb-advertisement.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { NoImageModule } from '../../../shared/no-image/no-image.module';
import { ValueByInputTypeModule } from '../../../shared/value-by-input-type/value-by-input-type.module';
import { SortModule } from '../../../shared/sort/sort.module';
import { AdvertisementListHeaderModule } from '../../../shared/advertisement-list-header/advertisement-list-header.module';
import { GridModule } from '../../../shared/grid/grid.module';
import { FavoriteShareComplaintModule } from '../../../shared/favorite-share-complaint/favorite-share-complaint.module';
import { CardListModule } from '../../../shared/card-list/card-list.module';

@NgModule({
  imports: [
    AdvertisementRoutes,

    FormsModule,
    AngularYandexMapsModule,
    YouTubePlayerModule,

    SharedModule,
    PaginationModule,
    CardModule,
    CardListModule,
    GridModule,
    SkeletonModule,
    CurrencyModule,
    TagModule,
    BreadcrumbModule,
    YoutubeVideoIdSplitterModule,
    NoImageModule,
    ValueByInputTypeModule,
    SortModule,
    AdvertisementListHeaderModule,
    FavoriteShareComplaintModule,

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
    NzCarouselModule,
    NzTabsModule,
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
    JustAdvertisementComponent,
    ChildCategoryComponent,
    BreadcrumbAdvertisementComponent,

    CategoryFilterComponent,
    SimilarItemsComponent,
  ],
})
export class AdvertisementModule {}
