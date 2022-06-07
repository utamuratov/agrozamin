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
import { IdName } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { DistrictRequet } from '../dto/district.request';
import { DistrictResponse } from '../dto/district.response';
import { DistrictService } from '../services/district.service';

@Component({
  selector: 'az-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DistrictListComponent
  extends BaseComponent<DistrictResponse, DistrictRequet>
  implements OnInit
{
  /**
   *
   */
  region$!: Observable<IdName[]>;

  /**
   *
   * @param $district
   * @param $destroy
   * @param cd
   */
  constructor(
    protected $district: DistrictService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($district, $destroy, cd);
    this.searchInputConfig.keys = ['name', 'region'];
  }

  /**
   *
   */
  override ngOnInit(): void {
    super.ngOnInit();
    this.region$ = this.$district.getRegions().pipe(map((w) => w.data));
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
        new Column({
          field: 'region.name',
          header: 'region',
          sortable: true,
          row: 1,
          rowspan: 2,
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
      ...languages.map(() => ''),
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
