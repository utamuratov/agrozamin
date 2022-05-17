import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less']
})
export class CabinetComponent implements OnInit {

  isCollapsed = false;

  icon = '/assets/images/menu-help.png'

  change(value: boolean): void {
    console.log(value);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  constructor() { }

  ngOnInit() {
  }

}
