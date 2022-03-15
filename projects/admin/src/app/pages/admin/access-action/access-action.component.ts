import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AccessActionResponse } from './models/access-action.response';

@Component({
  selector: 'az-access-action',
  templateUrl: './access-action.component.html',
  styleUrls: ['./access-action.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessActionComponent implements OnInit {
  /**
   *
   */
  filteredData: AccessActionResponse[] = [];

  /**
   *
   */
  data: AccessActionResponse[] = [];

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
