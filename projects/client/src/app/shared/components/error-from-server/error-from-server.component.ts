import {
  Component,
  Input
} from '@angular/core';
import { ErrorItem } from '../../../core/models/error-item.interface';

@Component({
  selector: 'error-from-server',
  templateUrl: './error-from-server.component.html',
  styleUrls: ['./error-from-server.component.less']
})
export class ErrorFromServerComponent {
  /**
   *
   */
  @Input()
  error!: ErrorItem;
}
