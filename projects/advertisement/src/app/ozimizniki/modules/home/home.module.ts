import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HistoryComponent } from './components/history/history.component';
import { PopularBoardComponent } from './components/popular-board/popular-board.component';
import {
  BannerModule,
  CarouselFooterModule,
  CreditsModule,
  NewsModule,
  PartnerModule,
} from 'ngx-az-core';

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
    BannerModule,
    CreditsModule,
    NewsModule,

    /**
     * NG ZORRO
     */
    NzButtonModule,
    NzGridModule,
    NzTypographyModule,
    NzCarouselModule,
    NzTagModule,
    NzDividerModule,
    NzIconModule,
    SwiperModule,
  ],
  declarations: [
    HomeComponent,
    CategoriesListComponent,
    HistoryComponent,
    PopularBoardComponent,
  ],
})
export class HomeModule {}
