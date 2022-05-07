import {
  Component,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';
import { NgDestroy } from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import { BaseAddEditComponent } from 'projects/admin/src/app/shared/components/base-add-edit/base-add-edit.component';
import { AdvertiementTypeResponse } from '../../../models/advertisement-type.response';
import { CategoryEditingData } from '../../../models/category-editing-data';
import { CategoryRequest } from '../../../models/category.request';
import { CategoryResponse } from '../../../models/category.response';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'az-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditCategoryComponent extends BaseAddEditComponent<
  CategoryResponse,
  CategoryRequest,
  CategoryEditingData
> {
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
  private _advertisementTypes: AdvertiementTypeResponse[] = [];
  public get advertisementTypes(): AdvertiementTypeResponse[] {
    return this._advertisementTypes;
  }
  @Input()
  public set advertisementTypes(v: AdvertiementTypeResponse[]) {
    this._advertisementTypes = v;
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

  private _projectId!: number;
  public get projectId(): number {
    return this._projectId;
  }
  @Input()
  public set projectId(v: number) {
    this._projectId = v;
  }

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
    protected override fb: FormBuilder,
    protected override $destroy: NgDestroy,
    protected override $data: CategoryService,
    private cd: ChangeDetectorRef
  ) {
    super(fb, $data, $destroy);
  }

  /**
   *
   * @param model
   */
  override initForm(model?: CategoryEditingData) {
    this.form = this.fb.group({
      parent_categories: [model?.parent_categories ?? []],
      name: this.fb.group({}),
      filters: [model?.filters, Validators.required],
      announcement_types: [model?.announcement_types, Validators.required],
    });
  }

  /**
   *
   * @returns
   */
  override getRequest() {
    const request = this.form.getRawValue();
    request.filters = this.getSelectedFilters(request.filters);
    request.icon = this.icon;
    request.project_id = this.projectId;
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
  override close(): void {
    this.iconSrc = '';
    this.icon = null;
    this.isVisibleChange.emit(false);
  }
}
