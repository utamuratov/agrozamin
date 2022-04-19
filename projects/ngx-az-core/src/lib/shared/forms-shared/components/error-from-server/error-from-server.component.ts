import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { errorMessageFromServer } from '../../../../services/base.service';
import { ErrorItem } from '../../../../models/error-item.interface';
import { Constants } from '../../../../config/constants';

@Component({
  selector: 'error-from-server',
  templateUrl: './error-from-server.component.html',
  styleUrls: ['./error-from-server.component.less'],
})
export class ErrorFromServerComponent implements OnDestroy {
  /**
   *
   */
  @Input()
  error?: ErrorItem;

  /**
   *
   */
  $error = errorMessageFromServer.asObservable();

  /**
   *
   */
  INTERNAL_SERVER_ERROR = Constants.SERVER_ERROR;

  /**
   *
   */
  OFFLINE_USER = Constants.OFFLINE;

  /**
   *
   */
  ngOnDestroy(): void {
    errorMessageFromServer.next(null);
  }
}
