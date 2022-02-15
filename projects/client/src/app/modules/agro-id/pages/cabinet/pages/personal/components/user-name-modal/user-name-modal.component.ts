import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'user-name-modal',
  templateUrl: './user-name-modal.component.html',
  styleUrls: ['./user-name-modal.component.less'],
})
export class UserNameModalComponent implements OnInit {
  @Input() 
  isVisible = false;
  @Output() handleClose = new EventEmitter<boolean>()
  validateForm!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: ['Кайрат', [Validators.required]],
      lastName: ['Махмудов',[Validators.required]]
    })
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      setTimeout(() => {
        this.isVisible = false;
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

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    // this.isVisible = false;
    this.close()
  }

  close() {
    this.handleClose.emit(true)
  }
}
