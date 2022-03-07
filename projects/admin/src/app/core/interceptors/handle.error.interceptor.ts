import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { InjectorHelper, ErrorHelper, ErrorItem } from 'ngx-az-core';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  _notification!: NzNotificationService;

  get notification() {
    if (!this._notification) {
      this._notification = InjectorHelper.injector.get(NzNotificationService);
    }
    return this._notification;
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        const errors: ErrorItem[] = ErrorHelper.getServerErrors(error);
        this.notification.error('Error(s)', this.getErrorMessage(errors), {
          nzDuration: 0,
        });
        return throwError(() => errors);
      })
    );
  }

  getErrorMessage(errors: ErrorItem[]) {
    let message = ``;
    errors.forEach((error) => {
      error.message.forEach((m) => {
        message += `- ${m.text}<br>`;
      });
    });

    return message;
  }
}
