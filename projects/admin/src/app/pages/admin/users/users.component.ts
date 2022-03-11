import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

interface DataItem {
  name: string;
  id: number;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
  login: string;
}

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less'],
})
export class UsersComponent implements OnInit {
  /**
   *
   */
  searchText = '';

  /**
   *
   */
  data: DataItem[] = [];

  /**
   *
   */
  filteredData: DataItem[] = [];

  /**
   *
   */
  searchBy: 'id' | 'name' | 'login' = 'id';

  /**
   *
   */
  switchValue = false;
  switchValue1 = false;

  isOkLoading = false;

  /**
   *
   * @param a
   * @param b
   * @returns
   */
  sortFnId = (a: DataItem, b: DataItem): number => a.id - b.id;

  /**
   *
   * @param a
   * @param b
   * @returns
   */
  sortFnName = (a: DataItem, b: DataItem): number => (a.name > b.name ? 1 : -1);

  constructor() {}

  ngOnInit(): void {
    const data = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John',
        id: i + 1,
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
        login: 'login' + i,
      });
    }
    this.data = data;
    this.search('');
  }

  search(searchText: string) {}

  addEdit(modal: any) {}
}
