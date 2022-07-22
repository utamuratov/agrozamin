import { Component, ViewChild } from '@angular/core';
import SwiperCore, { EffectCoverflow, Pagination, Virtual } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination, Virtual]);

@Component({
  selector: 'az-history-content',
  templateUrl: './history-content.component.html',
  styleUrls: ['./history-content.component.less'],
})
export class HistoryContentComponent {
  @ViewChild('swiper', { static: false }) swiper!: SwiperComponent;
  @ViewChild('storysSwiper', { static: false }) storysSwiper!: SwiperComponent;
  historyVisible = false;
  progressValue = 0;
  isLastSlide = false;
  isFirstSlide = true;
  started = false;

  history = [
    { id: 1, img: './assets/images/history-card-1.jpg' },
    { id: 2, img: './assets/images/history-card-2.jpg' },
    { id: 3, img: './assets/images/history-card-3.jpg' },
    { id: 4, img: './assets/images/history-card-1.jpg' },
    { id: 5, img: './assets/images/history-card-2.jpg' },
    { id: 6, img: './assets/images/history-card-3.jpg' },
    { id: 7, img: './assets/images/history-card-1.jpg' },
    { id: 8, img: './assets/images/history-card-2.jpg' },
    { id: 9, img: './assets/images/history-card-3.jpg' },
  ];

  slidePrev() {
    this.swiper.swiperRef.slidePrev(500);
  }
  slideNext() {
    this.swiper.swiperRef.slideNext(500);
  }

  slideNextStory() {
    console.log(12312, this.storysSwiper);

    this.storysSwiper.swiperRef.slideNext(100);
    this.started = true;
    this.progressValue = 0;
  }

  slidePrevStory() {
    this.storysSwiper.swiperRef.slidePrev(100);
    this.started = true;
    this.progressValue = 0;
  }

  slideTo(index: number) {
    this.storysSwiper.swiperRef.slideTo(index);
  }

  viewHistory(index: number) {
    this.historyVisible = true;
    setTimeout(() => {
      this.progressValue = 0;
      this.slideTo(index);
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
    const timeline = setInterval(() => {
      this.progressValue++;
      if (this.progressValue >= 100) {
        this.slideNextStory();
      }
      if (!this.started) {
        clearInterval(timeline);
      }
    }, 100);
  }

  onSlideChange(el: any) {
    console.log(el);

    if (el.elementRef.nativeElement.swiper.isEnd) {
      console.log(123);

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
