import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: './internal-server-error.component.html',
  styleUrls: ['./internal-server-error.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InternalServerErrorComponent {}
