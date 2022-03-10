import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

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

  constructor() {}
  
  ngOnInit() {
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
