import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'az-user-photo',
  templateUrl: './user-photo.component.html',
  styleUrls: ['./user-photo.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserPhotoComponent {
  /**
   *
   */
  @Input()
  userPhoto?: string | null;
}
