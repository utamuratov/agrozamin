import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { GridLogicAdmin } from 'projects/admin/src/app/shared/components/grid/grid-logic/grid-logic-admin';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { ComplaintedAdvertisement } from '../dto/complainted-advertisement.interface';
import { ComplaintedUserService } from '../services/complainted-user.service';

@Component({
  templateUrl: './complainted-advertisement-list.component.html',
  styleUrls: ['./complainted-advertisement-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComplaintedAdvertisementListComponent extends GridLogicAdmin<ComplaintedAdvertisement> {
  /**
   *
   */
  isVisibleBlockUserModal = false;

  /**
   *
   */
  advertisementId!: number;

  /**
   *
   * @param $data
   * @param cd
   */
  constructor(
    protected override $data: ComplaintedUserService,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, cd);
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.columns = [
      new Column({
        field: 'id',
        sortable: true,
        nzLeft: true,
        row: 1,
      }),
      new Column({
        field: 'name',
        sortable: true,
        row: 1,
      }),
      new Column({
        field: 'price',
        sortable: true,
        row: 1,
      }),
      new Column({
        field: 'complaint_content',
        header: 'complaint',
        row: 1,
      }),
      new Column({
        field: 'comment',
        header: 'commentary',
        row: 1,
      }),
      new Column({
        field: 'actions',
        header: '',
        row: 1,
        hasTemplate: true,
        nzRight: true,
      }),
    ];

    this.makeWidthConfig();
  }

  /**
   *
   * @param languages
   */
  override makeWidthConfig() {
    this.nzWidthConfig = [
      '70px',
      '250px',
      '120px',
      '200px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }

  /**
   *
   * @param advertisementId
   */
  openBlockUserModal(advertisementId: number) {
    this.advertisementId = advertisementId;
    this.isVisibleBlockUserModal = true;
  }

  /**
   *
   * @param success
   */
  blocked(success: boolean) {
    if (success) {
      this.loadData();
    }
  }
}
