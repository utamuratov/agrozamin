import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzImage, NzImageService } from 'ng-zorro-antd/image';
import { GridQuery, BaseResponse, GridModel } from 'ngx-az-core';
import { GridLogic } from 'projects/advertisement/src/app/shared/grid/grid-logic/grid-logic';
import { finalize, Observable, tap } from 'rxjs';
import { SupportChatRequest } from './dto/support-chat.request';
import { SupportChatResponse } from './dto/support-chat.response';
import { SupportChatService } from './services/support-chat.service';

@Component({
  selector: 'az-support-chat',
  templateUrl: './support-chat.component.html',
  styleUrls: ['./support-chat.component.less'],
  providers: [DatePipe, NzImageService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatComponent
  extends GridLogic<SupportChatResponse>
  implements OnInit
{
  /**
   *
   */
  message?: string;

  /**
   *
   */
  messagesByDate = new Map();

  /**
   *
   */
  @ViewChild('scrollMe')
  private myScrollContainer!: ElementRef;

  isOnline = true;

  /**
   *
   * @param $data
   * @param cd
   * @param datePipe
   * @param $nzImage
   */
  constructor(
    protected override $data: SupportChatService,
    protected override cd: ChangeDetectorRef,
    private datePipe: DatePipe,
    private $nzImage: NzImageService
  ) {
    super($data, cd);
  }

  /**
   *
   */
  private scrollToBottom(): void {
    setTimeout(() => {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    });
  }

  /**
   *
   * @param query
   * @param url
   * @returns
   */
  protected override $loadDataFromServer(
    query: GridQuery,
    url: string | undefined
  ): Observable<BaseResponse<GridModel<SupportChatResponse>>> {
    return super.$loadDataFromServer(query, url).pipe(
      tap((result) => {
        const messages = result.data.data;
        if (query.pageIndex === 1) {
          messages.forEach((message) => {
            this.setMessageToMap(message);
          });

          // TODO:REMOVE
          messages.forEach((message) => {
            this.setMessageToMap({...message, owner: false});
          });


          this.scrollToBottom();

          return;
        }

        for (let index = messages.length - 1; index >= 0; index--) {
          const message = messages[index];
          const scrollHeight =
            this.myScrollContainer.nativeElement.scrollHeight;
          this.setMessageToMap(message, true);
          setTimeout(() => {
            this.myScrollContainer.nativeElement.scrollTop =
              this.myScrollContainer.nativeElement.scrollHeight - scrollHeight;
          });
        }
      })
    );
  }

  /**
   *
   * @param message
   */
  private setMessageToMap(message: SupportChatResponse, unshift = false) {
    const key = this.datePipe.transform(message.created_at, 'd MMMM');
    let messages = this.messagesByDate.get(key);

    if (!messages) {
      messages = [];
      this.messagesByDate.set(key, messages);
    }

    if (unshift) {
      messages.unshift(message);
    } else {
      messages.push(message);
    }
  }

  /**
   *
   * @param request
   * @returns
   */
  private $sendMessage(request: SupportChatRequest) {
    return this.$data.sendMessage(request).pipe(
      finalize(() => {
        this.scrollToBottom();
        this.cd.markForCheck();
      })
    );
  }

  /**
   *
   * @param files
   * @param messageResponse
   */
  private sendImage(image: File, messageResponse: SupportChatResponse) {
    const request: SupportChatRequest = {
      text: '',
      file: image,
    };
    this.$sendMessage(request).subscribe((result) => {
      if (result.success) {
        if (result.data) {
          messageResponse.hasError = false;
        }
      } else {
        messageResponse.hasError = true;
        messageResponse.fileNotLoaded = request.file;
      }

      messageResponse.isLoading = false;
    });
  }

  /**
   *
   * @param imagesSrc
   * @returns
   */
  private addImageToChat(imageSrc: string) {
    const messageResponse: SupportChatResponse = {
      created_at: new Date(),
      owner: true,
      isLoading: true,
      file: imageSrc,
    };
    this.setMessageToMap(messageResponse);
    this.cd.markForCheck();
    return messageResponse;
  }

  /**
   *
   */
  ngOnInit(): void {
    this.onInit();
  }

  /**
   *
   * @param message
   */
  sendMessage(message?: string) {
    if (message?.length) {
      const request: SupportChatRequest = { text: message };
      this.$sendMessage(request).subscribe((result) => {
        if (result.success) {
          if (result.success) {
            this.message = '';
            const messageResponse: SupportChatResponse = {
              text: message,
              created_at: new Date(),
              owner: true,
            };
            this.setMessageToMap(messageResponse);
          }
        }
      });
    }
  }

  /**
   *
   * @param e
   */
  handleImagesInput(e: NzSafeAny) {
    const files: File[] | null | undefined = e.target?.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const image = files[i];
        if (image) {
          const reader = new FileReader();
          reader.onload = () => {
            const imageSrc = reader.result as string;

            const messageResponse: SupportChatResponse =
              this.addImageToChat(imageSrc);

            this.sendImage(image, messageResponse);
          };

          reader.readAsDataURL(image);
        }
      }
    }
  }

  /**
   *
   * @param message
   */
  reUpload(message: SupportChatResponse) {
    if (message.fileNotLoaded) {
      message.isLoading = true;
      this.sendImage(message.fileNotLoaded, message);
    }
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
  onScrollEvent($event: any) {
    if ($event.target.scrollTop === 0) {
      if (this.data.total > (this.query.pageIndex - 1) * this.query.pageSize) {
        this.paginate(this.query.pageIndex + 1);
      }
    }
  }
}
