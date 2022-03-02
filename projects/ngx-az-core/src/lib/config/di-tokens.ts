import { InjectionToken } from '@angular/core';

/**
 * Tokens stored class for dependency injection
 */
export class DITokens {
  /**
   * Injection token for backend base url.
   * Used to inject in constructor and while registering
   */
  public static ENDPOINT_URL = new InjectionToken<string>('EnpointUrl');
}
