import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { ConfirmationType } from 'projects/agro-id/src/app/core/enums/confirmation-type.enum';
import { SignUpStep } from 'projects/agro-id/src/app/core/enums/sign-up-step.enum';
import { AuthService } from 'projects/agro-id/src/app/core/services/auth/auth.service';
import { SignUpRequest } from 'projects/agro-id/src/app/shared/models/auth/sign-up.request';
import { map, Observable, startWith } from 'rxjs';
import { ConfirmationConfig } from '../../../../shared/confirmation/confirmation.component';
import { PasswordAndConfirmationPassword } from '../../../../shared/password-and-confirmation-password';

@Component({
  selector: 'sign-up-set-password',
  templateUrl: './sign-up-set-password.component.html',
  styleUrls: ['./sign-up-set-password.component.less'],
})
export class SignUpSetPasswordComponent
  extends PasswordAndConfirmationPassword
  implements OnInit
{
  /**
   *
   */
  @Input()
  user!: SignUpRequest;

  /**
   *
   */
  @Output()
  changeStep = new EventEmitter<ConfirmationConfig>();

  /**
   *
   */
  isWaitingResponse$!: Observable<boolean>;

  /**
   *
   * @param fb
   * @param $ngDestroy
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    protected override $ngDestroy: NgDestroy
  ) {
    super($ngDestroy);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.initForm();
  }

  /**
   *
   * @param model
   */
  private signUp(model: SignUpRequest) {
    this.isWaitingResponse$ = this.$auth.signUp(model).pipe(
      map((response) => {
        if (response.success) {
          this.changeStep.emit({
            confirmationType: ConfirmationType.SignUp,
            nextStep: SignUpStep.Confirmation,
            login: model.phone,
            phone: model.phone,
          });
        }
        return false;
      }),
      startWith(true)
    );
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({});
    super.addPasswordAndConfrimationPasswordControls();
  }

  /**
   *
   */
  submit(): void {
    if (this.form.valid) {
      this.user.password = this.form.controls['password'].value;
      this.signUp(this.user);
    } else {
      markAllAsDirty(this.form);
    }
  }
}
