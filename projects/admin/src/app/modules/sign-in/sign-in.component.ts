import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BaseAuthService, SignInHelper } from 'ngx-az-core';

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent extends SignInHelper implements OnInit {
  constructor(
    protected override fb: FormBuilder,
    protected override $baseAuth: BaseAuthService,
    protected override router: Router
  ) {
    super(fb, $baseAuth, router);
  }

  ngOnInit(): void {
    this.onInit();
  }
}
