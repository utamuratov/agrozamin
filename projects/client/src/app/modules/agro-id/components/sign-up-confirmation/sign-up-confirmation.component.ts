import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-sign-up-confirmation',
  templateUrl: './sign-up-confirmation.component.html',
  styleUrls: ['./sign-up-confirmation.component.less'],
})
export class SignUpConfirmationComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<number>();
  switchComponentTo = 2;
  validateForm!: FormGroup;


  constructor(private fb: FormBuilder, private elem: ElementRef) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      num1: [null, [Validators.required]],
      num2: [null, [Validators.required]],
      num3: [null, [Validators.required]],
      num4: [null, [Validators.required]],
      num5: [null, [Validators.required]],
      num6: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    let confirmData = [];
    for (const key in this.validateForm.value) {
      confirmData.push(this.validateForm.value[key]);
    }
    let concatedInputs = confirmData.join('');
    console.log('submit', { concatedInputs });
  }

  nextComponent(): void {
    this.submitForm();
    this.changeComponentEvent.emit(this.switchComponentTo);
  }

  checkLength(n: number): void {
    if (n < 6) {
      if (!!this.validateForm.controls['num' + n].value) {
        const elem = this.elem.nativeElement.querySelector(
          'input[formControlName=num' + (n + 1) + ']'
        );
        if (elem) {
          elem.focus();
          // elem.select();
        }
      }
    }
  }

  onFocusInput(n: number): void {
    /* const elem = this.elem.nativeElement.querySelectorAll(
      'input[formControlName]'
    );
    for (let i = 0; i < elem.length; i++) {
      const element = elem[i];
      if (this.someMethod(element, 'focus')) {
        element.focus();
        break;
      }
    } */
  }

  clearInput(n: number): void {
    if (n > 1) {
      const elem = this.elem.nativeElement.querySelector(
        'input[formControlName=num' + n + ']'
      );
      if (this.someMethod(elem, 'backspace')) {
        const el = this.elem.nativeElement.querySelector(
          'input[formControlName=num' + (n - 1) + ']'
        );
        if (el) {
          el.focus();
          // elem.select();
        }
      }
    }
  }

  someMethod(element: any, action: string): any {
    if (element.value === null || element.value === '') {
      return true
    } else {
      return false;
    }
  }
}
