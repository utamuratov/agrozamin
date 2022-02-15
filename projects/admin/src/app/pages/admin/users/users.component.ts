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
  styleUrls: ['./users.component.less']
})


export class UsersComponent implements OnInit {
  size: NzButtonSize = 'default';

  /**
   * 
   */
  data: DataItem[]  = [];

  /**
   * 
   */
  filteredData: DataItem[] = [];

  /**
   * 
   */
  searchText = '';

  /**
   * 
   */
  searchBy: 'id' | 'name' | 'login' = 'name';
  /**
   * 
   */

  filteredOptions: string[] = []
  /**
   * 
   */

  options = ['Jack', 'John', 'Tom']
  /**
   * 
   */

  switchValue = false;
  switchValue1 = false;

  isVisible = false;
  isOkLoading = false;


  // list data
  sortFnId = (a: DataItem, b: DataItem): number => a.id - b.id;
  sortFnName = (a: DataItem, b: DataItem): number => (a.name > b.name ? 1 : -1);
  nameFilterFn = (list: string[], item: DataItem): boolean => list.some(name => item.name.indexOf(name) !== -1);
  
  filterName = [
    { text: 'Joe', value: 'Joe' },
    { text: 'John', value: 'John' }
  ];


  constructor() {
    this.filteredOptions = this.options;
   }


   ngOnInit(): void {

    const data = [];

    for (let i = 0; i < 100; i++) {
      data.push({
        name: 'John',
        id: i +1,
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
        login: 'login' + i
      });
    }
    this.data = data;
    this.search();
  }

  // Show Modal
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  // INput Handler

  changeInput(event: any){
    this.filteredOptions = this.options.filter(option => option.toLowerCase().indexOf(event.toLowerCase()) !== -1)
    if(event === null || event === ''){
      this.filteredData = this.data
    }
  }

  search() {
    // console.log(Name)
    switch (this.searchBy) {
      case 'name':
        this.filteredData =  this.data.filter(data => data.name === this.searchText);
        
        break;
        case 'id':
        this.filteredData =  this.data.filter(data => data.id === +this.searchText);
        break;
        case 'login':
        this.filteredData =  this.data.filter(data => data.login.includes(this.searchText));
        break;
    
      default:
        break;
    }
  }

}