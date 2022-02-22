import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForgotPasswordStep } from 'projects/client/src/app/core/enums/forgot-password-step.enum';
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';

@Component({
  selector: 'recover-login',
  templateUrl: './recover-login.component.html',
  styleUrls: ['./recover-login.component.less'],
})
export class RecoverLoginComponent implements OnInit {
   /*
   */
  @Output() changeStep = new EventEmitter<ForgotPasswordStep>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   */
  constructor(private fb: FormBuilder) {}

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
    this.form = this.fb.group({
      login: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  submitForm(): void {
    if (this.form.valid) {
      console.log('submit', this.form.value);
      this.goToNextStep();
    } else {
      markAllAsDirty(this.form);
    }
  }

  /**
   * 
   */
  goToNextStep(): void {
    this.changeStep.emit(ForgotPasswordStep.Confirmation);
  }

  /**
   * 
   * @param loginType 
   */
  onChangedLoginType(loginType: LoginType) {
    console.log(loginType);
  }
}
