import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';

export interface ChangePassAndLogin {
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent {
  data!: ChangePassAndLogin;
  /**
   *
   */
  forgotPasswordStep = ForgotPasswordStep;

  /**
   *
   */
  currentStep = ForgotPasswordStep.Choose;

  /**
   *
   * @param step
   */
  goToStep(step: ForgotPasswordStep) {
    this.currentStep = step;
  }
}
