import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { RejectReasonRequest } from '../dto/reject-reason.request';
import { RejectReasonResponse } from '../dto/reject-reason.response';
import { RejectReasonService } from '../service/reject-reason.service';

@Component({
  selector: 'az-reject-reason-list',
  templateUrl: './reject-reason-list.component.html',
  styleUrls: ['./reject-reason-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RejectReasonListComponent
  extends BaseComponent<RejectReasonResponse, RejectReasonRequest>
  implements OnInit
{
  /**
   *
   * @param $region
   * @param $destroy
   * @param cd
   */
  constructor(
    protected override $data: RejectReasonService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, $destroy, cd);
    this.searchInputConfig.keys = ['content'];
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
          field: 'content',
          colspan: languages.length,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'content.' + language.code,
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
      ...languages.map(() => ''),
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
