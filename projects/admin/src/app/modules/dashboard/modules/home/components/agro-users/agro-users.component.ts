import { Component, OnInit } from '@angular/core';
import { NzTableQueryParams } from 'ng-zorro-antd/table';
import { NgDestroy } from 'ngx-az-core';
import { map, Observable, of, takeUntil } from 'rxjs';
import { User } from './interface';
import { AgroIdUsersService } from './services/agro-id-users.service';

@Component({
  selector: 'az-agro-users',
  templateUrl: './agro-users.component.html',
  styleUrls: ['./agro-users.component.less'],
})
export class AgroUsersComponent implements OnInit {
  inputValue = 'my site';

  $data: Observable<User[]> = of([]);

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly User[] = [];
  setOfCheckedId = new Set<number>();
  switchValue = true;
  editCache: { [key: number]: { edit: boolean; data: User } } = {};

  total!: number;
  loading = false;
  pageSize = 10;
  pageIndex = 1;

  editingUser!: User;

  constructor(private data$: AgroIdUsersService, private $destroy: NgDestroy) {}

  private getUsers(
    pageIndex: number,
    pageSize: number,
    sortField: string | null,
    sortOrder: string | null,
    searchBy: string,
    searchText: string | null
  ) {
    this.loading = true;
    console.log('dd');
    
    this.$data = this.data$.get(pageIndex, pageSize, sortField, sortOrder, searchBy, searchText).pipe(
      map((res) => {
        this.loading = false;
        this.total = res.data.total;
        
        return res.data.data.map((data) => {
          return {...data, edit: false}
        });
      })
    );
  }

  ngOnInit(): void {
    this.getUsers(this.pageIndex, this.pageSize, null, null, 'id', null);
  }

  saveEdit(data: User): void {
    data.edit = false;
    data.phone = this.editingUser.phone;
    console.log(data);
    
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
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) =>
      this.updateCheckedSet(item.id, value)
    );
    this.refreshCheckedStatus();
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
  }

  onQueryParamsChange(params: NzTableQueryParams): void {
    console.log(params);
    const { pageSize, pageIndex, sort, filter } = params;
    const currentSort = sort.find((item) => item.value !== null);
    const sortField = (currentSort?.key) || null;
    const sortOrder = (currentSort?.value) || null;
    console.log(currentSort);
    console.log(sortField);
    console.log(sortOrder);
    
    // this.loadDataFromServer(pageIndex, pageSize, sortField, sortOrder, filter);
    this.getUsers(pageIndex, pageSize, sortField, sortOrder, 'id', null);
  }

  edit(user: User) {
    user.edit = true;
    this.editingUser = {...user};
  }
}

/* sortField: string | null,
sortOrder: string | null,
searchBy: string,
searchText: string | null
 */