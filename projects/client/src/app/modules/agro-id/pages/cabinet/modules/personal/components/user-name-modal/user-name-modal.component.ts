import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Values } from '../personal/personal.component';

@Component({
  selector: 'user-name-modal',
  templateUrl: './user-name-modal.component.html',
  styleUrls: ['./user-name-modal.component.less'],
})
export class UserNameModalComponent implements OnInit {
  @Input()
  isVisible = false;

  @Input()
  inputValues!: Values;

  @Output() handleClose = new EventEmitter<boolean>();
  validateForm!: FormGroup;
  isConfirmLoading = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [this.inputValues.firstName, [Validators.required]],
      lastName: [this.inputValues.lastName, [Validators.required]],
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      this.isConfirmLoading = true;

      setTimeout(() => {
        console.log('submit', this.validateForm.value);
        this.isVisible = false;
        this.close();
        this.isConfirmLoading = false;
      }, 1000);
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.close();
  }

  close() {
    this.handleClose.emit(false);
  }
}
