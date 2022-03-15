import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input()
  fixed!: boolean;
  currency = false
  visible = false;
  constructor() { }

  ngOnInit() {
  } 

  clickMe(): void {
    this.visible = false;
  }

  change(value: boolean): void {
    console.log(value);
  }
}
