import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'az-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.less'],
})
export class AddAvatarComponent implements OnInit {
  @Input() isVisible = false;

  @Output() handleClose = new EventEmitter<boolean>();
  isConfirmLoading = false;

  disabled = false;
  zoom = 1;
  rotate = 0;

  constructor() {}

  imageChangedEvent: any = '';
  croppedImage: any = '';

  ngOnInit() {}

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }
  imageLoaded(image: LoadedImage) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  handleOk(): void {
    this.isConfirmLoading = true;
    setTimeout(() => {
      this.handleClose.emit(false);
      this.isConfirmLoading = false;
    }, 1000);
  }

  handleCancel(): void {
    this.handleClose.emit(false);
  }
}
