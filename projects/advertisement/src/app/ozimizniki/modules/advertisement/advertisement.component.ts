import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {}
