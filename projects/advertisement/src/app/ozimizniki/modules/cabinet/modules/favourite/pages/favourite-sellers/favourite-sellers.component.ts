import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants, GridLogic } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { Seller } from '../../dto/seller.interface';
import { SellerService } from '../../services/seller.service';

import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { SwiperComponent } from 'swiper/angular';
SwiperCore.use([Navigation, Scrollbar]);

@Component({
  selector: 'az-sellers',
  templateUrl: './favourite-sellers.component.html',
  styleUrls: ['./favourite-sellers.component.less'],
})
export class FavouriteSellersComponent extends GridLogic<Seller> {
  /**
   * 
   */
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  /**
   *
   */
  isInlineCard = true;

  /**
   *
   * @param $data
   * @param cd
   * @param route
   */
  constructor(
    protected override $data: SellerService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router
  ) {
    super($data, cd);
    this.data =
      this.route.snapshot.data[AdvertisementConstants.RESOLVERS_SELLERS];
  }

  /**
   *
   */
  protected override init(): void {
    this.initQuery();
  }

  /**
   *
   */
  override loadData() {
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  navigateToSellerDetails(sellerId: number) {
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_SELLERS,
      sellerId,
    ]);
  }

  prev() {
    this.swiper.swiperRef.slidePrev()
  }

  next() {
    this.swiper.swiperRef.slideNext()
  }
}
