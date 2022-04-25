import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'ngx-az-core';
import { ConfirmationType } from 'projects/agro-id/src/app/core/enums/confirmation-type.enum';
import { RecoverByLoginStep } from 'projects/agro-id/src/app/core/enums/recover-by-login-step.enum';
import { SignUpStep } from 'projects/agro-id/src/app/core/enums/sign-up-step.enum';
import { AuthService } from 'projects/agro-id/src/app/core/services/auth/auth.service';
import { Observable, map, startWith } from 'rxjs';
import { ConfirmationFormComponent } from '../confirmation-form/confirmation-form.component';

export interface ConfirmationConfig {
  confirmationType: ConfirmationType;
  nextStep: number;
  login: string;
  email?: string;
  phone?: string;
}

@Component({
  selector: 'az-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.less'],
})
export class ConfirmationComponent {
  /**
   *
   */
  @Output() changeStep = new EventEmitter<number>();

  /**
   *
   */
  @Input()
  data!: ConfirmationConfig;

  /**
   *
   */
  confirmationType = ConfirmationType;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  isWaitingActivationCodeResponse$?: Observable<boolean>;

  /**
   *
   * @param fb
   * @param elem
   */
  constructor(
    private $auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   *
   */
  submit(activationCode: string): void {
    switch (this.data.confirmationType) {
      case ConfirmationType.SignUp:
        this.sendActivationCodeToPhone(activationCode);
        break;

      case ConfirmationType.RecoverByContacs:
        this.restoreLoginStepTwo(activationCode);
        break;

      case ConfirmationType.RecoverByLogin:
        this.changePasswordStepThree(activationCode);
        break;

      default:
        break;
    }
  }

  /**
   *
   * @param activationCode
   */
  private changePasswordStepThree(activationCode: string) {
    this.isWaitingResponse$ = this.$auth
      .changePasswordStepThree({
        login: this.data.login,
        secure_code: activationCode,
      })
      .pipe(
        map((result) => {
          if (result.success) {
            this.changeStep.emit(RecoverByLoginStep.NewPassword);
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   * @param activationCode
   */
  private restoreLoginStepTwo(activationCode: string) {
    this.isWaitingResponse$ = this.$auth
      .restoreLoginStepTwo({
        [this.data.phone ? Constants.PHONE : Constants.EMAIL]: this.data?.login,
        secure_code: activationCode,
      })
      .pipe(
        map((response) => {
          if (response.success) {
            this.router.navigate(['../../'], {
              relativeTo: this.route,
              state: { login: response.data.login },
            });
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   * @param activationCode
   */
  private sendActivationCodeToPhone(activationCode: string) {
    this.isWaitingResponse$ = this.$auth
      .sendActivationCodeToPhone({
        phone: this.data?.login,
        secure_code: activationCode,
      })
      .pipe(
        map((result) => {
          if (result.success) {
            this.changeStep.emit(SignUpStep.Success);
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   */
  resendActivationCode(confirmationForm: ConfirmationFormComponent) {
    this.isWaitingActivationCodeResponse$ = this.$auth
      .resendAccountActivationCode({ phone: this.data?.login })
      .pipe(
        map((result) => {
          if (result.success) {
            confirmationForm.startTimer();
          }

          return false;
        }),
        startWith(true)
      );
  }
}
