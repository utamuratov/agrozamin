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
import { ComplaintCategoryRequest } from '../dto/complaint-category.request';
import { ComplaintCategoryResponse } from '../dto/complaint-category.response';
import { ComplaintCategoryService } from '../services/complaint-category.service';

@Component({
  templateUrl: './complaint-category-list.component.html',
  styleUrls: ['./complaint-category-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintCategoryListComponent
  extends BaseComponent<ComplaintCategoryResponse, ComplaintCategoryRequest>
  implements OnInit
{
  /**
   *
   * @param $region
   * @param $destroy
   * @param cd
   */
  constructor(
    protected override $data: ComplaintCategoryService,
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
          header: 'complaint',
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
