import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { BaseResponse, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { UserStatus } from 'projects/admin/src/app/core/enums/user-status.enum';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { Observable, map, takeUntil } from 'rxjs';
import { GridModel } from '../translate/models/grid-model';
import { GridQuery } from '../translate/models/grid-query.interface';
import { AdminUsersService } from './admin-users.service';
import { AdminUserBody } from './models/admin-user.body';
import { AdminUserGridData } from './models/admin-user.grid.data';
import { AdminUserResponse } from './models/admin-user.response';

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
  filterBlocked?: boolean | null;

  /**
   *
   */
  filterRole?: number | null;

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
  isAdmin: boolean;

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
    this.isAdmin = this.router.url.includes(AdminConstants.ROUTER_ADMIN);
    this.getGridData = this.isAdmin
      ? this.$adminUser.getGridData.bind($adminUser)
      : this.$adminUser.getAgroIdUsers.bind($adminUser);
  }

  /**
   *
   */
  ngOnInit(): void {
    this.loadRoles();
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
            return { ...user, isActive: !user.blocked };
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
        role: editingData.role.id,
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
}
