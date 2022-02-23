import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RecoverByContactsStep } from 'projects/client/src/app/core/enums/recover-by-contacts-step.enum';

@Component({
  selector: 'recover-by-contacts',
  templateUrl: './recover-by-contacts.component.html',
  styleUrls: ['./recover-by-contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
   * @param step
   */
  goToStep(step: RecoverByContactsStep) {
    this.currentStep = step;
  }
}
