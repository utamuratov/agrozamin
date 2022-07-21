import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { GridLogicAdmin } from 'projects/admin/src/app/shared/components/grid/grid-logic/grid-logic-admin';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { SupportChatResponse } from '../dto/support-chat.response';
import { SupportChatService } from '../services/support-chat.service';

@Component({
  templateUrl: './support-chat-list.component.html',
  styleUrls: ['./support-chat-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportChatListComponent extends GridLogicAdmin<SupportChatResponse> {
  constructor(
    protected override $data: SupportChatService,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, cd);
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.columns = [
      new Column({
        field: 'id',
        sortable: true,
        nzLeft: true,
        row: 1,
      }),
      new Column({
        field: 'full_name',
        header: 'fromWhom',
        sortable: true,
        row: 1,
      }),
      new Column({
        field: 'user_registration_date',
        sortable: true,
        row: 1,
      }),
      new Column({
        field: 'message_count',
        header: 'newMessages',
        row: 1,
      }),
      new Column({
        field: 'actions',
        hasTemplate: true,
        nzRight: true,
        row: 1,
      }),
    ];

    this.makeWidthConfig();
  }

  /**
   *
   * @param languages
   */
  override makeWidthConfig() {
    this.nzWidthConfig = [
      '70px',
      '250px',
      '200px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
