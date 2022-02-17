import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignInRequest } from 'projects/client/src/app/shared/models/auth/sign-in.request';
import { catchError, finalize, map, Observable, of, startWith } from 'rxjs';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
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
  loginForm!: FormGroup;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private router: Router
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  submitForm(): void {
    if (this.$isWaitingResponse) {
      return;
    }

    if (this.loginForm.invalid) {
      markAllAsDirty(this.loginForm);
      return;
    }

    const requestSignInModel = this.getSignInRequest();
    this.signIn(requestSignInModel);
  }

  /**
   *
   * @returns
   */
  private getSignInRequest() {
    return new SignInRequest(
      (this.loginType === LoginType.PhoneNumber
        ? Constants.PREFIX_PHONENUMBER
        : '') + this.loginForm.get(Constants.LOGIN)?.value,
      this.loginForm.get(Constants.PASSWORD)?.value
    );
  }

  /**
   *
   */
  private initForm() {
    this.loginForm = this.fb.group({
      [Constants.LOGIN]: [null, [Validators.required]],
      [Constants.PASSWORD]: [null, [Validators.required]],
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
   * @param loginType
   */
  onChangedLoginType(loginType: LoginType) {
    this.loginType = loginType;
    this.errorMessageFromServer = undefined;
  }
}
