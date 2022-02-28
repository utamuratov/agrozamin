import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { ChangePasswordStepOneResponse } from 'projects/client/src/app/shared/models/auth/change-password-step-one.response';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';
import { RecoverLoginOptionsConfig } from '../recover-login-options/recover-login-options.component';

@Component({
  selector: 'recover-by-login',
  templateUrl: './recover-by-login.component.html',
  styleUrls: ['./recover-by-login.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverByLoginComponent {
  /**
   *
   */
  forgotPasswordStep = RecoverByLoginStep;

  /**
   *
   */
  currentStep = RecoverByLoginStep.Login;

  /**
   *
   */
  loginOptionsData!: ChangePasswordStepOneResponse;

  /**
   *
   */
  confirmationConfig!: ConfirmationConfig;

  /**
   *
   * @param step
   */
  goToStep(step: RecoverByLoginStep) {
    this.currentStep = step;
  }

  /**
   *
   * @param data
   */
  changeStepFromRecoverLogin(data: RecoverLoginOptionsConfig) {
    this.loginOptionsData = data.data;
    this.goToStep(data.nextStep);
  }

  /**
   *
   * @param data
   */
  changeStepFromLoginOptions(data: ConfirmationConfig) {
    this.confirmationConfig = data;
    this.goToStep(data.nextStep);
  }
}
