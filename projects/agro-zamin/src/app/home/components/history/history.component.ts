import { Component, OnInit } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';

@Component({
  selector: 'az-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less']
})
export class HistoryComponent implements OnInit {
  history = [
    {cards: [
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
    ]},
    {cards: [
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
    ]},
    {cards: [
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
      '../../../../../assets/images/agrozamin/history-card-1.jpg',
      '../../../../../assets/images/agrozamin/history-card-3.jpg',
      '../../../../../assets/images/agrozamin/history-card-2.jpg',
    ]},
  ];
  effect = 'scrollx';
  constructor() { }

  historyScroll = [
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
    '../../../../../assets/images/agrozamin/history-card-1.jpg',
    '../../../../../assets/images/agrozamin/history-card-2.jpg',
    '../../../../../assets/images/agrozamin/history-card-3.jpg',
  ]

  ngOnInit() {
  }

  pre(e: NzCarouselComponent) {
    e.pre()
  }

  next(e: NzCarouselComponent) {
    e.next()
  }

}
