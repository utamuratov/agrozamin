import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompanyInfo } from '../../legal-person.component';

@Component({
  selector: 'az-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.less']
})
export class CompanyModalComponent {
  public isVisibleModal= false;
  info!: CompanyInfo | null;
  @Output() closeIsVisible = new EventEmitter<boolean>()
  isConfirmLoading = false;
  validateForm!: FormGroup;
  avatar: any
  constructor(private fb: FormBuilder) {    
  }
  


  onInit() {
    console.log(this.info);
    this.avatar = this.info?.avatar
    this.validateForm = this.fb.group({
      companyName: [this.info?.name, [Validators.required]],
      companyAdres: [this.info?.city, [Validators.required]],
      bank: [this.info?.serviceBanking, [Validators.required]],
      stir: [this.info?.stir, [Validators.required]],
      mfo: [this.info?.mfo, [Validators.required]],
      paymentAccount: [this.info?.contributinCount, [Validators.required]],
      avatar: [this.info?.avatar]
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
