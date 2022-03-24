import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { AccessActionService } from './access-action.service';
import { AccessActionResponse } from './models/access-action.response';

@Component({
  templateUrl: './access-action.component.html',
  styleUrls: ['./access-action.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessActionComponent implements OnInit {
  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  editingData?: AccessActionResponse;

  /**
   *
   */
  searchInputConfig: SearchInputAdvancedConfig<AccessActionResponse> = {
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
   * @param $accessAction
   * @param destroy$
   * @param cd
   */
  constructor(
    private $accessAction: AccessActionService,
    private destroy$: NgDestroy,
    private cd: ChangeDetectorRef
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
    this.$accessAction
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig = {
            ...this.searchInputConfig,
            data: result.data,
          };
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: AccessActionResponse) {
    this.editingData = editingData;
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$accessAction
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
