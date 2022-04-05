import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { takeUntil, tap } from 'rxjs';
import { CompanyRequest } from '../../models/company.request';
import { CompanyResponse } from '../../models/company.response';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'az-company-modal',
  templateUrl: './company-modal.component.html',
  styleUrls: ['./company-modal.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyModalComponent {
  /**
   *
   */
  @Input()
  public isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  private _editingData?: CompanyResponse;
  @Input()
  public set editingData(v: CompanyResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): CompanyResponse | undefined {
    return this._editingData;
  }

  /**
   *
   */
  @Output()
  modified = new EventEmitter<string>();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  photo?: File | null;

  /**
   *
   */
  photoSrc!: string;

  constructor(
    private fb: FormBuilder,
    private $company: CompanyService,
    private $destroy: NgDestroy,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  init() {
    this.initForm(this.editingData);
  }

  /**
   *
   */
  private initForm(model?: CompanyResponse) {
    this.form = this.fb.group({
      name: [model?.name, [Validators.required]],
      address: [model?.address, [Validators.required]],
      bank: [model?.bank, [Validators.required]],
      inn: [model?.inn, [Validators.required]],
      mfo: [model?.mfo, [Validators.required]],
      settlement_account: [model?.settlement_account, [Validators.required]],
    });
  }

  /**
   *
   * @param e
   */
  handleFileInput(e: NzSafeAny) {
    this.photo = e.target?.files?.item(0);
    if (this.photo) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photoSrc = reader.result as string;
        this.cd.markForCheck();
      };

      reader.readAsDataURL(this.photo);
    }
  }

  /**
   *
   * @returns
   */
  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    const request: CompanyRequest = this.getCompanyRequest();
    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   * @returns
   */
  private getCompanyRequest(): CompanyRequest {
    const request: CompanyRequest = {
      ...this.form.getRawValue(),
      photo: this.photo,
    };
    return request;
  }

  /**
   *
   */
  private add(request: CompanyRequest) {
    this.$company
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.closeAfterModified();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  private closeAfterModified() {
    this.modified.emit();
    this.close();
    this.initForm();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: CompanyRequest) {
    this.$company
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.closeAfterModified();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  close() {
    this.photoSrc = '';
    this.isVisibleChange.emit(false);
  }
}
