import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Advertisement, Constants } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { prefixPath } from 'projects/advertisement/src/app/core/utilits/advertisement.utilits';
import { CategoryForBreadcrumb } from 'projects/advertisement/src/app/shared/models/category-for-breadcrumb.interface';
import { FavouriteService } from 'projects/advertisement/src/app/shared/services/favourite.service';
import { Observable } from 'rxjs';
import { AdvertisementDetails } from '../../dto/advertisement-details.interface';
import { AdvertisementSimilarService } from '../../services/advertisement-similar.service';
import { AdvertisementService } from '../../services/advertisement.service';

@Component({
  templateUrl: './advertisement-details.page.html',
  styleUrls: ['./advertisement-details.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementDetailsPage {
  /**
   *
   */
  data!: AdvertisementDetails;

  /**
   *
   */
  similar$!: Observable<Advertisement[]>;

  /**
   *
   */
  isShowedPhoneNumber = false;

  /**
   *
   */
  activeCarauselItemIndex = 0;

  /**
   *
   */
  isVisibleMap = false;

  /**
   *
   */
  categoriesForBreadcrumb!: CategoryForBreadcrumb[];

  /**
   *
   */
  get phoneNumber(): number {
    return this.data.contact.phone || this.data.created_by.phone;
  }

  /**
   *
   * @param route
   */
  constructor(
    private cd: ChangeDetectorRef,
    @Inject(DOCUMENT) private document: Document,
    private route: ActivatedRoute,
    private $advertisement: AdvertisementService,
    private $favourite: FavouriteService,
    private $similar: AdvertisementSimilarService,
    private router: Router
  ) {
    this.route.params.subscribe(() => {
      this.data =
        this.route.snapshot.data[
          AdvertisementConstants.RESOLVERS_ADVERTISEMENT_DETAILS
        ];

      this.categoriesForBreadcrumb =
        this.route.snapshot.data[
          AdvertisementConstants.RESOLVERS_BREADCRUMB_BY_CATEGORY_SEQUENCE
        ];

      this.makeCarouselData();
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private makeCarouselData() {
    this.data.carauselData = [];
    if (this.data.video_url) {
      this.data.carauselData.push({ type: 'video', src: this.data.video_url });
    }
    this.data.files.forEach((file) => {
      this.data.carauselData.push({ type: 'img', src: file.file });
    });
    this.getSimilarAdvertisements(this.data.id);
  }

  /**
   *
   * @param carousel
   */
  next(carousel: NzCarouselComponent) {
    carousel.next();
  }

  /**
   *
   * @param carousel
   */
  previous(carousel: NzCarouselComponent) {
    carousel.pre();
  }

  /**
   *
   * @param index
   * @param carousel
   */
  selectSliderItem(index: number, carousel: NzCarouselComponent) {
    this.activeCarauselItemIndex = index;
    carousel.goTo(index);
  }

  /**
   *
   * @param event
   */
  handleActiveCarousel(event: number) {
    const carauselDataLength = this.data.carauselData.length;
    this.activeCarauselItemIndex =
      (event + carauselDataLength) % carauselDataLength;
  }

  /**
   *
   */
  showPhoneNumber(advertisementId: number) {
    if (this.isShowedPhoneNumber) {
      this.call();
      return;
    }

    this.$advertisement.showPhoneNumber(advertisementId).subscribe((result) => {
      if (result.success) {
        this.isShowedPhoneNumber = true;
        this.cd.markForCheck();
        this.call();
      }
    });
  }

  /**
   *
   */
  private call() {
    this.document.location.href = 'tel:' + this.phoneNumber;
  }

  /**
   *
   */
  getSimilarAdvertisements(advertisementId: number) {
    this.similar$ = this.$similar.getSimilarAdvertisements(advertisementId);
  }

  /**
   *
   * @param sellerId
   */
  navigateToSeller(sellerId: number) {
    this.router.navigate([
      prefixPath,
      Constants.DEFAULT_LANGUAGE_CODE,
      AdvertisementConstants.ROUTER_PATH_SELLERS,
      sellerId,
    ]);
  }

  /**
   *
   * @param advertisement
   */
  toggleFavourite(advertisement: Advertisement) {
    this.$favourite
      .addDeleteFavourite({ announcement_id: advertisement.id })
      .subscribe((result) => {
        if (result.success) {
          advertisement.favorite = !advertisement.favorite;
          this.cd.markForCheck();
        }
      });
  }
}
