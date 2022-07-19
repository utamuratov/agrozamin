import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdvertisementStatus } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { GridLogicAdmin } from 'projects/admin/src/app/shared/components/grid/grid-logic/grid-logic-admin';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { AdvertisementGetAll } from '../dto/advertisement-get-all.interface';
import { AdvertisementService } from '../services/advertisement.service';

@Component({
  selector: 'az-advertisement-list',
  templateUrl: './advertisement-list.component.html',
  styleUrls: ['./advertisement-list.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdvertisementListComponent extends GridLogicAdmin<AdvertisementGetAll> {
  /**
   *
   */
  STATUS = AdvertisementStatus;

  /**
   *
   * @param $data
   * @param cd
   * @param router
   * @param route
   */
  constructor(
    protected override $data: AdvertisementService,
    protected override cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super($data, cd);
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.columns = [
      new Column({
        field: 'statusByColor',
        header: '',
        row: 1,
        hasTemplate: true,
        nzLeft: true,
      }),
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
        field: 'status',
        row: 1,
        hasTemplate: true,
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
      '10px',
      '70px',
      '250px',
      '100px',
      '200px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }

  /**
   *
   * @param model
   * @returns
   */
  addEdit(model?: AdvertisementGetAll) {
    // EDIT
    if (model) {
      this.router.navigate(['edit', model.id], { relativeTo: this.route });
      return;
    }

    // ADD
    this.router.navigate(['add'], { relativeTo: this.route });
  }
}
