import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserInfo } from '../business-card/business-card.page';

@Component({
  selector: 'az-add-edit-business-card',
  templateUrl: './add-edit-business-card.component.html',
  styleUrls: ['./add-edit-business-card.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditBusinessCardComponent {
  isVisibleModal = false;
  user!: UserInfo | null;
  @Output() closeIsVisible = new EventEmitter<boolean>();
  isConfirmLoading = false;
  validateForm!: FormGroup;
  avatar: any;

  constructor(private fb: FormBuilder) {}

  onInit() {
    this.avatar = this.user?.avatar;
    this.validateForm = this.fb.group({
      firstName: [this.user?.firstName, [Validators.required]],
      lastName: [this.user?.lastName, [Validators.required]],
      phone: [this.user?.phone, [Validators.required]],
      mail: [this.user?.mail, [Validators.required]],
    });
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
