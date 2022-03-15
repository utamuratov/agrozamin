import { Component, OnInit } from '@angular/core';
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
  filteredData: AccessControlResponse[] = [];

  /**
   *
   */
  data: AccessControlResponse[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadData();
  }

  private loadData() {
    for (let index = 0; index < 10; index++) {
      this.data.push({
        id: index + 1,
        key: 'key' + index,
        description: 'desc' + index,
        url: 'url' + index,
      });
    }
    this.filteredData = this.data;
  }

  search(ret: any): void {
    this.filteredData = ret;
  }

  addEdit(modal: any, data?: any) {}

  delete(id: number) {}
}
