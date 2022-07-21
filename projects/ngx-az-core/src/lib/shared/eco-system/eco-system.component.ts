import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Data } from '../../config/_data';

@Component({
  selector: 'az-eco-system',
  templateUrl: './eco-system.component.html',
  styleUrls: ['./eco-system.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcoSystemComponent {
  /**
   *
   */
  readonly AGROZAMIN_ECO_SYSTEMS = Data.AGROZAMIN_ECO_SYSTEMS;

  @Input()
  iconSrc = './assets/images/services-icon.svg';
}
