import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'az-reject-reason',
  templateUrl: './reject-reason.component.html',
  styleUrls: ['./reject-reason.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RejectReasonComponent {}
