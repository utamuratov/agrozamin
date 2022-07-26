import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
} from '@angular/router';
import { AdvertisementStatus, NgDestroy } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { takeUntil } from 'rxjs';
import { CabinetMenu } from '../../menu-type.enum';
import { AdvertisementStatusList } from '../../modules/advertisement/advertisement-menu-list';
import {
  FavoriteMenu,
  FavoriteMenuList,
} from '../../modules/favourite/favorite-menu.enum';

const DEFAULT_OPEN_MENU = {
  [CabinetMenu.advertisements]: false,
  [CabinetMenu.messages]: false,
  [CabinetMenu.favourites]: false,
};
@Component({
  selector: 'az-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutComponent {
  /**
   *
   */
  AdvertisementStatus = AdvertisementStatus;

  /**
   *
   */
  isCollapsed = false;

  /**
   *
   */
  CabinetMenu = CabinetMenu;

  /**
   *
   */
  FavoriteMenu = FavoriteMenu;

  /**
   *
   */
  FavoritMenuList = FavoriteMenuList;

  /**
   *
   */
  AdvertisementStatusList = AdvertisementStatusList;

  /**
   *
   */
  openMenu: { [name: string]: boolean } = { ...DEFAULT_OPEN_MENU };

  /**
   *
   */
  constructor(private router: Router, private $destroy: NgDestroy) {
    this.router.events.pipe(takeUntil(this.$destroy)).subscribe((event) => {
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError
      ) {
        this.openMenu = { ...DEFAULT_OPEN_MENU };

        const paths: string[] = this.router.url.split('/');
        const index =
          paths.indexOf(AdvertisementConstants.ROUTER_PATH_CABINET_MAIN) + 1;
        if (index > 0) {
          const activeParentMenu = paths[index];
          this.openMenu[activeParentMenu] = true;
        }
      }
    });
  }

  /**
   *
   * @param value
   */
  openCloseMenuHandler(value: string): void {
    for (const key in this.openMenu) {
      if (key !== value) {
        this.openMenu[key] = false;
      }
    }
  }
}
