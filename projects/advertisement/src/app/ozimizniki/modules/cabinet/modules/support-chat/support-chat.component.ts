import { DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { SupportChatLogicComponent, SupportChatService } from 'ngx-az-core';

@Component({
  selector: 'az-support-chat',
  templateUrl: './support-chat.component.html',
  styleUrls: ['./support-chat.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatComponent
  extends SupportChatLogicComponent
  implements OnInit
{
  /**
   *
   */
  constructor(
    protected override $data: SupportChatService,
    protected override cd: ChangeDetectorRef,
    protected override datePipe: DatePipe
  ) {
    super($data, cd, datePipe);
  }
}
