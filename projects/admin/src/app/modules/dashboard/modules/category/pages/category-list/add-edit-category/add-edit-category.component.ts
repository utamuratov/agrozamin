import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { takeUntil, tap } from 'rxjs';
import { CategoryRequest } from '../../../models/category.request';
import { CategoryResponse } from '../../../models/category.response';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'az-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditCategoryComponent {
  /**
   *
   */
  @Input()
  parentCategories!: CategoryResponse[];

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
  private _editingData?: CategoryResponse;
  @Input()
  public set editingData(v: CategoryResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): CategoryResponse | undefined {
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
   * @param $category
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy,
    private $category: CategoryService
  ) {}

  /**
   *
   */
  private init() {
    this.initForm(this.editingData);
  }

  /**
   *
   * @param model
   */
  initForm(model?: CategoryResponse) {
    this.form = this.fb.group({
      parentIds: [model?.parentIds],
      name: this.fb.group({}),
      filters: this.fb.array([
        this.fb.group({
          filterId: [null, Validators.required],
          values: [null, Validators.required],
        }),
      ]),
    });
  }

  /**
   *
   */
  get filters() {
    return this.form.get('filters') as FormArray;
  }

  /**
   *
   */
  addFilter() {
    this.filters.push(
      this.fb.group({
        filterId: [null, Validators.required],
        values: [null, Validators.required],
      })
    );
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
    const request = this.form.getRawValue();
    if (this.editingData?.id) {
      this.edit(this.editingData.id, request);
      return;
    }
    this.add(request);
  }

  /**
   *
   */
  private add(request: CategoryRequest) {
    this.$category
      .add(request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.initForm();
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
  private edit(id: number, request: CategoryRequest) {
    this.$category
      .edit(id, request)
      .pipe(
        takeUntil(this.$destroy),
        tap((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
            this.initForm();
          }
        })
      )
      .subscribe();
  }

  /**
   *
   */
  close(): void {
    this.isVisibleChange.emit(false);
  }
}
