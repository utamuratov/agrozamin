import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import {
  AdvertisementStatus,
  Constants,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { map, Observable, of, takeUntil, tap } from 'rxjs';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { NzImageCustom } from './components/media/media.component';
import { AdvertisementEditResponse } from './dto/advertisement-edit.response';
import { AdvertisementRequest } from './dto/advertisement.request';
import { AdvertisementResponse } from './dto/advertisement.response';
import { CategoryType } from './dto/category-type.interface';
import { Characteristics } from './dto/characteristics.interface';
import { District } from './dto/district.interface';
import { Filter } from './dto/filter.interface';
import { Region } from './dto/region.interface';
import { AddAdvertisementService } from './services/add-advertisement.service';
@Component({
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementFullLogicComponent implements OnInit {
  /**
   *
   */
  data?: AdvertisementEditResponse;

  /**
   *
   */
  region$!: Observable<Region[]>;

  /**
   *
   */
  district$!: Observable<District[]>;

  /**
   *
   */
  categoryType$!: Observable<CategoryType[]>;

  /**
   *
   */
  filters: Filter[] = [];

  /**
   *
   */
  uploadedFiles?: NzImageCustom[];

  /**
   *
   */
  categoryId?: number;

  /**
   *
   */
  currentCategory?: IdName;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  isAgreeOferta = false;

  /**
   *
   */
  @ViewChild(CharacteristicsComponent)
  characteristicsComponent!: CharacteristicsComponent;

  constructor(
    protected $advertisement: AddAdvertisementService,
    protected fb: FormBuilder,
    protected cd: ChangeDetectorRef,
    protected router: Router,
    protected route: ActivatedRoute,
    protected $destroy: NgDestroy
  ) {}

  /**
   *
   */
  ngOnInit() {
    this.getRegions();
    if (this.data?.announcement) {
      this.initializeForm(this.data.announcement);
      this.uploadedFiles = this.data.announcement.files.map((file) => {
        return { id: file.id, src: file.file };
      });
      this.currentCategory = this.data.announcement.category;
      this.changeCategoryId(this.data.announcement.category_id);
      this.getDistrictsbyRegionId(this.data.announcement.region_id);
      return;
    }

    this.initializeForm();
  }

  /**
   *
   */
  getRegions() {
    this.region$ = this.$advertisement.getRegions();
  }

  /**
   *
   */
  onChangeRegionId() {
    this.form
      .get('region_id')
      ?.valueChanges.pipe(takeUntil(this.$destroy))
      .subscribe((regionId) => {
        this.getDistrictsbyRegionId(regionId);
        this.clearDistrictId();
      });
  }

  /**
   *
   */
  private clearDistrictId() {
    this.form.get('district_id')?.setValue(undefined);
  }

  /**
   *
   * @param regionId
   */
  private getDistrictsbyRegionId(regionId?: number) {
    if (regionId) {
      this.district$ = this.$advertisement.getDistrictsByRegionId(regionId);
    }
  }

  /**
   *
   */
  initializeForm(model?: AdvertisementResponse) {
    this.form = this.fb.group({
      name: [model?.name, Validators.required],
      files: [null],
      price: [model?.price],
      deal: [model?.deal ?? false],
      category_id: [model?.category_id, Validators.required],
      type_id: [model?.type_id, Validators.required],
      description: [model?.description, Validators.required],
      characteristics: [model?.characteristics],
      region_id: [model?.region_id, Validators.required],
      district_id: [model?.district_id, Validators.required],
      address: [model?.address],
      use_agroid_contact: [
        model?.use_agroid_contact ?? true,
        Validators.required,
      ],
      location: [model?.location],
      video_url: [model?.video_url],
      deleted_files: [null],
      created_for_user: [model?.created_for_user],
    });

    this.onChangeRegionId();
    this.cd.markForCheck();
  }

  /**
   *
   * @returns
   */
  submitForm() {
    if (this.characteristicsComponent) {
      this.characteristicsComponent.checkControlsToInvalid();
      this.form.controls['characteristics'].setValue(this.getCharacteristcs());
    }

    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    const request: AdvertisementRequest = this.form.getRawValue();
    if (request.contact) {
      request.contact.phone =
        +`${Constants.PREFIX_PHONENUMBER}${request.contact.phone}`;
    }

    this.save(request).subscribe(() => {
      this.doAfterRequestFinished();
    });
  }

  /**
   *
   */
  doAfterRequestFinished() {
    if (this.data) {
      this.router.navigate(
        [
          '../../../',
          'cabinet',
          'advertisement',
          AdvertisementStatus.STATUS_NEW,
        ],
        { relativeTo: this.route }
      );
      return;
    }

    this.router.navigate(
      ['../../', 'cabinet', 'advertisement', AdvertisementStatus.STATUS_NEW],
      { relativeTo: this.route }
    );
  }

  /**
   *
   */
  save(request: AdvertisementRequest) {
    // EDIT
    if (this.data) {
      return this.$advertisement.edit(this.data.announcement.id, request);
    }

    // ADD
    return this.$advertisement.add(request);
  }

  /**
   *
   * @param characteristics
   */
  private getCharacteristcs(): Characteristics[] {
    const characteristics: Characteristics[] = [];
    this.filters.forEach((filter) => {
      if (
        filter.type_for_creator === InputTypeForCreator.InputNumber ||
        filter.type_for_creator === InputTypeForCreator.DatePicker ||
        filter.type_for_creator === InputTypeForCreator.DateYearPicker
      ) {
        characteristics.push({
          filter_id: filter.filter_id,
          value: filter.value,
        });
      } else if (filter.type_for_creator === InputTypeForCreator.Checkbox) {
        (filter.value as NzCheckBoxOptionInterface[]).forEach((option) => {
          if (option.checked) {
            characteristics.push({
              filter_id: filter.filter_id,
              filter_parameter_id: +option.value,
            });
          }
        });
      } else {
        characteristics.push({
          filter_id: filter.filter_id,
          filter_parameter_id: Number(filter.value),
        });
      }
    });

    return characteristics;
  }

  /**
   *
   */
  changeCategoryId(categoryId?: number) {
    this.categoryId = categoryId;

    this.getCategoryTypesByCategoryId(this.categoryId);
    this.getFiltersByCategoryId(this.categoryId).subscribe((filters) => {
      this.filters = filters;
      this.cd.markForCheck();
    });
  }

  /**
   *
   */
  private getCategoryTypesByCategoryId(categoryId?: number) {
    if (categoryId === undefined) {
      return;
    }

    this.categoryType$ = this.$advertisement
      .getCategoryTypesByCategoryId(categoryId)
      .pipe(map((result) => result.data));
  }

  /**
   *
   * @param categoryId
   */
  getFiltersByCategoryId(categoryId?: number) {
    if (categoryId === undefined) {
      return of([]);
    }

    return this.$advertisement.getFiltersByCategoryId(categoryId).pipe(
      map((result) => {
        if (result.success) {
          this.form.controls['characteristics'].setValidators([
            Validators.required,
          ]);
          this.form.controls['characteristics'].updateValueAndValidity();
          this.makeCheckBoxOptions(result.data);
          this.setFiltersValue(result.data);
        }
        return result.data;
      })
    );
  }

  /**
   *
   */
  private setFiltersValue(filters: Filter[]) {
    const editedFilters: Characteristics[] = this.form.value['characteristics'];
    if (!editedFilters) {
      return;
    }
    filters.forEach((filter) => {
      if (
        filter.type_for_creator === InputTypeForCreator.InputNumber ||
        filter.type_for_creator === InputTypeForCreator.DatePicker ||
        filter.type_for_creator === InputTypeForCreator.DateYearPicker
      ) {
        const characteristic = editedFilters.find(
          (w) => w.filter_id === filter.filter_id
        );
        filter.value = characteristic?.value;

        return;
      }

      if (filter.type_for_creator === InputTypeForCreator.Checkbox) {
        const characteristics = editedFilters.filter(
          (w) => w.filter_id === filter.filter_id
        );

        (filter.value as NzCheckBoxOptionInterface[]).forEach((option) => {
          if (
            characteristics.find((t) => t.filter_parameter_id === +option.value)
          ) {
            option.checked = true;
          }
        });

        return;
      }

      const characteristic = editedFilters.find(
        (w) => w.filter_id === filter.filter_id
      );
      if (characteristic?.filter_parameter_id) {
        filter.value = characteristic.filter_parameter_id;
      }
    });
  }

  /**
   *
   */
  private makeCheckBoxOptions(filters: Filter[]) {
    const filter = filters.find(
      (w) => w.type_for_creator === InputTypeForCreator.Checkbox
    );
    if (filter) {
      filter.value = filter.parameters.map((t) => {
        return {
          label: t.label,
          value: t.filter_parameter_id.toString(),
        };
      });
    }
  }
}
