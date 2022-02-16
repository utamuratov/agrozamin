import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignInRequest } from 'projects/client/src/app/shared/models/auth/sign-in.request';
import { catchError, finalize, map, Observable, of, startWith } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Constants } from 'projects/client/src/app/core/config/constants';

const LOGIN = 'login';
const PASSWORD = 'password';
enum LoginType {
  Email = '0',
  PhoneNumber = '1',
}
const DEFAULT_LOGIN_TYPE = LoginType.PhoneNumber;

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  /**
   *
   */
  $isWaitingResponse?: Observable<boolean>;

  /**
   *
   */
  loginForm!: FormGroup;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

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
  }

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private router: Router,
    private $cookie: CookieService
  ) {
    this.loginType = this.getLoginType();
  }

  /**
   *
   */
  ngOnInit() {
    this.initForm();
    this.setLoginValidator(this.loginType);
  }

  /**
   *
   */
  submitForm(): void {
    if (this.$isWaitingResponse) {
      return;
    }

    if (this.loginForm.invalid) {
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    const requestSignInModel = new SignInRequest(
      (this.loginType === LoginType.PhoneNumber
        ? Constants.PREFIX_PHONENUMBER
        : '') + this.loginForm.get(LOGIN)?.value,
      this.loginForm.get(PASSWORD)?.value
    );
    this.signIn(requestSignInModel);
  }

  /**
   *
   */
  private initForm() {
    this.loginForm = this.fb.group({
      [LOGIN]: [null, [Validators.required]],
      [PASSWORD]: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private signIn(model: SignInRequest) {
    this.$isWaitingResponse = this.$auth.signIn(model).pipe(
      map(() => {
        this.errorMessageFromServer = undefined;
        this.router.navigate(['/']);
        return false;
      }),
      startWith(true),
      catchError((errors: ErrorItem[]) => {
        this.errorMessageFromServer = errors[0];
        return of(false);
      }),
      finalize(() => (this.$isWaitingResponse = undefined))
    );
  }

  /**
   *
   */
  switchLoginType(loginType: LoginType) {
    this.setLoginType(loginType);
    this.clearLoginControl();
    this.setLoginValidator(loginType);
  }

  /**
   *
   */
  private setLoginValidator(loginType: LoginType) {
    switch (loginType) {
      case LoginType.PhoneNumber:
        this.loginType = LoginType.PhoneNumber;
        this.loginForm.controls[LOGIN].removeValidators(Validators.email);
        break;
      case LoginType.Email:
        this.loginType = LoginType.Email;
        this.loginForm.controls[LOGIN].setValidators(Validators.email);
        break;
      default:
        break;
    }
  }

  /**
   *
   */
  private clearLoginControl() {
    this.errorMessageFromServer = undefined;
    this.loginForm.controls[LOGIN].setValue('');
  }
}
