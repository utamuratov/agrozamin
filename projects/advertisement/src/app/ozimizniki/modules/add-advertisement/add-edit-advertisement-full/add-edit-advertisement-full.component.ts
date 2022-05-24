import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { Constants, markAllAsDirty } from 'ngx-az-core';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
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
    private $advertisement: AddAdvertisementService
  ) {}

  ngOnInit() {
    this.initializeForm();
  }

  /**
   *
   */
  initializeForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      files: [null, Validators.required],
      price: [null],
      deal: [false],
      category_id: [null, Validators.required],
      type_id: [null, Validators.required],
      description: ['', Validators.required],
      characteristics: [null, Validators.required],
      region_id: [null, Validators.required],
      district_id: [null, Validators.required],
      address: [''],
      use_agroid_contact: [true, Validators.required],
      location: [null],
      video_url: [null],
    });
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
