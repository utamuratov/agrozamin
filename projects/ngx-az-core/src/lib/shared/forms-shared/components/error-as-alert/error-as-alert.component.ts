import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  internalServerError,
  userOffline,
} from '../../../../services/base.service';
import { Constants } from '../../../../config/constants';

@Component({
  selector: 'error-as-alert',
  templateUrl: './error-as-alert.component.html',
  styleUrls: ['./error-as-alert.component.less'],
})
export class ErrorAsAlertComponent implements OnDestroy {
  /**
   *
   */
  $error = internalServerError.asObservable();

  /**
   *
   */
  $userOffline = userOffline.asObservable();

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
    internalServerError.next(null);
    userOffline.next(null);
  }
}
