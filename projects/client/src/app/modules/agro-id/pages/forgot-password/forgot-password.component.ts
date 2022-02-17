import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent {
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
