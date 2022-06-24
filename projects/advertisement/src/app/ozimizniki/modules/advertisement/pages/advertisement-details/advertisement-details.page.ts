import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { AdvertisementDetails } from '../../dto/advertisement-details.interface';

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
  activeCarauselItemIndex = 0;

  /**
   *
   */
  isVisibleMap = false;

  /**
   *
   * @param route
   */
  constructor(private route: ActivatedRoute) {
    this.data = this.route.snapshot.data['advertisment'];
    this.makeCarouselData();
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
}
