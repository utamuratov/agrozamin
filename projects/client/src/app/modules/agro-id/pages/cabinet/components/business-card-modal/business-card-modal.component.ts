import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-business-card-modal',
  templateUrl: './business-card-modal.component.html',
  styleUrls: ['./business-card-modal.component.less'],
})
export class BusinessCardModalComponent implements OnInit {
  visibleEditModal = false;
  validateForm!: FormGroup;
  constructor(private msg: NzMessageService, private fb: FormBuilder) {}

  ngOnInit() {
    this.validateForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      additionalPhone: [null],
      mail: [null],
    });
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.visibleEditModal = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.visibleEditModal = false;
  }

  showEditModal(): void {
    this.visibleEditModal = true;
  }

  editModalOk(): void {
    console.log('Button ok clicked!');
    this.visibleEditModal = false;
  }

  editModalCancel(): void {
    console.log('Button cancel clicked!');
    this.visibleEditModal = false;
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
