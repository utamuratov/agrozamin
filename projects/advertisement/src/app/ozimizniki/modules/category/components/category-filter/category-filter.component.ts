import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'az-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrls: ['./category-filter.component.less'],
})
export class CategoryFilterComponent implements OnInit {
  formFilter!: FormGroup;
  value2 = [0, 999000000];
  value1 = 1

  regions = [
    { id: 1, region: 'Андижанская область' },
    { id: 2, region: 'Бухарская область' },
    { id: 3, region: 'Джизакская область' },
    { id: 4, region: 'Каракалпакстан' },
    { id: 5, region: 'Кашкадарьинская область' },
    { id: 6, region: 'Навоийская область' },
    { id: 7, region: 'Наманганская область' },
    { id: 8, region: 'Самаркандская область' },
    { id: 9, region: 'Сурхандарьинская область' },
    { id: 10, region: 'Сырдарьинская область' },
    { id: 11, region: 'Ташкентская область' },
    { id: 12, region: 'Ферганская область' },
    { id: 13, region: 'Хорезмская область' },
  ];

  manufactures = [
    { id: 1, name: 'Asus' },
    { id: 2, name: 'AGCO' },
    { id: 3, name: 'Acer' },
    { id: 4, name: 'Anderson' },
    { id: 5, name: 'Arcusin' },
    { id: 6, name: 'Alliance' },
    { id: 7, name: 'Amazone' },
    { id: 8, name: 'Amity' },
    { id: 9, name: 'Attache' },
    { id: 10, name: 'Asus' },
    { id: 11, name: 'AGCO' },
    { id: 12, name: 'Acer' },
    { id: 13, name: 'Anderson' },
    { id: 14, name: 'Arcusin' },
    { id: 15, name: 'Alliance' },
    { id: 16, name: 'Amazone' },
    { id: 17, name: 'Amity' },
    { id: 18, name: 'Attache' },
    { id: 19, name: 'Asus' },
    { id: 20, name: 'AGCO' },
    { id: 21, name: 'Acer' },
    { id: 22, name: 'Anderson' },
    { id: 23, name: 'Arcusin' },
    { id: 24, name: 'Alliance' },
    { id: 25, name: 'Amazone' },
    { id: 26, name: 'Amity' },
    { id: 27, name: 'Attache' },
  ];

  madeIn = [
    {id: 1, country: 'Ангола', count: 5},
    {id: 2, country: 'Аргентина', count: 25},
    {id: 3, country: 'Австрия', count: 15},
    {id: 4, country: 'Австралия', count: 3},
    {id: 5, country: 'Азербайджан', count: 77},
    {id: 6, country: 'Бельгия', count: 64},
    {id: 7, country: 'Болгария', count: 865},
    {id: 8, country: 'Беларусь', count: 5456},
    {id: 9, country: 'Канада', count: 123},
    {id: 10, country: 'Швейцария', count: 432},
    {id: 11, country: 'Китай', count: 5125},
    {id: 12, country: 'Бразилия', count: 5345},
    {id: 13, country: 'Чехия', count: 123},
    {id: 14, country: 'Германия', count: 432},
    {id: 15, country: 'Дания', count: 676},
    {id: 16, country: 'Эквадор', count: 34},
    {id: 17, country: 'Ангола', count: 5},
    {id: 18, country: 'Аргентина', count: 25},
    {id: 19, country: 'Австрия', count: 15},
    {id: 20, country: 'Австралия', count: 3},
    {id: 21, country: 'Азербайджан', count: 77},
    {id: 22, country: 'Бельгия', count: 64},
    {id: 23, country: 'Болгария', count: 865},
    {id: 24, country: 'Беларусь', count: 5456},
    {id: 25, country: 'Канада', count: 123},
    {id: 26, country: 'Швейцария', count: 432},
    {id: 27, country: 'Китай', count: 5125},
    {id: 28, country: 'Бразилия', count: 5345},
    {id: 29, country: 'Чехия', count: 123},
    {id: 30, country: 'Германия', count: 432},
    {id: 31, country: 'Дания', count: 676},
    {id: 32, country: 'Эквадор', count: 34},
  ]

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formFilter = this.fb.group({
      priceFrom: [null],
      priceTo: [null],
      region: [null],
      regionsList: [null],
      company: [null],
      companyList: [null],
      country: [null],
    })
  }

  logRegion(value: string[]): void {
    console.log(value);
  }

  logCompany(value: string[]): void {
    console.log(value);
  }
}
