import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'az-cabinet',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CabinetComponent {}
