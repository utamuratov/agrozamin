import { Component, OnInit } from '@angular/core';
import { UserInfoModal } from './components/user-info-modal/user-info-modal.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
})
export class PersonalComponent implements OnInit {
  userInfo = [
    {
      firstName: 'Артур',
      lastName: 'Нарбеков',
      phone: 998903262013,
      mail: null,
      avatar: '../../../../../../../assets/images/agro-id-images/avatar.jpg',
      main: true,
    },
    {
      firstName: 'Тимур',
      lastName: 'Мун',
      phone: 998903262013,
      mail: 'narbekov@gmail.com',
      avatar: '../../../../../../../assets/images/agro-id-images/avatar3.jpg',
      main: false
    },
    {
      firstName: 'Кристина',
      lastName: 'Варламова',
      phone: 998903262013,
      mail: 'narbekov@gmail.com',
      avatar: '../../../../../../../assets/images/agro-id-images/avatar2.jpg',
      main: false
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
