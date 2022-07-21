import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'az-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.less']
})
export class QuestionsComponent implements OnInit {

  panels = [
    {
      active: false,
      name: 'Через сколько времени добавленный продукт будет размещен на сайте?',
      customStyle: {
        background: '#fff',
      }
    },
    {
      active: false,
      name: 'Можно ли купить товар без регистрации в системе?',
      customStyle: {
        background: '#fff',
      }
    },
    {
      active: false,
      name: 'Как наладить контакт с продавцом?',
      customStyle: {
        background: '#fff',
      }
    },
    {
      active: false,
      name: 'Как я могу разместить свой продукт на сайте?',
      customStyle: {
        background: '#fff',
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
