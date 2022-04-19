import { Component, OnInit } from '@angular/core';

export interface Values {
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  login: string;
}

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
})
export class PersonalComponent implements OnInit {
  userNameModalVisible = false;
  userEmailModalVisible = false;
  userPhoneModalVisible = false;
  userLoginModalVisible = false;
  userPasswordModalVisible = false;
  userAvatarModalVisible = false;

  userInfo: Values = {
    firstName: 'Тимур',
    lastName: 'Мун',
    email: 'shisudesign@outlook.com',
    phone: null,
    login: 'shisudesign',
  };

  constructor() {}

  ngOnInit(): void {}

  showModal(type: string): void {
    if (type === 'username') {
      this.userNameModalVisible = true;
    } else if (type === 'email') {
      this.userEmailModalVisible = true;
    } else if (type === 'phone') {
      this.userPhoneModalVisible = true;
    } else if (type === 'login') {
      this.userLoginModalVisible = true;
    } else if (type === 'password') {
      this.userPasswordModalVisible = true;
    } else if (type === 'avatar') {
      this.userAvatarModalVisible = true;
    }
  }

  handleUserNameVisible($event: boolean): void {
    this.userNameModalVisible = $event;
  }

  handleUserPhoneVisible($event: boolean): void {
    this.userPhoneModalVisible = $event;
  }

  handleUserLoginVisible($event: boolean): void {
    this.userLoginModalVisible = $event;
  }

  handleUserPasswordVisible($event: boolean): void {
    this.userPasswordModalVisible = $event;
  }

  handleUserAvatarVisible($event: boolean): void {
    this.userAvatarModalVisible = $event;
  }
}
