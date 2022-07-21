import { ChangeDetectionStrategy, Component } from '@angular/core';

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
  selector: 'az-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  bannerCarousel: BannerCorusel[] = [
    {
      id: 1,
      imgBg: './assets/images/agrozamin/banner-bg-1.jpg',
      title: 'O’zimizniki – ваш надёжный партнер',
      description: `Онлайн-платформа, объединяющая современные решения для фермеров: 
      продажа и покупка товаров, модернизация вашего бизнеса. Использование
      площадки — это экономия вашего времени, оптимизация затрат.`,
      button: 'Подать объявление',
      patternBg: './assets/images/agrozamin/circles-banner-pattern.png',
      slideImg: './assets/images/agrozamin/banner-1.png',
    },
    {
      id: 2,
      imgBg: './assets/images/agrozamin/banner-bg-2.jpg',
      title: 'AgroConsult – онлайн консультант',
      description: `Но сделанные на базе интернет-аналитики выводы, вне зависимости от их уровня, должны быть смешаны с не уникальными данными до степени совершенной неузнаваемости, из-за чего возрастает их статус.`,
      button: 'Получить консультацию',
      patternBg: './assets/images/agrozamin/circles-banner-pattern-2.png',
      slideImg: './assets/images/agrozamin/banner-2.png',
    },
    {
      id: 3,
      imgBg: './assets/images/agrozamin/banner-bg-3.jpg',
      title: 'AgroBusiness – продажи на новом уровне',
      description: `Лишь многие известные личности, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов.`,
      button: 'Начать продавать',
      patternBg: './assets/images/agrozamin/circles-banner-pattern-3.png',
      slideImg: './assets/images/agrozamin/banner-3.png',
    },
  ];
}
