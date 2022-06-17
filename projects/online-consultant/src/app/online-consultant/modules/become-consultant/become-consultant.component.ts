import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NzDrawerPlacement } from 'ng-zorro-antd/drawer';

@Component({
  selector: 'az-become-consultant',
  templateUrl: './become-consultant.component.html',
  styleUrls: ['./become-consultant.component.less'],
})
export class BecomeConsultantComponent implements OnInit {
  profileForm!: FormGroup;
  items = [
    {
      logo: '/assets/images/consult-logo1.png',
      name: 'Нет комиссий',
      desc: 'Сервис не берет с консультанта никаких комиссий за использование безопасной сделки',
    },
    {
      logo: '/assets/images/consult-logo2.png',
      name: 'Гарантия выплаты',
      desc: '100% оплата работы, если сеанс совешен качественно и в срок',
    },
    {
      logo: '/assets/images/consult-logo3.png',
      name: 'Доверие заказчиков',
      desc: `Заказчики больше доверяют консультантам,
       которые работают через безопасную сделку, так как понимают
        что в этом случае консультант заинтересован провести сеанс хорошо`,
    },
    {
      logo: '/assets/images/consult-logo4.png',
      name: 'Удобные способы выплаты',
      desc: `Для исполнителей физических лиц мы поддерживаем карты, банковские переводы
      Для юридических лиц мы осуществляем выплаты банковским переводом`,
    },
  ];
  addNewSomthing: any = []
  isVisible = false;
  visible = false;
  placement: NzDrawerPlacement = 'bottom';

  checked = true

  /**
   *
   */
  currentStep = 1;

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstName: [null],
      lastName: [null],
      price: [null],
    });
    
  }

  ngOnInit() {}

  showModal(): void {
    this.currentStep = 1;
    this.isVisible = true;
  }

  showDrawer(): void {
    this.currentStep = 1;
    this.visible = true;
  }
  closeDrawer(): void {
    this.visible = false;
  }

  //steps

  pre(): void {
    this.currentStep -= 1;
  }

  next(): void {
    if (this.currentStep === 5) {
      this.isVisible = false;
    }
    this.currentStep += 1;
  }

  done(): void {
    console.log('done');
  }

  onSubmit(): void {
    // console.log(this.profileForm.value);
    this.addNewSomthing.push(this.profileForm.value)
    // console.log(this.addNewSomthing);
  }
  onCancel(): void {
    this.isVisible = false;
  }
}
