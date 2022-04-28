import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-agrozamin-app',
  templateUrl: './agrozamin-app.component.html',
  styleUrls: ['./agrozamin-app.component.less'],
})
export class AgrozaminAppComponent implements OnInit {
  carousel = [
    {
      title: 'Скачай уникальное мобильное приложение O’zimizniki',
      text: [
        {
          icon: './assets/images/agrozaminAppIcon1.png',
          text: 'Самый большой каталог поставщиков продукции и услуг',
        },
        {
          icon: './assets/images/agrozaminAppIcon2.png',
          text: 'Незаменимый помощник и удобные сервисы в одном месте',
        },
        {
          icon: './assets/images/agrozaminAppIcon3.png',
          text: 'Дополнительные финансовые возможности напрямую от Агробанка',
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

  constructor() {}

  ngOnInit() {}
}
