import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

export interface Service {
  logo: string;
  title: string;
  description: string;
  button: string;
}

@Component({
  selector: 'az-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less'],
})
export class ServiceComponent implements OnInit {
  effect = 'scrollx';

  service: Service[][] = [
    [
      {
        logo: `../../../../../assets/images/agrozamin/o'zimizniki_logo.png`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agroconsult_logo.png`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agrobusiness_logo.png`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
      },
    ],
    [
      {
        logo: `../../../../../assets/images/agrozamin/o'zimizniki_logo.png`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agroconsult_logo.png`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agrobusiness_logo.png`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
      },
    ],
    [
      {
        logo: `../../../../../assets/images/agrozamin/o'zimizniki_logo.png`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agroconsult_logo.png`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
      },
      {
        logo: `../../../../../assets/images/agrozamin/agrobusiness_logo.png`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
      },
    ],
  ];

  constructor() {}

  ngOnInit(): void {}

  pre(e: NzCarouselComponent) {
    e.pre();
  }
  next(e: NzCarouselComponent) {
    e.next();
  }
}
