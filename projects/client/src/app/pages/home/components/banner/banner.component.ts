import { Component, OnInit } from '@angular/core';

export interface BannerCorusel {
  img: string;
  title: string;
  description: string;
  id?: number;
  button: string
}

@Component({
  selector: 'az-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
})
export class BannerComponent implements OnInit {
  
  effect = 'scrollx';
  
  bannerCarousel: BannerCorusel[] = [
    {
      id: 1,
      img: '../../../../../assets/images/agrozamin/banner-bg-1.jpg',
      title: 'O’zimizniki – ваш надёжный партнер',
      description: `Онлайн-платформа, объединяющая современные решения для фермеров: 
      продажа и покупка товаров, модернизация вашего бизнеса. Использование
      площадки — это экономия вашего времени, оптимизация затрат.`,
      button: 'Подать объявление'
    },
    {
      id: 2,
      img: '../../../../../assets/images/agrozamin/banner_slider2.jpg',
      title: 'AgroBusiness – продажи на новом уровне',
      description: `Лишь многие известные личности, которые представляют собой яркий пример континентально-европейского
       типа политической культуры, будут указаны как претенденты на роль ключевых факторов.`,
       button: 'Начать продавать'
    },
    {
      id: 3,
      img: '../../../../../assets/images/agrozamin/banner_slider3.jpg',
      title: 'AgroConsult – онлайн консультант',
      description: `Но сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть смешаны 
      с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус.`,
      button: 'Получить консультацию'
    },
  ];


  constructor() {}

  ngOnInit() {}
}
