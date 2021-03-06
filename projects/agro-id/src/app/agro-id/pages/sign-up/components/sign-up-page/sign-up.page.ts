import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpStep } from 'projects/agro-id/src/app/core/enums/sign-up-step.enum';
import { SignUpRequest } from 'projects/agro-id/src/app/shared/models/auth/sign-up.request';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';
import { SignUpSetPasswordConfig } from '../sign-up/sign-up.component';

@Component({
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpPage {
  /**
   *
   */
  currentStep = SignUpStep.SignUp;

  /**
   *
   */
  signUpStep = SignUpStep;

  /**
   *
   */
  data!: ConfirmationConfig;

  /**
   *
   */
  user!: SignUpRequest;

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
  changeStepFromSignUp(data: SignUpSetPasswordConfig) {
    this.user = data.user;
    this.goToNextStep(data.nextStep);
  }

  /**
   *
   * @param data
   */
  changeStepFromSetPassword(data: ConfirmationConfig) {
    this.data = data;
    this.goToNextStep(data.nextStep);
  }
}
