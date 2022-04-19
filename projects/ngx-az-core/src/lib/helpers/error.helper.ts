import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from '../config/constants';
import { HttpResponseStatusCode } from '../config/http-response-code';
import { ErrorItem } from '../models/error-item.interface';
import { InjectorHelper } from './injector.helper';

/**
 * Helper to catch and treat errors
 */
export class ErrorHelper {
  /**
   * Get an error message from Http error properties
   * @param error Http Error
   */
  static getServerErrors(error: HttpErrorResponse): ErrorItem[] {
    if (error.error.errors && error.error.errors?.[0].field) {
      return error.error.errors;
    }

    if (!navigator.onLine) {
      return [
        {
          field: Constants.OFFLINE,
          message: [{ key: Constants.OFFLINE, text: 'You are offline' }],
        },
      ];
    }

    return [
      {
        field: Constants.SERVER_ERROR,
        message: [{ key: Constants.SERVER_ERROR, text: 'Server error' }],
      },
    ];
  }

  /**
   *  Catches http errors and responds by status
   * @param error Http error response
   */
  static catchErrors(error: HttpErrorResponse): void {
    if (!error) {
      return;
    }
    const router = InjectorHelper.injector.get(Router);
    if (error.status === HttpResponseStatusCode.UNAUTHENTICATED) {
      // router.navigate(['/auth/signin']);
      return;
    }
  }

  /**
   * Throws an error to Errohandler
   * @param error Error
   */
  static treatError(error: Error): void {
    if (error) {
      const errorHandler = InjectorHelper.injector.get(ErrorHandler);
      errorHandler.handleError(error);
    }
  }
}
