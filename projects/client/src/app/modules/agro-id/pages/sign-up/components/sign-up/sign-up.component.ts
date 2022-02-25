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
import { Constants } from 'projects/client/src/app/core/config/constants';
import { SignUpStep } from 'projects/client/src/app/core/enums/sign-up-step.enum';
import { ValidationHelper } from 'projects/client/src/app/core/helpers/validation.helper';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { SignUpRequest } from 'projects/client/src/app/shared/models/auth/sign-up.request';
import { catchError, map, Observable, of } from 'rxjs';

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

    this.checkValidations();
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
      f_name: [
        null,
        [
          Validators.required,
          Validators.minLength(Constants.FIRST_NAME_MIN_LENGTH),
        ],
      ],
      l_name: [
        null,
        [
          Validators.required,
          Validators.minLength(Constants.LAST_NAME_MIN_LENGTH),
        ],
      ],
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
        map(() => {
          return null;
        }),
        catchError((errors: ErrorItem[]) => {
          return of({ [Constants.ERROR_MESSAGE_FROM_SERVER]: errors[0] });
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
          map(() => {
            return null;
          }),
          catchError((errors: ErrorItem[]) => {
            return of({ [Constants.ERROR_MESSAGE_FROM_SERVER]: errors[0] });
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

  /**
   *
   */
  private checkValidations() {
    Object.values(this.form.controls).forEach((control) => {
      if (
        control.invalid &&
        !control.hasError(Constants.ERROR_MESSAGE_FROM_SERVER)
      ) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }
}
