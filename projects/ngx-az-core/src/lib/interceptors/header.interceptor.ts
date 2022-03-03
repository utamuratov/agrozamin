import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageUtilit } from '../utilits/language.utilit';
import { Constants } from '../config/constants';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set(
      Constants.HEADER_LANGUAGE,
      LanguageUtilit.currentLanguage
    );
    const cloneRequest = req.clone({ headers });
    return next.handle(cloneRequest);
  }
}
