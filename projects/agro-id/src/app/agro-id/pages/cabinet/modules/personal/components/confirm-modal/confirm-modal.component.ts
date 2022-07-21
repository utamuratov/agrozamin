import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface ConfirmModal {
  type: string;
  description: string;
  isVisible: boolean;
}

@Component({
  selector: 'az-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.less'],
})
export class ConfirmModalComponent implements OnInit {
  @Input() confirmConfig!: ConfirmModal;
  isVisible = false;
  isConfirmLoading = false;
  validateForm!: FormGroup 

  constructor(private fb: FormBuilder,  private elementRef: ElementRef) {}

  ngOnInit() {
    this.initForm()
  }

  private initForm() {
    this.validateForm = this.fb.group({
      activationCode1: [null, [Validators.required]],
      activationCode2: [null, [Validators.required]],
      activationCode3: [null, [Validators.required]],
      activationCode4: [null, [Validators.required]],
      activationCode5: [null, [Validators.required]],
    });
  }

  /**
   *
   * @param index
   */
   setFocus(index: number): void {
    const control = this.validateForm.controls[`activationCode${index}`];
    if (control?.value) {
      const elem = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index + 1}]`
      );
      if (elem) {
        elem.focus();
      }
    }
  }

  /**
   *
   * @param index
   */
  backspace(index: number): void {
    if (index > 1) {
      const inputClickedBackspase = this.elementRef.nativeElement.querySelector(
        `input[id=activationCode${index}]`
      );
      if (!inputClickedBackspase?.value) {
        const elemenForFocus = this.elementRef.nativeElement.querySelector(
          `input[id=activationCode${index - 1}]`
        );
        if (elemenForFocus) {
          elemenForFocus.focus();
        }
      }
    }
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
