import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { AccessActionService } from './access-action.service';
import { AccessAction } from './models/access-action.interface';
import { AccessActionResponse } from './models/access-action.response';

@Component({
  templateUrl: './access-action.component.html',
  styleUrls: ['./access-action.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessActionComponent
  extends BaseComponent<AccessActionResponse, AccessAction>
  implements OnInit
{
  /**
   *
   * @param $accessAction
   * @param destroy$
   * @param cd
   */
  constructor(
    protected $accessAction: AccessActionService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($accessAction, $destroy, cd);
    this.searchInputConfig.keys = ['key', 'description'];
  }

  /**
   *
   */
  override ngOnInit(): void {
    super.ngOnInit();
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'id',
          sortable: true,
          sortByLocalCompare: false,
          nzLeft: true,
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'key',
          sortable: true,
          nzLeft: true,
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'description',
          colspan: languages.length,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'description.' + language.code,
              header: language.name,
              sortable: true,
              nzAlignBody: 'left',
              row: 2,
            })
        ),
      ];

      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   * @param languages
   */
  private makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_ID,
      AdminConstants.WIDTH_COLUMN_KEY,
      ...languages.map(() => ''),
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
