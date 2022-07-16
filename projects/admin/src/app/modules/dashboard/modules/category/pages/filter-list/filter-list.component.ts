import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {
  InputTypeForCreator,
  InputTypeForFilter,
  Language,
  NgDestroy,
} from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';

import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { FilterRequest } from '../../models/filter.request';
import { FilterResponse } from '../../models/filter.response';
import { FilterService } from '../../services/filter.service';

@Component({
  selector: 'az-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterListComponent
  extends BaseComponent<FilterResponse, FilterRequest>
  implements OnInit
{
  /**
   *
   */
  InputTypeForCreator = InputTypeForCreator;

  /**
   *
   */
  InputTypeForFilter = InputTypeForFilter;

  constructor(
    protected $filter: FilterService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($filter, $destroy, cd);
    this.searchInputConfig.keys = ['id', 'name'];
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
        new Column({
          field: 'inputTypes',
          colspan: 2,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'name.' + language.code,
              header: language.name,
              sortable: true,
              row: 2,
            })
        ),
        new Column({
          field: 'type_for_creator',
          header: 'forCreating',
          hasTemplate: true,
          row: 2,
        }),
        new Column({
          field: 'type_for_filter',
          header: 'forSearching',
          hasTemplate: true,
          row: 2,
        }),
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
      '200px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
