import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { AdvertisementConstants } from 'projects/advertisement/src/app/core/constants/advertisement.constants';
import { CabinetMenu } from '../../menu-type.enum';

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
  openMenu: { [name: string]: boolean } = {
    [CabinetMenu.advertisements]: false,
    [CabinetMenu.messages]: false,
    [CabinetMenu.favourites]: false,
  };

  /**
   *
   */
  constructor(private router: Router) {
    const paths: string[] = router.url.split('/');
    const index =
      paths.indexOf(AdvertisementConstants.ROUTER_PATH_CABINET_MAIN) + 1;
    if (index > 0) {
      const activeParentMenu = paths[index];
      this.openMenu[activeParentMenu] = true;
    }
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
