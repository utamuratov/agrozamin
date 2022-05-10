import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.less']
})
export class SellersComponent implements OnInit {

  isOnline = true

  sellerInfo = [
    {
      img: '/assets/images/partner-Info-Img.png',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений'
    },
    {
      img: '/assets/images/partner-Info-Img1.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений'
    },
    {
      img: '/assets/images/partner-Info-Img3.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений'
    },
    {
      img: '/assets/images/partner-Info-Img2.jpg',
      name: 'Жахонгир Пардаев',
      date: 'На O’zimizniki 5 месяцев',
      advert: '36 объявлений'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
