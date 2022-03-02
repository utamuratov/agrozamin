import { Component, Input, OnInit } from '@angular/core';
import { ErrorItem, errorMessageFromServer } from 'ngx-az-core';

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
