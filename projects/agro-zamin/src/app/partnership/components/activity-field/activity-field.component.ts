import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-activity-field',
  templateUrl: './activity-field.component.html',
  styleUrls: ['./activity-field.component.less']
})
export class ActivityFieldComponent implements OnInit {

  activityField = [
    {img: '../../../../assets/images/agrozamin/actifity-field-img-1.svg', text: 'Сельскохозяйственные предприятия'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-2.svg', text: 'Компании предоставляющие услуги в сфере агросектора'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-3.svg', text: 'Приборостроение и информационно-измерительные технологии'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-4.svg', text: 'Информационные технологии'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-5.svg', text: 'Биотехнические системы и технологии'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-6.svg', text: 'Автоматизация и системы автоматического управления'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-7.svg', text: 'Строительство'},
    {img: '../../../../assets/images/agrozamin/actifity-field-img-8.svg', text: 'Техническое обеспечение'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
