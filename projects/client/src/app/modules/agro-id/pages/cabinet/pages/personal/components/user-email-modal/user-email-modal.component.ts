import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Values } from '../../personal.component';


@Component({
  selector: 'az-user-email-modal',
  templateUrl: './user-email-modal.component.html',
  styleUrls: ['./user-email-modal.component.less'],
})
export class UserEmailModalComponent implements OnInit {
  @Input() emailValue!: Values;
  @Input() isVisible = false;
  @Output() handleVisible = new EventEmitter<boolean>()
  isConfirmLoading = false;
  validateForm!: FormGroup
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      email: [this.emailValue.email, [Validators.required]]
    }) 
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
      this.handleVisible.emit(false)
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
    this.handleVisible.emit(false)
  }
}
