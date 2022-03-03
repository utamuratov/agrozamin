import { Component, OnInit } from '@angular/core';
import { NzButtonSize } from 'ng-zorro-antd/button';
import { GridModel } from '../models/grid-model';
import { Translation } from '../models/translation.interface';
import { TranslateApiService } from '../services/translate-api.service';

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
  data!: GridModel<Translation>;

  constructor(private $translate: TranslateApiService) {}

  ngOnInit(): void {
    this.getTranslations();
  }

  /**
   *
   */
  getTranslations() {
    this.$translate.getTranslations().subscribe((w) => {
      if (w.success) {
        this.data = w.data;
      }
    });
  }

  // Show Modal
  openModal(): void {
    this.isVisibleModal = true;
  }

  closeModal(): void {
    this.isVisibleModal = false;
  }
}
