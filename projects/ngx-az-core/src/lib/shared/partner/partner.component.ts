import { Component, ChangeDetectionStrategy, Input, ViewChild } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'az-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerComponent {
  @ViewChild('swiper') swiper!: SwiperComponent
  /**
   *
   */
  @Input()
  title = '';

  /**
   *
   */
  @Input()

  partnersCarousel = [
    {
      logo: './assets/images/partners-logo1.svg',
    },
    {
      logo: './assets/images/partners-logo2.svg',
    },
    {
      logo: './assets/images/partners-logo3.svg',
    },
    {
      logo: './assets/images/partners-logo4.svg',
    },
    {
      logo: './assets/images/partners-logo5.svg',
    },
    {
      logo: './assets/images/partners-logo1.svg',
    },
    {
      logo: './assets/images/partners-logo2.svg',
    },
    {
      logo: './assets/images/partners-logo3.svg',
    },
    {
      logo: './assets/images/partners-logo4.svg',
    },
  ]

  /**
   *
   */
  pre() {
    this.swiper.swiperRef.slidePrev()
  }

  /**
   *
   */
  next() {
    this.swiper.swiperRef.slideNext()
  }
}
