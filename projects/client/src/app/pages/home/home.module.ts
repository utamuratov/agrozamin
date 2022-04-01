import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponentsComponent } from './components/all-components/all-components.component';
import { BannerComponent } from './components/banner/banner.component';
import { NewsComponent } from './components/news/news.component';
import { CategoryComponent } from './components/category/category.component';
import { HistoryComponent } from './components/history/history.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { CreditsComponent } from './components/credits/credits.component';
import { CatalogMembersComponent } from './components/catalog-members/catalog-members.component';
import { PartnersComponent } from './components/partners/partners.component';
import { AgrozaminAppComponent } from './components/agrozamin-app/agrozamin-app.component';
/* NG-ZORRO */
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { HeaderComponent } from '../../components/header/header.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { FooterComponent } from '../../components/footer/footer.component';
import { FilterPipe } from '../../components/header/pipes/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutes,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    /* NG-Zorro */
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
    NzIconModule
  ],
  declarations: [
    HomeComponent,
    AllComponentsComponent,
    BannerComponent,
    NewsComponent,
    CategoryComponent,
    HistoryComponent,
    AdvertisementComponent,
    CreditsComponent,
    CatalogMembersComponent,
    PartnersComponent,
    AgrozaminAppComponent,
    HeaderComponent,
    FooterComponent,
    FilterPipe    
  ],
})
export class HomeModule {}
