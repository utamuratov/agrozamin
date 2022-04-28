import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { SwiperModule } from 'swiper/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BannerComponent } from './components/banner/banner.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { HistoryComponent } from './components/history/history.component';
import { NewsComponent } from './components/news/news.component';
import { CreditsComponent } from './components/credits/credits.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AgrozaminAppComponent } from './components/banner-app/agrozamin-app.component';
import { PopularBoardComponent } from './components/popular-board/popular-board.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    FormsModule,
    ReactiveFormsModule,

    /* *** */

    NzButtonModule,
    NzGridModule,
    NzTypographyModule,
    NzCarouselModule,
    NzIconModule,
    NzCardModule,
    NzTagModule,
    NzSelectModule,
    NzDividerModule,
    NzMenuModule,
    NzInputModule,
    NzCascaderModule,
    NzDrawerModule,
    NzCardModule,
    NzIconModule,
    NzPopoverModule,
    NzDropDownModule,
    NzBackTopModule,
    SwiperModule,
  ],
  declarations: [
    HomeComponent,
    BannerComponent,
    CategoriesListComponent,
    HistoryComponent,
    NewsComponent,
    CreditsComponent,
    PartnersComponent,
    AgrozaminAppComponent,
    PopularBoardComponent
  ],
})
export class HomeModule {}
