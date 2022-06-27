import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { map, Observable } from 'rxjs';
import { AdvertisementDetails } from '../../dto/advertisement-details.interface';
import { Advertisement } from '../../dto/advertisement.interface';
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
  similar$!: Observable<Advertisement[][]>;

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
  categorySequence!: string;

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
    private route: ActivatedRoute,
    private $advertisement: AdvertisementService,
    private $similar: AdvertisementSimilarService
  ) {
    this.route.params.subscribe(() => {
      this.data = this.route.snapshot.data['advertisment'];
      this.categorySequence =
        this.route.snapshot.params[
          AdvertisementConstants.ROUTER_PARAM_CATEGORY_ID
        ]; // 2_3_.. = categoryId_categoryId_..
      this.makeCarouselData();
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

  private call() {
    location.href = 'tel:' + this.phoneNumber;
  }

  /**
   *
   */
  getSimilarAdvertisements(advertisementId: number) {
    this.similar$ = this.$similar
      .getSimilarAdvertisements(advertisementId)
      .pipe(
        map((result) => {
          return this.advetisementsAsCarauselData(result);
        })
      );
  }

  /**
   *
   * @param result
   * @returns
   */
  private advetisementsAsCarauselData(result: Advertisement[]) {
    const length = result.length;
    const grouped = [];
    const step = 5;
    let from = 0;
    let to = from + step;

    const extra = length % step;
    for (let i = 0; i < extra; i++) {
      grouped.push(result.slice(from, to));
      from++;
      to++;
    }

    while (from < length) {
      grouped.push(result.slice(from, to));
      from = to;
      to += 5;
    }

    return grouped;
  }
}
