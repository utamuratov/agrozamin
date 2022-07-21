import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

export interface BusinessCardConfig {
  isVisibleEditModal: boolean;
  title: string;
  data?: UserCard;
}

export interface UserCard {
  firstName: string;
  lastName: string;
  phone: string[];
  avatar: string;
  mail: string;
}


@Component({
  selector: 'business-card-modal',
  templateUrl: './business-card-modal.component.html',
  styleUrls: ['./business-card-modal.component.less'],
})
export class BusinessCardModalComponent implements OnInit {
  @Input() config!: BusinessCardConfig;

  @Output() invisibleModal = new EventEmitter<boolean>();
  validateForm!: FormGroup;
  constructor(private msg: NzMessageService, private fb: FormBuilder) {}

  ngOnInit() {
    console.log(this.config);
    
    this.validateForm = this.fb.group({
      firstName: [this.config.data?.firstName, [Validators.required]],
      lastName: [this.config.data?.lastName, [Validators.required]],
      phone: [this.config.data?.phone[0], [Validators.required]],
      additionalPhone: [this.config.data?.phone?.[1]],
      mail: [this.config.data?.mail],
    });
  }

  toggleModal(event: boolean): void {
    this.invisibleModal.emit(event)
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.config.isVisibleEditModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.config.isVisibleEditModal = false;
  }

  showEditModal(): void {
    this.config.isVisibleEditModal = true;
  }

  editModalOk(): void {
    console.log('Button ok clicked!');
    this.config.isVisibleEditModal = false;
  }

  editModalCancel(): void {
    console.log('Button cancel clicked!');
    this.config.isVisibleEditModal = false;
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }
}
