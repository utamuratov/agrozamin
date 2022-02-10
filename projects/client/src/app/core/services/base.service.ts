import { HttpClient, HttpParams } from '@angular/common/http';
import { DITokens } from '../config/di-tokens';
import { Observable } from 'rxjs';
import { InjectorHelper } from './locator.service';

export class BaseService {
  // !IF THIS IS BAD PRACTICE, REMOVE BASE SERVICE
  private readonly endpoint = InjectorHelper.injector.get(
    DITokens.ENDPOINT_URL
  );
  private readonly httpClient = InjectorHelper.injector.get(HttpClient);

  /**
   *
   * @param url
   * @param params
   * @returns
   */
  protected get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.httpClient.get<T>(this.endpoint + url, { params });
  }

  protected post<T>(url: string, model?: any): Observable<T> {
    return this.httpClient.post<T>(this.endpoint + url, model);
  }
}
