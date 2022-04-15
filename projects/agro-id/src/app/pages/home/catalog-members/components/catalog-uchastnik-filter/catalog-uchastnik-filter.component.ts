import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-catalog-uchastnik-filter',
  templateUrl: './catalog-uchastnik-filter.component.html',
  styleUrls: ['./catalog-uchastnik-filter.component.less']
})
export class CatalogUchastnikFilterComponent implements OnInit {

  array = [
    {
      title: 'Все участники',
      sum: 546
    },
    {
      title: 'Сельхозтехника',
      sum: 546
    },
    {
      title: 'Семена',
      sum: 546
    },
    {
      title: 'Удобрения',
      sum: 546
    },
    {
      title: 'Агрохимия',
      sum: 546
    },
    {
      title: 'Сельскохозяйственные животные',
      sum: 546
    },
    {
      title: 'Зерно',
      sum: 546
    },
    {
      title: 'Сад и огород',
      sum: 546
    },
    {
      title: 'Спецтехника',
      sum: 546
    },
    {
      title: 'Средства защиты растений',
      sum: 546
    },
    {
      title: 'Фермерское оборудование',
      sum: 546
    },
    {
      title: 'Резинотехнические изделия',
      sum: 546
    },

  ]

  checked = true;

  regions = [
    {title: 'Все участники'},
    {title: 'Андижанская область'},
    {title: 'Все участники'},
    {title: 'Бухарская область'},
    {title: 'Джизакская область'},
    {title: 'Каракалпакстан'},
    {title: 'Ташкентская область'},
    {title: 'Самаркандская область'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
