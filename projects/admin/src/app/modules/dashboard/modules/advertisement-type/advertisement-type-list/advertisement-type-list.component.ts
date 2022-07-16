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
import { AdvertisementTypeRequest } from '../dto/advertisement-type.request';
import { AdvertisementTypeResponse } from '../dto/advertisement-type.response';
import { AdvertisementTypeService } from '../services/advertisement-type.service';

@Component({
  templateUrl: './advertisement-type-list.component.html',
  styleUrls: ['./advertisement-type-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementTypeListComponent
  extends BaseComponent<AdvertisementTypeResponse, AdvertisementTypeRequest>
  implements OnInit
{
  /**
   *
   * @param $region
   * @param $destroy
   * @param cd
   */
  constructor(
    protected $advertisementType: AdvertisementTypeService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($advertisementType, $destroy, cd);
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
      ...languages.map(() => ''),
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
