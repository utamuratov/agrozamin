import {
  Component,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  HostListener,
  Output,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzImageService, NzImage } from 'ng-zorro-antd/image';
import { SupportChatResponse } from '../dto/support-chat.response';

@Component({
  selector: 'az-support-chat-general',
  templateUrl: './support-chat-general.component.html',
  styleUrls: ['./support-chat-general.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatGeneralComponent {
  /**
   *
   */
  @Input()
  messagesByDate = new Map();

  /**
   *
   */
  @Input()
  isOnline = true;

  /**
   *
   */
  @Input()
  partner = 'Техподдержка Agrozamin';

  /**
   *
   */
  @Output()
  onScrollEventChange = new EventEmitter<NzSafeAny>();

  /**
   *
   */
  @Output()
  sendMessageChange = new EventEmitter<string | undefined>();

  /**
   *
   */
  @Output()
  handleImagesInputChange = new EventEmitter<NzSafeAny>();

  /**
   *
   */
  @Output()
  reSendImageChange = new EventEmitter<SupportChatResponse>();

  /**
   *
   */
  @Output()
  myScrollContainerChange = new EventEmitter<ElementRef>();

  /**
   *
   */
  @ViewChild('scrollMe')
  public set myScrollContainer(scrollElement: ElementRef | undefined) {
    if (scrollElement) {
      this.myScrollContainerChange.emit(scrollElement);
    }
  }

  /**
   *
   */
  message?: string;

  /**
   *
   * @param $nzImage
   */
  @ViewChild('uploadImage')
  uploadImage!: ElementRef;

  /**
   *
   * @param $data
   * @param cd
   * @param datePipe
   * @param $nzImage
   */
  constructor(private $nzImage: NzImageService) {}

  /**
   *
   * @param message
   */
  sendMessage(message?: string) {
    this.message = '';
    this.sendMessageChange.emit(message);
  }

  /**
   *
   * @param e
   */
  handleImagesInput(e: NzSafeAny) {
    this.handleImagesInputChange.emit(e);
    this.uploadImage.nativeElement.value = '';
  }

  /**
   *
   * @param message
   */
  reUpload(message: SupportChatResponse) {
    this.reSendImageChange.emit(message);
  }

  /**
   *
   * @param message
   */
  cancelUploadingImage(message: SupportChatResponse) {
    message.deleted = true;
  }

  /**
   *
   * @param image
   */
  viewImage(imageSrc: string) {
    const image: NzImage = { src: imageSrc };
    this.$nzImage.preview([image], { nzZoom: 1.5, nzRotate: 0 });
  }

  /**
   *
   * @param $event
   */
  @HostListener('scroll', ['$event'])
  onScrollEvent($event: NzSafeAny) {
    this.onScrollEventChange.emit($event);
  }
}
