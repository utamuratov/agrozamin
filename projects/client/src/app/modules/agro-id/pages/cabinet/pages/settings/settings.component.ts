import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.less'],
})
export class SettingsComponent implements OnInit {
  switchValue1 = false;
  switchValue2 = false;
  switchValue3 = false;
  switchValue4 = false;
  switchValue5 = false;
  switchValue6 = false;
  switchValue7 = false;
  switchValue8 = false;
  switchValue9 = false;
  constructor() {}

  ngOnInit() {}

  log(value: string[]): void {
    console.log(value);
  }
}
