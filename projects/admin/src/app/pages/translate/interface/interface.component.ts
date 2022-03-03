import { Component, OnInit } from '@angular/core';
// import { NzButtonSize } from 'ng-zorro-antd/button';
import { TranslateApiService } from '../services/translate-api.service';



interface ItemData {
  id: number;
  name: string;
  age: number;
  address: string;
  login: string;
  description: string;
  footer: null
}

@Component({
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.less'],
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

  /**
   *
   */
  isVisibleModal = false;

  /**
   *
   */
  data: ItemData[] = [];

  /**
   *
   */
  filteredData: ItemData[] = [];

  constructor(private $translate: TranslateApiService) {}

  ngOnInit(): void {
    this.getTranslations();
  }

  /**
   *
   */
  getTranslations() {
    this.$translate.getTranslations().subscribe((w) => console.log(w));
  }

  // Show Modal
  openModal(): void {
    this.isVisibleModal = true;
  }

  closeModal(): void {
    this.isVisibleModal = false;
  }
}
