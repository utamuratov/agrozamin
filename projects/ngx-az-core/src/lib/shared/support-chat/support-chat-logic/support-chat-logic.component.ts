import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostListener,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Observable, tap, finalize } from 'rxjs';
import { GridLogic } from '../../../helpers/grid-logic';
import { BaseResponse } from '../../../models/base-response.interface';
import { GridModel } from '../../../models/grid-model';
import { GridQuery } from '../../../models/grid-query.interface';
import { SupportChatRequest } from '../dto/support-chat.request';
import { SupportChatResponse } from '../dto/support-chat.response';
import { SupportChatService } from '../services/support-chat.service';

@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatLogicComponent
  extends GridLogic<SupportChatResponse>
  implements OnInit
{
  /**
   *
   */
  messagesByDate = new Map();

  /**
   *
   */
  isOnline = true;

  /**
   *
   */
  myScrollContainer?: ElementRef;

  /**
   *
   * @param $data
   * @param cd
   * @param datePipe
   */
  constructor(
    protected override $data: SupportChatService,
    protected override cd: ChangeDetectorRef,
    protected datePipe: DatePipe
  ) {
    super($data, cd);
  }

  /**
   *
   */
  private scrollToBottom(): void {
    setTimeout(() => {
      if (this.myScrollContainer) {
        this.myScrollContainer.nativeElement.scrollTop =
          this.myScrollContainer.nativeElement.scrollHeight;
      }
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

          this.scrollToBottom();
          this.messagesByDate = new Map(this.messagesByDate);
        } else {
          for (let index = messages.length - 1; index >= 0; index--) {
            const message = messages[index];
            const scrollHeight =
              this.myScrollContainer?.nativeElement.scrollHeight;
            this.setMessageToMap(message, true);
            setTimeout(() => {
              if (this.myScrollContainer) {
                this.myScrollContainer.nativeElement.scrollTop =
                  this.myScrollContainer.nativeElement.scrollHeight -
                  scrollHeight;
              }
            });
          }
        }

        this.reSetMessages();
      })
    );
  }

  /**
   * *BECAUSE OF CHANGE DETECTION STRATEGY ONPUSH
   */
  private reSetMessages() {
    this.messagesByDate = new Map(this.messagesByDate);
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
  private $sendMessage(
    request: SupportChatRequest,
    messageResponse: SupportChatResponse
  ) {
    this.scrollToBottom();

    return this.$data.sendMessage(request).pipe(
      tap((result) => {
        if (result.success) {
          if (result.data) {
            messageResponse.hasError = false;
          }
        } else {
          messageResponse.hasError = true;
          messageResponse.fileNotSended = request.file;
          messageResponse.textNotSended = request.text;
        }
      }),
      finalize(() => {
        messageResponse.isLoading = false;
        this.reSetMessages();
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
    this.$sendMessage(request, messageResponse).subscribe();
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
    this.reSetMessages();
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
      const messageResponse = this.addMessageToChat(message);

      const request: SupportChatRequest = { text: message };
      this.$sendMessage(request, messageResponse).subscribe();
    }
  }

  /**
   *
   * @param message
   * @returns
   */
  private addMessageToChat(message: string): SupportChatResponse {
    const messageResponse: SupportChatResponse = {
      text: message,
      created_at: new Date(),
      owner: true,
      isLoading: true,
    };
    this.setMessageToMap(messageResponse);
    this.reSetMessages();
    return messageResponse;
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
  reSendImage(message: SupportChatResponse) {
    if (message.fileNotSended) {
      message.isLoading = true;
      this.sendImage(message.fileNotSended, message);
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
   * @param $event
   */
  @HostListener('scroll', ['$event'])
  onScrollEvent($event: NzSafeAny) {
    if ($event.target.scrollTop < 100) {
      if (this.data.total > (this.query.pageIndex - 1) * this.query.pageSize) {
        this.paginate(this.query.pageIndex + 1);
      }
    }
  }
}
