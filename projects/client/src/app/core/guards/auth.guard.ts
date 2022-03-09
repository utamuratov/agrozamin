import { Injectable } from '@angular/core';
import { CanActivate, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Constants, LanguageState } from 'ngx-az-core';
import { Store } from '@ngxs/store';

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
        Constants.AGROZAMIN_PREFIX_ROUTE_PATH,
        this.$store.selectSnapshot(LanguageState.currentLanguage),
        Constants.AGROID_ROUTE_PATH,
      ]);
      return false;
    }
    return true;
  }
}
