import { HttpClient, HttpParams } from '@angular/common/http';
import { DITokens } from '../config/di-tokens';
import { BehaviorSubject, catchError, Observable, of, shareReplay } from 'rxjs';
import { Inject, Injectable } from '@angular/core';
import { BaseResponse } from '../models/base-response.interface';
import { ErrorItem } from '../models/error-item.interface';

export const errorMessageFromServer = new BehaviorSubject<ErrorItem | null>(null);

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
  get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http
      .get<T>(this.endpoint + url, { params })
      .pipe(shareReplay(1));
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
        errorMessageFromServer.next(errors[0]);
        return of({ error: errors, success: false } as BaseResponse<T>);
      }),
      shareReplay(1)
    );
  }
}
