import { ChangeDetectionStrategy, Component } from '@angular/core';

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'az-carousel-footer',
  templateUrl: './carousel-footer.component.html',
  styleUrls: ['./carousel-footer.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselFooterComponent {
  carousel = [
    {
      title: 'Скачай уникальное мобильное приложение O’zimizniki',
      text: [
        {
          icon: './assets/images/agrozaminAppIcon1.png',
          text: 'Самый большой каталог поставщиков продукции и услуг1',
        },
        {
          icon: './assets/images/agrozaminAppIcon2.png',
          text: 'Незаменимый помощник и удобные сервисы в одном месте1',
        },
        {
          icon: './assets/images/agrozaminAppIcon3.png',
          text: 'Дополнительные финансовые возможности напрямую от Агробанка1',
        },
      ],
    },
    {
      title: 'Скачай уникальное мобильное приложение O’zimizniki text2',
      text: [
        {
          icon: './assets/images/agrozaminAppIcon1.png',
          text: 'Самый большой каталог поставщиков продукции и услуг2',
        },
        {
          icon: './assets/images/agrozaminAppIcon2.png',
          text: 'Незаменимый помощник и удобные сервисы в одном месте2',
        },
        {
          icon: './assets/images/agrozaminAppIcon3.png',
          text: 'Дополнительные финансовые возможности напрямую от Агробанка2',
        },
      ],
    },
    {
      title: 'Скачай уникальное мобильное приложение O’zimizniki text 3',
      text: [
        {
          icon: './assets/images/agrozaminAppIcon1.png',
          text: 'Самый большой каталог поставщиков продукции и услуг3',
        },
        {
          icon: './assets/images/agrozaminAppIcon2.png',
          text: 'Незаменимый помощник и удобные сервисы в одном месте3',
        },
        {
          icon: './assets/images/agrozaminAppIcon3.png',
          text: 'Дополнительные финансовые возможности напрямую от Агробанка3',
        },
      ],
    },
  ];
}
