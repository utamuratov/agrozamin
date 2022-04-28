import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { SwiperComponent } from 'swiper/angular';
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Swiper,
  Virtual,
} from 'swiper';

// install Swiper modules

SwiperCore.use([EffectCoverflow, Pagination, Virtual]);

@Component({
  selector: 'az-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  historyVisible = false;
  progressValue = 0;
  isLastSlide = false;
  isFirstSlide = true;

  storys = [
    { id: 1, img: './assets/images/history-card-1.jpg' },
    { id: 2, img: './assets/images/history-card-2.jpg' },
    { id: 3, img: './assets/images/history-card-3.jpg' },
    { id: 4, img: './assets/images/history-card-1.jpg' },
    { id: 5, img: './assets/images/history-card-2.jpg' },
    { id: 6, img: './assets/images/history-card-3.jpg' },
    { id: 7, img: './assets/images/history-card-1.jpg' },
    { id: 8, img: './assets/images/history-card-2.jpg' },
  ];

  history = [
    {
      cards: [
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-2.jpg',
        './assets/images/history-card-3.jpg',
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-2.jpg',
        './assets/images/history-card-3.jpg',
      ],
    },
    {
      cards: [
        './assets/images/history-card-2.jpg',
        './assets/images/history-card-3.jpg',
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-2.jpg',
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-3.jpg',
      ],
    },
    {
      cards: [
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-3.jpg',
        './assets/images/history-card-2.jpg',
        './assets/images/history-card-1.jpg',
        './assets/images/history-card-3.jpg',
        './assets/images/history-card-2.jpg',
      ],
    },
  ];
  effect = 'scrollx';
  constructor() {}

  /*  historyScroll = [
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
    './assets/images/agrozamin/history-card-1.jpg',
    './assets/images/agrozamin/history-card-2.jpg',
    './assets/images/agrozamin/history-card-3.jpg',
  ]; */

  historyScroll = this.history.map((e) => e.cards.flat()).flat();

  started = false;

  ngOnInit() {}

  pre(e: NzCarouselComponent) {
    e.pre();
  }

  next(e: NzCarouselComponent) {
    e.next();
  }

  slideNext() {
    this.swiper.swiperRef.slideNext(100);
    this.started = true;
    this.progressValue = 0;
  }

  slidePrev() {
    this.swiper.swiperRef.slidePrev(100);
    this.started = true;
    this.progressValue = 0;
  }

  slideTo(index: number) {
    this.swiper.swiperRef.slideTo(index);
  }

  viewHistory(index: number) {
    this.historyVisible = true;
    setTimeout(() => {
      this.progressValue = 0;
      console.log(this.swiper);

      this.slideTo(index);
      // console.log(index);
      this.progress();
    });
  }

  closeViewHistory() {
    this.historyVisible = false;
    this.progressValue = 0;
    this.started = false;
  }

  progress() {
    if (this.started) {
      return;
    }
    this.started = true;
    const timelune = setInterval(() => {
      this.progressValue++;
      if (this.progressValue === 100) {
        this.slideNext();
      }
      if (!this.started) {
        clearInterval(timelune);
      }
    }, 100);
  }

  onSlideChange(el: any) {
    if (el.elementRef.nativeElement.swiper.isEnd) {
      this.isLastSlide = true;
      setTimeout(() => {
        this.historyVisible = false;
        this.progressValue = 0;
      }, 10000);
    } else {
      this.isLastSlide = false;
    }

    if (el.elementRef.nativeElement.swiper.isBeginning) {
      this.isFirstSlide = true;
    } else {
      this.isFirstSlide = false;
    }
  }
}
