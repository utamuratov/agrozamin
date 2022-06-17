import { Component, OnInit } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'az-consultant-page',
  templateUrl: './consultant-page.component.html',
  styleUrls: ['./consultant-page.component.less']
})
export class ConsultantPageComponent implements OnInit {
  likes = 0;
  time = formatDistance(new Date(), new Date());

  data = {
    author: 'Мингазова Нина',
    avatar: './assets/images/comment2.jpg',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources' +
      '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
    children: [
      {
        author: 'Артур Уралович ',
        avatar: './assets/images/comment3.jpg',
        content:
          'We supply a series of design principles, practical patterns and high quality design resources' +
          '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
        children: [
          {
            author: 'Тимур Мун',
            avatar: './assets/images/comment4.jpg',
            content:
              'We supply a series of design principles, practical patterns and high quality design resources' +
              '(Sketch and Axure), to help people create their product prototypes beautifully and efficiently.'
          },
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

  like(): void {
    this.likes = 1;
  }
}
