import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.less']
})
export class FaqComponent implements OnInit {
  
  panels = [
    {
      active: true,
      name: '1. Как можно связаться с ветеринаром/зоотехником?',
    },
    {
      active: false,
      name: '2. Что нужно, чтобы получить консультацию?',
    },
    {
      active: false,
      name: '3. Как скоро я смогу получить консультацию? Можно ли позвонить сразу после оплаты?',
    },
    {
      active: false,
      name: '4. Врачи каких специальностей консультируют онлайн или ко мне прикрепляют одного врача?',
    },
    {
      active: false,
      name: '5. Кто может воспользоваться сервисом/консультациями онлайн? Есть ли ограничения по размеру стада или по виду животного?',
    },
    {
      active: false,
      name: '6. Какие вопросы можно задать ветеринару онлайн?',
    },
    {
      active: false,
      name: '7. Возможно ли оказание скорой неотложной помощи животному?',
    }
  ];
  

  constructor() { }

  ngOnInit() {
  }

}
