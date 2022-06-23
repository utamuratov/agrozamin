import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less'],
  animations: [
    trigger('drawer', [
      state('none', style({
        transform: 'translateX(100%)'
      })),
      state('display', style({
        transform: 'translateX(0)'
      })),
      transition('none => display', animate(200)),
      transition('display => none', animate(200)),
    ])
  ]
})
export class ChatComponent implements OnInit {
  dot = true;
  empty = false;
  user = true;
  visible = false;
  drawerAnimation = 'none'
  constructor() {}

  ngOnInit() {}

  open(): void {
    this.drawerAnimation = 'display';
  }

  close(): void {
    this.drawerAnimation = 'none';
  }
}
