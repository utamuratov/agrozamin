import { Component, OnInit } from '@angular/core';
import { UserInfoModal } from './components/user-info-modal/user-info-modal.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
})
export class PersonalComponent implements OnInit {
  isVisibleUserModal = false;
  isVisibleEmailModal = false;
  isVisiblePhoneModal = false;

  userName = 'Кайрат';
  userSurname = 'Махмудов';
  userEmail = 'shisudesign@outlook.com';
  phone = '';

  data!: UserInfoModal;

  constructor() {}

  ngOnInit(): void {}

  showUserModal(): void {
    this.isVisibleUserModal = true;
  }
  showModal(data: UserInfoModal): void {
    this.isVisibleEmailModal = true;
    this.data = data
  }
  showPhoneModal(): void {
    this.isVisiblePhoneModal = true;
  }
}
