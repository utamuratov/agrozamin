import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.less'],
})
export class PartnersComponent implements OnInit {
  effect = 'scrollx';

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

  carouselScroll = this.partners.flat();

  constructor() {}

  ngOnInit() {
    console.log(this.carouselScroll);
  }

  pre(e: NzCarouselComponent) {
    e.pre();
  }
  next(e: NzCarouselComponent) {
    e.next();
  }
}
