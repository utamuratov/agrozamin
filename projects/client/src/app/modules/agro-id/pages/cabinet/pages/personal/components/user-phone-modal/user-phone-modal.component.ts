import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Values } from '../../personal.component';

@Component({
  selector: 'az-user-phone-modal',
  templateUrl: './user-phone-modal.component.html',
  styleUrls: ['./user-phone-modal.component.less'],
})
export class UserPhoneModalComponent implements OnInit {
  @Input() phoneValue!: Values;
  @Input() isVisible = false;
  @Output() handleVisible = new EventEmitter<boolean>();
  isConfirmLoading = false;
  isSuccess = false;
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      phone: [this.phoneValue.phone, [Validators.required]],
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isSuccess = true;
      this.isConfirmLoading = false;
      this.handleVisible.emit(false);
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.handleVisible.emit(false);
  }
  
  handleSuccess($event: boolean): void {
    this.isSuccess = $event;
  }
}
