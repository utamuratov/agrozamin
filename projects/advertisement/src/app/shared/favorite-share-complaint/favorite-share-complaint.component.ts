import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { ComplaintCategoryResponse } from './dto/complaint.response';
import { ComplaintService } from './services/complaint.service';

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
  complaintCategory$!: Observable<ComplaintCategoryResponse[]>;

  /**
   *
   */
  constructor(private $complement: ComplaintService) {}

  /**
   *
   */
  complain() {
    if (!this.complaintCategory$) {
      this.complaintCategory$ = this.getComplaintCategories().pipe(
        finalize(() => this.openComplaintModal())
      );
      return;
    }

    this.openComplaintModal();
  }

  /**
   *
   */
  openComplaintModal() {
    this.isVisibleComplaint = true;
  }

  /**
   *
   */
  private getComplaintCategories() {
    return this.$complement.getComplaintCategories();
  }
}
