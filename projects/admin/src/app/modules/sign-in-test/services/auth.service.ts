import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  AuthResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  User,
} from '../interface';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  static readonly CLIENT_ID = '96880ad0-7b49-4d00-bbe0-da023ef89cf8'; //"95aafe79-4e63-4d6d-98cc-fde7b302fc3f";
  static readonly CLIENT_SECRET = '9tyUetFhRxu4PjIy07BJ7HzxNC75lGUSmsVMY0GI'; // "K44OWIgGSqkpH55vY6QQwZldir6iN17IyepOXD4K";

  private url = 'http://localhost:4201/api/v1/';
  token: string | null = null;
  expires_in!: number;

  constructor(private http: HttpClient, private router: Router) {}

  login(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.url}/login`, user).pipe(
      tap((result) => {
        this.setToken(result.data.access_token, result.data.refresh_token);
        this.expires_in = result.data.expires_in;
      })
    );
  }

  refreshToken(token: RefreshTokenRequest): Observable<RefreshTokenResponse> {
    return this.http
      .post<RefreshTokenResponse>(`${this.url}/refresh-token`, token)
      .pipe(
        tap((result) => {
          console.log(result);
          this.setToken(result.access_token, result.refresh_token);
        })
      );
  }

  get refresh_token(): string | null {
    if (localStorage.getItem('refresh_token')) {
      return localStorage.getItem('refresh_token');
    } else {
      return null;
    }
  }

  setToken(access: string, refresh: string) {
    localStorage.setItem('access_token', access);
    localStorage.setItem('refresh_token', refresh);
  }

  logout() {
    localStorage.clear();
  }

  isAuthentificated() {
    if (localStorage.getItem('access_token')) {
      if (Date.now() >= this.expires_in * 1000) {
        const refTokenBody: RefreshTokenRequest = {
          refresh_token: this.refresh_token,
          client_id: AuthService.CLIENT_ID,
          client_secret: AuthService.CLIENT_SECRET,
        };
        this.refreshToken(refTokenBody);
      }
    } else {
      this.router.navigate(['/sign-in-test']);
    }
  }
}
