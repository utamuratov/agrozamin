import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'az-sign-in-test',
  templateUrl: './sign-in-test.component.html',
  styleUrls: ['./sign-in-test.component.less'],
})
export class SignInTestComponent implements OnInit, OnDestroy {
  static readonly CLIENT_ID = '96880ad0-7b49-4d00-bbe0-da023ef89cf8'; //"95aafe79-4e63-4d6d-98cc-fde7b302fc3f";
  static readonly CLIENT_SECRET = '9tyUetFhRxu4PjIy07BJ7HzxNC75lGUSmsVMY0GI'; // "K44OWIgGSqkpH55vY6QQwZldir6iN17IyepOXD4K";

  form!: FormGroup;
  aSub!: Subscription;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}

  private initForm() {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit() {
    this.initForm();
  }

  ngOnDestroy(): void {
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
  }

  submit() {
    if (this.form.invalid) {
      return;
    }
    const request = {
      login: this.form.value.login,
      password: this.form.value.password,
      client_id: SignInTestComponent.CLIENT_ID,
      client_secret: SignInTestComponent.CLIENT_SECRET,
    };

    this.aSub = this.auth.login(request).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
