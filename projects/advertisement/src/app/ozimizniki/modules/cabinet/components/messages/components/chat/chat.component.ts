import { Component, OnInit } from '@angular/core';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'az-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.less'],
})
export class ChatComponent implements OnInit {
  action = true
  savedMessage = false;
  blockedChat = false;
  isOnline = true;
  message = '';
  drawerVisible = false;

  chatId = 0;

  users = [
    {
      img: '/assets/images/kombayn1.png',
      title: 'Кормоуборочный ко',
      count: '4 чата',
    },
    {
      img: '/assets/images/traktor.png',
      title: 'Трактор "Беларус 32',
      count: '5 чатов',
    },
    {
      img: '/assets/images/semechka.png',
      title: 'Подсолнечник',
      count: '1 чат',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  addToSave() {
    this.savedMessage = !this.savedMessage;
  }

  blockChat(id: number) {
    alert(`Пользователь с ID ${id} заблокирован`);
  }

  toComplaint(id: number) {
    alert(`Вы пожаловались на пользователя с ID ${id}`);
  }

  deleteChat(id: number) {
    alert(`Вы удалили чат с ID ${id}`);
  }

  sendMessage(message: string) {
    console.log(message);
  }

  handleImagesInput(e: NzSafeAny) {
    console.log(e);    
  }

  onScrollEvent(e: any) {
    console.log(e); 
  }

  

  open(): void {
    this.drawerVisible = true;
  }

  close(): void {
    this.drawerVisible = false;
  }
}
