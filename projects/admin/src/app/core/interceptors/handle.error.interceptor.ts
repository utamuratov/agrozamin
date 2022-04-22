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
import {
  InjectorHelper,
  ErrorHelper,
  ErrorItem,
  Constants,
  LanguageState,
} from 'ngx-az-core';
import { Store } from '@ngxs/store';

@Injectable()
export class HandleErrorInterceptor implements HttpInterceptor {
  /**
   *
   */
  constructor(
    private $store: Store,
    private notification: NzNotificationService
  ) {}

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
        ErrorHelper.catchErrors(error, this.urlSignIn());
        return throwError(() => errors);
      })
    );
  }

  private urlSignIn(): any {
    return `/${
      Constants.AGROZAMIN_PREFIX_ROUTE_PATH
    }/${this.$store.selectSnapshot(LanguageState.currentLanguage)}/sign-in`;
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
