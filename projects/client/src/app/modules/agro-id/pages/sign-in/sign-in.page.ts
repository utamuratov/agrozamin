import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignInRequest } from 'projects/client/src/app/shared/models/auth/sign-in.request';
import { catchError, finalize, map, Observable, of, startWith } from 'rxjs';

const LOGIN = 'login';
const PASSWORD = 'password';

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
  byPhoneNumber = true;

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
      Object.values(this.loginForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
      return;
    }

    const requestSignInModel = new SignInRequest(
      this.loginForm.get(LOGIN)?.value,
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
      map((result) => {
        this.errorMessageFromServer = undefined;

        // !WORK ON TOKEN
        console.log(result);

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
  togglePhonenumberAndEmail() {
    this.clearLoginControl();
    this.byPhoneNumber = !this.byPhoneNumber;
    if (this.byPhoneNumber) {
      this.loginForm.controls[LOGIN].removeValidators(Validators.email);
      return;
    }
    this.loginForm.controls[LOGIN].setValidators(Validators.email);
  }

  /**
   *
   */
  private clearLoginControl() {
    this.errorMessageFromServer = undefined;
    this.loginForm.controls[LOGIN].setValue('');
  }
}
