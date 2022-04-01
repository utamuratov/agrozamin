import { Component, OnInit } from '@angular/core';

export interface BannerCorusel {
  img: string;
  title: string;
  description: string;
  id?: number;
}

export interface BannerCard {
  img: string;
  title: string
}

@Component({
  selector: 'az-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
})
export class BannerComponent implements OnInit {
  bannerCarousel: BannerCorusel[] = [
    {
      id: 1,
      img: '../../../../../assets/images/agrozamin/big_slider.jpg',
      title: 'Электронная платформа участников агро рынка',
      description: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.',
    },
    {
      id: 2,
      img: 'https://www.indorama-agro.com/img/banner01.jpg',
      title: 'Электронная платформа участников агро рынка',
      description: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.',
    },
    {
      id: 3,
      img: 'https://i2.wp.com/www.teamdhaksha.com/wp-content/uploads/2019/07/Agri-New.jpg',
      title: 'Электронная платформа участников агро рынка',
      description: 'Использование площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.',
    },
  ];

  bannerCards: BannerCard[] = [
    {img: '../../../../../assets/images/agrozamin/banner-card-2.jpg', title: 'AgroZamin Объявления'},
    {img: '../../../../../assets/images/agrozamin/banner-card-3.jpg', title: 'Форум агрономов, дачников и садоводов'},
  ]

  constructor() {}

  ngOnInit() {}
}
