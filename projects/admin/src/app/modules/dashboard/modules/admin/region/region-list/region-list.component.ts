import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgDestroy, Language } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { RegionRequest } from '../dto/region.request';
import { RegionResponse } from '../dto/region.response';
import { RegionService } from '../service/region.service';

@Component({
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegionListComponent
  extends BaseComponent<RegionResponse, RegionRequest>
  implements OnInit
{
  /**
   *
   * @param $region
   * @param $destroy
   * @param cd
   */
  constructor(
    protected $region: RegionService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($region, $destroy, cd);
    this.searchInputConfig.keys = ['name'];
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
          field: 'name',
          colspan: languages.length,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'name.' + language.code,
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
  override makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_ID,
      ...languages.map(() => ''), // * USE AdminConstants.WIDTH_COLUMN_LANGUAGE INSTEAD OF, IF COLUMN IS NOT OK ON THE SMALL SCREENS
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
