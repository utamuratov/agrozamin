import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  SignUpOutputModel,
  SignUpStep,
} from '../../pages/sign-up/sign-up.page';
import { AuthService } from 'projects/client/src/app/core/services/auth/auth.service';
import { ErrorItem } from 'projects/client/src/app/core/models/error-item.interface';
import {
  catchError,
  finalize,
  interval,
  map,
  Observable,
  of,
  shareReplay,
  startWith,
  take,
} from 'rxjs';

const LEFT_SECONDS_BY_PHONE = 60;
const LEFT_SECONDS_BY_EMAIL = 180;

@Component({
  selector: 'sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
  styleUrls: ['./sign-up-confirmation.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpConfirmationComponent implements OnInit {
  /**
   *
   */
  @Output() changeStep = new EventEmitter<number>();

  /**
   *
   */
  @Input()
  data!: SignUpOutputModel;

  /**
   *
   */
  confirmationForm!: FormGroup;

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
    private $auth: AuthService
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
    const count = leftSeconds;
    this.$leftSeconds = interval(1000).pipe(
      map(() => {
        leftSeconds -= 1;
        return leftSeconds * 1000;
      }),
      shareReplay(1),
      take(count)
    );
  }

  /**
   *
   */
  private initForm() {
    this.confirmationForm = this.fb.group({
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
  confirmPasscode(): void {
    if (this.$isWaitingResponse) {
      return;
    }

    let activationCode = '';
    for (const key in this.confirmationForm.value) {
      activationCode += this.confirmationForm.value[key];
    }
    this.$isWaitingResponse = this.$auth
      .sendAccountActivationCode({
        login: this.data?.login,
        secure_code: activationCode,
      })
      .pipe(
        map((result) => {
          console.log('submit', { result });
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
  }

  /**
   *
   * @param index
   */
  setFocus(index: number): void {
    const control = this.confirmationForm.controls[`activationCode${index}`];
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
  askActivationCodeAgain() {
    if (this.$isWaitingActivationCodeResponse) {
      return;
    }

    this.$isWaitingActivationCodeResponse = this.$auth
      .askAccountActivationCode({ login: this.data?.login })
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
