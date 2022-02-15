import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

enum Step {
  Login,
  Confirmation,
  Success,
}

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpPage {
  /**
   * 
   */
  currentStep = Step.Login;

  /**
   * 
   */
  step = Step;

  swtichTo(item: number): void {
    this.currentStep = item;
  }
}
