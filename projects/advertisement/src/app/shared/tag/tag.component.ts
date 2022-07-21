import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'az-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent {
  /**
   *
   */
  @Input()
  title?: string;

  /**
   *
   */
  @Input()
  category_id = 1;

  /**
   *
   */
  @Input()
  larger = false;
}
