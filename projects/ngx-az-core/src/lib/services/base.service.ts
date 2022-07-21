import { HttpClient, HttpParams } from '@angular/common/http';
import { DITokens } from '../config/di-tokens';
import { BehaviorSubject, catchError, Observable, of, shareReplay } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from '../models/base-response.interface';
import { ErrorItem } from '../models/error-item.interface';
import { Constants } from '../config/constants';

export const errorMessageFromServer = new BehaviorSubject<ErrorItem[] | null>(
  null
);

export const internalServerError = new BehaviorSubject<ErrorItem | null>(null);

export const userOffline = new BehaviorSubject<ErrorItem | null>(null);

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  /**
   *
   * @param http
   * @param endpoint
   */
  constructor(
    private http: HttpClient,
    @Inject(DITokens.ENDPOINT_URL) private endpoint: string
  ) {}

  /**
   *
   * @param url
   * @param params
   * @returns
   */
  get<T>(url: string, params?: HttpParams): Observable<BaseResponse<T>> {
    return this.http.get<BaseResponse<T>>(this.endpoint + url, { params }).pipe(
      catchError((errors: ErrorItem[]) => {
        this.makeError(errors);
        return of({ error: errors, success: false } as BaseResponse<T>);
      }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  post<T>(url: string, model?: any): Observable<BaseResponse<T>> {
    return this.http.post<BaseResponse<T>>(this.endpoint + url, model).pipe(
      catchError((errors: ErrorItem[]) => {
        this.makeError(errors);
        return of({ error: errors, success: false } as BaseResponse<T>);
      }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  put<T>(url: string, model?: any): Observable<BaseResponse<T>> {
    return this.http.put<BaseResponse<T>>(this.endpoint + url, model).pipe(
      catchError((errors: ErrorItem[]) => {
        this.makeError(errors);
        return of({ error: errors, success: false } as BaseResponse<T>);
      }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  delete<T>(url: string): Observable<BaseResponse<T>> {
    return this.http.delete<BaseResponse<T>>(this.endpoint + url).pipe(
      catchError((errors: ErrorItem[]) => {
        this.makeError(errors);
        return of({ error: errors, success: false } as BaseResponse<T>);
      }),
      shareReplay(1)
    );
  }

  /**
   *
   * @param errors
   */
  makeError(errors: ErrorItem[]) {
    switch (errors[0].field) {
      case Constants.OFFLINE:
        userOffline.next(errors[0]);
        break;

      case Constants.SERVER_ERROR:
        internalServerError.next(errors[0]);
        break;
      default:
        errorMessageFromServer.next(errors);
        break;
    }
  }
}
