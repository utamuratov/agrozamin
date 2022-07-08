import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
} from '@angular/core';
import { Filter } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { GridLogic } from 'projects/advertisement/src/app/shared/grid/grid-logic/grid-logic';
import { ParamAndQuery } from '../../dto/param-and-query.interface';
import { AdvertisementService } from '../../services/advertisement.service';

@Component({
  selector: 'az-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListComponent extends GridLogic {
  /**
   *
   */
  @Input()
  filters!: Filter[];

  /**
   *
   */
  private _filter?: ParamAndQuery;
  public get filter(): ParamAndQuery | undefined {
    return this._filter;
  }
  @Input()
  public set filter(v: ParamAndQuery | undefined) {
    this._filter = v;
    this.characteristics =
      v?.queryParams[AdvertisementConstants.QUERY_PARAM_CHARACTERISTICS];

    this.setQuery();
    this.loadData();
  }

  /**
   *
   */
  characteristics!: string;

  /**
   *
   */
  isInlineCard = false;

  /**
   *
   */
  visibleFilter = false;

  /**
   *
   * @param cd
   * @param route
   * @param $advertisement
   */
  constructor(
    protected override $data: AdvertisementService,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, cd);
  }

  /**
   *
   * @returns
   */
  override getQueryFilter() {
    return [
      {
        key: AdvertisementConstants.QUERY_PARAM_CHARACTERISTICS,
        value: [this.characteristics || ''],
      },
      { key: 'category_id', value: [String(this.filter?.categoryId || '')] },
    ];
  }

  /**
   *
   */
  openFilter(): void {
    this.visibleFilter = true;
  }

  /**
   *
   */
  closeFilter(): void {
    this.visibleFilter = false;
  }
}
