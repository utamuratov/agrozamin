import { Component, Input } from '@angular/core';

@Component({
  selector: 'az-password-show-hide',
  template: `<a
    *ngIf="password.value"
    class="d-flex text-size-12"
    (click)="password.type = password.type === 'password' ? 'text' : 'password'"
    >{{ (password.type === 'password' ? 'show' : 'hide') | translate }}</a
  >`,
})
export class PasswordShowHideComponent {
  /**
   *
   */
  @Input()
  password!: HTMLInputElement;
}
