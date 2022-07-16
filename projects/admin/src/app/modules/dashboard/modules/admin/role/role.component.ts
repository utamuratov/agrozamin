import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Language, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseComponent } from 'projects/admin/src/app/shared/components/base/base.component';
import { Column } from 'projects/admin/src/app/shared/components/grid/models/column.interface';
import { AccessActionResponse } from '../access-action/models/access-action.response';
import { AccessControlResponse } from '../access-control/models/access-control.response';
import { AddEditRole } from './models/add-edit-role.interface';
import { RoleResponse } from './models/role.response';
import { RoleService } from './role.service';

@Component({
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
})
export class RoleComponent
  extends BaseComponent<RoleResponse, AddEditRole, AddEditRole<string>>
  implements OnInit
{
  /**
   *
   */
  isAddEditModalVisible!: boolean;

  /**
   *
   */
  accessControls: AccessControlResponse[] = [];

  /**
   *
   */
  accessActions: AccessActionResponse[] = [];

  /**
   *
   */
  controlActionAsTree!: NzTreeNodeOptions[];

  /**
   *
   * @param $role
   * @param $destroy
   */
  constructor(
    protected $role: RoleService,
    protected override $destroy: NgDestroy,
    protected override cd: ChangeDetectorRef
  ) {
    super($role, $destroy, cd);
    this.searchInputConfig.keys = ['key', 'description'];
  }

  /**
   *
   */
  override ngOnInit(): void {
    super.ngOnInit();
    this.loadControlAction();
  }

  /**
   *
   */
  loadControlAction() {
    this.$role.getControlAction().subscribe((result) => {
      if (result.success) {
        this.controlActionAsTree = result.data.map((control) => {
          return {
            title: `${control.description}`,
            description: `${control.description}`,
            key: `${control.id}`,
            isLeaf: !control.access.length,
            children: control.access.map((action) => {
              return {
                title: `${control.description} - ${action.description}`,
                key: `${control.id}${AdminConstants.SPLITTER_FOR_TREE}${action.id}`,
                description: `${action.description}`,
                isLeaf: true,
                value: action.id,
              } as NzTreeNodeOptions;
            }),
          } as NzTreeNodeOptions;
        });
      }
    });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  override addEdit(editingData?: RoleResponse) {
    if (editingData) {
      const access: string[] = [];
      editingData.access_controls.forEach((control) => {
        control.access_actions.forEach((action) => {
          access.push(
            `${control.id}${AdminConstants.SPLITTER_FOR_TREE}${action.control_action_id}`
          );
        });
      });
      this.editingData = {
        id: editingData.id,
        description: editingData.description,
        key: editingData.key,
        access,
      };
    } else {
      this.editingData = undefined;
    }
    super.addEdit(this.editingData);
  }

  /**
   *
   */
  override makeColumnsForGrid() {
    this.language$.subscribe((languages) => {
      this.columns = [
        new Column({
          field: 'id',
          sortable: true,
          sortByLocalCompare: false,
          nzLeft: true,
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'key',
          sortable: true,
          nzLeft: true,
          rowspan: 2,
          row: 1,
        }),
        new Column({
          field: 'description',
          colspan: languages.length,
          isHeader: true,
          row: 1,
        }),
        ...languages.map(
          (language) =>
            new Column({
              field: 'description.' + language.code,
              header: language.name,
              sortable: true,
              nzAlignBody: 'left',
              row: 2,
            })
        ),
        new Column({
          field: 'access_controls',
          header: 'controls',
          hasTemplate: true,
          rowspan: 2,
          row: 1,
        }),
      ];

      this.makeWidthConfig(languages);
    });
  }

  /**
   *
   * @param languages
   */
  override makeWidthConfig(languages: Language[]) {
    this.nzWidthConfig = [
      AdminConstants.WIDTH_COLUMN_ID,
      AdminConstants.WIDTH_COLUMN_KEY,
      ...languages.map(() => AdminConstants.WIDTH_COLUMN_LANGUAGE),
      '300px',
      AdminConstants.WIDTH_COLUMN_ACTIONS,
    ];
  }
}
