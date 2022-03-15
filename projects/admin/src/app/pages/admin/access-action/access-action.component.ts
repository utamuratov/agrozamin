import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';
import { SearchInputAdvancedConfig } from '../../../shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { AccessActionService } from './access-action.service';
import { AddEditAccessActionComponent } from './add-edit-access-action/add-edit-access-action.component';
import { AccessActionResponse } from './models/access-action.response';

@Component({
  templateUrl: './access-action.component.html',
  styleUrls: ['./access-action.component.less'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessActionComponent implements OnInit {
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

  constructor(
    private $accessAction: AccessActionService,
    private destroy$: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.$accessAction
      .getAll()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result.success) {
          this.searchInputConfig.data = result.data;
          this.searchInputConfig.filteredData = result.data;
          this.searchInputConfig.searchText = '';
        }
      });
  }

  addEdit(
    modal: AddEditAccessActionComponent,
    editingData: AccessActionResponse | null = null
  ) {
    modal.onInit(editingData);
    modal.isVisible = true;
  }

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
}
