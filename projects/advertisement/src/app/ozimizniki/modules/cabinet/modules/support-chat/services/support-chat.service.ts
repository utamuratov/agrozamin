import { Injectable } from '@angular/core';
import { BaseService, GridService } from 'ngx-az-core';
import { SupportChatRequest } from '../dto/support-chat.request';
import { SupportChatResponse } from '../dto/support-chat.response';

@Injectable({
  providedIn: 'root',
})
export class SupportChatService extends GridService<SupportChatResponse> {
  /**
   *
   * @param $base
   */
  constructor(protected override $baseService: BaseService) {
    super($baseService);
    this.url = 'cabinet/support-chat';
  }

  /**
   *
   * @param message
   * @returns
   */
  sendMessage(message: SupportChatRequest) {
    const formData = this.convertModelIntoFormData(message);
    return this.$baseService.post<boolean>(this.url + '/message', formData);
  }

  /**
   *
   * @param model
   * @returns
   */
  private convertModelIntoFormData(model: SupportChatRequest) {
    const formData = new FormData();
    if (model.file) {
      formData.append(`file`, model.file, model.file?.name);
    }
    formData.append('text', model.text);

    return formData;
  }
}
