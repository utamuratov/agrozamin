import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgDestroy } from 'ngx-az-core';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { AccessControlService } from './access-control.service';
import { AccessControl } from './models/access-control.interface';
import { AccessControlResponse } from './models/access-control.response';

@Component({
  selector: 'az-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent
  extends BaseComponent<
    AccessControlResponse,
    AccessControl,
    AccessControlResponse<number>
  >
  implements OnInit
{
  /**
   *
   * @param $data
   * @param destroy$
   * @param cd
   */
  constructor(
    protected override $data: AccessControlService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($data, $destroy, cd);
    this.searchInputConfig.keys = ['key', 'description'];
  }

  /**
   *
   */
  override ngOnInit(): void {
    super.ngOnInit();
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  override addEdit(editingData?: AccessControlResponse) {
    if (editingData) {
      super.addEdit({
        ...editingData,
        actions: editingData?.actions.map((w) => w.id) ?? [],
      });
      return;
    }
    super.addEdit(editingData);
  }
}
