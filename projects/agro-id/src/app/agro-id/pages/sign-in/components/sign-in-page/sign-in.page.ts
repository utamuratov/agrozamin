import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'projects/agro-id/src/app/core/services/auth/auth.service';
import { map, Observable, startWith } from 'rxjs';
import { Constants, markAllAsDirty, SignInRequest } from 'ngx-az-core';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  form!: FormGroup;

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
    const login = history.state.login;
    this.initForm(login);
  }

  /**
   *
   */
  submit(): void {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
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
      this.form.get(Constants.LOGIN)?.value,
      this.form.get(Constants.PASSWORD)?.value
    );
  }

  /**
   *
   */
  private initForm(login: string) {
    this.form = this.fb.group({
      [Constants.LOGIN]: [login, [Validators.required]],
      [Constants.PASSWORD]: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private signIn(model: SignInRequest) {
    this.isWaitingResponse$ = this.$auth.signIn(model).pipe(
      map((result) => {
        if (result.success) {
          this.router.navigate(['/']);
        }

        return false;
      }),
      startWith(true)
    );
  }
}
