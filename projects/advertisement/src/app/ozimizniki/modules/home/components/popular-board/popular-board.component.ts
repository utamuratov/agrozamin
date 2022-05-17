import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-popular-board',
  templateUrl: './popular-board.component.html',
  styleUrls: ['./popular-board.component.less']
})
export class PopularBoardComponent implements OnInit {

  cardAdverts = [
    {
      img: '/assets/images/card-img-1.jpg',
      tag: 'Сельхозтехника',
      title: 'Кормоуборочный комбайн ',
      price: '659 875 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-2.jpg',
      tag: 'Семена',
      title: 'Подсолнечник',
      price: '3 261 сум',
      address: `ОАО “Вымпел”, Бухара`
    },
    {
      img: '/assets/images/card-img-3.jpg',
      tag: 'С/х животные',
      title: 'Племенные бараны',
      price: '659 875 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-4.jpg',
      tag: 'Зерно',
      title: 'Ячмень',
      price: '659 875 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-5.jpg',
      tag: 'Сад и огород',
      title: 'Картофель свежий',
      price: '1 747 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-6.jpg',
      tag: 'Зерно',
      title: 'Кукуруза “Элита”',
      price: '1 153 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-7.jpg',
      tag: 'С/х животные',
      title: 'Крупный рогатый скот',
      price: '3 494 297 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-8.jpg',
      tag: 'Семена',
      title: 'Семена Арбуз Холодок',
      price: '1 747 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-9.jpg',
      tag: 'С/х животные',
      title: 'Цыплята бройлер cobb-500',
      price: '5 823 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
    {
      img: '/assets/images/card-img-10.jpg',
      tag: 'Сельхозтехника',
      title: 'Овес',
      price: '1 048 сум',
      address: `ОАО “Вымпел”, Нурата`
    },
  ]


  constructor() { }

  ngOnInit() {
  }

}
