import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'az-favorite-share-complaint',
  templateUrl: './favorite-share-complaint.component.html',
  styleUrls: ['./favorite-share-complaint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoriteShareComplaintComponent {
  /**
   *
   */
  @Input()
  advertisementId!: number;

  /**
   *
   */
  @Input()
  isFavorite!: boolean;

  /**
   *
   */
  @Output()
  isFavoriteChange = new EventEmitter<boolean>();

  /**
   *
   */
  isVisibleComplaint = false;

  /**
   *
   */
  openComplaintModal() {
    this.isVisibleComplaint = true;
  }
}
