import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NzUploadFile } from 'ng-zorro-antd/upload';



const getBase64 = (file: File): Promise<string | ArrayBuffer | null> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

@Component({
  selector: 'az-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.less']
})
export class AddAvatarComponent implements OnInit {
  @Input() isVisible = false;

  @Output() handleClose = new EventEmitter<boolean>()
  isConfirmLoading = false;

  disabled = false;
  zoom = 1;
  rotate = 1;

  
  constructor() {}

  ngOnInit() {}

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.handleClose.emit(false)
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.handleClose.emit(false)
  }
}
