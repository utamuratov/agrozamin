import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NgDestroy } from 'ngx-az-core';
import { map, Observable, of, takeUntil } from 'rxjs';
import {
  AttachModerator,
  CreateUser,
  ResponseSettings,
  User,
} from './interface';
import { AgroIdUsersService } from './services/agro-id-users.service';

@Component({
  selector: 'az-agro-users',
  templateUrl: './agro-users.component.html',
  styleUrls: ['./agro-users.component.less'],
})
export class AgroUsersComponent implements OnInit {
  /**
   *
   */
  isVisible = false;

  /**
   *
   */
  $data: Observable<User[]> = of([]);

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  checked = false;

  /**
   *
   */
  indeterminate = false;

  /**
   *
   */
  listOfCurrentPageData: readonly User[] = [];

  /**
   *
   */
  setOfCheckedId = new Set<number>();

  /**
   *
   */
  selectVisible = false;

  /**
   *
   */
  editCache: { [key: number]: { edit: boolean; data: User } } = {};

  /**
   *
   */
  moderatorsIndex = 2;

  /**
   *
   */
  moderatorsList!: User[];

  /**
   *
   */
  selectedModerator = null;

  /**
   *
   */
  total!: number;

  /**
   *
   */
  loading = false;

  /**
   *
   */
  pageSize = 10;

  /**
   *
   */
  pageIndex = 1;

  /**
   *
   */
  editingUser!: User;

  /**
   *
   */
  selectFilterBy = [
    { label: 'ID', value: 'id' },
    { label: 'Логин', value: 'login' },
    { label: 'ФИО', value: 'f_name' },
  ];

  /**
   *
   */
  selectedFilterBy = 'id';

  /**
   *
   */
  searchText = '';

  /**
   *
   */
  moderatorFilter = '';

  /**
   *
   */
  statusSelector = null;

  /**
   *
   */
  selectStatus = [
    { label: 'Заблокированные', value: 'blocked' },
    { label: 'Активные', value: 'active' },
  ];

  defaultParams = {
    pageIndex: this.pageIndex,
    pageSize: this.pageSize,
    sortField: null,
    sortOrder: null,
    searchBy: this.selectedFilterBy,
    searchText: null,
    moderator: null,
    blocked: null,
  };

  /**
   *
   * @param data$
   * @param $destroy
   * @param fb
   */
  constructor(
    private data$: AgroIdUsersService,
    private $destroy: NgDestroy,
    private fb: FormBuilder
  ) {}

  /**
   *
   * @param resSettings
   */
  private getUsers(resSettings: ResponseSettings) {
    this.loading = true;

    this.$data = this.data$.get(resSettings).pipe(
      map((res) => {
        this.loading = false;
        this.total = res.data.total;

        return res.data.data.map((data) => {
          return { ...data, edit: false };
        });
      })
    );
  }

  /**
   *
   */
  private initForm() {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      f_name: [null, [Validators.required]],
      l_name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  /**
   *
   * @param data
   */
  private setFormValues(data: User) {
    this.form.controls['login'].setValue(data.login);
    this.form.controls['f_name'].setValue(data.f_name);
    this.form.controls['l_name'].setValue(data.l_name);
    this.form.controls['phone'].setValue(data.phone);
    this.form.controls['description'].setValue(data.description);
  }

  /**
   *
   * @returns
   */
  private requestBody(): CreateUser {
    return {
      login: this.form.value.login,
      phone: this.form.value.phone,
      f_name: this.form.value.f_name,
      l_name: this.form.value.l_name,
      description: this.form.value.description,
    };
  }

  /**
   *
   */
  private getModerators() {
    this.data$
      .getRolesList(this.moderatorsIndex)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        this.moderatorsList = res.data.data;
      });
  }

  /**
   *
   */
  ngOnInit(): void {
    this.getUsers(this.defaultParams);
    this.initForm();
    this.getModerators();
  }

  /**
   *
   * @param data
   * @returns
   */
  saveEdit(data: User): void {
    if (this.form.invalid) {
      return;
    }

    const requestBody = this.requestBody();
    this.data$
      .edit(requestBody, data.id)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        data.edit = false;
        this.doAfterSuccess(true);
      });
  }

  /**
   *
   * @param data
   */
  cancelEdit(data: User) {
    data.edit = false;
    this.form.reset();
  }

  /**
   *
   * @param user
   */
  handleBlockUser(user: User) {
    this.data$
      .block({
        id: user.id,
        blocked: !user.blocked,
      })
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.doAfterSuccess(true);
      });
  }

  /**
   *
   * @param id
   * @param checked
   */
  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  /**
   *
   * @param id
   * @param checked
   */
  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  /**
   *
   * @param value
   */
  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
    if (value) {
      this.selectVisible = true;
    } else {
      this.selectVisible = false;
    }
  }

  /**
   *
   * @param $event
   */
  onCurrentPageDataChange($event: readonly User[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  /**
   *
   */
  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) =>
      this.setOfCheckedId.has(item.id)
    );
    this.indeterminate =
      this.listOfCurrentPageData.some((item) =>
        this.setOfCheckedId.has(item.id)
      ) && !this.checked;

    if (this.indeterminate) {
      this.selectVisible = true;
    } else {
      this.selectVisible = false;
    }
  }

  /**
   *
   * @param params
   */
  onQueryParamsChange(params: NzTableQueryParams): void {
    const { pageSize, pageIndex, sort } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = currentSort?.key || null;
    const sortOrder = currentSort?.value || null;

    const changedRes = {
      pageIndex: pageIndex,
      pageSize: pageSize,
      sortField: sortField,
      sortOrder: sortOrder,
      searchBy: this.selectedFilterBy,
      searchText: null,
      moderator: null,
      blocked: null,
    };

    this.getUsers(changedRes);
  }

  /**
   *
   * @param user
   */
  edit(user: User) {
    this.setFormValues(user);
    user.edit = true;
    this.editingUser = { ...user };
  }

  /**
   *
   */
  showModal() {
    this.isVisible = true;
  }

  /**
   *
   * @param success
   * @param data
   */
  doAfterSuccess(success: boolean, data?: User) {
    if (success) {
      this.form.reset();
      this.getUsers(this.defaultParams);
    }
  }

  /**
   *
   * @param value
   */
  attachModerator(value: any) {
    const requestBody: AttachModerator = {
      moderator_id: value,
      users: [...this.setOfCheckedId],
    };
    this.data$
      .attachModerator(requestBody)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.selectedModerator = null;
        this.getUsers(this.defaultParams);
      });
  }

  /**
   *
   * @param value
   * @param searchText
   */
  search(value: string, searchText: string) {
    const searchResponse = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      sortField: null,
      sortOrder: null,
      searchBy: value,
      searchText: searchText,
      moderator: null,
      blocked: null,
    };

    this.getUsers(searchResponse);
  }

  /**
   *
   * @param id
   */
  filterByModerator(id: string) {
    const filterParams = {
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      sortField: null,
      sortOrder: null,
      searchBy: this.selectedFilterBy,
      searchText: null,
      moderator: id,
      blocked: null,
    };

    this.getUsers(filterParams);
  }

  /**
   *
   * @param id
   */
  deleteUser(id: number) {
    this.data$
      .delete(id)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.getUsers(this.defaultParams);
      });
  }

  /**
   *
   * @param status
   */
  changeStatus(status = null) {
    if (status === 'blocked') {
      const filterParams = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        sortField: null,
        sortOrder: null,
        searchBy: this.selectedFilterBy,
        searchText: null,
        moderator: null,
        blocked: true,
      };

      this.getUsers(filterParams);
    } else if (status === 'active') {
      const filterParams = {
        pageIndex: this.pageIndex,
        pageSize: this.pageSize,
        sortField: null,
        sortOrder: null,
        searchBy: this.selectedFilterBy,
        searchText: null,
        moderator: null,
        blocked: false,
      };

      this.getUsers(filterParams);
    } else {
      this.getUsers(this.defaultParams);
    }
  }
}
