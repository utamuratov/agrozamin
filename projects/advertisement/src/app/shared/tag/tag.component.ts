import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'az-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TagComponent implements OnInit {
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

  ngOnInit() {
    // TODO: DO SMTH OR REMOVE
  }
}
