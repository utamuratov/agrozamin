import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less']
})
export class ForgotPasswordComponent implements OnInit {
  signUpForm = 0;

  constructor() {}

  ngOnInit() {}

  swtichTo(item: number): void {
    this.signUpForm = item;
  }
}
