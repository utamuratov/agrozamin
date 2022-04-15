import { Component, OnInit } from '@angular/core';

export interface CategoryCard {
  img: string;
  text: string;
}

@Component({
  selector: 'az-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})
export class CategoryComponent implements OnInit {
  categoryCard: CategoryCard[] = [
    {img: '../../../../../assets/images/agrozamin/tractor.svg', text: 'Сельхозтехника'},
    {img: '../../../../../assets/images/agrozamin/seeds.svg', text: 'Семена'},
    {img: '../../../../../assets/images/agrozamin/fert.svg', text: 'Удобрения'},
    {img: '../../../../../assets/images/agrozamin/chemy.svg', text: 'Агрохимия'},
    {img: '../../../../../assets/images/agrozamin/cow.svg', text: 'Сельско-хозяйственные животные'},
    {img: '../../../../../assets/images/agrozamin/corn.svg', text: 'Зерно'},
    {img: '../../../../../assets/images/agrozamin/garden.svg', text: 'Сад и огород'},
    {img: '../../../../../assets/images/agrozamin/transport.svg', text: 'Спецтехника'},
    {img: '../../../../../assets/images/agrozamin/shield.svg', text: 'Средства защиты растений'},
    {img: '../../../../../assets/images/agrozamin/tech.svg', text: 'Фермерское оборудование'},
    {img: '../../../../../assets/images/agrozamin/rubber.svg', text: 'Резинотехнические изделия'},
    {img: '../../../../../assets/images/agrozamin/other.svg', text: 'Категория ?'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
