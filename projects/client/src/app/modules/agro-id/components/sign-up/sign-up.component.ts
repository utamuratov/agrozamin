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
import { LoginType } from 'projects/client/src/app/core/enums/login-type.enum';
import { SignUpStep } from 'projects/client/src/app/core/enums/sign-up-step.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { NgDestroy } from 'projects/client/src/app/core/services/ng-destroy.service';
import { SignUpRequest } from 'projects/client/src/app/shared/models/auth/sign-up.request';
import { catchError, map, Observable, of, startWith, takeUntil } from 'rxjs';
import { SignUpConfirmationConfig } from '../sign-up-confirmation/sign-up-confirmation.component';

const CONFIRMATION_PASSWORD = 'confirmationPassword';

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
  @Output() changeStep = new EventEmitter<SignUpConfirmationConfig>();

  /**
   *
   */
  signUpForm!: FormGroup;

  /**
   *
   */
  loginType!: LoginType;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

  /**
   *
   */
  $isWaitingResponse!: Observable<boolean>;

  /**
   *
   */
  mailTypes: string[] = [];

  /**
   *
   */
  constructor(
    private fb: FormBuilder,
    private $auth: AuthService,
    private $ngDestroy: NgDestroy
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.initForm();
  }

  /**
   *
   * @param loginType
   */
  onChangedLoginType(loginType: LoginType) {
    this.loginType = loginType;
  }

  /**
   *
   */
  private initForm() {
    this.signUpForm = this.fb.group({
      f_name: [null, [Validators.required, Validators.minLength(2)]],
      l_name: [null, [Validators.required, Validators.minLength(2)]],
      [Constants.PASSWORD]: [
        null,
        [Validators.required, Validators.minLength(6)],
      ],
      [CONFIRMATION_PASSWORD]: [
        null,
        [Validators.required],
        [this.mustMatchPAsswordAsyncValidator()],
      ],
      agree: [null, [Validators.requiredTrue]],
    });
    this.onPasswordValueChanges();
  }

  /**
   *
   */
  private onPasswordValueChanges() {
    this.signUpForm
      .get(Constants.PASSWORD)
      ?.valueChanges.pipe(takeUntil(this.$ngDestroy))
      .subscribe(() => {
        this.signUpForm.controls[CONFIRMATION_PASSWORD].markAsDirty();
        this.signUpForm.controls[CONFIRMATION_PASSWORD].updateValueAndValidity({
          onlySelf: true,
        });
      });
  }

  /**
   *
   */
  continue(): void {
    if (this.signUpForm.valid) {
      const model: SignUpRequest = this.getSignUpRequest();
      this.signUp(model);
      return;
    }

    this.checkValidations();
  }

  /**
   *
   * @returns
   */
  private getSignUpRequest(): SignUpRequest {
    const model: SignUpRequest = this.signUpForm.getRawValue();
    if (this.loginType === LoginType.PhoneNumber) {
      model.phone = `${Constants.PREFIX_PHONENUMBER}${model.phone}`;
    }
    return model;
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
            nextStep: SignUpStep.Confirmation,
            login:
              this.loginType === LoginType.PhoneNumber
                ? model.phone
                : model.email,
            byPhoneNumber: this.loginType === LoginType.PhoneNumber,
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
  private checkValidations() {
    Object.values(this.signUpForm.controls).forEach((control) => {
      if (control.invalid && !control.hasError(Constants.ERROR_MESSAGE_FROM_SERVER)) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  /**
   *
   * @returns
   */
  private mustMatchPAsswordAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (
        control.value !== this.signUpForm.controls[Constants.PASSWORD].value
      ) {
        return of({ mustMatch: true });
      } else {
        return of(null);
      }
    };
  }
}
