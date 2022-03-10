import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'az-user-password-modal',
  templateUrl: './user-password-modal.component.html',
  styleUrls: ['./user-password-modal.component.less'],
})
export class UserPasswordModalComponent implements OnInit {
  @Input()
  isVisible = false;

  @Output() handleClose = new EventEmitter<boolean>();
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  passwordVisible = false;
  confirmPasswordVisible = false;
  password?: string;
  confirmPassword?: string;
  isSuccess = false;
  isConfirmLoading = false;

  ngOnInit() {
    this.validateForm = this.fb.group({
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isConfirmLoading = true;
      setTimeout(() => {
        this.isConfirmLoading = false;
        console.log('submit', this.validateForm.value);
        this.isSuccess = true;
        this.close();
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

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() =>
      this.validateForm.controls['checkPassword'].updateValueAndValidity()
    );
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    } else if (control.value !== this.validateForm.controls['password'].value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isSuccess = true;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
    this.close();
  }

  close() {
    this.handleClose.emit(false);
  }

  handleSuccess($event: boolean): void {
    this.isSuccess = $event;
  }
}
