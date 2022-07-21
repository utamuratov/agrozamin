import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { takeUntil, tap } from 'rxjs';
import { CategoryEditingData } from '../../../models/category-editing-data';
import { CategoryRequest } from '../../../models/category.request';
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
  public isVisible!: boolean;

  /**
   *
   */
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  /**
   *
   */
  private _editingData?: CategoryEditingData;
  @Input()
  public set editingData(v: CategoryEditingData | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): CategoryEditingData | undefined {
    return this._editingData;
  }

  /**
   *
   */
  private _categories: NzTreeNodeOptions[] = [];
  public get categories(): NzTreeNodeOptions[] {
    return this._categories;
  }
  @Input()
  public set categories(v: NzTreeNodeOptions[]) {
    this._categories = v;
  }

  /**
   *
   */
  private _filters: NzTreeNodeOptions[] = [];
  public get filters(): NzTreeNodeOptions[] {
    return this._filters;
  }
  @Input()
  public set filters(v: NzTreeNodeOptions[]) {
    this._filters = v;
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
   */
  icon?: File | null;

  /**
   *
   */
  iconSrc!: string;

  /**
   *
   * @param fb
   * @param $category
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy,
    private $category: CategoryService,
    private cd: ChangeDetectorRef
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
  initForm(model?: CategoryEditingData) {
    this.form = this.fb.group({
      parent_categories: [model?.parent_categories ?? []],
      name: this.fb.group({}),
      filters: [model?.filters, Validators.required],
    });
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
    const request = this.getRequest();
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
  private getRequest() {
    const request = this.form.getRawValue();
    request.filters = this.getSelectedFilters(request.filters);
    request.icon = this.icon;
    return request;
  }

  /**
   *
   * @param filterParameterIds
   * @returns
   */
  private getSelectedFilters(filterParameterIds: string[]) {
    const filters: {
      id: number;
      parameters: number[];
    }[] = [];
    filterParameterIds.forEach((value: string) => {
      const splitted = value.split(AdminConstants.SPLITTER_FOR_TREE);
      if (splitted.length > 1) {
        const filter = filters.find((f) => f.id === +splitted[0]);
        if (filter) {
          filter.parameters.push(+splitted[1]);
        } else {
          filters.push({ id: +splitted[0], parameters: [+splitted[1]] });
        }
      } else {
        const parameters = this.filters.find((w) => w.key === value)?.children;

        const filter: {
          id: number;
          parameters: number[];
        } = { id: +value, parameters: [] };
        parameters?.forEach((parameter) => {
          filter.parameters.push(
            +parameter.key.split(AdminConstants.SPLITTER_FOR_TREE)[1]
          );
        });
        filters.push(filter);
      }
    });
    return filters;
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
   * @param e
   */
  handleFileInput(e: NzSafeAny) {
    this.icon = e.target?.files?.item(0);
    if (this.icon) {
      const reader = new FileReader();
      reader.onload = () => {
        this.iconSrc = reader.result as string;
        this.cd.markForCheck();
      };

      reader.readAsDataURL(this.icon);
    }
  }

  /**
   *
   */
  close(): void {
    this.iconSrc = '';
    this.icon = null;
    this.isVisibleChange.emit(false);
  }
}
