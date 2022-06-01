import { Component, OnInit } from '@angular/core';
import { AdvertisementStatus } from 'ngx-az-core';

@Component({
  selector: 'az-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less'],
})
export class CabinetComponent implements OnInit {
  /**
   *
   */
  AdvertisementStatus = AdvertisementStatus;

  isCollapsed = false;

  icon = '/assets/images/menu-help.png';

  change(value: boolean): void {
    console.log(value);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() {}

  ngOnInit() {}
}
