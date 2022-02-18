import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export interface UserInfoModal {
  isVisibleModal: boolean;
  title: string;
  text: string;
  data: string;
}


@Component({
  selector: 'user-info-modal',
  templateUrl: './user-info-modal.component.html',
  styleUrls: ['./user-info-modal.component.less']
})
export class UserInfoModalComponent implements OnInit {
  @Input() config!: UserInfoModal;
  @Output() handleClose = new EventEmitter<boolean>();
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      contact: [this.config?.data, [Validators.required]]
    })
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.config.isVisibleModal = false;
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
    this.config.isVisibleModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.config.isVisibleModal = false;
    this.close()
  }

  close(): void {
    this.handleClose.emit(true)
  }

}
