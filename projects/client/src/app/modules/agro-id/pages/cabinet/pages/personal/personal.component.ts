import { Component, OnInit } from '@angular/core';

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
  phone = null

  constructor() {}

  ngOnInit(): void {
  }

  showUserModal(): void {
    this.isVisibleUserModal = true
  }
  showEmailModal(): void {
    this.isVisibleEmailModal = true
  }
  showPhoneModal(): void {
    this.isVisiblePhoneModal = true
  }
}
