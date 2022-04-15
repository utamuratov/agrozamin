import {
  Component,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  Input,
  ChangeDetectorRef,
} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Constants, markAllAsDirty, NgDestroy } from 'ngx-az-core';
import { takeUntil, tap } from 'rxjs';
import { BusinessCardRequest } from '../../models/business-card.request';
import { BusinessCardResponse } from '../../models/business-card.response';
import { BusinessCardService } from '../../services/business-card.service';

@Component({
  selector: 'az-add-edit-business-card',
  templateUrl: './add-edit-business-card.component.html',
  styleUrls: ['./add-edit-business-card.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEditBusinessCardComponent {
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
  private _editingData?: BusinessCardResponse;
  @Input()
  public set editingData(v: BusinessCardResponse | undefined) {
    this._editingData = v;
    this.init();
  }
  public get editingData(): BusinessCardResponse | undefined {
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
    private $businessCard: BusinessCardService,
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
  private initForm(model?: BusinessCardResponse) {
    this.form = this.fb.group({
      f_name: [model?.f_name, [Validators.required]],
      l_name: [model?.l_name, [Validators.required]],
      [Constants.PHONE]: [
        model?.phone ? model.phone % 1000000000 : null,
        [Validators.required],
      ],
      [Constants.EMAIL]: [model?.email],
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

    const request: BusinessCardRequest = this.getBusinessRequest();
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
  private getBusinessRequest(): BusinessCardRequest {
    const request: BusinessCardRequest = {
      ...this.form.getRawValue(),
      photo: this.photo,
    };
    request.phone = Number(Constants.PREFIX_PHONENUMBER + request.phone);
    return request;
  }

  /**
   *
   */
  private add(request: BusinessCardRequest) {
    this.$businessCard
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
    this.modified.emit(
      Constants.PREFIX_PHONENUMBER + this.form.value[Constants.PHONE]
    );
    this.close();
    this.initForm();
  }

  /**
   *
   * @param id
   * @param request
   */
  private edit(id: number, request: BusinessCardRequest) {
    this.$businessCard
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
