import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { Constants, markAllAsDirty } from 'ngx-az-core';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { map } from 'rxjs';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import {
  Characteristics,
  AdvertisementRequest,
} from './dto/advertisement.request';
import { AddAdvertisementService } from './services/add-advertisement.service';
@Component({
  selector: 'az-add-edit-advertisement-full',
  templateUrl: './add-edit-advertisement-full.component.html',
  styleUrls: ['./add-edit-advertisement-full.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditAdvertisementFullComponent implements OnInit {
  /**
   *
   */
  @Input()
  isForModerator = false;

  /**
   *
   */
  @Input()
  id?: number;

  /**
   *
   */
  categoryId!: number;

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
    private fb: FormBuilder,
    private $advertisement: AddAdvertisementService,
    private cd: ChangeDetectorRef
  ) {}

  /**
   *
   */
  ngOnInit() {
    if (this.id) {
      this.getAdvertisementById(this.id).subscribe((result) => {
        this.initializeForm(result.announcement);
      });

      return;
    }

    this.initializeForm();
  }

  /**
   *
   * @param id
   */
  getAdvertisementById(id: number) {
    return this.$advertisement
      .getAdvertisementForEditById(id)
      .pipe(map((result) => result.data));
  }

  /**
   *
   */
  initializeForm(model?: AdvertisementRequest) {
    this.form = this.fb.group({
      name: [model?.name, Validators.required],
      files: [null, Validators.required], // !
      price: [model?.price],
      deal: [model?.deal ?? false],
      category_id: [model?.category_id, Validators.required],
      type_id: [model?.type_id, Validators.required],
      description: [model?.description, Validators.required],
      characteristics: [null, Validators.required], // !
      region_id: [model?.region_id, Validators.required],
      district_id: [model?.district_id, Validators.required],
      address: [model?.address],
      use_agroid_contact: [
        model?.use_agroid_contact ?? true,
        Validators.required,
      ],
      location: [null], // !
      video_url: [model?.video_url],
    });

    this.cd.markForCheck();
  }

  /**
   *
   * @returns
   */
  submitForm() {
    if (this.characteristicsComponent) {
      this.characteristicsComponent.checkValid();
      const characteristics: Characteristics[] = [];
      this.makeCharacteristcs(characteristics);
      this.form.controls['characteristics'].setValue(characteristics);
    }

    const request: AdvertisementRequest = this.form.getRawValue();
    if (request.contact) {
      request.contact.phone =
        +`${Constants.PREFIX_PHONENUMBER}${request.contact.phone}`;
    }

    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }

    this.$advertisement.add(request).subscribe((result) => {
      console.log(result);
    });
  }

  /**
   *
   * @param characteristics
   */
  private makeCharacteristcs(characteristics: Characteristics[]) {
    this.characteristicsComponent.filters.forEach((filter) => {
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
  }

  /**
   *
   */
  changeCategoryId(categoryId: number) {
    this.categoryId = categoryId;
  }
}
