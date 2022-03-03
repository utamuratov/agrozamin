import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DITokens } from '../config/di-tokens';

/**
 * Service to log errors or notification to server
 */
@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  /**
   * Constructor injecting necessary services
   * @param endpoint Backend endpoint URL
   * @param http HttpClient for sending API request
   */
  constructor(
    @Inject(DITokens.ENDPOINT_URL) private endpoint: string,
    private http: HttpClient
  ) {}

  /**
   * Sends error messages to backend TreatError API
   * @param message Error message
   */
  log(message: string): Observable<any> {
    // TODO: logging frontend errors to backend
    // return this.http.post(this.endpoint + EndpointSettings.TREAT_ERROR, { msg: message }, { observe: 'response' });
    return of({});
  }
}
