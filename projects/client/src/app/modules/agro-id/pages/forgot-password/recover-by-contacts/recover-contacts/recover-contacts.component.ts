import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { ConfirmationType } from 'projects/client/src/app/core/enums/confirmation-type.enum';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { RecoverByContactsStep } from 'projects/client/src/app/core/enums/recover-by-contacts-step.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { RestoreLoginRequest } from 'projects/client/src/app/shared/models/auth/restore-login.request';
import { catchError, finalize, map, Observable, of, startWith } from 'rxjs';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';

@Component({
  selector: 'recover-contacts',
  templateUrl: './recover-contacts.component.html',
  styleUrls: ['./recover-contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecoverContactsComponent implements OnInit {
  /*
   */
  @Output()
  changeStep = new EventEmitter<ConfirmationConfig>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  loginType!: LoginType;

  /**
   *
   */
  $isWaitingResponse?: Observable<boolean>;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder, private $auth: AuthService) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({});
  }

  /**
   *
   */
  submitForm(): void {
    if (this.$isWaitingResponse) {
      return;
    }

    if (this.form.valid) {
      const request: RestoreLoginRequest = this.getRestoreLoginRequest();
      this.$isWaitingResponse = this.$auth.restoreLoginFirstStep(request).pipe(
        map(() => {
          this.errorMessageFromServer = undefined;
          this.goToNextStep();
          return false;
        }),
        startWith(true),
        catchError((errors: ErrorItem[]) => {
          this.errorMessageFromServer = errors[0];
          return of(false);
        }),
        finalize(() => (this.$isWaitingResponse = undefined))
      );
    } else {
      markAllAsDirty(this.form);
    }
  }

  /**
   *
   */
  private getRestoreLoginRequest() {
    if (this.loginType === LoginType.PhoneNumber) {
      return {
        [Constants.PHONE]:
          Constants.PREFIX_PHONENUMBER +
          this.form.controls[Constants.PHONE].value,
      };
    }
    return {
      [Constants.EMAIL]: this.form.controls[Constants.EMAIL].value,
    };
  }

  /**
   *
   */
  goToNextStep(): void {
    this.changeStep.emit({
      confirmationType: ConfirmationType.RecoverByContacs,
      nextStep: RecoverByContactsStep.Confirmation,
      byPhoneNumber: this.loginType === LoginType.PhoneNumber,
      login:
        this.form.controls[
          this.loginType === LoginType.PhoneNumber
            ? Constants.PHONE
            : Constants.EMAIL
        ].value,
    });
  }

  /**
   *
   * @param loginType
   */
  onChangedLoginType(loginType: LoginType) {
    this.loginType = loginType;
    console.log(loginType);
  }
}
