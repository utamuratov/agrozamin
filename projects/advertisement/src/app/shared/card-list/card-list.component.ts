import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Advertisement } from 'ngx-az-core';

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
