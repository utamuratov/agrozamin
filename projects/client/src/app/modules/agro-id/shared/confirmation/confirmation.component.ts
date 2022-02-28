import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Constants } from 'projects/client/src/app/core/config/constants';
import { ConfirmationType } from 'projects/client/src/app/core/enums/confirmation-type.enum';
import { RecoverByLoginStep } from 'projects/client/src/app/core/enums/recover-by-login-step.enum';
import { SignUpStep } from 'projects/client/src/app/core/enums/sign-up-step.enum';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { LocalStorageUtilit } from 'projects/client/src/app/core/utilits/local-storage.utilit';
import {
  Observable,
  interval,
  map,
  startWith,
  takeWhile,
  shareReplay,
  catchError,
  of,
  finalize,
} from 'rxjs';

const LEFT_SECONDS_BY_PHONE = 60;
const LEFT_SECONDS_BY_EMAIL = 180;

export interface ConfirmationConfig {
  confirmationType: ConfirmationType;
  nextStep: number;
  login: string;
  byPhoneNumber: boolean;
  phone?: string;
}

@Component({
  selector: 'az-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.less'],
})
export class ConfirmationComponent implements OnInit {
  /**
   *
   */
  @Output() changeStep = new EventEmitter<number>();

  /**
   *
   */
  @Input()
  data!: ConfirmationConfig;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  errorMessageFromServer?: ErrorItem;

  /**
   *
   */
  $leftSeconds!: Observable<number>;

  /**
   *
   */
  $isWaitingResponse?: Observable<boolean>;

  /**
   *
   */
  $isWaitingActivationCodeResponse?: Observable<boolean>;

  /**
   *
   * @param fb
   * @param elem
   */
  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
    private $auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.startTimer();
    this.initForm();
  }

  /**
   *
   */
  startTimer() {
    let leftSeconds = this.data?.byPhoneNumber
      ? LEFT_SECONDS_BY_PHONE
      : LEFT_SECONDS_BY_EMAIL;
    const START_WITH = leftSeconds;
    this.$leftSeconds = interval(1000).pipe(
      map(() => {
        leftSeconds -= 1;
        return leftSeconds * 1000;
      }),
      startWith(START_WITH * 1000),
      takeWhile((value) => value >= 0),
      shareReplay(1)
    );
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      activationCode1: [null, [Validators.required]],
      activationCode2: [null, [Validators.required]],
      activationCode3: [null, [Validators.required]],
      activationCode4: [null, [Validators.required]],
      activationCode5: [null, [Validators.required]],
    });
  }

  /**
   *
   */
  submit(): void {
    if (this.$isWaitingResponse) {
      return;
    }

    let activationCode = '';
    for (const key in this.form.value) {
      activationCode += this.form.value[key];
    }

    switch (this.data.confirmationType) {
      case ConfirmationType.SignUp:
        this.$isWaitingResponse = this.$auth
          .sendActivationCodeToPhone({
            phone: this.data?.login,
            secure_code: activationCode,
          })
          .pipe(
            map(() => {
              this.errorMessageFromServer = undefined;
              this.changeStep.emit(SignUpStep.Success);
              return false;
            }),
            startWith(true),
            catchError((errors: ErrorItem[]) => {
              this.errorMessageFromServer = errors[0];
              return of(false);
            }),
            finalize(() => (this.$isWaitingResponse = undefined))
          );

        break;

      case ConfirmationType.RecoverByContacs:
        this.$isWaitingResponse = this.$auth
          .restoreLoginSecondStep({
            [this.data.byPhoneNumber ? Constants.PHONE : Constants.EMAIL]:
              (this.data.byPhoneNumber ? Constants.PREFIX_PHONENUMBER : '') +
              this.data?.login,
            secure_code: activationCode,
          })
          .pipe(
            map((response) => {
              this.errorMessageFromServer = undefined;
              this.router.navigate(['../../'], {
                relativeTo: this.route,
                state: { login: response.login },
              });

              return false;
            }),
            startWith(true),
            catchError((errors: ErrorItem[]) => {
              this.errorMessageFromServer = errors[0];
              return of(false);
            }),
            finalize(() => (this.$isWaitingResponse = undefined))
          );
        break;

      case ConfirmationType.RecoverByLogin:
        this.$isWaitingResponse = this.$auth
          .changePasswordStepThree({
            login: this.data.login,
            secure_code: activationCode,
          })
          .pipe(
            map(() => {
              this.errorMessageFromServer = undefined;
              this.changeStep.emit(RecoverByLoginStep.NewPassword);
              return false;
            }),
            startWith(true),
            catchError((errors: ErrorItem[]) => {
              this.errorMessageFromServer = errors[0];
              return of(false);
            }),
            finalize(() => (this.$isWaitingResponse = undefined))
          );
        break;

      default:
        break;
    }
  }

  /**
   *
   * @param index
   */
  setFocus(index: number): void {
    const control = this.form.controls[`activationCode${index}`];
    if (control?.value) {
      const elem = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index + 1}]`
      );
      if (elem) {
        elem.focus();
      }
    }
  }

  /**
   *
   * @param index
   */
  backspace(index: number): void {
    if (index > 1) {
      const inputClickedBackspase = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index}]`
      );
      if (!inputClickedBackspase?.value) {
        const elemenForFocus = this.elementRef.nativeElement.querySelector(
          `input[id=activationCode${index - 1}]`
        );
        if (elemenForFocus) {
          elemenForFocus.focus();
        }
      }
    }
  }

  /**
   *
   */
  resendActivationCode() {
    if (this.$isWaitingActivationCodeResponse) {
      return;
    }

    this.$isWaitingActivationCodeResponse = this.$auth
      .resendAccountActivationCode({ phone: this.data?.login })
      .pipe(
        map((result) => {
          if (result) {
            this.errorMessageFromServer = undefined;
            this.startTimer();
          }
          return false;
        }),
        startWith(true),
        catchError((errors: ErrorItem[]) => {
          this.errorMessageFromServer = errors[0];
          return of(false);
        }),
        finalize(() => (this.$isWaitingActivationCodeResponse = undefined))
      );
  }
}
