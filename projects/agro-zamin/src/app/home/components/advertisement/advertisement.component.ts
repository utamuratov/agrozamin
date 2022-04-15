import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
})
export class AdvertisementComponent implements OnInit {
  products = [
    [
      {
        img: '../../../../../assets/images/agrozamin/advert-card-1.jpg',
        title: 'Петрушка свежая, петрушка свежая',
        price: '659 875',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-2.jpg',
        title: 'Помидоры',
        price: '3 753',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-3.jpg',
        title: 'Картофель',
        price: '5 945',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-4.jpg',
        title: 'Редис',
        price: '659 875',
        tag: 'Сад и огород',
      },
    ],
    [
      {
        img: '../../../../../assets/images/agrozamin/advert-card-1.jpg',
        title: 'Петрушка свежая, петрушка свежая',
        price: '659 875',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-2.jpg',
        title: 'Помидоры',
        price: '3 753',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-3.jpg',
        title: 'Картофель',
        price: '5 945',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-4.jpg',
        title: 'Редис',
        price: '659 875',
        tag: 'Сад и огород',
      },
    ],
    [
      {
        img: '../../../../../assets/images/agrozamin/advert-card-1.jpg',
        title: 'Петрушка свежая, петрушка свежая',
        price: '659 875',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-2.jpg',
        title: 'Помидоры',
        price: '3 753',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-3.jpg',
        title: 'Картофель',
        price: '5 945',
        tag: 'Сад и огород',
      },
      {
        img: '../../../../../assets/images/agrozamin/advert-card-4.jpg',
        title: 'Редис',
        price: '659 875',
        tag: 'Сад и огород',
      },
    ],
  ];
  effect = 'scrollx';
  constructor() {}

  ngOnInit() {}

  pre(e: NzCarouselComponent) {
    e.pre();
  }

  next(e: NzCarouselComponent) {
    e.next();
  }
}
