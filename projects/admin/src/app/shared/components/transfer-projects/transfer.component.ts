import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  TransferChange,
  TransferItem,
  TransferSelectChange,
} from 'ng-zorro-antd/transfer';

@Component({
  selector: 'az-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferComponent {
  /**
   *
   */
  @Input()
  transferItems?: TransferItem[];

  /**
   *
   */
  @Input()
  title?: string;

  /**
   *
   */
  @Input()
  height = 250; // px

  /**
   *
   */
  @Input()
  width = 250; // px

  /**
   *
   */
  @Output()
  nzChange = new EventEmitter<TransferChange>();

  /**
   *
   */
  @Output()
  nzSelectChange = new EventEmitter<TransferSelectChange>();
}
