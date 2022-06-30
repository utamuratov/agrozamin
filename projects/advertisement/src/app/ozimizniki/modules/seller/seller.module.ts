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

    NzIconModule,
    NzGridModule,
    NzButtonModule,
    NzTypographyModule,
    NzDrawerModule,
  ],
})
export class SellerPartnerModule {}
