import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'az-biznes-cards-modal',
  templateUrl: './biznes-cards-modal.component.html',
  styleUrls: ['./biznes-cards-modal.component.less'],
})
export class BiznesCardsModalComponent implements OnInit {
  @Input() isVisibleModal = true;

  @Output() closeIsVisible = new EventEmitter<boolean>();
  isConfirmLoading = false;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      mail: [null, [Validators.required]],
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
      this.closeIsVisible.emit(false);
    }, 1000);
  }

  handleCancel(): void {
    this.isVisibleModal = false;
    this.closeIsVisible.emit(false);
  }
}
