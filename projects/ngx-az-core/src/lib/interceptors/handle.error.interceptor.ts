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

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        // !Catch error and do SMTH
        // ! IF SERVER ERROR REDIRECT SERVER ERROR SCREEN (in the future)
        // alert(this.getError(error))
        return throwError(() => ErrorHelper.getServerErrors(error));
      })
    );
  }

  private getError(error: HttpErrorResponse) {
    let errorMessage = '';
    for (const errorOne of (error.error as ErrorMessage).errors) {
      errorMessage += `${errorOne.message}\n`;
    }
    return errorMessage;
  }
}
