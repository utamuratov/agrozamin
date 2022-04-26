import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-cooperation-form',
  templateUrl: './cooperation-form.component.html',
  styleUrls: ['./cooperation-form.component.less']
})
export class CooperationFormComponent implements OnInit {
  cardInfo = [
    {text: 'Коммерческая форма сотрудничества на условиях взаимовыгодных условий.'},
    {text: 'Проведение совместных научных исследований и аналитических работ.'},
    {text: 'Проведение совместных мероприятий (семинаров, конференций, форумов) по приоритетным направлениям в агросекторе.'},
    {text: 'Использование кадрового и научно-технического потенциала.'},
    {text: 'Образовательные программы и обмен опытом.'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
