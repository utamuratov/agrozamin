import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';

interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
  login: string;
  description: string
}

@Component({
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less']
})

export class InterfaceComponent implements OnInit {

  expandSet = new Set<number>();
  onExpandChange(id: number, checked: boolean): void {
    if (checked) {
      this.expandSet.add(id);
    } else {
      this.expandSet.delete(id);
    }
  }


  size: NzButtonSize = 'default';

  /**
   * 
   */
  data: ItemData[]  = [];

  /**
   * 
   */
  filteredData: ItemData[] = [];

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

  options = ['Ru', 'Eng', 'Key']
  /**
   * 
   */

  switchValue = false;
  switchValue1 = false;

  isVisible = false;
  isOkLoading = false;


  constructor() {
    this.filteredOptions = this.options;
    }

   ngOnInit(): void {

    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        login: '' ,
        id: i,
        name: `John ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
        description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.'
      });
    }
    this.data = data;
    this.filteredData = data;
    
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
    this.filteredOptions = this.options.filter(
      option => option.toLowerCase().indexOf(event.toLowerCase()) !== -1
      )
    if(event === null || event === ''){
      this.filteredData = this.data
    }
  }

  search() {
    // console.log(Name)
    switch (this.searchBy) {
      case 'name':
        this.filteredData = this.data.filter(data => data.name.includes(this.searchText))    
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
    console.log(this.searchBy);
  }
  
}
