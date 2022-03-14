import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'az-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.less']
})
export class CompanyModalComponent implements OnInit {
  @Input() isVisibleModal = true;

  @Output() closeIsVisible = new EventEmitter<boolean>()
  isConfirmLoading = false;
  validateForm!: FormGroup

  constructor(private fb: FormBuilder) {    
  }
  
  ngOnInit() {
    this.validateForm = this.fb.group({
      companyName: [null, [Validators.required]],
      bank: [null, [Validators.required]],
      stir: [null, [Validators.required]],
      mfo: [null, [Validators.required]],
      paymentAccount: [null, [Validators.required]]
    })
  }

  showModal(): void {
    this.isVisibleModal = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisibleModal = false;
      this.isConfirmLoading = false;
      this.closeIsVisible.emit(false)
    }, 1000);
    
  }

  handleCancel(): void {
    this.isVisibleModal = false;
    this.closeIsVisible.emit(false)
  }
}
