import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NzCheckBoxOptionInterface } from 'ng-zorro-antd/checkbox';
import { NzImage } from 'ng-zorro-antd/image';
import { AdvertisementStatus, Constants, markAllAsDirty } from 'ngx-az-core';
import { InputTypeForCreator } from 'projects/admin/src/app/core/enums/input-type.enum';
import { IdName } from 'projects/admin/src/app/shared/models/id-name.interface';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { NzImageCustom } from './components/media/media.component';
import { AdvertisementEditResponse } from './dto/advertisement-edit.response';
import { AdvertisementRequest } from './dto/advertisement.request';
import { AdvertisementResponse } from './dto/advertisement.response';
import { Characteristics } from './dto/characteristics.interface';
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
  data?: AdvertisementEditResponse;

  /**
   *
   */
  uploadedFiles?: NzImageCustom[];

  /**
   *
   */
  categoryId!: number;

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
    private fb: FormBuilder,
    private $advertisement: AddAdvertisementService,
    private cd: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   *
   */
  ngOnInit() {
    if (this.data?.announcement) {
      this.initializeForm(this.data.announcement);
      this.uploadedFiles = this.data.announcement.files.map((file) => {
        return { id: file.id, src: file.file };
      });
      this.currentCategory = this.data.announcement.category;
      this.changeCategoryId(this.data.announcement.category_id);
      return;
    }

    this.initializeForm();
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

    // EDIT
    if (this.data) {
      this.$advertisement
        .edit(this.data.announcement.id, request)
        .subscribe((result) => {
          if (result) {
            this.router.navigate(
              [
                '../../../',
                'cabinet',
                'advertisement',
                AdvertisementStatus.STATUS_NEW,
              ],
              { relativeTo: this.route }
            );
          }
        });
      return;
    }
    // ADD
    this.$advertisement.add(request).subscribe((result) => {
      if (result) {
        this.router.navigate(
          [
            '../../',
            'cabinet',
            'advertisement',
            AdvertisementStatus.STATUS_NEW,
          ],
          { relativeTo: this.route }
        );
      }
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
