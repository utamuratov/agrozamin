import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NzCarouselComponent } from 'ng-zorro-antd/carousel';
import { Advertisement } from '../../dto/advertisement.interface';

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
  @Input()
  data: Advertisement[][] | null = [];

  /**
   *
   */
  flexSize = '1';

  /**
   *
   * @param e
   */
  next(e: NzCarouselComponent) {
    e.next();
  }

  /**
   *
   * @param e
   */
  pre(e: NzCarouselComponent) {
    e.pre();
  }

  /**
   *
   * @param event
   */
  onResize(event: any) {
    if (event.target.innerWidth <= 992 && event.target.innerWidth > 768) {
      this.flexSize = '223px';
      return;
    }

    if (event.target.innerWidth <= 768 && event.target.innerWidth > 576) {
      this.flexSize = '230px';
      return;
    }

    if (event.target.innerWidth > 576) {
      this.flexSize = '1';
    }
  }
}
