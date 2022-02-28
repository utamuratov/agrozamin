import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { ConfirmationType } from 'projects/client/src/app/core/enums/confirmation-type.enum';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { ChangePasswordStepOneResponse } from 'projects/client/src/app/shared/models/auth/change-password-step-one.response';
import { ContactType } from 'projects/client/src/app/shared/models/auth/change-password-step-two.request';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';

export interface RecoverLoginOptionsConfig {
  nextStep: RecoverByLoginStep;
  data: ChangePasswordStepOneResponse;
}

@Component({
  selector: 'recover-login-options',
  templateUrl: './recover-login-options.component.html',
  styleUrls: ['./recover-login-options.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverLoginOptionsComponent {
  /**
   *
   */
  @Input()
  data!: ChangePasswordStepOneResponse;

  /**
   *
   */
  @Output()
  changeStep = new EventEmitter<ConfirmationConfig>();

  /**
   *
   */
  constructor(private $auth: AuthService) {}

  /**
   *
   */
  goToNextStep(contactType: ContactType) {
    this.$auth
      .changePasswordStepTwo({
        contact_type: contactType,
        login: this.data.login,
      })
      .subscribe((result) => {
        console.log(result);

        this.changeStep.emit({
          login: this.data.login,
          byPhoneNumber: contactType === 'phone',
          confirmationType: ConfirmationType.RecoverByLogin,
          nextStep: RecoverByLoginStep.Confirmation,
          phone: this.data.phone
        });
      });
  }
}
