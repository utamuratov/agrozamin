import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInHelper } from '../../helpers/sign-in.helper';
import { SignInHelperService } from './sign-in-helper.service';

@Component({
  selector: 'az-sign-in-helper',
  templateUrl: './sign-in-helper.component.html',
  styleUrls: ['./sign-in-helper.component.less'],
})
export class SignInHelperComponent extends SignInHelper implements OnInit {
  constructor(
    protected override fb: FormBuilder,
    protected override $baseAuth: SignInHelperService,
    protected override router: Router
  ) {
    super(fb, $baseAuth, router);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.onInit();
  }
}
