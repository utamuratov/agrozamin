import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { TransferItem } from 'ng-zorro-antd/transfer';

@Component({
  selector: 'az-transfer-projects',
  templateUrl: './transfer-projects.component.html',
  styleUrls: ['./transfer-projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferProjectsComponent {
  /**
   *
   */
  @Input()
  transferItems!: TransferItem[];

  /**
   *
   */
  @Input()
  title = 'Proyektlar';

  /**
   *
   */
  @Output()
  nzChange = new EventEmitter();
}
