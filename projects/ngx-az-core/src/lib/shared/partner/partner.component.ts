import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-partner',
  templateUrl: './partner.component.html',
  styleUrls: ['./partner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerComponent {
  /**
   *
   */
  @Input()
  title = '';

  /**
   *
   */
  @Input()
  partners = [
    [
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
    ],
    [
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
    ],
    [
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
    ],
  ];

  /**
   *
   */
  readonly effect = 'scrollx';

  /**
   *
   */
  readonly carouselScroll = this.partners.flat();

  /**
   *
   * @param e
   */
  pre(e: NzCarouselComponent) {
    e.pre();
  }

  /**
   *
   * @param e
   */
  next(e: NzCarouselComponent) {
    e.next();
  }
}
