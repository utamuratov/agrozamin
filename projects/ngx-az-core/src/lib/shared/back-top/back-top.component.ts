import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'az-back-top',
  templateUrl: './back-top.component.html',
  styleUrls: ['./back-top.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackTopComponent {}
