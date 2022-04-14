import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { takeUntil, tap } from 'rxjs';
import { CrudService } from '../../../core/services/crud.service';

@Component({
  selector: 'az-base-add-edit',
  template: '',
})
export class BaseAddEditComponent<TResponse, TBody, TEditingData = TResponse> {
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
  private _editingData?: TEditingData;
  @Input()
  public set editingData(v: TEditingData | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): TEditingData | undefined {
    return this._editingData;
  }

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   * @param fb
   * @param $data
   * @param $destroy
   */
  constructor(
    protected fb: FormBuilder,
    protected $data: CrudService,
    protected $destroy: NgDestroy
  ) {}

  /**
   *
   */
  private init() {
    this.initForm(this.editingData);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected initForm(model?: TEditingData) {
    // INITIALIZE FORM FROM EXTENDED COMPONENT
  }

  /**
   *
   * @returns
   */
  public submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.getRequest();
    const id = (this.editingData as NzSafeAny)?.id;
    if (id) {
      this.edit(id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   * @returns
   */
  protected getRequest() {
    return this.form.getRawValue();
  }

  /**
   *
   */
  private add(request: TBody) {
    this.$data
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.doAfterSuccess();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: TBody) {
    this.$data
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.doAfterSuccess();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  private doAfterSuccess() {
    this.modified.emit();
    this.close();
    this.initForm();
  }

  /**
   *
   */
  public close(): void {
    this.isVisibleChange.emit(false);
  }
}
