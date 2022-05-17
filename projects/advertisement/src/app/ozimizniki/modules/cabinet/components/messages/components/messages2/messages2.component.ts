import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-messages2',
  templateUrl: './messages2.component.html',
  styleUrls: ['./messages2.component.less']
})
export class Messages2Component implements OnInit {

  isOnline = true

  users = [
    {
      img: '/assets/images/users1.png',
      title: 'Рустам Маматов',
      count: 'Хотелось бы уточнить ка ...'
    },
    {
      img: '/assets/images/users2.png',
      title: 'Рустам Маматов',
      count: 'Равным образом, постоя...'
    },
    {
      img: '/assets/images/users3.png',
      title: 'Отабек Расулов',
      count: 'Предварительные вывод...'
    },
    {
      img: '/assets/images/users4.png',
      title: 'Robert Fox',
      count: 'Таким образом, дальней...'
    },
    {
      img: '/assets/images/users5.png',
      title: 'Courtney Henry',
      count: 'Имеется спорная точка ...'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
