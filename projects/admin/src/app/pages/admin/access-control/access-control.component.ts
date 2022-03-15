import { Component, OnInit } from '@angular/core';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { AccessControlResponse } from './models/access-control.response';

@Component({
  selector: 'az-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.less'],
})
export class AccessControlComponent implements OnInit {
  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<AccessControlResponse> = {
    data: [],
    filteredData: [],
    keys: ['key', 'description'],
    searchText: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    for (let index = 0; index < 10; index++) {
      this.searchInputConfig.data.push({
        id: index + 1,
        key: 'key' + index,
        description: 'desc' + index,
        url: 'url' + index,
      });
    }
    this.searchInputConfig.filteredData = this.searchInputConfig.data;
  }

  addEdit(modal: any, data?: any) {}

  delete(id: number) {}
}