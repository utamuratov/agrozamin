import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GridLogic } from 'projects/advertisement/src/app/shared/grid/grid-logic/grid-logic';
import { FavouriteService } from 'projects/advertisement/src/app/shared/services/favourite.service';

@Component({
  templateUrl: './favourite-advertisement.component.html',
  styleUrls: ['./favourite-advertisement.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavouriteAdvertisementComponent extends GridLogic {
  /**
   *
   */
  isInlineCard = true;

  /**
   *
   * @param $data
   * @param cd
   * @param route
   */
  constructor(
    protected override $data: FavouriteService,
    protected override cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) {
    super($data, cd);
    this.data = this.route.snapshot.data['advertisements'];
  }

  /**
   *
   */
  protected override init(): void {
    this.initQuery();
  }

  /**
   *
   */
  override loadData() {
    this.loadDataFromServer(this.query);
  }

  /**
   *
   */
  toggleCardStyle() {
    this.isInlineCard = !this.isInlineCard;
  }
}
