import { Component, OnInit } from '@angular/core';
// import { NzMessageService } from 'ng-zorro-antd/message';
import { TransferItem } from 'ng-zorro-antd/transfer';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';

interface DataItem {
  name: string;
  id: number;
  age: number;
  address: string;
}

@Component({
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less'],
})
export class RoleComponent implements OnInit {
  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<DataItem> = {
    data: [],
    filteredData: [],
    keys: ['key', 'description'],
    searchText: '',
  };

  list: TransferItem[] = [];

  showTransfer = false;
  showTransfer1 = false;

  switchValue = false;
  switchValue1 = false;

  isVisible = false;

  constructor() {
    // this.filteredOptions = this.options;
  }

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.list.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        direction: Math.random() * 2 > 1 ? 'right' : undefined,
      });
    }
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        id: i + 1,
        name: `Edward King ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
      });
    }
    this.searchInputConfig.data = data;
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  showP(): void {
    console.log('yozdi');
  }

  showTransferfun() {
    this.showTransfer = true;
  }

  showTransferfun1() {
    this.showTransfer1 = true;
  }

  // filterOption(inputValue: string, item: any): boolean {
  //   return item.description.indexOf(inputValue) > -1;
  // }

  search(ret: any): void {
    console.log('nzSearchChange', ret);
  }

  select(ret: any): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: any): void {
    console.log('nzChange', ret);
  }

  addEdit(modal: any) {}
}
