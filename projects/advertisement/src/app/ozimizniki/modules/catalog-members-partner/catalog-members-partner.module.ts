import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSliderModule } from 'ng-zorro-antd/slider';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CatalogPartnerInfo1Component } from './components/catalog-partner-info1/catalog-partner-info1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogMembersPartnerRoutingModule } from './catalog-members-partner-routing.module';
import { CatalogMembersPartnerComponent } from './catalog-members-partner.component';
import { CatalogPartnerPostsComponent } from './components/catalog-partner-posts/catalog-partner-posts.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { FormsModule } from '@angular/forms';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { SkletonComponent } from './components/skleton/skleton.component';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { FilterComponent } from './components/filter/filter.component';
import { PartnerItemComponent } from './components/partner-item/partner-item.component';
import { TagComponent } from './components/tag/tag.component';


@NgModule({
  declarations: [
    CatalogMembersPartnerComponent,
    CatalogPartnerInfo1Component,
    CatalogPartnerPostsComponent,
    SortByComponent,
    SkletonComponent,
    FilterComponent,
    PartnerItemComponent,
    TagComponent,
  ],
  imports: [
    CommonModule, 
    CatalogMembersPartnerRoutingModule,

    FormsModule,
    NzIconModule,
    NzCarouselModule,
    NzGridModule,
    NzButtonModule,
    NzRateModule,
    NzTypographyModule,
    NzDropDownModule,
    NzSkeletonModule,
    NzDrawerModule,
    NzPaginationModule,
    NzCollapseModule,
    NzCheckboxModule,
    NzPopoverModule,
    NzSliderModule,
    NzInputModule
  ],
})
export class CatalogMembersPartnerModule {}
