import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  // *USE ONE OF CONTROL OR MESSAGE
  /**
   *
   */
  @Input()
  control!: FormControl;

  /**
   *
   */
  @Input()
  message!: string;
}
