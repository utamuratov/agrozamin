import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.less'],
})
export class SellersComponent implements OnInit {
  isOnline = true;
  // counter = 0;
  // tagCategory: any = [];

  sellerInfo = [
    {
      img: '/assets/images/partner-Info-Img.png',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений',
    },
    {
      img: '/assets/images/partner-Info-Img1.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений',
    },
    {
      img: '/assets/images/partner-Info-Img3.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений',
    },
    {
      img: '/assets/images/partner-Info-Img2.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений',
    },
  ];

  tags = [
    { id: 1, name: 'Спецтехника' },
    { id: 1, name: 'С/х животные' },
    { id: 1, name: 'Спецтехника' },
    { id: 1, name: 'Фермерское оборудование' },
  ];

  constructor() {}

  ngOnInit(): void {
    // this.tagCategory = this.tags;
  }

  onResize(e: any) {
    console.log(e.target.innerWidth);

    // if (e.target.innerWidth < 992) {
    //   this.tagCategory = this.tags.filter((el: any, index: number) => el[index] < 3);
    //   this.counter = 1;
    // }
    // else if (e.target.innerWidth < 768) {
    //   this.counter = 2;
    // }
    // else if (e.target.innerWidth < 576) {
    //   this.counter = 3;
    // }
  }
}
