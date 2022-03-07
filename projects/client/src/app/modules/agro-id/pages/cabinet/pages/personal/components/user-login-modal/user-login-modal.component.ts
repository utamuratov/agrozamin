import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Values } from '../../personal.component';

@Component({
  selector: 'az-user-login-modal',
  templateUrl: './user-login-modal.component.html',
  styleUrls: ['./user-login-modal.component.less']
})
export class UserLoginModalComponent implements OnInit {
  @Input() loginValue!: Values;
  @Input() isVisible = false;
  @Output() handleVisible = new EventEmitter<boolean>();
  isConfirmLoading = false;
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      login: [this.loginValue.login, [Validators.required]],
    });
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.handleVisible.emit(false);
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.handleVisible.emit(false);
  }
}
