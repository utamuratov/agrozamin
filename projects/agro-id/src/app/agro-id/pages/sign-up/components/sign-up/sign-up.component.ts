import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Constants, markAllAsDirty, ValidationHelper } from 'ngx-az-core';
import { SignUpStep } from 'projects/agro-id/src/app/core/enums/sign-up-step.enum';
import { AuthService } from 'projects/agro-id/src/app/core/services/auth/auth.service';
import { SignUpRequest } from 'projects/agro-id/src/app/shared/models/auth/sign-up.request';
import { map, Observable } from 'rxjs';

export interface SignUpSetPasswordConfig {
  nextStep: SignUpStep;
  user: SignUpRequest;
}

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  /**
   *
   */
  @Output()
  changeStep = new EventEmitter<SignUpSetPasswordConfig>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  mailTypes: string[] = [];

  /**
   *
   */
  readonly ERROR_MESSAGE_FROM_SERVER = Constants.ERROR_MESSAGE_FROM_SERVER;

  /**
   *
   */
  constructor(private fb: FormBuilder, private $auth: AuthService) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   */
  continue(): void {
    if (this.form.valid) {
      const model: SignUpRequest = this.getSignUpRequest();
      this.changeStep.emit({ nextStep: SignUpStep.SetPassword, user: model });
      return;
    }

    markAllAsDirty(this.form);
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      login: [
        null,
        [
          Validators.required,
          Validators.minLength(Constants.LOGIN_MIN_LENGTH),
          ValidationHelper.loginPatternValidator,
        ],
        [this.loginAsyncValidator()],
      ],
      f_name: [null, [Validators.required]],
      l_name: [null, [Validators.required]],
      agree: [null, [Validators.requiredTrue]],
      phone: [null, [Validators.required], [this.phoneAsyncValidator()]],
    });
  }

  /**
   *
   * @returns
   */
  private loginAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.$auth.checkLoginToUnique({ login: control.value }).pipe(
        map((result) => {
          if (result.success) {
            return null;
          }

          return { [this.ERROR_MESSAGE_FROM_SERVER]: result.error[0] };
        })
      );
    };
  }

  /**
   *
   * @returns
   */
  private phoneAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.$auth
        .checkPhoneToUnique({
          phone: Constants.PREFIX_PHONENUMBER + control.value,
        })
        .pipe(
          map((result) => {
            if (result.success) {
              return null;
            }

            return { [this.ERROR_MESSAGE_FROM_SERVER]: result.error[0] };
          })
        );
    };
  }

  /**
   *
   * @returns
   */
  private getSignUpRequest(): SignUpRequest {
    const model: SignUpRequest = this.form.getRawValue();
    model.phone = `${Constants.PREFIX_PHONENUMBER}${model.phone}`;
    return model;
  }
}
