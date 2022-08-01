import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NgDestroy } from 'ngx-az-core';
import { map, Observable, of, takeUntil } from 'rxjs';
import { AttachModerator, CreateUser, User } from './interface';
import { AgroIdUsersService } from './services/agro-id-users.service';

@Component({
  selector: 'az-agro-users',
  templateUrl: './agro-users.component.html',
  styleUrls: ['./agro-users.component.less'],
})
export class AgroUsersComponent implements OnInit {
  inputValue = 'my site';
  isVisible = false;
  $data: Observable<User[]> = of([]);
  form!: FormGroup;
  rolesList = [];
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly User[] = [];
  setOfCheckedId = new Set<number>();
  switchValue = true;
  selectVisible = false;
  editCache: { [key: number]: { edit: boolean; data: User } } = {};
  moderatorsIndex = 2;
  moderatorsList!: User[];
  selectedModerator = null;
  total!: number;
  loading = false;
  pageSize = 10;
  pageIndex = 1;

  editingUser!: User;

  selectFilterBy = [
    {label: 'ID', value: 'id'},
    {label: 'Логин', value: 'login'},
    {label: 'ФИО', value: 'f_name'},
  ]
  selectedFilterBy = 'id'
  searchText = ''
  moderatorFilter = ''

  constructor(
    private data$: AgroIdUsersService,
    private $destroy: NgDestroy,
    private fb: FormBuilder
  ) {}

  private getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    searchBy: string,
    searchText: string | null,
  ) {
    this.loading = true;

    this.$data = this.data$
      .get(pageIndex, pageSize, sortField, sortOrder, searchBy, searchText)
      .pipe(
        map((res) => {
          this.loading = false;
          this.total = res.data.total;

          return res.data.data.map((data) => {
            return { ...data, edit: false };
          });
        })
      )
  }

  private initForm() {
    this.form = this.fb.group({
      login: [null, [Validators.required]],
      f_name: [null, [Validators.required]],
      l_name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  private setFormValues(data: User) {
    this.form.controls['login'].setValue(data.login);
    this.form.controls['f_name'].setValue(data.f_name);
    this.form.controls['l_name'].setValue(data.l_name);
    this.form.controls['phone'].setValue(data.phone);
    this.form.controls['description'].setValue(data.description);
  }

  private requestBody(): CreateUser {
    return {
      login: this.form.value.login,
      phone: this.form.value.phone,
      f_name: this.form.value.f_name,
      l_name: this.form.value.l_name,
      description: this.form.value.description,
    };
  }

  private getModerators() {
    this.data$
      .getRolesList(this.moderatorsIndex)
      .pipe(takeUntil(this.$destroy))
      .subscribe((res) => {
        console.log(res.data.data);

        this.moderatorsList = res.data.data;
      });
  }

  ngOnInit(): void {
    this.getUsers(this.pageIndex, this.pageSize, null, null, this.selectedFilterBy, null);
    this.initForm();
    this.getModerators();
    this.$data.subscribe(res => {
      console.log(res);      
    })
  }

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

  cancelEdit(data: User) {
    data.edit = false;
    this.form.reset();
  }

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

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
    console.log(this.setOfCheckedId);
    console.log([...this.setOfCheckedId]);
  }

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
    console.log([...this.setOfCheckedId]);
  }

  onCurrentPageDataChange($event: readonly User[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

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

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = currentSort?.key || null;
    const sortOrder = currentSort?.value || null;
    console.log(currentSort);
    console.log(sortField);
    console.log(sortOrder);

    // this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
    this.getUsers(pageIndex, pageSize, sortField, sortOrder, this.selectedFilterBy, null);
  }

  edit(user: User) {
    this.setFormValues(user);
    user.edit = true;
    this.editingUser = { ...user };
  }

  showModal() {
    this.isVisible = true;
  }

  doAfterSuccess(success: boolean, data?: User) {
    if (success) {
      this.form.reset();
      this.getUsers(this.pageIndex, this.pageSize, null, null, this.selectedFilterBy, null);
    }
  }

  attachModerator(value: any) {
    console.log(value);
    const requestBody: AttachModerator = {
      moderator_id: value,
      users: [...this.setOfCheckedId],
    };
    this.data$
      .attachModerator(requestBody)
      .pipe(takeUntil(this.$destroy))
      .subscribe(() => {
        this.selectedModerator = null;
        this.getUsers(this.pageIndex, this.pageSize, null, null, this.selectedFilterBy, null);
      });
  }

  search(value: string, searchText: string) {
    console.log(this.selectedFilterBy);
    this.getUsers(this.pageIndex, this.pageSize, null, null, value, searchText);
  }

  filterByModerator(id = '') {
    if (id != null && id !== '') {
      // this.getUsers(this.pageIndex, this.pageSize, null, null, this.selectedFilterBy, null, id);
    }    
  }

  deleteUser(id: number) {
    this.data$.delete(id).pipe(takeUntil(this.$destroy)).subscribe(() => {
      this.getUsers(this.pageIndex, this.pageSize, null, null, this.selectedFilterBy, null);
    })
  }
}
