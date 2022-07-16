import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewChild,
} from '@angular/core';
import { Advertisement } from '../../dto/advertisement.interface';
import SwiperCore, { Navigation } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([Navigation]);

@Component({
  selector: 'az-similar-items',
  templateUrl: './similar-items.component.html',
  styleUrls: ['./similar-items.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimilarItemsComponent {
  /**
   * 
   */
  @ViewChild('swiper') swiper!: SwiperComponent;
  
  /**
   *
   */
  @Input()
  data: Advertisement[] | null = [];

  /**
   *
   */
  next() {
    this.swiper.swiperRef.slideNext();
  }

  /**
   *
   */
  pre() {
    this.swiper.swiperRef.slidePrev();
  }
}
