import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { CategoryComponent } from './components/category/category.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { CatalogMembersComponent } from './components/catalog-members/catalog-members.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { ServiceComponent } from './components/servis/service.component';
import { SwiperModule } from 'swiper/angular';
import {
  BannerModule,
  CarouselFooterModule,
  HistoryContentModule,
  PartnerModule,
} from 'ngx-az-core';
import { CreditsModule } from 'projects/ngx-az-core/src/lib/shared/credits/credits.module';
import { NewsModule } from 'projects/ngx-az-core/src/lib/shared/news/news.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,

    /**
     * NGX-AZ-CORE
     */
    CarouselFooterModule,
    PartnerModule,
    CreditsModule,
    BannerModule,
    NewsModule,
    HistoryContentModule,

    /* NG-Zorro */
    NzButtonModule,
    NzGridModule,
    NzTypographyModule,
    NzCarouselModule,
    NzTagModule,
    NzIconModule,
    SwiperModule,
  ],
  declarations: [
    HomeComponent,
    AllComponentsComponent,
    CategoryComponent,
    AdvertisementComponent,
    CatalogMembersComponent,
    ServiceComponent,
  ],
})
export class HomeModule {}
