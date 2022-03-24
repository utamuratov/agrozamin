import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'az-header-with-divider',
  templateUrl: './header-with-divider.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderWithDividerComponent {
  /**
   *
   */
  @Input()
  title!: string;
}
