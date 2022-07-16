import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { GridModel, GridQuery } from 'ngx-az-core';
import { GridComponent } from '../grid.component';

@Component({
  selector: 'az-grid-with-backend',
  templateUrl: './grid-with-backend.component.html',
  styleUrls: ['./grid-with-backend.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridWithBackendComponent extends GridComponent {
  /**
   *
   */
  @Input()
  override data!: GridModel<NzSafeAny>;

  /**
   *
   */
  @Input()
  query!: GridQuery;

  /**
   *
   */
  @Input()
  pageSize!: number;

  /**
   *
   */
  @Output()
  pageIndexChange = new EventEmitter<number>();

  /**
   *
   */
  @Output()
  onQueryParamsChange = new EventEmitter<NzTableQueryParams>();

  /**
   *
   */
  constructor() {
    super();
  }
}
