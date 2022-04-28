import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent implements OnInit {

  categoryList = [
    {icon: './assets/images/tractor.svg', name: 'Сельхозтехника', id: 1},
    {icon: './assets/images/seeds.svg', name: 'Семена', id: 2},
    {icon: './assets/images/fert.svg', name: 'Удобрения', id: 3},
    {icon: './assets/images/chemy.svg', name: 'Агрохимия', id: 4},
    {icon: './assets/images/cow.svg', name: 'Сельско-хозяйственные животные', id: 5},
    {icon: './assets/images/corn.svg', name: 'Зерно', id: 6},
    {icon: './assets/images/garden.svg', name: 'Сад и огород', id: 7},
    {icon: './assets/images/transport.svg', name: 'Спецтехника', id: 8},
    {icon: './assets/images/shield.svg', name: 'Средства защиты растений', id: 9},
    {icon: './assets/images/tech.svg', name: 'Фермерское оборудование', id: 10},
    {icon: './assets/images/rubber.svg', name: 'Резинотехнические изделия', id: 11},
    {icon: './assets/images/other.svg', name: 'Название категорий', id: 12},
  ]

  constructor() { }

  ngOnInit() {
  }

}
