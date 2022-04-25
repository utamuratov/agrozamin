import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { NgDestroy } from 'ngx-az-core';
import { takeUntil } from 'rxjs';
import { CompanyResponse } from '../../models/company.response';
import { CompanyService } from '../../services/company.service';

@Component({
  templateUrl: './legal-person.page.html',
  styleUrls: ['./legal-person.page.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LegalPersonPage implements OnInit {
  /**
   *
   */
  isVisibleAddEditModal = false;

  /**
   *
   */
  data: CompanyResponse[] = [];

  /**
   *
   */
  editingData?: CompanyResponse;

  constructor(
    private $company: CompanyService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.loadData();
  }

  /**
   *
   */
  loadData() {
    this.$company
      .getAll()
      .pipe(takeUntil(this.$destroy))
      .subscribe((response) => {
        if (response.success) {
          this.data = response.data;
          this.cd.markForCheck();
        }
      });
  }

  /**
   *
   * @param id
   */
  delete(id: number): void {
    this.$company.delete(id).subscribe((result) => {
      if (result.success) {
        this.data = this.data.filter((businessCard) => businessCard.id !== id);
        this.cd.markForCheck();
      }
    });
  }

  /**
   *
   * @param modal
   * @param editingData
   */
  addEdit(editingData?: CompanyResponse) {
    if (editingData) {
      editingData.isVisiblePopover = false;
    }
    this.editingData = editingData;
    this.isVisibleAddEditModal = true;
  }

  /**
   *
   */
  modifiedData() {
    this.loadData();
  }
}
