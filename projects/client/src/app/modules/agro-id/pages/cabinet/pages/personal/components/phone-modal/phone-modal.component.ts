import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'phone-modal',
  templateUrl: './phone-modal.component.html',
  styleUrls: ['./phone-modal.component.less']
})
export class PhoneModalComponent implements OnInit {
  @Input()
  isVisible = false;
  @Output() handleClose = new EventEmitter<boolean>();
  validateForm!: FormGroup;
  userPhone = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      phone: [this.userPhone, [Validators.required]]
    })
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.isVisible = false;
        this.close()
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
    this.close()
  }

  close(): void {
    this.handleClose.emit(true)
  }
}
