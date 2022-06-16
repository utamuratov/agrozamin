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
}
