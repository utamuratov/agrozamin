import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-messages1',
  templateUrl: './messages1.component.html',
  styleUrls: ['./messages1.component.less']
})
export class Messages1Component implements OnInit {


  users = [
    {
      img: '/assets/images/kombayn1.png',
      title: 'Кормоуборочный ко',
      count: '4 чата'
    },
    {
      img: '/assets/images/traktor.png',
      title: 'Трактор "Беларус 32',
      count: '5 чатов'
    },
    {
      img: '/assets/images/semechka.png',
      title: 'Подсолнечник',
      count: '1 чат'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
