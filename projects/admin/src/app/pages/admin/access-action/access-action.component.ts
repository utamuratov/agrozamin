import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Select } from '@ngxs/store';
import { Language, LanguageState, NgDestroy } from 'ngx-az-core';
import { Observable, takeUntil } from 'rxjs';
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
  filteredData: AccessActionResponse[] = [];

  /**
   *
   */
  data: AccessActionResponse[] = [];

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
        console.log(result);

        if (result.success) {
          this.data = result.data;
          // search again
          this.search(this.data);
        }
      });
  }

  search(filteredData: AccessActionResponse[]): void {
    this.filteredData = filteredData;
    console.log(filteredData);

    this.cd.markForCheck();
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
