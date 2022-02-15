import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recover-login',
  templateUrl: './recover-login.component.html',
  styleUrls: ['./recover-login.component.less']
})
export class RecoverLoginComponent implements OnInit {
  @Output() changeComponentEvent = new EventEmitter<number>()
  switchNext = 1;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      login: [null, [Validators.required]]
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      this.validateForm.markAllAsTouched();
    }
  }


  nexComponent(): void {
    this.changeComponentEvent.emit(this.switchNext);
  }
}
