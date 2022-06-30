import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { GridModel, GridQuery } from 'ngx-az-core';
import { Advertisement } from '../../ozimizniki/modules/advertisement/dto/advertisement.interface';

@Component({
  selector: 'az-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GridComponent {
  /**
   *
   */
  @Input()
  data!: GridModel<Advertisement>;

  /**
   *
   */
  @Input()
  query!: GridQuery;

  /**
   *
   */
  @Input()
  isLoaded!: boolean;

  /**
   *
   */
  @Input()
  pageSize!: number;

  /**
   *
   */
  @Input()
  isInlineCard!: boolean;

  /**
   *
   */
  @Output()
  pageIndexChange = new EventEmitter<number>();
}
