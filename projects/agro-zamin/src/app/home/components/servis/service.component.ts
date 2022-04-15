import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

export interface Service {
  logo: string;
  title: string;
  description: string;
  button: string;
  color: string;
}

@Component({
  selector: 'az-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.less'],
})
export class ServiceComponent implements OnInit {
  effect = 'scrollx';

  services: Service[][] = [
    [
      {
        logo: `./assets/images/agrozamin/ozimozniki-logo.svg`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
        color: '#EBF2FC',
      },
      {
        logo: `./assets/images/agrozamin/agroconsult-logo.svg`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
        color: '#FEECED',
      },
      {
        logo: `./assets/images/agrozamin/logo-business.svg`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
        color: '#F7EFFE',
      },
    ],
    [
      {
        logo: `./assets/images/agrozamin/ozimozniki-logo.svg`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
        color: '#EBF2FC',
      },
      {
        logo: `./assets/images/agrozamin/agroconsult-logo.svg`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
        color: '#FEECED',
      },
      {
        logo: `./assets/images/agrozamin/logo-business.svg`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
        color: '#F7EFFE',
      },
    ],
    [
      {
        logo: `./assets/images/agrozamin/ozimozniki-logo.svg`,
        title: 'Объявления',
        description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
        площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
        button: 'Разместить объявление',
        color: '#EBF2FC',
      },
      {
        logo: `./assets/images/agrozamin/agroconsult-logo.svg`,
        title: 'Онлайн консультант',
        description: `Для современного мира начало повседневной работы по формированию позиции
         требует анализа экономической целесообразности принимаемых решений.`,
        button: 'Получить консультацию',
        color: '#FEECED',
      },
      {
        logo: `./assets/images/agrozamin/logo-business.svg`,
        title: 'Маркетплейс для бизнеса',
        description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
         шанса для инновационных методов управления процессами.`,
        button: 'Начать продавать',
        color: '#F7EFFE',
      },
    ],
  ];

  serviceScroll = [
    {
      logo: `./assets/images/agrozamin/ozimozniki-logo.svg`,
      title: 'Объявления',
      description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
      площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
      button: 'Разместить объявление',
      color: '#EBF2FC',
    },
    {
      logo: `./assets/images/agrozamin/agroconsult-logo.svg`,
      title: 'Онлайн консультант',
      description: `Для современного мира начало повседневной работы по формированию позиции
       требует анализа экономической целесообразности принимаемых решений.`,
      button: 'Получить консультацию',
      color: '#FEECED',
    },
    {
      logo: `./assets/images/agrozamin/logo-business.svg`,
      title: 'Маркетплейс для бизнеса',
      description: `Для современного мира экономическая повестка сегодняшнего дня не оставляет
       шанса для инновационных методов управления процессами.`,
      button: 'Начать продавать',
      color: '#F7EFFE',
    },
    {
      logo: `./assets/images/agrozamin/agroconsult-logo.svg`,
      title: 'Онлайн консультант',
      description: `Для современного мира начало повседневной работы по формированию позиции
       требует анализа экономической целесообразности принимаемых решений.`,
      button: 'Получить консультацию',
      color: '#FEECED',
    },
    {
      logo: `./assets/images/agrozamin/ozimozniki-logo.svg`,
      title: 'Объявления',
      description: `Продажа и покупка товаров, модернизация вашего бизнеса. Использование
      площадки — это экономия вашего времени, оптимизация затрат и повышение эффективности.`,
      button: 'Разместить объявление',
      color: '#EBF2FC',
    },
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
