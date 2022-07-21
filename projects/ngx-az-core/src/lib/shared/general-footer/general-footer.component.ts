import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'az-general-footer',
  templateUrl: './general-footer.component.html',
  styleUrls: ['./general-footer.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralFooterComponent {
  /**
   *
   */
  @Input()
  logo = './assets/images/logo.svg';

  /**
   *
   */
  @Input()
  logoGooglePlay = './assets/images/google-play.png';

  /**
   *
   */
  @Input()
  logoAppStore = './assets/images/app-store.png';
}
