import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'az-favourite-advert',
  templateUrl: './favourite-advert.component.html',
  styleUrls: ['./favourite-advert.component.less']
})
export class FavouriteAdvertComponent implements OnInit {

  isActive = false

  adverticement = [
    {
      img: '/assets/images/kombayn1.jpg',
      imgText: 'Сельхозтехника',
      title: 'Кормоуборочный комбайн RSM F 2650',
      desc: `RSM F 2650 - высокопроизводительный кормоуборочный комбайн,
      способный убирать все виды силосуемых кормовых культур,
      обеспечивая максимальное качество конечного продукта. Данная
      машина пригодна для полей ...`,
      price: '45 659 875 сум'
    },
    {
      img: '/assets/images/semena.jpg',
      imgText: 'Семена',
      title: 'Подсолнечник',
      desc: `По времени созревания разновидности сорта Пионер могут 
      быть скороспелыми, созревающими за 80-90 дней;ранними, созревающими за 100-115 дней; средними, 
      срок их созревания длится до 125 дней. Раннеспелые сорта ...`,
      price: '3 261 сум'
    },
    {
      img: '/assets/images/tedom.jpg',
      imgText: 'Фермерское оборудование',
      title: 'Когенерационная установка Quanto 2300 MWM NG OM LB 50Hz S',
      desc: `Когенерационные установки представляют собой технологическое оборудование, 
      используемое для совместного производства электро- и 
      тепловой энергии. Процесс когенерации осуществляется посредством `,
      price: 'Цена по запросу'
    },
    {
      img: '/assets/images/karto\'shka.jpg',
      imgText: 'Зерно',
      title: 'Соя',
      desc: `Зерно сои МЕЗЕНКА`,
      price: '419 сум'
    },
    {
      img: '/assets/images/sheep.jpg',
      imgText: 'Фермерское оборудование',
      title: 'Племенные бараны',
      desc: `Баран на племя, возраст 3 года, порода дорпер+тексель. Скидка от 4-х шт.`,
      price: '659 875 сум'
    },
    {
      img: '/assets/images/kabel.jpg',
      imgText: 'Резинотехнические изделия',
      title: 'Шланг ПВХ',
      desc: `Шланг ПВХ – прочная и практичная альтернатива резиновым изделиям. 
      Используемый в его составе поливинилхлорид 
      представляет собой эластичный полимер, способный выдерживать интенсивные `,
      price: '132 783 сум'
    }
  ]

  @Output() handleGridOrList = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit(): void {
  }

  isGrid() {
    this.isActive = false;
    this.handleGridOrList.emit(false)
  }
  
  isList() {
    this.isActive = true;
    this.handleGridOrList.emit(true)
  }

}
