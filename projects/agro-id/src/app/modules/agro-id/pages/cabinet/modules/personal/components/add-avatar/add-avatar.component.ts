import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { map, Observable, startWith } from 'rxjs';
import { PersonalService } from '../../services/personal.service';

@Component({
  selector: 'az-add-avatar',
  templateUrl: './add-avatar.component.html',
  styleUrls: ['./add-avatar.component.less'],
})
export class AddAvatarComponent implements OnInit {
  /**
   *
   */
  private _isVisible = false;
  public get isVisible(): boolean {
    return this._isVisible;
  }
  @Input()
  public set isVisible(v: boolean) {
    this._isVisible = v;
    if (this.isWaitingResponse$) {
      this.isWaitingResponse$ = undefined;
    }
  }

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  avatar!: string | null;

  /**
   *
   */
  @Output()
  avatarChange = new EventEmitter<string | null>();

  /**
   *
   */
  @ViewChild('photo')
  inputPhoto!: ElementRef;

  /**
   *
   */
  isWaitingResponse$?: Observable<boolean>;

  /**
   *
   */
  disabled = true;

  /**
   *
   */
  readonly MIN_ZOOM = 1;

  /**
   *
   */
  readonly MAX_ZOOM = 5;

  /**
   *
   */
  readonly MIN_ROTATE = -180;

  /**
   *
   */
  readonly MAX_ROTATE = 180;

  /**
   *
   */
  zoom = 1;

  /**
   *
   */
  rotate = 0;

  /**
   *
   */
  imageChangedEvent: Event | null = null;

  /**
   *
   */
  croppedImage?: string | null = null;

  /**
   *
   * @param $data
   */
  constructor(private $data: PersonalService) {}

  ngOnInit() {}

  /**
   *
   * @param event
   */
  fileChangeEvent(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (!files || files.length === 0) {
      return;
    }
    this.avatar = '';
    this.imageChangedEvent = event;
    this.disabled = false;
  }

  /**
   *
   * @param event
   */
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  /**
   *
   * only works for dataURL
   * @param dataurl
   * @param filename
   * @returns
   */
  dataURLtoFile(dataurl: string, filename: string | undefined) {
    const arr = dataurl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename ?? '', { type: mime });
  }

  /**
   *
   */
  submit() {
    this.isWaitingResponse$ = this.$data
      .changeAvatar(
        this.croppedImage
          ? this.dataURLtoFile(
              this.croppedImage,
              (this.imageChangedEvent?.target as HTMLInputElement)?.files?.item(
                0
              )?.name
            )
          : null
      )
      .pipe(
        map((result) => {
          if (result.success) {
            this.avatarChange.emit(result.data);
            this.close();
          }

          return false;
        }),
        startWith(true)
      );
  }

  /**
   *
   */
  delete() {
    this.avatar = '';
    this.croppedImage = null;
    this.inputPhoto.nativeElement.value = '';
    this.imageChangedEvent = null;
  }

  /**
   *
   */
  close(): void {
    this.isVisibleChange.emit(false);
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
}
