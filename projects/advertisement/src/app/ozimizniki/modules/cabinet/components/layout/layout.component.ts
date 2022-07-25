import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdvertisementStatus } from 'ngx-az-core';

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

  openMap: { [name: string]: boolean } = {
    sub1: false,
    sub2: false,
    sub3: false
  };

  openHandler(value: string): void {
    for (const key in this.openMap) {
      if (key !== value) {
        this.openMap[key] = false;
      }
    }
  }
}
