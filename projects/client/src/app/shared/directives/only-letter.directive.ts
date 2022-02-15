import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[onlyLetter]',
})
export class OnlyLetterDirective {
  /**
   *
   */
  constructor(private el: ElementRef, private control: NgControl) {}

  /**
   *
   */
  @HostListener('input', ['$event'])
  onInputChanged() {
    let value: string = this.control?.control?.value;
    if (value) {
      // *Replace non letters in unicode to ''
      value = value.replace(/[^\p{Letter}]/u, '');
      this.control.control?.setValue(value);
    }
  }
}
