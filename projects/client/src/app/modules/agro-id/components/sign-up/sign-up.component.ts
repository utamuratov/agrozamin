import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { NgDestroy } from 'projects/client/src/app/core/services/ng-destroy.service';
import { SignUpRequest } from 'projects/client/src/app/shared/models/auth/sign-up.request';
import {
  catchError,
  finalize,
  map,
  Observable,
  of,
  startWith,
  takeUntil,
} from 'rxjs';
import {
  SignUpOutputModel,
  SignUpStep,
} from '../../pages/sign-up/sign-up.page';

const ERROR_MESSAGE_FROM_SERVER = 'errorMessageFromServer';
const EMAIL = 'email';
const PHONE = 'phone';
const PASSWORD = 'password';
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
  @Output() changeStep = new EventEmitter<SignUpOutputModel>();

  /**
   *
   */
  signUpForm!: FormGroup;

  /**
   *
   */
  byPhoneNumber = true;

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
   */
  togglePhonenumberAndEmail(): void {
    this.byPhoneNumber = !this.byPhoneNumber;
    this.addPhoneNumberOrEmailControl();
  }

  /**
   *
   */
  private initForm() {
    this.signUpForm = this.fb.group({
      f_name: [null, [Validators.required, Validators.minLength(2)]],
      l_name: [null, [Validators.required, Validators.minLength(2)]],
      [PASSWORD]: [null, [Validators.required, Validators.minLength(6)]],
      [CONFIRMATION_PASSWORD]: [
        null,
        [Validators.required],
        [this.mustMatchPAsswordAsyncValidator()],
      ],
      agree: [null, [Validators.requiredTrue]],
    });
    this.addPhoneNumberOrEmailControl();
    this.onPasswordValueChanges();
  }

  /**
   *
   */
  private onPasswordValueChanges() {
    this.signUpForm
      .get(PASSWORD)
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
  private addPhoneNumberOrEmailControl() {
    if (this.byPhoneNumber) {
      this.addPhoneNumberControl();
      return;
    }

    this.addEmailControl();
  }

  /**
   *
   */
  private addEmailControl() {
    this.signUpForm.removeControl(PHONE);
    this.signUpForm.addControl(
      EMAIL,
      new FormControl(
        null,
        [Validators.required, Validators.email],
        [this.loginAsyncValidator()]
      )
    );

    this.onEmailChanges();
  }

  private onEmailChanges() {
    this.signUpForm
      .get(EMAIL)
      ?.valueChanges.pipe(takeUntil(this.$ngDestroy))
      .subscribe((email) => {
        if (!email || email.indexOf('@') >= 0) {
          this.mailTypes = [];
        } else {
          this.mailTypes = ['gmail.com', 'mail.ru', 'outlook.com'].map(
            (domain) => `${email}@${domain}`
          );
        }
      });
  }

  /**
   *
   */
  private addPhoneNumberControl() {
    this.signUpForm.removeControl(EMAIL);
    this.signUpForm.addControl(
      PHONE,
      new FormControl(null, [Validators.required], [this.loginAsyncValidator()])
    );
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
    if (this.byPhoneNumber) {
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
            login: this.byPhoneNumber ? model.phone : model.email,
            byPhoneNumber: this.byPhoneNumber,
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
      if (control.invalid && !control.hasError(ERROR_MESSAGE_FROM_SERVER)) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  /**
   *
   * @returns
   */
  private loginAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return this.$auth
        .checkLoginToUnique(
          this.byPhoneNumber
            ? { phone: Constants.PREFIX_PHONENUMBER + control.value }
            : { email: control.value }
        )
        .pipe(
          map(() => {
            return null;
          }),
          catchError((errors: ErrorItem[]) => {
            return of({ [ERROR_MESSAGE_FROM_SERVER]: errors[0] });
          })
        );
    };
  }

  /**
   *
   * @returns
   */
  private mustMatchPAsswordAsyncValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      if (control.value !== this.signUpForm.controls[PASSWORD].value) {
        return of({ mustMatch: true });
      } else {
        return of(null);
      }
    };
  }
}
