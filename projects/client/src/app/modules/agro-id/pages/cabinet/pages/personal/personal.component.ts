import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.less'],
})
export class PersonalComponent implements OnInit {
  isVisible = false;
  isVisibleEmailModal = false;
  isVisiblePhoneModal = false;
  isOkLoading = false;
  validateForm!: FormGroup;

  userName = 'Кайрат';
  userSurname = 'Махмудов';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      firstName: [this.userName, [Validators.required]],
      lastName: [this.userSurname, [Validators.required]],
    });
  }

  showUserNameModal(): void {
    this.isVisible = true;
  }

  showEmailModal(): void {
    this.isVisibleEmailModal = true;
  }

  showPhoneModal(): void {
    this.isVisiblePhoneModal = true;
  }

  handleCancel(): void {
    this.isVisible = false;
    this.isVisibleEmailModal = false;
    this.isVisiblePhoneModal = false;
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.isOkLoading = true;
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.isVisible = false;
        this.isOkLoading = false;
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
}
