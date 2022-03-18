import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
// import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { AccessActionService } from '../access-action/access-action.service';
import { AccessControlService } from '../access-control/access-control.service';
import { AccessControlResponse } from '../access-control/models/access-control.response';
import { Role } from './models/role.interface';
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
  accessActions: AccessControlResponse[] = [];

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
