import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NgModule } from '@angular/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { AdvertisementListHeaderModule } from '../../../shared/advertisement-list-header/advertisement-list-header.module';
import { GridModule } from '../../../shared/grid/grid.module';
import { SellerComponent } from './seller.component';
import { SellerRoutingModule } from './seller-routing.module';
import { SharedModule } from 'ngx-az-core';
import { SellerAdvertisementsComponent } from './components/seller-advertisements/seller-advertisements.component';
import { SellerInfoComponent } from './components/seller-info/seller-info.component';
import { NoImageModule } from '../../../shared/no-image/no-image.module';
import { TagModule } from '../../../shared/tag/tag.module';
import { FavoriteShareComplaintModule } from '../../../shared/favorite-share-complaint/favorite-share-complaint.module';
import { ActiveFromModule } from '../../../shared/active-from/active-from.module';

@NgModule({
  declarations: [
    SellerComponent,
    SellerAdvertisementsComponent,
    SellerInfoComponent,
  ],
  imports: [
    SellerRoutingModule,

    SharedModule,
    GridModule,
    AdvertisementListHeaderModule,
    NoImageModule,
    TagModule,
    FavoriteShareComplaintModule,
    ActiveFromModule,

    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzDrawerModule,
  ],
})
export class SellerPartnerModule {}
