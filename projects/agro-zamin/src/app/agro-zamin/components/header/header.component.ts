import { DOCUMENT } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  isDevMode,
  OnInit,
} from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Store } from '@ngxs/store';
import { Constants, LanguageState } from 'ngx-az-core';
import { HeaderData } from './header.data';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  /**
   *
   */
  readonly AGROZAMIN_ECO_SYSTEMS = HeaderData.AGROZAMIN_ECO_SYSTEMS;

  /**
   *
   */
  readonly SERVICES = HeaderData.SERVICES;

  /**
   *
   */
  azVisible = false;

  /**
   *
   */
  azDrawerWidthValue!: string;

  // TODO
  profileImage = true;

  /**
   *
   */
  isUserAuthenticated = true;

  /**
   *
   * @param $jwtHelper
   * @param $store
   * @param document
   */
  constructor(
    private $jwtHelper: JwtHelperService,
    private $store: Store,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.isUserAuthenticated = !this.$jwtHelper.isTokenExpired();
    this.azDrawerWidthValue = this.azDrawerWidth();
  }

  /**
   *
   */
  openAz(): void {
    this.azVisible = true;
  }

  /**
   *
   */
  closeAz(): void {
    this.azVisible = false;
  }

  /**
   *
   */
  @HostListener('window:resize')
  onResize() {
    this.azDrawerWidthValue = this.azDrawerWidth();
  }

  /**
   *
   * @returns
   */
  private azDrawerWidth(): string {
    if (window.innerWidth > 992) {
      return '470px';
    }
    if (window.innerWidth > 480 && window.innerWidth < 992) {
      return '374px';
    }
    return '100%';
  }

  /**
   *
   */
  navigate() {
    if (this.isUserAuthenticated) {
      // NAVIGATE TO CABINET

      if (isDevMode()) {
        // result: /agro-id/ru/cabinet
        this.document.location.pathname = `/${
          Constants.AGROID_ROUTE_PATH
        }/${this.$store.selectSnapshot(LanguageState.currentLanguage)}/cabinet`;

        return;
      }

      // result: /agro-id/az/ru/cabinet
      this.document.location.pathname = `/${Constants.AGROID_ROUTE_PATH}/${
        Constants.AGROZAMIN_PREFIX_ROUTE_PATH
      }/${this.$store.selectSnapshot(LanguageState.currentLanguage)}/cabinet`;
      return;
    }

    // NAVIGATE TO SIGN-IN SCREEN
    this.document.location.pathname = `/${Constants.AGROID_ROUTE_PATH}`;
  }
}
