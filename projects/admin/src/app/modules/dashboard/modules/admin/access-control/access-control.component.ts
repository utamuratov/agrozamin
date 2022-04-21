import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { AccessControlService } from './access-control.service';
import { AccessControl } from './models/access-control.interface';
import { AccessControlResponse } from './models/access-control.response';

@Component({
  selector: 'az-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent
  extends BaseComponent<
    AccessControlResponse,
    AccessControl,
    AccessControlResponse<number>
  >
  implements OnInit
{
  /**
   *
   * @param $data
   * @param $destroy
   * @param cd
   */
  constructor(
    protected override $data: AccessControlService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, $destroy, cd);
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
   * @param modal
   * @param editingData
   */
  override addEdit(editingData?: AccessControlResponse) {
    if (editingData) {
      super.addEdit({
        ...editingData,
        actions: editingData?.actions.map((w) => w.id) ?? [],
      });
      return;
    }
    super.addEdit(editingData);
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
        new Column({
          field: 'url',
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'actions',
          hasTemplate: true,
          rowspan: 2,
          row: 1,
        }),
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
      '100px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
