import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignInRequest } from 'projects/client/src/app/shared/models/auth/sign-in.request';

@Component({
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInPage implements OnInit {
  /**
   *
   */
  isLoading = false;

  /**
   *
   */
  loginForm!: FormGroup;

  /**
   * 
   */
  errorMessage!: string;

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
    if (this.isLoading) {
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
    this.isLoading = true;
    this.$auth.signIn(model).subscribe({
      next: (result) => {
        this.isLoading = false;
        // !WORK ON TOKEN
        console.log(result);

        this.router.navigate(['/']);
      },
      error: (e) => {
        this.isLoading = false;
        this.errorMessage = 'Error'
      },
      complete: () => (this.isLoading = false),
    });
  }
}
