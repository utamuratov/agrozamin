import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { BaseResponse, NgDestroy, GridQuery, GridModel } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { UserStatus } from 'projects/admin/src/app/core/enums/user-status.enum';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable, map, takeUntil } from 'rxjs';
import { AdminUsersService } from './services/admin-users.service';
import { AdminUserBody } from './models/admin-user.body';
import { AdminUserGridData } from './models/admin-user.grid.data';
import { AdminUserResponse } from './models/admin-user.response';
import { Moderator } from './models/moderator.interface';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  editingData?: AdminUserBody;

  /**
   *
   */
  searchText = '';

  /**
   *
   */
  data!: GridModel<AdminUserGridData>;

  /**
   *
   */
  role$!: Observable<IdKeyDescription[]>;

  /**
   *
   */
  moderator$!: Observable<Moderator[]>;

  /**
   *
   */
  filterBlocked?: boolean | null;

  /**
   *
   */
  filterRole?: number | null;

  /**
   *
   */
  filterModerator?: number | null;

  /**
   *
   */
  moderatorId?: number;

  /**
   *
   */
  pageSize = AdminConstants.PAGINATION_PAGE_SIZE;

  /**
   *
   */
  UserStatus = UserStatus;

  /**
   *
   */
  searchBy = 'id';

  /**
   *
   */
  isAdminUsers: boolean;

  /**
   *
   */
  checked = false;

  /**
   *
   */
  checkedUsers: AdminUserGridData[] = [];

  /**
   *
   */
  getGridData: (
    query: GridQuery,
    url?: string
  ) => Observable<BaseResponse<GridModel<AdminUserResponse>>>;

  /**
   *
   * @param router
   * @param $adminUser
   * @param $destroy
   * @param cd
   */
  constructor(
    private router: Router,
    private $adminUser: AdminUsersService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {
    this.isAdminUsers = this.router.url.includes(AdminConstants.ROUTER_ADMIN);
    this.getGridData = this.isAdminUsers
      ? this.$adminUser.getGridData.bind($adminUser)
      : this.$adminUser.getAgroIdUsers.bind($adminUser);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.loadRoles();
    this.loadModerators();
    this.loadInitData();
  }

  /**
   *
   */
  loadInitData() {
    this.loadDataFromServer(AdminConstants.DEFAULT_GRID_QUERY);
  }

  /**
   *
   */
  loadDataFromServer(query: GridQuery) {
    query.filter = this.getQueryFilter();

    this.getGridData(query).subscribe((result) => {
      if (result.success) {
        this.data = {
          ...result.data,
          data: result.data.data.map((user) => {
            return { ...user, isActive: !user.blocked, isChecked: false };
          }),
        };
        this.cd.markForCheck();
      }
    });
  }

  private getQueryFilter() {
    return [
      {
        key: 'blocked',
        value: [
          String(
            this.filterBlocked !== null && this.filterBlocked != undefined
              ? this.filterBlocked
              : ''
          ),
        ],
      },
      { key: 'role', value: [String(this.filterRole || '')] },
      { key: 'moderator', value: [String(this.filterModerator || '')] },
      { key: 'search_by', value: [this.searchBy] },
      { key: 'search_text', value: [this.searchText] },
    ];
  }

  /**
   *
   */
  loadRoles() {
    this.role$ = this.$adminUser.getRoles().pipe(map((result) => result.data));
  }

  /**
   *
   */
  loadModerators() {
    this.moderator$ = this.$adminUser
      .getModerators()
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param params
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort && currentSort.key) || '';
    const sortOrder = (currentSort && currentSort.value) || '';
    this.loadDataFromServer({
      pageIndex,
      pageSize,
      sortField,
      sortOrder,
      filter,
    });
  }

  /**
   *
   * @param data
   */
  changeStatus(data: AdminUserGridData) {
    this.$adminUser
      .blockUser(!data.isActive, data.id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((result) => {
        this.cd.markForCheck();
        if (result.success && result.data) {
          return;
        }
        data.isActive = !data.isActive;
      });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: AdminUserResponse) {
    if (editingData) {
      this.editingData = {
        ...editingData,
        role: editingData.role?.id,
      };
    } else {
      this.editingData = editingData;
    }
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$adminUser
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.loadInitData();
        }
      });
  }

  /**
   *
   * @param searchText
   */
  searchTextChanged(searchText: string) {
    if (searchText.length === 0) {
      this.loadInitData();
    }
  }

  /**
   *
   * @param searchText
   */
  search(searchText: string) {
    if (searchText.length >= 0) {
      this.loadInitData();
    }
  }

  /**
   *
   */
  modified() {
    this.loadInitData();
  }

  /**
   *
   * @param checked
   */
  onAllChecked(checked: boolean) {
    this.checkedUsers = [];
    this.data.data.forEach((user) => {
      user.isChecked = checked;
      if (checked) {
        this.checkedUsers.push(user);
      }
    });
  }

  /**
   *
   * @param data
   * @param checked
   */
  onItemChecked(data: AdminUserGridData, checked: boolean) {
    data.isChecked = checked;
    if (checked) {
      this.checkedUsers.push(data);
    } else {
      this.checkedUsers = this.checkedUsers.filter(
        (user) => user.id !== data.id
      );
    }

    this.checked = this.checkedUsers.length === this.data.data.length;
  }

  /**
   *
   */
  assignToModerator() {
    if (this.moderatorId === undefined) {
      return;
    }

    this.$adminUser
      .asignUsersToModerator(
        this.moderatorId,
        this.checkedUsers.map((user) => user.id)
      )
      .subscribe(() => {
        this.checked = false;
        this.loadInitData();
        this.checkedUsers = [];
        this.moderatorId = undefined;
      });
  }
}
