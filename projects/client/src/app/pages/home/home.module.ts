import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './shared/header/header.component';
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
import { FooterComponent } from './shared/footer/footer.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  imports: [
    CommonModule, 
    HomeRoutes,
     NzButtonModule,
      FormsModule,
      NzGridModule,
      NzCarouselModule,
      NzCardModule,
      NzIconModule
    ],
  declarations: [
    HomeComponent,
    
    HeaderComponent,
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
    FooterComponent
  ],
})
export class HomeModule {}
