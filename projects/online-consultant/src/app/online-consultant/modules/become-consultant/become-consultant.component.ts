import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-become-consultant',
  templateUrl: './become-consultant.component.html',
  styleUrls: ['./become-consultant.component.less']
})
export class BecomeConsultantComponent implements OnInit {

  items = [
    {
      logo: '/assets/images/consult-logo1.png',
      name: 'Нет комиссий', 
      desc: 'Сервис не берет с консультанта никаких комиссий за использование безопасной сделки'
    },
    {
      logo: '/assets/images/consult-logo2.png',
      name: 'Гарантия выплаты', 
      desc: '100% оплата работы, если сеанс совешен качественно и в срок'
    },
    {
      logo: '/assets/images/consult-logo3.png',
      name: 'Доверие заказчиков', 
      desc: `Заказчики больше доверяют консультантам,
       которые работают через безопасную сделку, так как понимают
        что в этом случае консультант заинтересован провести сеанс хорошо`
    },
    {
      logo: '/assets/images/consult-logo4.png',
      name: 'Удобные способы выплаты', 
      desc: `Для исполнителей физических лиц мы поддерживаем карты, банковские переводы
      Для юридических лиц мы осуществляем выплаты банковским переводом`
    },
  ]

  isVisible = false;

  /**
   * 
   */
  currentStep = 1;
  

  constructor() { }

  ngOnInit() {
  }

  showModal(): void {
    this.currentStep = 1
    this.isVisible = true;
  }


  //steps

  pre(): void {
    this.currentStep -= 1;
  }

  next(): void {
    if (this.currentStep === 4) {
      this.isVisible = false;
    }
    this.currentStep += 1;
  }

  done(): void {
    console.log('done');
  }

}
