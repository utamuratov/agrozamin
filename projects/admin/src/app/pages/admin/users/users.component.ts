import { Component, OnInit } from '@angular/core';


interface DataItem {
  name: string;
  age: number;
  street: string;
  building: string;
  number: number;
  companyAddress: string;
  companyName: string;
  gender: string;
}

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})


export class UsersComponent implements OnInit {

  constructor() { }

  listOfData: DataItem[] = [];
  sortFnId = (a: DataItem, b: DataItem): number => a.age - b.age;
  sortFnLogin = (a: DataItem, b: DataItem): number => a.age - b.age;
  sortFnName = (a: DataItem, b: DataItem): number => a.age - b.age;
  sortFnLoginDate = (a: DataItem, b: DataItem): number => a.age - b.age;
  
  nameFilterFn = (list: string[], item: DataItem): boolean => list.some(name => item.name.indexOf(name) !== -1);
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];
  ngOnInit(): void {
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M'
      });
    }
    this.listOfData = data;
  }

}
