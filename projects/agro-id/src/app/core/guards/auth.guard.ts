import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LanguageState } from 'ngx-az-core';
import { Store } from '@ngxs/store';
import { prefixPath } from '../utilits/agro-id.utilit';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private $jwtHelper: JwtHelperService,
    private router: Router,
    private $store: Store
  ) {}

  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.$jwtHelper.isTokenExpired()) {
      this.router.navigate([
        prefixPath,
        this.$store.selectSnapshot(LanguageState.currentLanguage),
      ]);
      return false;
    }
    return true;
  }
}
