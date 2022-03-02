import { Component, Input, OnInit } from '@angular/core';
import { errorMessageFromServer } from '../../../../services/base.service';
import { ErrorItem } from '../../../../models/error-item.interface';

@Component({
  selector: 'error-from-server',
  templateUrl: './error-from-server.component.html',
  styleUrls: ['./error-from-server.component.less'],
})
export class ErrorFromServerComponent implements OnInit {
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
  ngOnInit(): void {
    errorMessageFromServer.next(null);
  }
}
