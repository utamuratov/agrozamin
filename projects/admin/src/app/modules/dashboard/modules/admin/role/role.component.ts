import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { AccessActionResponse } from '../access-action/models/access-action.response';
import { AccessControlResponse } from '../access-control/models/access-control.response';
import { AddEditRole } from './models/add-edit-role.interface';
import { ControlAction } from './models/control-action.interface';
import { RoleResponse } from './models/role.response';
import { RoleService } from './role.service';

@Component({
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
})
export class RoleComponent implements OnInit {
  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<RoleResponse> = {
    data: [],
    filteredData: [],
    keys: ['key', 'description'],
    searchText: '',
  };

  /**
   *
   */
  isAddEditModalVisible!: boolean;

  /**
   *
   */
  editingData?: AddEditRole<string>;

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
  controlAction!: ControlAction[];
  controlActionAsTree!: NzTreeNodeOptions[];

  /**
   *
   */
  isVisible = false;

  /**
   *
   * @param $role
   * @param destroy$
   */
  constructor(private $role: RoleService, private destroy$: NgDestroy) {}

  /**
   *
   */
  ngOnInit(): void {
    this.loadData();
    this.loadControlAction();
  }

  /**
   *
   */
  loadControlAction() {
    this.$role.getControlAction().subscribe((result) => {
      if (result.success) {
        this.controlAction = result.data;
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
   */
  loadData() {
    this.$role
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
        }
      });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: RoleResponse) {
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
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$role
      .delete(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        if (response.success) {
          this.loadData();
        }
      });
  }
}
