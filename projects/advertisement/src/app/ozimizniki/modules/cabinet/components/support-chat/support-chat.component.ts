import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-support-chat',
  templateUrl: './support-chat.component.html',
  styleUrls: ['./support-chat.component.less']
})
export class SupportChatComponent implements OnInit {

  isOnline = true
  value?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
