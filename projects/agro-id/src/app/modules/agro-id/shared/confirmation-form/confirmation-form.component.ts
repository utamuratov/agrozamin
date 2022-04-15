import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  interval,
  map,
  Observable,
  shareReplay,
  startWith,
  takeWhile,
} from 'rxjs';

const LEFT_SECONDS_BY_PHONE = 60;
const LEFT_SECONDS_BY_EMAIL = 180;

@Component({
  selector: 'az-confirmation-form',
  templateUrl: './confirmation-form.component.html',
  styleUrls: ['./confirmation-form.component.less'],
})
export class ConfirmationFormComponent implements OnInit {
  /**
   *
   */
  @Input()
  phone?: string;

  /**
   *
   */
  @Output()

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  $leftSeconds!: Observable<number>;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  $isWaitingActivationCodeResponse?: Observable<boolean>;

  constructor(private fb: FormBuilder, private elementRef: ElementRef) {}

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
  public startTimer() {
    let leftSeconds = this.phone
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
   * @returns
   */
  public getActivationCode() {
    let activationCode = '';
    for (const key in this.form.value) {
      activationCode += this.form.value[key];
    }
    return activationCode;
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
}
