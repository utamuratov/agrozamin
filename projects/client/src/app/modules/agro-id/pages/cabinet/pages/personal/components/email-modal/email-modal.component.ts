import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'email-modal',
  templateUrl: './email-modal.component.html',
  styleUrls: ['./email-modal.component.less']
})
export class EmailModalComponent implements OnInit {
  @Input()
  isVisible = false;
  @Output() handleClose = new EventEmitter<boolean>();
  validateForm!: FormGroup;
  userEmail = 'shisudesign@outlook.com'

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [this.userEmail, [Validators.required]]
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
