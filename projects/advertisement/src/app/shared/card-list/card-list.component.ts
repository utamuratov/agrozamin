import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Advertisement } from '../../ozimizniki/modules/advertisement/dto/advertisement.interface';

@Component({
  selector: 'az-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardListComponent {
  /**
   *
   */
  @Input()
  data: Advertisement[] = [];

  /**
   *
   */
  @Input()
  isInlineCard = false;

  /**
   *
   */
  @Input()
  isLoaded = true;
}
