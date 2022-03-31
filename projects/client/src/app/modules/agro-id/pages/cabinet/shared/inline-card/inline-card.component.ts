import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'az-inline-card',
  templateUrl: './inline-card.component.html',
  styleUrls: ['./inline-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InlineCardComponent {
  /**
   *
   */
  @Input()
  titleOne?: string;

  /**
   *
   */
  @Input()
  titleTwo?: string;

  /**
   *
   */
  @Input()
  titleThree?: string;

  /**
   *
   */
  @Input()
  avatar?: string;

  /**
   *
   */
  @Input()
  iconForAvatar = 'camera';

  /**
   *
   */
  @Input()
  isVisiblePopover?: boolean;
  @Output()
  isVisiblePopoverChange = new EventEmitter<boolean>();

  /**
   *
   */
  @Input()
  hasThreeDots?: boolean;

  /**
   *
   */
  constructor(private cd: ChangeDetectorRef) {}
}
