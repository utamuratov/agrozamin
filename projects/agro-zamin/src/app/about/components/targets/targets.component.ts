import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.less']
})
export class TargetsComponent implements OnInit {
  targetCards = [
    {img: '../../../../assets/images/agrozamin/target-card-img-1.svg', text: 'Создать удобства для продавцов и покупателй'},
    {img: '../../../../assets/images/agrozamin/target-card-img-2.svg', text: 'Развивать аграрный сектор'},
    {img: '../../../../assets/images/agrozamin/target-card-img-3.svg', text: 'Помогать вашему бизнесу'},
    {img: '../../../../assets/images/agrozamin/target-card-img-4.svg', text: 'Экономить время пользователей'},
    {img: '../../../../assets/images/agrozamin/target-card-img-5.svg', text: 'Оптимизация процессов в аграрном бизнесе'},
    {img: '../../../../assets/images/agrozamin/target-card-img-6.svg', text: 'Создать новые возможности для бизнеса'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
