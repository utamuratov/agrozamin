import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordPage {
  /**
   *
   */
  forgotPasswordStep = ForgotPasswordStep;

  /**
   *
   */
  currentStep = ForgotPasswordStep.Login;

  /**
   *
   * @param step
   */
  goToStep(step: ForgotPasswordStep) {
    this.currentStep = step;
  }
}
