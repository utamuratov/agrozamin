import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { Observable, map, catchError, of } from 'rxjs';

const DEFAULT_LOGIN_TYPE = LoginType.PhoneNumber;

export interface InputPhoneEmailConfig {
  form: FormGroup;
  isLoginOnly: boolean;
  phoneFormControlName: string;
  emailFormControlName: string;
  toggleTitleForPhone: string;
  toggleTitleForEmail: string;
  titlePhone?: string;
  titleEmail?: string;
  titleClass?: string;
}

@Component({
  selector: 'input-phone-email',
  templateUrl: './input-phone-email.component.html',
  styleUrls: ['./input-phone-email.component.less'],
})
export class InputPhoneEmailComponent implements OnInit {
  /**
   *
   */
  @Input()
  config!: InputPhoneEmailConfig;

  /**
   *
   */
  @Output()
  changedLoginType = new EventEmitter<LoginType>();

  /**
   *
   */
  readonly LoginType = LoginType;

  /**
   *
   */
  loginType: LoginType;

  /**
   *
   */
  mailTypes: string[] = [];

  /**
   *
   * @returns
   */
  getLoginType(): LoginType {
    if (this.$cookie.check(Constants.LOGIN_TYPE)) {
      return this.$cookie.get(Constants.LOGIN_TYPE) as LoginType;
    }
    this.setLoginType(DEFAULT_LOGIN_TYPE);
    return this.loginType;
  }

  /**
   *
   * @param loginType
   */
  setLoginType(loginType: LoginType) {
    this.loginType = loginType;
    this.$cookie.set(Constants.LOGIN_TYPE, loginType, { path: '/' });
    this.changedLoginType.emit(loginType);
  }

  constructor(private $cookie: CookieService, private $auth: AuthService) {
    this.loginType = this.getLoginType();
  }

  /**
   *
   */
  ngOnInit() {
    this.changedLoginType.emit(this.loginType);
    this.switchLoginType(this.loginType);
  }

  /**
   *
   */
  switchLoginType(loginType: LoginType) {
    this.setLoginType(loginType);
    if (this.config.isLoginOnly) {
      this.updateValidators();
      return
    }

    this.addPhoneNumberOrEmailControl();
  }

  /**
   *
   * @param e
   */
  onInputEmail(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    if (!value || value.indexOf('@') >= 0) {
      this.mailTypes = [];
    } else {
      this.mailTypes = Constants.EMAIL_TYPES.map(
        (domain) => `${value}@${domain}`
      );
    }
  }

  /**
   * 
   */
  private updateValidators() {
    this.setLoginValidator(this.loginType);
    this.clearLoginControl();
  }
  
  /**
   *
   */
   private setLoginValidator(loginType: LoginType) {
    const loginControl = this.config.form.controls[Constants.LOGIN];
    switch (loginType) {
      case LoginType.PhoneNumber:
        this.loginType = LoginType.PhoneNumber;
        loginControl.removeValidators(Validators.email);
        loginControl.addValidators(Validators.required);
        loginControl.updateValueAndValidity();

        break;
      case LoginType.Email:
        this.loginType = LoginType.Email;
        loginControl.setValidators(Validators.email);
        loginControl.addValidators(Validators.required);
        loginControl.updateValueAndValidity();

        break;
      default:
        break;
    }
  }

  /**
   *
   */
  private clearLoginControl() {
    this.config.form.controls[Constants.LOGIN].setValue('');
  }

  
  /**
   *
   */
   private addPhoneNumberOrEmailControl() {
    if (this.loginType === LoginType.PhoneNumber) {
      this.addPhoneNumberControl();
      return;
    }

    this.addEmailControl();
  }

  /**
   *
   */
  private addEmailControl() {
    this.config.form.removeControl(Constants.PHONE);
    this.config.form.addControl(
      Constants.EMAIL,
      new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.loginAsyncValidator()]
      )
    );
  }

  /**
   *
   */
  private addPhoneNumberControl() {
    this.config.form.removeControl(Constants.EMAIL);
    this.config.form.addControl(
      Constants.PHONE,
      new FormControl(null, [Validators.required], [this.loginAsyncValidator()])
    );
  }

  
  /**
   *
   * @returns
   */
   private loginAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.$auth
        .checkLoginToUnique(
          this.loginType === LoginType.PhoneNumber
            ? { phone: Constants.PREFIX_PHONENUMBER + control.value }
            : { email: control.value }
        )
        .pipe(
          map(() => {
            return null;
          }),
          catchError((errors: ErrorItem[]) => {
            return of({ [Constants.ERROR_MESSAGE_FROM_SERVER]: errors[0] });
          })
        );
    };
  }
}
