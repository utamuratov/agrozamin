import { DatePipe } from '@angular/common';
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BaseResponse,
  GridModel,
  GridQuery,
  SupportChatLogicComponent,
  SupportChatResponse,
} from 'ngx-az-core';
import { Observable } from 'rxjs';
import { SupportChatItemService } from '../services/support-chat-item.service';

@Component({
  templateUrl: './support-chat-item.component.html',
  styleUrls: ['./support-chat-item.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatItemComponent
  extends SupportChatLogicComponent
  implements OnInit
{
  /**
   *
   */
  userFullName!: string;

  /**
   *
   */
  constructor(
    protected override $data: SupportChatItemService,
    protected override cd: ChangeDetectorRef,
    protected override datePipe: DatePipe,
    private route: ActivatedRoute
  ) {
    super($data, cd, datePipe);
    $data.chatId = this.route.snapshot.params['chatId'];
    this.userFullName = route.snapshot.queryParams['userFullName'];
  }
}
