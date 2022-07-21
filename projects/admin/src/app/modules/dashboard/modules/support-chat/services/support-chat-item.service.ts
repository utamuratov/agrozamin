import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BaseResponse,
  BaseService,
  GridModel,
  GridQuery,
  SupportChatRequest,
  SupportChatResponse,
  SupportChatService,
} from 'ngx-az-core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SupportChatItemService extends SupportChatService {
  /**
   *
   */
  chatId!: string;

  /**
   *
   * @param $baseService
   * @param route
   */
  constructor(
    protected override $baseService: BaseService,
    private route: ActivatedRoute
  ) {
    super($baseService);
    this.url = 'admin/support-chat';
  }

  /**
   *
   * @param query
   * @param chatId
   * @returns
   */
  override getGridData(
    query: GridQuery,
    url?: string | undefined
  ): Observable<BaseResponse<GridModel<SupportChatResponse>>> {
    return super.getGridData(query, this.url + '/' + this.chatId);
  }

  /**
   *
   * @param message
   * @returns
   */
  override sendMessage(
    message: SupportChatRequest
  ): Observable<BaseResponse<boolean>> {
    message.chat_id = +this.chatId;
    return super.sendMessage(message);
  }
}
