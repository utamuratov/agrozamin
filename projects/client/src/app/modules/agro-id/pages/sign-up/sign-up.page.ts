import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SignUpStep } from 'projects/client/src/app/core/enums/sign-up-step.enum';
import { SignUpConfirmationConfig } from '../../components/sign-up-confirmation/sign-up-confirmation.component';

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
  data!: SignUpConfirmationConfig;

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
  changeStepFromSignUp(data: SignUpConfirmationConfig) {
    this.data = data;
    this.goToNextStep(data.nextStep);
  }
}
