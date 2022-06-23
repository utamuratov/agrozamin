import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  animations: [
    trigger('drawer', [
      state('none', style({
       display: 'none'
      })),
      state('display', style({
        display: 'block'
      })),
    ])
  ]
})
export class HeaderComponent implements OnInit {
  isUserAuth = false
  burgerState = false
  drawerState = 'none'
  location = false

  btn = false

  constructor() { }

  ngOnInit() {
  }

  isAuth() {
    this.isUserAuth = !this.isUserAuth    
  }

  changeBurgerState() {
    this.burgerState = !this.burgerState;
    this.drawerState = this.drawerState === 'none' ? 'display' : 'none'    
  }

  closeDrawer() {
    this.drawerState = 'none';
    this.burgerState = false
  }
}
