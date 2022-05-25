import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { CatalogPartnerInfo1Component } from './components/catalog-partner-info1/catalog-partner-info1.component';
import { CatalogPartnerCompanyComponent } from './components/catalog-partner-company/catalog-partner-company.component';
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

@NgModule({
  declarations: [
    CatalogMembersPartnerComponent,
    CatalogPartnerCompanyComponent,
    CatalogPartnerInfo1Component,
    CatalogPartnerPostsComponent,
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
    NzTypographyModule
  ],
})
export class CatalogMembersPartnerModule {}
