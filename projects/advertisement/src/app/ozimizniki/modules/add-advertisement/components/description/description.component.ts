import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'az-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DescriptionComponent {
  /**
   *
   */
  @Input()
  form!: FormGroup;
}
