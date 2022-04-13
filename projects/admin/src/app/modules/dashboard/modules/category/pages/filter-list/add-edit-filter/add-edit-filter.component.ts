import { KeyValue } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import {
  Language,
  LanguageState,
  markAllAsDirty,
  NgDestroy,
} from 'ngx-az-core';
import { AdminConstants } from 'projects/admin/src/app/core/admin-constants';
import {
  InputTypeForCreator,
  InputTypeForFilter,
} from 'projects/admin/src/app/core/enums/input-type.enum';
import { Observable, takeUntil, tap } from 'rxjs';
import { FilterRequest } from '../../../models/filter.request';
import { FilterResponse } from '../../../models/filter.response';
import { Parameter } from '../../../models/parameter.interface';
import { ParameterReponse } from '../../../models/parameter.response';
import { FilterService } from '../../../services/filter.service';
import * as XLSX from 'xlsx';
import { Generic } from 'projects/admin/src/app/shared/models/generic.type';

@Component({
  selector: 'az-add-edit-filter',
  templateUrl: './add-edit-filter.component.html',
  styleUrls: ['./add-edit-filter.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditFilterComponent {
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
  private _editingData?: FilterResponse;
  @Input()
  public set editingData(v: FilterResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): FilterResponse | undefined {
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
  InputTypeForCreator = InputTypeForCreator;
  InputTypeForFilter = InputTypeForFilter;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  /**
   *
   */
  readonly parametersMinMax: Parameter[] = [
    {
      label: {
        ru: AdminConstants.LOCALIZATION_MIN_RU,
        uz_cyrl: AdminConstants.LOCALIZATION_MIN_UZ_CYRL,
        uz_latn: AdminConstants.LOCALIZATION_MIN_UZ_LATN,
      },
    },
    {
      label: {
        ru: AdminConstants.LOCALIZATION_MAX_RU,
        uz_cyrl: AdminConstants.LOCALIZATION_MAX_UZ_CYRL,
        uz_latn: AdminConstants.LOCALIZATION_MAX_UZ_LATN,
      },
    },
  ];

  /**
   *
   */
  readonly parametersFromTo: Parameter[] = [
    {
      label: {
        ru: AdminConstants.LOCALIZATION_FROM_RU,
        uz_cyrl: AdminConstants.LOCALIZATION_FROM_UZ_CYRL,
        uz_latn: AdminConstants.LOCALIZATION_FROM_UZ_LATN,
      },
    },
    {
      label: {
        ru: AdminConstants.LOCALIZATION_TO_RU,
        uz_cyrl: AdminConstants.LOCALIZATION_TO_UZ_CYRL,
        uz_latn: AdminConstants.LOCALIZATION_TO_UZ_LATN,
      },
    },
  ];

  parametersCheckBoxes: ParameterReponse[] = [];
  editCache: {
    [key: string]: {
      edit: boolean;
      data: Parameter;
    };
  } = {};

  /**
   *
   */
  inputTypesForCreator: KeyValue<string, number>[] = [];

  /**
   *
   */
  dataExcel!: Array<Array<string>>;

  /**
   *
   * @param fb
   * @param $filter
   */
  constructor(
    private fb: FormBuilder,
    private $destroy: NgDestroy,
    private $filter: FilterService,
    private cd: ChangeDetectorRef
  ) {
    this.inputTypesForCreator = this.makeInputTypes(
      Object.keys(InputTypeForCreator)
    );
  }

  /**
   *
   * @param inputTypeKeys
   * @returns
   */
  private makeInputTypes(inputTypeKeys: string[]) {
    const inputTypes: KeyValue<string, number>[] = [];
    for (let index = 0; index < inputTypeKeys.length / 2; index++) {
      inputTypes.push({
        key: inputTypeKeys[inputTypeKeys.length / 2 + index],
        value: +inputTypeKeys[index],
      });
    }

    return inputTypes;
  }

  /**
   *
   */
  private init() {
    this.initForm(this.editingData);
    if (this.editingData?.type_for_creator) {
      this.changeInputTypeForCreator(this.editingData?.type_for_creator);
    }
    this.updateEditCache();
  }

  /**
   *
   * @param model
   */
  initForm(model?: FilterResponse) {
    this.form = this.fb.group({
      name: this.fb.group({}),
      field_name: [model?.field_name, Validators.required],
      type_for_creator: [model?.type_for_creator, Validators.required],
      type_for_filter: [model?.type_for_filter, Validators.required],
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

    switch (this.form.get('type_for_filter')?.value) {
      case InputTypeForFilter.DateRangePicker:
      case InputTypeForFilter.DateYearRangePicker:
        request.parameters = this.parametersFromTo;
        break;
      case InputTypeForFilter.Slider:
      case InputTypeForFilter.SliderWithInput:
        request.parameters = this.parametersMinMax;
        break;
      case InputTypeForFilter.Checkbox:
        request.parameters = this.parametersCheckBoxes;
        break;
      default:
        request.parameters = [];
        break;
    }
    return request;
  }

  /**
   *
   */
  private add(request: FilterRequest) {
    this.$filter
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
  private edit(id: number, request: FilterRequest) {
    this.$filter
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

  /**
   *
   * @param id
   */
  startEdit(id: number): void {
    this.editCache[id].edit = true;
  }

  /**
   *
   * @param id
   */
  cancelEdit(id: number): void {
    const index = this.parametersCheckBoxes.findIndex((item) => item.id === id);
    this.editCache[id] = {
      data: { ...this.parametersCheckBoxes[index] },
      edit: false,
    };
  }

  /**
   *
   * @param id
   */
  saveEdit(id: number): void {
    const index = this.parametersCheckBoxes.findIndex((item) => item.id === id);
    Object.assign(this.parametersCheckBoxes[index], this.editCache[id].data);
    this.editCache[id].edit = false;
  }

  /**
   *
   */
  updateEditCache(): void {
    this.parametersCheckBoxes.forEach((item) => {
      this.editCache[item.id] = {
        edit: false,
        data: { ...item },
      };
    });
  }

  /**
   *
   * @param id
   */
  delete(id: number) {
    this.parametersCheckBoxes = this.parametersCheckBoxes.filter(
      (parameter) => parameter.id !== id
    );
  }

  /**
   *
   * @param type_for_creator
   */
  changeInputTypeForCreator(type_for_creator: number) {
    switch (type_for_creator) {
      case InputTypeForCreator.InputNumber:
        this.form.get('type_for_filter')?.setValue(InputTypeForFilter.Slider);
        break;
      case InputTypeForCreator.Checkbox:
      case InputTypeForCreator.Radio:
      case InputTypeForCreator.Select:
        this.form.get('type_for_filter')?.setValue(InputTypeForFilter.Checkbox);
        break;
      case InputTypeForCreator.DatePicker:
        this.form
          .get('type_for_filter')
          ?.setValue(InputTypeForFilter.DateRangePicker);

        break;
      case InputTypeForCreator.DateYearPicker:
        this.form
          .get('type_for_filter')
          ?.setValue(InputTypeForFilter.DateYearRangePicker);

        break;

      default:
        break;
    }
    this.cd.markForCheck();
  }

  /**
   *
   * @param evt
   */
  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>evt.target;
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const ab: ArrayBuffer = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(ab);

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.dataExcel = XLSX.utils.sheet_to_json(ws, { header: 1 });
      for (let index = 1; index < this.dataExcel.length; index++) {
        const languageObject: Generic = {};
        for (let j = 0; j < this.dataExcel[0].length; j++) {
          const language = this.dataExcel[0][j];
          languageObject[language] = this.dataExcel[index][j];
        }

        this.parametersCheckBoxes.push({ label: languageObject, id: index });
      }
      this.updateEditCache();
      this.parametersCheckBoxes = [...this.parametersCheckBoxes];
      this.cd.markForCheck();
    };
    reader.readAsArrayBuffer(target.files[0]);
  }
}
