import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CatalogMembersComponent } from "./catalog-members.component";
import { CatalogMembersRoutes } from "./catalog-members.routing";
import { CatalogUchastnikFilterComponent } from './components/catalog-uchastnik-filter/catalog-uchastnik-filter.component';
import { CatalogUchastnikSortComponent } from './components/catalog-uchastnik-sort/catalog-uchastnik-sort.component';
import { CatalogUchastnikRegisterComponent } from './components/catalog-uchastnik-register/catalog-uchastnik-register.component';
import { NzGridModule } from "ng-zorro-antd/grid";
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { CatalogUchastnikCardComponent } from './components/catalog-uchastnik-card/catalog-uchastnik-card.component';
import { CatalogMembersPartnerComponent } from './components/catalog-members-partner/catalog-members-partner.component';
import { PartnersMembersComponent } from './components/partners-members/partners.component';
import { CatalogPartnerInfoComponent } from './components/catalog-members-partner/components/catalog-partner-info/catalog-partner-info.component';
import { CatalogPartnerPostsComponent } from './components/catalog-members-partner/components/catalog-partner-posts/catalog-partner-posts.component';
import { CatalogPartnerCompanyComponent } from './components/catalog-members-partner/components/catalog-partner-company/catalog-partner-company.component';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { CatalogPartnerInfo1Component } from './components/catalog-members-partner/components/catalog-partner-info1/catalog-partner-info1.component';



@NgModule({
    imports: [
        CommonModule, 
        FormsModule, 
        ReactiveFormsModule, 
        CatalogMembersRoutes,
        NzGridModule,
        NzButtonModule,
        NzInputModule,
        NzIconModule,
        NzCheckboxModule,
        NzRateModule,
        NzCarouselModule,
        NzTypographyModule,
        NzPaginationModule
    ],
    declarations: [
        CatalogMembersComponent,
        CatalogUchastnikFilterComponent,
        CatalogUchastnikSortComponent,
        CatalogUchastnikRegisterComponent,
        CatalogUchastnikCardComponent,
        CatalogMembersPartnerComponent,
        PartnersMembersComponent,
        CatalogPartnerInfoComponent,
        CatalogPartnerPostsComponent,
        CatalogPartnerCompanyComponent,
        CatalogPartnerInfo1Component,
    ]
})

export class CatalogMembersModule {}