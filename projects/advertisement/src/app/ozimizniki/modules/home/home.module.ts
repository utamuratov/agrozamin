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
import { HistoryComponent } from './components/history/history.component';
import { PopularBoardComponent } from './components/popular-board/popular-board.component';
import {
  CreditsModule,
  NewsModule,
} from 'ngx-az-core';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CardModule } from '../../../shared/card/card.module';
import { BannerModule } from './components/banner/banner.module';
import { HistoryContentComponent } from './components/history-content/history-content.component';
import { PartnerModule } from './components/partner/partner.module';
import { CarouselFooterModule } from './components/carousel-footer/carousel-footer.module';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,

    /**
     *
     */
    CarouselFooterModule,
    PartnerModule,
    BannerModule,
    CreditsModule,
    NewsModule,
    CardModule,
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
    CategoryListComponent,
    HistoryComponent,
    PopularBoardComponent,
    HistoryContentComponent
  ],
})
export class HomeModule {}
