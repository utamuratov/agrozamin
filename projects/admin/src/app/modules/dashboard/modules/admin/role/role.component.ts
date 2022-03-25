import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { AccessActionService } from '../access-action/access-action.service';
import { AccessActionResponse } from '../access-action/models/access-action.response';
import { AccessControlService } from '../access-control/access-control.service';
import { AccessControlResponse } from '../access-control/models/access-control.response';
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
  editingData?: RoleResponse;

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
  isVisible = false;

  constructor(
    private $accessControl: AccessControlService,
    private $accessAction: AccessActionService,
    private $role: RoleService,
    private destroy$: NgDestroy
  ) {}

  loadAccessControls() {
    this.$accessControl.getAll().subscribe((result) => {
      if (result.success) {
        this.accessControls = result.data;
      }
    });
  }

  loadAccessActions() {
    this.$accessAction.getAll().subscribe((result) => {
      if (result.success) {
        this.accessActions = result.data;
      }
    });
  }

  ngOnInit(): void {
    this.loadData();
    this.loadAccessControls();
    this.loadAccessActions();
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
    this.editingData = editingData;
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
