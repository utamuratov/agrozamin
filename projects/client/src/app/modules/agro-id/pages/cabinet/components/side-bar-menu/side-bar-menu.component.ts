import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'side-bar-menu',
  templateUrl: './side-bar-menu.component.html',
  styleUrls: ['./side-bar-menu.component.less'],
})
export class SideBarMenuComponent implements OnInit {
  @Input()
  isGrid!: boolean;
  isShowedFullMenu = false

  animationState!: string;

  constructor() {}

  ngOnInit() {}

  startAnimation() {
    console.log('swipe');
    this.isShowedFullMenu = !this.isShowedFullMenu
  }

  resetAnimationState() {
    this.animationState = '';
  }
}
