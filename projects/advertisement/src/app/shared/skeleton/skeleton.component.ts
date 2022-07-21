import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'az-skeleton',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {}
