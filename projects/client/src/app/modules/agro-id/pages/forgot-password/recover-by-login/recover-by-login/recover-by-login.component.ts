import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';

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
   * @param step
   */
  goToStep(step: RecoverByLoginStep) {
    this.currentStep = step;
  }
}
