import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { AccessControlService } from './access-control.service';
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
  isVisible!: boolean;

  /**
   *
   */
  editingData?: AccessControlResponse;

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<AccessControlResponse> = {
    data: [],
    filteredData: [],
    keys: ['key', 'description'],
    searchText: '',
  };

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   * @param $accessControl
   * @param destroy$
   * @param cd
   */
  constructor(
    private $accessControl: AccessControlService,
    private destroy$: NgDestroy
  ) {}

  /**
   *
   */
  ngOnInit(): void {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.$accessControl
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
        }
      });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: AccessControlResponse) {
    this.editingData = editingData;
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$accessControl
      .delete(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((response) => {
        if (response.success) {
          this.loadData();
        }
      });
  }

  close() {
    this.isVisible = false;
  }
}
