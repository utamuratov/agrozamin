import { Injectable } from '@angular/core';
import {
  CanActivate,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LanguageUtilit } from 'ngx-az-core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private $jwtHelper: JwtHelperService, private router: Router) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.$jwtHelper.isTokenExpired()) {
      this.router.navigate([LanguageUtilit.currentLanguage, 'agro-id']);
      return false;
    }
    return true;
  }
}
