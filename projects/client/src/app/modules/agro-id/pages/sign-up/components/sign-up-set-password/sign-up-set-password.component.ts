import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConfirmationType } from 'projects/client/src/app/core/enums/confirmation-type.enum';
import { SignUpStep } from 'projects/client/src/app/core/enums/sign-up-step.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { NgDestroy } from 'projects/client/src/app/core/services/ng-destroy.service';
import { markAllAsDirty } from 'projects/client/src/app/core/utilits/utilits';
import { SignUpRequest } from 'projects/client/src/app/shared/models/auth/sign-up.request';
import { catchError, map, Observable, of, shareReplay, startWith } from 'rxjs';
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
  $isWaitingResponse!: Observable<boolean>;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

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
    this.$isWaitingResponse = this.$auth.signUp(model).pipe(
      map((response) => {
        if (response) {
          this.errorMessageFromServer = undefined;
          this.changeStep.emit({
            confirmationType: ConfirmationType.SignUp,
            nextStep: SignUpStep.Confirmation,
            login: model.phone,
            phone: model.phone,
          });
        }
        return false;
      }),
      startWith(true),
      catchError((errors: ErrorItem[]) => {
        this.errorMessageFromServer = errors[0];
        return of(false);
      })
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
