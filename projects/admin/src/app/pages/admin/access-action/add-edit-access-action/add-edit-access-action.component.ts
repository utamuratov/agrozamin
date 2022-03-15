import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Select } from '@ngxs/store';
import { LanguageState, Language, markAllAsDirty } from 'ngx-az-core';
import { map, Observable } from 'rxjs';
import { AccessActionService } from '../access-action.service';
import { AccessAction } from '../models/access-action.interface';
import { AccessActionResponse } from '../models/access-action.response';

@Component({
  selector: 'az-add-edit-access-action',
  templateUrl: './add-edit-access-action.component.html',
  styleUrls: ['./add-edit-access-action.component.less'],
})
export class AddEditAccessActionComponent {
  /**
   *
   */
  public isVisible!: boolean;

  /**
   *
   */
  id?: number;

  /**
   *
   */
  form!: FormGroup;

  /**
   *
   */
  @Output()
  modified = new EventEmitter();

  /**
   *
   */
  @Select(LanguageState.languages)
  language$!: Observable<Language[]>;

  constructor(
    private fb: FormBuilder,
    private $accessAction: AccessActionService
  ) {}

  onInit(editingData: AccessActionResponse | null) {
    this.id = editingData?.id;
    this.initForm(editingData);
  }

  initForm(model: AccessActionResponse | null) {
    this.form = this.fb.group({
      key: [model?.key, Validators.required],
      description: this.fb.group({}),
    });

    this.addDescriptionControls(model);
  }

  private addDescriptionControls(model: AccessActionResponse | null) {
    this.language$.subscribe((languages) => {
      languages.forEach((language) => {
        (this.form.get('description') as FormGroup)?.addControl(
          language.code,
          new FormControl(
            model?.description[language.code],
            Validators.required
          )
        );
      });
    });
  }

  submit() {
    if (this.form.invalid) {
      markAllAsDirty(this.form);
      return;
    }
    const request = this.form.getRawValue();
    if (this.id) {
      this.editTranslation(this.id, request);
      return;
    }
    this.addAccessAction(request);
  }

  /**
   *
   */
  private addAccessAction(request: AccessAction) {
    this.$accessAction
      .add(request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
        })
      )
      .subscribe();
  }

  /**
   *
   * @param id
   * @param request
   */
  private editTranslation(id: number, request: AccessAction) {
    return this.$accessAction
      .edit(id, request)
      .pipe(
        map((result) => {
          if (result.success) {
            this.modified.emit();
            this.close();
          }

          return false;
        })
      )
      .subscribe();
  }

  /**
   *
   */
  close(): void {
    this.isVisible = false;
  }
}
