import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { ConfirmationType } from 'projects/client/src/app/core/enums/confirmation-type.enum';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { RecoverByContactsStep } from 'projects/client/src/app/core/enums/recover-by-contacts-step.enum';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { RestoreLoginStepOneRequest } from 'projects/client/src/app/shared/models/auth/restore-login-step-one.request';
import { map, Observable, startWith } from 'rxjs';
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
  get phone(): string {
    return Constants.PREFIX_PHONENUMBER + this.form.get(Constants.PHONE)?.value;
  }

  /**
   *
   */
  get email(): string {
    return this.form.get(Constants.EMAIL)?.value;
  }

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
    if (this.form.valid) {
      this.restoreLoginStepOne();
    } else {
      markAllAsDirty(this.form);
    }
  }

  private restoreLoginStepOne() {
    const request: RestoreLoginStepOneRequest = this.getRestoreLoginRequest();
    this.$isWaitingResponse = this.$auth.restoreLoginStepOne(request).pipe(
      map((result) => {
        if (result.success) {
          this.goToNextStep();
        }
        return false;
      }),
      startWith(true)
    );
  }

  /**
   *
   */
  private getRestoreLoginRequest(): RestoreLoginStepOneRequest {
    if (this.loginType === LoginType.PhoneNumber) {
      return {
        [Constants.PHONE]: this.phone,
      };
    }

    return {
      [Constants.EMAIL]: this.email,
    };
  }

  /**
   *
   */
  goToNextStep(): void {
    const confirmationConfig: ConfirmationConfig = {
      confirmationType: ConfirmationType.RecoverByContacs,
      nextStep: RecoverByContactsStep.Confirmation,
      login: this.loginType === LoginType.PhoneNumber ? this.phone : this.email,
    };
    confirmationConfig[
      this.loginType === LoginType.PhoneNumber ? 'phone' : 'email'
    ] = confirmationConfig.login;

    this.changeStep.emit(confirmationConfig);
  }

  /**
   *
   * @param loginType
   */
  onChangedLoginType(loginType: LoginType) {
    this.loginType = loginType;
  }
}
