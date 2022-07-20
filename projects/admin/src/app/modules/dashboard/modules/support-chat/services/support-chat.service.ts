import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { SupportChatResponse } from '../dto/support-chat.response';

@Injectable({
  providedIn: 'root',
})
export class SupportChatService extends GridService<SupportChatResponse> {
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'admin/support-chat';
  }
}
