import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { SearchInputAdvancedConfig } from 'projects/admin/src/app/shared/components/search-input/search-input-advanced/search-input-advanced.component';
import { Observable, takeUntil } from 'rxjs';
import { AccessControlService } from './access-control.service';
import { AccessControlResponse } from './models/access-control.response';

@Component({
  selector: 'az-access-control',
  templateUrl: './access-control.component.html',
  styleUrls: ['./access-control.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccessControlComponent implements OnInit {
  /**
   *
   */
  isVisible!: boolean;

  /**
   *
   */
  editingData?: AccessControlResponse<number>;

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
    private $destroy: NgDestroy,
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
    this.$accessControl
      .getAll()
      .pipe(takeUntil(this.$destroy))
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
  addEdit(editingData?: AccessControlResponse) {
    if (editingData) {
      this.editingData = {
        ...editingData,
        actions: editingData?.actions.map((w) => w.id) ?? [],
      };
    } else {
      this.editingData = editingData;
    }
    this.isVisible = true;
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.$accessControl
      .delete(id)
      .pipe(takeUntil(this.$destroy))
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
