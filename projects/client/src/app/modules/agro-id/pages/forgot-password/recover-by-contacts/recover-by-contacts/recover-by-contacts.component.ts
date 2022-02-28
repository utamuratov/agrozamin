import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecoverByContactsStep } from 'projects/client/src/app/core/enums/recover-by-contacts-step.enum';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';
import { SignUpConfirmationConfig } from '../../../sign-up/components/sign-up-confirmation/sign-up-confirmation.component';

@Component({
  selector: 'recover-by-contacts',
  templateUrl: './recover-by-contacts.component.html',
  styleUrls: ['./recover-by-contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverByContactsComponent {
  /**
   *
   */
  forgotPasswordStep = RecoverByContactsStep;

  /**
   *
   */
  currentStep = RecoverByContactsStep.Contacts;

  /**
   *
   */
  data!: ConfirmationConfig;

  /**
   *
   * @param step
   */
  goToNextStep(step: RecoverByContactsStep) {
    this.currentStep = step;
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
