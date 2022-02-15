import { ChangeDetectionStrategy, Component } from '@angular/core';

export enum SignUpStep {
  SignUp,
  Confirmation,
  Success,
}

export interface SignUpOutputModel {
  nextStep: number; 
  login: string; 
  byPhoneNumber: boolean
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
  currentStep = SignUpStep.SignUp;

  /**
   * 
   */
  step = SignUpStep;

  /**
   * 
   */
  data!: SignUpOutputModel;

  /**
   * 
   * @param item 
   */
  goToNextStep(item: number): void {
    this.currentStep = item;
  }

  /**
   * 
   */
   changeStepFromSignUp(data: SignUpOutputModel) {
    this.data = data;
    this.goToNextStep(data.nextStep);
   }
}
