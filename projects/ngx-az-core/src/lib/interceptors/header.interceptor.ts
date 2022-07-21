import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../config/constants';
import { Store } from '@ngxs/store';
import { LanguageState } from './../shared/store/language/language.state';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private $store: Store) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set(
      Constants.HEADER_LANGUAGE,
      this.$store.selectSnapshot(LanguageState.currentLanguage)
    );
    const cloneRequest = req.clone({ headers });
    return next.handle(cloneRequest);
  }
}
