import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignInRequest } from 'projects/client/src/app/shared/models/auth/sign-in.request';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  /**
   *
   */
  _isWaitingResponse = false;

  /**
   *
   */
  get isWaitingResponse() {
    return this._isWaitingResponse;
  }

  /**
   *
   */
  set isWaitingResponse(isWaitingResponse: boolean) {
    this._isWaitingResponse = isWaitingResponse;
    this.cd.markForCheck();
  }

  /**
   *
   */
  loginForm!: FormGroup;

  /**
   *
   */
  errorMessage!: string;

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private router: Router,
    private cd: ChangeDetectorRef
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
    if (this.isWaitingResponse) {
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
      this.loginForm.get('login')?.value,
      this.loginForm.get('password')?.value
    );
    this.signIn(requestSignInModel);
  }

  /**
   *
   */
  private initForm() {
    this.loginForm = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  private signIn(model: SignInRequest) {
    this.isWaitingResponse = true;
    this.$auth.signIn(model).subscribe({
      next: (result) => {
        this.isWaitingResponse = false;

        // !WORK ON TOKEN
        console.log(result);

        this.router.navigate(['/']);
      },
      error: (e) => {
        this.isWaitingResponse = false;
        this.errorMessage = 'Error';
      },
    });
  }
}
