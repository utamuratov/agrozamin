import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { Constants } from '../config/constants';
import { SignInRequest } from '../models/sign-in.request';
import { BaseAuthService } from '../services/base-auth.service';
import { markAllAsDirty } from '../utilits/utilits';

export class SignInHelper {
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
    protected fb: FormBuilder,
    protected $baseAuth: BaseAuthService,
    protected router: Router
  ) {}

  /**
   *
   */
  onInit() {
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
    this.isWaitingResponse$ = this.$baseAuth.signIn(model).pipe(
      map((result) => {
        if (result.success) {
          this.navigateToHome();
        }

        return false;
      }),
      startWith(true)
    );
  }

  protected navigateToHome() {
    this.router.navigate(['/']);
  }
}
