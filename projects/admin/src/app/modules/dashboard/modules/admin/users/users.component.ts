import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { UserStatus } from 'projects/admin/src/app/core/enums/user-status.enum';
import { IdKeyDescription } from 'projects/admin/src/app/shared/models/id-key-description.interface';
import { map, Observable, takeUntil } from 'rxjs';
import { GridModel } from '../../translate/models/grid-model';
import { GridQuery } from '../../translate/models/grid-query.interface';
import { AdminUsersService } from './admin-users.service';
import { AdminUserBody } from './models/admin-user.body';
import { AdminUserGridData } from './models/admin-user.grid.data';
import { AdminUserResponse } from './models/admin-user.response';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
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
  filterStatus?: UserStatus | null;

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

  isOkLoading = false;

  constructor(
    private $adminUser: AdminUsersService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

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
    query.filter = [
      {
        key: 'status',
        value: [String(this.filterStatus || '')],
      },
      { key: 'role', value: [String(this.filterRole || '')] },
      { key: 'search_by', value: [this.searchBy] },
      { key: 'search_text', value: [this.searchText] },
    ];

    this.$adminUser.getAllGridData(query).subscribe((result) => {
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

  searchTextChanged(searchText: string) {
    if (searchText.length === 0) {
      this.loadInitData();
    }
  }

  search(searchText: string) {
    if (searchText.length >= 0) {
      this.loadInitData();
    }
  }

  modified() {
    this.loadInitData();
  }
}
