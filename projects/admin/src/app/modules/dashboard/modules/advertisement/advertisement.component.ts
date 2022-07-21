import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'az-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementComponent {}
