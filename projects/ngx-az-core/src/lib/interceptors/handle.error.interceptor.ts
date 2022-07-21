import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorMessage } from '../models/error-message.interface';
import { ErrorHelper } from '../helpers/error.helper';
import { Constants } from '../config/constants';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        ErrorHelper.catchErrors(error, this.urlSignIn(), true);
        return throwError(() => ErrorHelper.getServerErrors(error));
      })
    );
  }

  /**
   *
   * @returns
   */
  private urlSignIn(): string {
    return `/${Constants.AGROID_ROUTE_PATH}`;
  }

  private getError(error: HttpErrorResponse) {
    let errorMessage = '';
    for (const errorOne of (error.error as ErrorMessage).errors) {
      errorMessage += `${errorOne.message}\n`;
    }
    return errorMessage;
  }
}
