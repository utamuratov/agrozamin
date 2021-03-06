import { Component, HostListener, OnInit } from '@angular/core';

export interface BannerCorusel {
  imgBg: string;
  title: string;
  description: string;
  id?: number;
  button: string;
  patternBg: string;
  slideImg: string;
}

@Component({
  selector: 'az-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less'],
})
export class BannerComponent implements OnInit {
  effect = 'scrollx';
  dots = true;

  bannerCarousel: BannerCorusel[] = [
    {
      id: 1,
      imgBg: './assets/images/banner-bg-1.jpg',
      title: 'O’zimizniki – ваш надёжный партнер',
      description: `Онлайн-платформа, объединяющая современные решения для фермеров: 
      продажа и покупка товаров, модернизация вашего бизнеса. Использование
      площадки — это экономия вашего времени, оптимизация затрат.`,
      button: 'Подать объявление',
      patternBg: './assets/images/circles-banner-pattern.png',
      slideImg: './assets/images/banner-1.png',
    },
    {
      id: 2,
      imgBg: './assets/images/banner-bg-2.jpg',
      title: 'AgroConsult – онлайн консультант',
      description: `Но сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус.`,
      button: 'Получить консультацию',
      patternBg: './assets/images/circles-banner-pattern-2.png',
      slideImg: './assets/images/banner-2.png',
    },
    {
      id: 3,
      imgBg: './assets/images/banner-bg-3.jpg',
      title: 'AgroBusiness – продажи на новом уровне',
      description: `Лишь многие известные личности, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов.`,
      button: 'Начать продавать',
      patternBg: './assets/images/circles-banner-pattern-3.png',
      slideImg: './assets/images/banner-3.png',
    },
  ];

  ngOnInit() {
    this.dots = this.clientWidth();
  }

  clientWidth() {
    if (window.innerWidth < 480) {
      return false;
    } else {
      return true;
    }
  }

  @HostListener('window:resize') onResize() {
    this.dots = this.clientWidth();
  }
}
