import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.less'],
})
export class SignUpPage implements OnInit {
  signUpForm = 0;

  constructor() {}

  ngOnInit() {}

  swtichTo(item: number): void {
    this.signUpForm = item;
  }
}
