import { HttpClient, HttpParams } from '@angular/common/http';
import { DITokens } from '../config/di-tokens';
import { map, Observable } from 'rxjs';
import { SuccessMessage } from '../models/success-message.interface';
import { Inject, Injectable } from '@angular/core';

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
    return this.http.get<T>(this.endpoint + url, { params });
  }

  /**
   *
   * @param url
   * @param model
   * @returns
   */
  post<T>(url: string, model?: any): Observable<T> {
    return this.http
      .post<SuccessMessage<T>>(this.endpoint + url, model)
      .pipe(map((result) => result.data));
  }
}
