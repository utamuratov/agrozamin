import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-similar-items',
  templateUrl: './similar-items.component.html',
  styleUrls: ['./similar-items.component.less'],
})
export class SimilarItemsComponent implements OnInit {
  similarList = [
    {
      items: [
        {
          id: 1,
          title: 'Кормоуборочный комбайн RSM F 2650',
          price: 471147795,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'RSM F 2650 - высокопроизводительный кормоуборочный комбайн, способный убирать все виды силосуемых кормовых культур, обеспечивая максимальное качество конечного продукта. Данная машина пригодна для полей ...',
          img: './assets/images/agrozamin/similar-card-1.jpg',
          category: 'Сельхозтехника',
        },
        {
          id: 2,
          title: 'Подсолнечник',
          price: 3261,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Бухарская область, город Бухара',
          city: 'Бухара',
          text: 'По времени созревания разновидности сорта Пионер могут быть скороспелыми, созревающими за 80-90 дней; ранними, созревающими за 100-115 дней; средними, срок их созревания длится до 125 дней. Раннеспелые сорта ...',
          img: './assets/images/agrozamin/similar-card-2.jpg',
          category: 'Семена',
        },
        {
          id: 3,
          title: 'Когенерационная установка Quanto 2300 MWM NG OM LB 50Hz S',
          price: null,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Самаркандская область, город Шахрисабз',
          city: 'Шахрисабз',
          text: 'Когенерационные установки представляют собой технологическое оборудование, используемое для совместного производства электро- и тепловой энергии. Процесс когенерации осуществляется посредством',
          img: './assets/images/agrozamin/similar-card-3.jpg',
          category: 'Фермерское оборудование',
        },
        {
          id: 4,
          title: 'Соя',
          price: 419,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Зерно сои МЕЗЕНКА',
          img: './assets/images/agrozamin/similar-card-4.jpg',
          category: 'Зерно',
        },
        {
          id: 5,
          title: 'Племенные бараны',
          price: 659875,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Баран на племя, возраст 3 года, порода дорпер+тексель. Скидка от 4-х шт.',
          img: './assets/images/agrozamin/similar-card-5.jpg',
          category: 'С/х животные',
        },
      ],
    },
    {
      items: [
        {
          id: 1,
          title: 'Кормоуборочный комбайн RSM F 2650',
          price: 471147795,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'RSM F 2650 - высокопроизводительный кормоуборочный комбайн, способный убирать все виды силосуемых кормовых культур, обеспечивая максимальное качество конечного продукта. Данная машина пригодна для полей ...',
          img: './assets/images/agrozamin/similar-card-3.jpg',
          category: 'Сельхозтехника',
        },
        {
          id: 2,
          title: 'Подсолнечник',
          price: 3261,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Бухарская область, город Бухара',
          city: 'Бухара',
          text: 'По времени созревания разновидности сорта Пионер могут быть скороспелыми, созревающими за 80-90 дней; ранними, созревающими за 100-115 дней; средними, срок их созревания длится до 125 дней. Раннеспелые сорта ...',
          img: './assets/images/agrozamin/similar-card-5.jpg',
          category: 'Семена',
        },
        {
          id: 3,
          title: 'Когенерационная установка Quanto 2300 MWM NG OM LB 50Hz S',
          price: null,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Самаркандская область, город Шахрисабз',
          city: 'Шахрисабз',
          text: 'Когенерационные установки представляют собой технологическое оборудование, используемое для совместного производства электро- и тепловой энергии. Процесс когенерации осуществляется посредством',
          img: './assets/images/agrozamin/similar-card-1.jpg',
          category: 'Фермерское оборудование',
        },
        {
          id: 4,
          title: 'Соя',
          price: 419,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Зерно сои МЕЗЕНКА',
          img: './assets/images/agrozamin/similar-card-5.jpg',
          category: 'Зерно',
        },
        {
          id: 5,
          title: 'Племенные бараны',
          price: 659875,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Баран на племя, возраст 3 года, порода дорпер+тексель. Скидка от 4-х шт.',
          img: './assets/images/agrozamin/similar-card-4.jpg',
          category: 'С/х животные',
        },
      ],
    },
    {
      items: [
        {
          id: 1,
          title: 'Кормоуборочный комбайн RSM F 2650',
          price: 471147795,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'RSM F 2650 - высокопроизводительный кормоуборочный комбайн, способный убирать все виды силосуемых кормовых культур, обеспечивая максимальное качество конечного продукта. Данная машина пригодна для полей ...',
          img: './assets/images/agrozamin/similar-card-2.jpg',
          category: 'Сельхозтехника',
        },
        {
          id: 2,
          title: 'Подсолнечник',
          price: 3261,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Бухарская область, город Бухара',
          city: 'Бухара',
          text: 'По времени созревания разновидности сорта Пионер могут быть скороспелыми, созревающими за 80-90 дней; ранними, созревающими за 100-115 дней; средними, срок их созревания длится до 125 дней. Раннеспелые сорта ...',
          img: './assets/images/agrozamin/similar-card-4.jpg',
          category: 'Семена',
        },
        {
          id: 3,
          title: 'Когенерационная установка Quanto 2300 MWM NG OM LB 50Hz S',
          price: null,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Самаркандская область, город Шахрисабз',
          city: 'Шахрисабз',
          text: 'Когенерационные установки представляют собой технологическое оборудование, используемое для совместного производства электро- и тепловой энергии. Процесс когенерации осуществляется посредством',
          img: './assets/images/agrozamin/similar-card-5.jpg',
          category: 'Фермерское оборудование',
        },
        {
          id: 4,
          title: 'Соя',
          price: 419,
          unit: 2,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Зерно сои МЕЗЕНКА',
          img: './assets/images/agrozamin/similar-card-1.jpg',
          category: 'Зерно',
        },
        {
          id: 5,
          title: 'Племенные бараны',
          price: 659875,
          unit: 1,
          company: 'ОАО “Вымпел”',
          address: 'Ташкентская область, город Ташкент',
          city: 'Ташкент',
          text: 'Баран на племя, возраст 3 года, порода дорпер+тексель. Скидка от 4-х шт.',
          img: './assets/images/agrozamin/similar-card-3.jpg',
          category: 'С/х животные',
        },
      ],
    },
  ];
  defaultImage = './assets/images/agrozamin/default-img-card.jpg';
  constructor() {}

  ngOnInit() {}

  routeClick(id: number) {
  }

  next(e:NzCarouselComponent) {
    e.next()
  }

  pre(e:NzCarouselComponent) {
    e.pre()
  }
}
